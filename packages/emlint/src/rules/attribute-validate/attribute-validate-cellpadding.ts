import { Linter, RuleObjType } from "../../linter";

// rule: attribute-validate-cellspacing
// -----------------------------------------------------------------------------

import validateDigitAndUnit from "../../util/validateDigitAndUnit";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare let DEV: boolean;

function attributeValidateCellpadding(context: Linter): RuleObjType {
  return {
    attribute(node) {
      DEV &&
        console.log(
          `███████████████████████████████████████ attributeValidateCellpadding() ███████████████████████████████████████`
        );

      // DEV && console.log(
      //   `015 attributeValidateCellpadding(): node = ${JSON.stringify(node, null, 4)}`
      // );

      if (node.attribName === "cellpadding") {
        // validate the parent
        if (node.parent.tagName !== "table") {
          context.report({
            ruleId: "attribute-validate-cellpadding",
            idxFrom: node.attribStarts,
            idxTo: node.attribEnds,
            message: `Tag "${node.parent.tagName}" can't have attribute "${node.attribName}".`,
            fix: null,
          });
        }

        let errorArr = validateDigitAndUnit(
          node.attribValueRaw,
          node.attribValueStartsAt as number,
          {
            type: "integer",
            negativeOK: false,
            theOnlyGoodUnits: ["%"],
            badUnits: ["px"],
            customGenericValueError:
              "Should be integer, either no units or percentage.",
          }
        );
        DEV &&
          console.log(
            `049 received errorArr = ${JSON.stringify(errorArr, null, 4)}`
          );

        errorArr.forEach((errorObj) => {
          DEV && console.log(`053 RAISE ERROR`);
          context.report({
            ...errorObj,
            ruleId: "attribute-validate-cellpadding",
          });
        });
      }
    },
  };
}

export default attributeValidateCellpadding;
