/* eslint no-param-reassign:0, default-case:0, consistent-return:0 */

import isNaturalNumber from 'is-natural-number'
import checkTypes from 'check-types-mini'
import isObj from 'lodash.isplainobject'
import trimStart from 'lodash.trimstart'
import trimEnd from 'lodash.trimend'

function isStr(something) { return typeof something === 'string' }

function main(mode, str, position, whatToMatch, opts) {
  function existy(x) { return x != null }
  if (!isStr(str)) {
    throw new Error(`string-match-left-right/${mode}(): [THROW_ID_01] the first argument should be a string. Currently it's of a type: ${typeof str}, equal to:\n${JSON.stringify(str, null, 4)}`)
  }
  if (!isNaturalNumber(position, { includeZero: true })) {
    throw new Error(`string-match-left-right/${mode}(): [THROW_ID_02] the second argument should be a natural number. Currently it's of a type: ${typeof position}, equal to:\n${JSON.stringify(position, null, 4)}`)
  }
  if (isStr(whatToMatch)) {
    whatToMatch = [whatToMatch]
  }
  if (!existy(whatToMatch) || (whatToMatch.length === 0)) {
    throw new Error(`string-match-left-right/${mode}(): [THROW_ID_03] there's nothing to match! Third argument (and onwards) is missing!`)
  }
  if (existy(opts) && !isObj(opts)) {
    throw new Error(`string-match-left-right/${mode}(): [THROW_ID_04] the third argument, options object, should be a plain object. Currently it's of a type "${typeof opts}", and equal to:\n${JSON.stringify(opts, null, 4)}`)
  }
  const defaults = {
    i: false,
    trimBeforeMatching: false,
  }
  opts = Object.assign({}, defaults, opts)
  checkTypes(opts, defaults, {
    msg: 'string-match-left-right: [THROW_ID_05*]',
    schema: {
      cbLeft: ['null', 'undefined', 'function'],
      cbRight: ['null', 'undefined', 'function'],
    },
  })

  switch (mode) {
    case 'matchLeftIncl':
      return whatToMatch.some((el) => {
        let temp
        if (opts.trimBeforeMatching) {
          temp = trimEnd(str.slice(0, position - 1)) + str[position]
        } else {
          temp = str.slice(0, position + 1)
        }
        if (opts.i) {
          return temp.toLowerCase().endsWith(el.toLowerCase()) &&
            (opts.cbLeft ? opts.cbLeft(temp[temp.length - 1 - el.length]) : true)
        }
        return temp.endsWith(el) &&
          (opts.cbLeft ? opts.cbLeft(temp[temp.length - 1 - el.length]) : true)
      })
    case 'matchLeft':
      return whatToMatch.some((el) => {
        let temp
        if (opts.trimBeforeMatching) {
          temp = trimEnd(str.slice(0, position))
        } else {
          temp = str.slice(0, position)
        }
        if (opts.i) {
          return temp.toLowerCase().endsWith(el.toLowerCase()) &&
            (opts.cbLeft ? opts.cbLeft(temp[temp.length - 1 - el.length]) : true)
        }
        return (temp.endsWith(el)) &&
          (opts.cbLeft ? opts.cbLeft(temp[temp.length - 1 - el.length]) : true)
      })
    case 'matchRightIncl':
      return whatToMatch.some((el) => {
        let temp
        if (opts.trimBeforeMatching) {
          temp = str[position] + trimStart(str.slice(position + 1))
        } else {
          temp = str.slice(position)
        }
        if (opts.i) {
          return (temp.toLowerCase().startsWith(el.toLowerCase())) &&
            (opts.cbRight ? opts.cbRight(temp[el.length]) : true)
        }
        return (temp.startsWith(el)) &&
          (opts.cbRight ? opts.cbRight(temp[el.length]) : true)
      })
    case 'matchRight':
      return whatToMatch.some((el) => {
        let temp
        if (opts.trimBeforeMatching) {
          temp = trimStart(str.slice(position + 1))
        } else {
          temp = str.slice(position + 1)
        }
        if (opts.i) {
          return (temp.toLowerCase().startsWith(el.toLowerCase())) &&
            (opts.cbRight ? opts.cbRight(temp[el.length]) : true)
        }
        return (temp.startsWith(el)) &&
          (opts.cbRight ? opts.cbRight(temp[el.length]) : true)
      })
  }
}

function matchLeftIncl(str, position, whatToMatch, opts) {
  return main('matchLeftIncl', str, position, whatToMatch, opts)
}

function matchLeft(str, position, whatToMatch, opts) {
  return main('matchLeft', str, position, whatToMatch, opts)
}

function matchRightIncl(str, position, whatToMatch, opts) {
  return main('matchRightIncl', str, position, whatToMatch, opts)
}

function matchRight(str, position, whatToMatch, opts) {
  return main('matchRight', str, position, whatToMatch, opts)
}

export {
  matchLeftIncl, matchRightIncl, matchLeft, matchRight,
}
