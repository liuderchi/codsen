'use strict'
const split = require('csv-split-easy')
const pull = require('lodash.pull')
const ordinal = require('ordinal')
const { findtype } = require('./util')
const isArr = Array.isArray
const BigNumber = require('bignumber.js')

function s (input) {
  var content
  var msgContent = null
  var msgType = null

  // step 1.
  // ===========================
  // depends what was passed in,
  if (typeof input === 'string') {
    if (input.length === 0) {
      return [['']]
    } else {
      content = split(input)
    }
  } else if (isArr(input)) {
    let culpritVal, culpritIndex
    if (!input.every((val, index) => {
      if (!isArr(val)) {
        culpritVal = val
        culpritIndex = index
      }
      return isArr(val)
    })) {
      throw new TypeError(`csv-sort/s(): [THROW_ID_01] the input is array as expected, but not all of its children are arrays! For example, the ${ordinal(culpritIndex)} element is not array but: ${typeof culpritVal}, equal to:\n${JSON.stringify(culpritVal, null, 4)}`)
    }
  } else {
    throw new TypeError(`csv-sort/s(): [THROW_ID_02] The input is of a wrong type! We accept either string of array of arrays. We got instead: ${typeof input}, equal to:\n${JSON.stringify(input, null, 4)}`)
  }

  // step 2.
  // ===========================
  // - iterate from the bottom
  // - calculate schema as you go to save calculation rounds
  // - first row can have different amount of columns
  // - think about 2D trim feature

  var schema = null
  var stateHeaderRowPresent = false
  var stateDataColumnRowLengthIsConsistent = true
  var stateColumnsContainingSameValueEverywhere = []

  // used for 2D trimming:
  var indexAtWhichEmptyCellsStart = null

  for (let i = content.length - 1; i >= 0; i--) {
    if (!schema) {
      // prevention against last blank row:
      if ((content[i].length !== 1) || (content[i][0] !== '')) {
        schema = []
        for (let y = 0, len = content[i].length; y < len; y++) {
          schema.push(findtype(content[i][y].trim()))
          if ((indexAtWhichEmptyCellsStart === null) && (findtype(content[i][y].trim()) === 'empty')) {
            indexAtWhichEmptyCellsStart = y
          }
          if ((indexAtWhichEmptyCellsStart !== null) && (findtype(content[i][y].trim()) !== 'empty')) {
            indexAtWhichEmptyCellsStart = null
          }
        }
      }
    } else {
      if (i === 0) {
        // Check is this header row.
        // Header rows should consist of only text content.
        // Let's iterate through all elements and find out.
        stateHeaderRowPresent = content[i].every(el => {
          return (findtype(el) === 'text') || (findtype(el) === 'empty')
        })

        // if schema was calculated (this means there's header row and at least one content row),
        // find out if the column length in the header differs from schema's
        if (stateHeaderRowPresent && (schema.length !== content[i].length)) {
        }
      }
      if (!stateHeaderRowPresent && (schema.length !== content[i].length)) {
        stateDataColumnRowLengthIsConsistent = false
      }

      let perRowIndexAtWhichEmptyCellsStart = null
      for (let y = 0, len = content[i].length; y < len; y++) {
        // trim
        if ((perRowIndexAtWhichEmptyCellsStart === null) && (findtype(content[i][y].trim()) === 'empty')) {
          perRowIndexAtWhichEmptyCellsStart = y
        }
        if ((perRowIndexAtWhichEmptyCellsStart !== null) && (findtype(content[i][y].trim()) !== 'empty')) {
          perRowIndexAtWhichEmptyCellsStart = null
        }
        // checking schema
        if ((findtype(content[i][y].trim()) !== schema[y]) && !stateHeaderRowPresent) {
          let toAdd = findtype(content[i][y].trim())
          if (isArr(schema[y])) {
            if (!schema[y].includes(toAdd)) {
              schema[y].push(findtype(content[i][y].trim()))
            }
          } else if (schema[y] !== toAdd) {
            let temp = schema[y]
            schema[y] = []
            schema[y].push(temp)
            schema[y].push(toAdd)
          }
        } else {
        }
      }
      // when row has finished, get the perRowIndexAtWhichEmptyCellsStart
      // that's to cover cases where last row got schema calculated, but it
      // had more empty columns than the following rows:
      //
      // [8, 9, 0, 1,  ,  ]
      // [4, 5, 6, 7,  ,  ] <<< perRowIndexAtWhichEmptyCellsStart would be 3 (indexes start at zero)
      // [1, 2, 3,  ,  ,  ] <<< indexAtWhichEmptyCellsStart would be here 2 (indexes start at zero)
      //
      // as a result, indexAtWhichEmptyCellsStart above would be assigned to 3, not 2
      //
      // That's still an achievement, we "trimmed" CSV by two places.
      // I'm saying "trimmed", but we're not really trimming yet, we're only
      // setting inner variable which we will later use to limit the traversal,
      // so algorithm skips those empty columns.
      //

      if (
        (indexAtWhichEmptyCellsStart !== null) &&
        (perRowIndexAtWhichEmptyCellsStart !== null) &&
        (perRowIndexAtWhichEmptyCellsStart > indexAtWhichEmptyCellsStart) &&
        (!stateHeaderRowPresent || (stateHeaderRowPresent && (i !== 0)))
      ) {
        indexAtWhichEmptyCellsStart = perRowIndexAtWhichEmptyCellsStart
      }
    }
  }

  if (!indexAtWhichEmptyCellsStart) {
    indexAtWhichEmptyCellsStart = schema.length
  }

  // find out at which index non-empty columns start. This is effectively left-side trimming.
  var nonEmptyColsStartAt = 0
  for (let i = 0, len = schema.length; i < len; i++) {
    if (schema[i] === 'empty') {
      nonEmptyColsStartAt = i
    } else {
      break
    }
  }

  // if there are empty column in front, trim (via slice) both content and schema
  if (nonEmptyColsStartAt !== 0) {
    content = content.map(arr => arr.slice(nonEmptyColsStartAt + 1, indexAtWhichEmptyCellsStart))
    schema = schema.slice(nonEmptyColsStartAt + 1, indexAtWhichEmptyCellsStart)
  }

  // step 3.
  // ===========================
  // CHALLENGE: without any assumptions, identify "current balance" and "debit",
  // "credit" columns by analysing their values.
  //
  // - double entry accounting rows will have the "current balance" which will
  //   be strictly numeric, and will be present across all rows. These are the
  //   two first signs of a "current balance" column.
  // - "current balance" should also match up with at least one field under it,
  //   if subracted/added the value from one field in its row

  // swoop in traversing the schema array to get "numeric" columns:
  // ----------------
  let numericSchemaColumns = []
  var balanceColumnIndex
  schema.forEach(function (colType, i) {
    if (colType === 'numeric') {
      numericSchemaColumns.push(i)
    }
  })

  var traverseUpToThisIndexAtTheTop = stateHeaderRowPresent ? 1 : 0

  if (numericSchemaColumns.length === 1) {
    // Bob's your uncle, the only numeric column is your Balance column
    balanceColumnIndex = numericSchemaColumns[0]
  } else if (numericSchemaColumns.length === 0) {
    throw new Error(`csv-sort/s(): [THROW_ID_03] Your CSV file does not contain numeric-only columns and computer was not able to detect the "Balance" column!`)
  } else {
    // So (numericSchemaColumns > 0) and we'll have to do some work.
    // Fine.
    //
    // Clone numericSchemaColumns array, remove columns that have the same value
    // among consecutive rows.
    // For example, accounting CSV's will have "Account number" repeated.
    // Balance is never the same on two rows, otherwise what's the point of accounting if nothing happened?
    // traverse the CSV vertically on each column from numericSchemaColumns and find out `balanceColumnIndex`:
    // ----------------

    var potentialBalanceColumnIndexesList = Array.from(numericSchemaColumns)
    // iterate through `potentialBalanceColumnIndexesList`
    let deleteFromPotentialBalanceColumnIndexesList = []

    for (var i = 0, len = potentialBalanceColumnIndexesList.length; i < len; i++) {
      // if any two rows are in sequence currently and they are equal, this column is out
      let suspectedBalanceColumnsIndexNumber = potentialBalanceColumnIndexesList[i]
      // we traverse column suspected to be "Balance" with index `index` vertically,
      // from the top to bottom. Depending if there's heading row, we start at 0 or 1,
      // which is set by `traverseUpToThisIndexAtTheTop`.
      // We will look for two rows having the same value. If it's found that column is
      // not "Balance":

      // EASY ATTEMPT TO RULE-OUT NOT-BALANCE COLUMNS

      let previousValue // to check if two consecutive are the same
      let lookForTwoEqualAndConsecutive = true
      let firstValue // to check if all are the same
      let lookForAllTheSame = true

      for (let rowNum = traverseUpToThisIndexAtTheTop, len2 = content.length; rowNum < len2; rowNum++) {
        // 1. check for two consecutive equal values
        if (lookForTwoEqualAndConsecutive) {
          if (previousValue === undefined) {
            previousValue = content[rowNum][suspectedBalanceColumnsIndexNumber]
          } else {
            if (previousValue === content[rowNum][suspectedBalanceColumnsIndexNumber]) {
              // potentialBalanceColumnIndexesList.splice(suspectedBalanceColumnsIndexNumber, 1)
              // don't mutate the `potentialBalanceColumnIndexesList`, do it later. Let's compile TO-DELETE list instead:
              deleteFromPotentialBalanceColumnIndexesList.push(suspectedBalanceColumnsIndexNumber)
              lookForTwoEqualAndConsecutive = false
            } else {
              previousValue = content[rowNum][suspectedBalanceColumnsIndexNumber]
            }
          }
        }
        // 2. also, tell if ALL values are the same:
        if (lookForAllTheSame) {
          if (firstValue === undefined) {
            firstValue = content[rowNum][suspectedBalanceColumnsIndexNumber]
          } else {
            if (content[rowNum][suspectedBalanceColumnsIndexNumber] !== firstValue) {
              lookForAllTheSame = false
            }
          }
        }
        if (!lookForTwoEqualAndConsecutive) {
          break
        }
      }

      if (lookForAllTheSame) {
        stateColumnsContainingSameValueEverywhere.push(suspectedBalanceColumnsIndexNumber)
      }
    }

    // now mutate the `potentialBalanceColumnIndexesList` using `deleteFromPotentialBalanceColumnIndexesList`:
    potentialBalanceColumnIndexesList = pull(potentialBalanceColumnIndexesList, ...deleteFromPotentialBalanceColumnIndexesList)

    if (potentialBalanceColumnIndexesList.length === 1) {
      balanceColumnIndex = potentialBalanceColumnIndexesList[0]
    } else if (potentialBalanceColumnIndexesList.length === 0) {
      throw new Error(`csv-sort/s(): [THROW_ID_04] The computer can't find the "Balance" column! It saw some numeric-only columns, but they all seem to have certain rows with the same values as rows right below/above them!`)
    } else {
      // TODO - continue processing interpolating horizontally and vertically.
      //
      //

      // COMPLEX ATTEMPT TO RULE-OUT NOT-BALANCE COLUMNS

      //
      //
      // zzz
    }

    // at this point 99% of normal-size, real-life bank account CSV's should have
    // "Balance" column identified because there will be both "Credit" and "Debit"
    // transaction rows which will be not exclusively numeric, but ["empty", "numeric"] type.
    // Even Lloyds Business banking CSV's that output account numbers
    // will have "Balance" column identified this stage.
  }

  if (!balanceColumnIndex) {
    throw new Error('csv-sort/s(): [THROW_ID_05] Sadly computer couldn\'t find its way in this CSV and had to stop working on it.')
  }

  // step 4.
  // ===========================
  // query the schema and find out potential Credit/Debit columns

  // take schema, filter all indexes that are equal to or are arrays and have
  // "numeric" among their values, then remove the index of "Balance" column:
  var potentialCreditDebitColumns = pull(Array.from(schema.reduce(
    (result, el, index) => {
      if (((typeof el === 'string') && el === 'numeric') || (isArr(el) && el.includes('numeric'))) {
        result.push(index)
      }
      return result
    }, []
  )), balanceColumnIndex, ...stateColumnsContainingSameValueEverywhere)

  // step 5.
  // ===========================

  var resContent = []

  // Now that we know the `balanceColumnIndex`, traverse the CSV rows again,
  // assembling a new array

  // step 5.1. Put the last row into the new array.
  // ---------------------------------------------------------------------------
  // Worst case scenario, if it doesn't match with anything, we'll throw in the end.
  // For now, let's assume CSV is correct, only rows are mixed.

  resContent.push(content[content.length - 1].slice(0, indexAtWhichEmptyCellsStart))

  var usedUpRows = []

  var bottom = stateHeaderRowPresent ? 1 : 0
  for (let y = content.length - 2; y >= bottom; y--) {
    // for each row above the last-one (which is already in place), we'll traverse
    // all the rows above to find the match.
    // go through all the rows and pick the right row which matches to the above:
    for (let suspectedRowsIndex = content.length - 2; suspectedRowsIndex >= bottom; suspectedRowsIndex--) {
      if (!usedUpRows.includes(suspectedRowsIndex)) {
        // go through each of the suspected Credit/Debit columns:

        let thisRowIsDone = false

        for (let suspectedColIndex = 0, len = potentialCreditDebitColumns.length; suspectedColIndex < len; suspectedColIndex++) {
          let diffVal = null
          if (content[suspectedRowsIndex][potentialCreditDebitColumns[suspectedColIndex]] !== '') {
            diffVal = new BigNumber(content[suspectedRowsIndex][potentialCreditDebitColumns[suspectedColIndex]])
          }

          let totalVal = null
          if (content[suspectedRowsIndex][balanceColumnIndex] !== '') {
            totalVal = new BigNumber(content[suspectedRowsIndex][balanceColumnIndex])
          }

          let topmostResContentBalance = null
          if (resContent[0][balanceColumnIndex] !== '') {
            topmostResContentBalance = new BigNumber(resContent[0][balanceColumnIndex])
          }

          let currentRowsDiffVal = null
          if (resContent[resContent.length - 1][potentialCreditDebitColumns[suspectedColIndex]] !== '') {
            currentRowsDiffVal = new BigNumber(resContent[resContent.length - 1][potentialCreditDebitColumns[suspectedColIndex]])
          }

          let lastResContentRowsBalance = null
          if (resContent[resContent.length - 1][balanceColumnIndex] !== '') {
            lastResContentRowsBalance = new BigNumber(resContent[resContent.length - 1][balanceColumnIndex])
          }

          if (diffVal && (totalVal.plus(diffVal).eq(topmostResContentBalance))) {
            // ADD THIS ROW ABOVE EVERYTHING
            // add this row above the current HEAD in resContent lines array (index `0`)
            resContent.unshift(content[suspectedRowsIndex].slice(0, indexAtWhichEmptyCellsStart))
            usedUpRows.push(suspectedRowsIndex)
            thisRowIsDone = true
            break
          } else if (diffVal && (totalVal.minus(diffVal).eq(topmostResContentBalance))) {
            // ADD THIS ROW ABOVE EVERYTHING
            resContent.unshift(content[suspectedRowsIndex].slice(0, indexAtWhichEmptyCellsStart))
            usedUpRows.push(suspectedRowsIndex)
            thisRowIsDone = true
            break
          } else if (currentRowsDiffVal && (lastResContentRowsBalance.plus(currentRowsDiffVal).eq(totalVal))) {
            // ADD THIS ROW BELOW EVERYTHING
            resContent.push(content[suspectedRowsIndex].slice(0, indexAtWhichEmptyCellsStart))
            usedUpRows.push(suspectedRowsIndex)
            thisRowIsDone = true
            break
          } else if (currentRowsDiffVal && (lastResContentRowsBalance.minus(currentRowsDiffVal).eq(totalVal))) {
            // ADD THIS ROW BELOW EVERYTHING
            resContent.push(content[suspectedRowsIndex].slice(0, indexAtWhichEmptyCellsStart))
            usedUpRows.push(suspectedRowsIndex)
            thisRowIsDone = true
            break
          } else {
          }
        }
        if (thisRowIsDone) {
          thisRowIsDone = false
          break
        }
      }
    }
  }

  // restore title row if present
  if (stateHeaderRowPresent) {
    // trim header row of trailing empty columns if they protrude outside of the (consistent row length) schema
    if (stateDataColumnRowLengthIsConsistent && (content[0].length > schema.length)) {
      content[0].length = schema.length
    }
    // push header row on top of the results array:
    resContent.unshift(content[0].slice(0, indexAtWhichEmptyCellsStart))
  }

  if ((content.length - (stateHeaderRowPresent ? 2 : 1)) !== usedUpRows.length) {
    msgContent = 'Not all rows were recognised!'
    msgType = 'alert'
  }

  return {
    res: resContent,
    msgContent,
    msgType
  }
}

module.exports = s
