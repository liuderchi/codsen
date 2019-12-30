// validation functions
import validateDigitAndUnit from "./validateDigitAndUnit";
import validateString from "./validateString";
const wholeExtensionRegex = /^\.\w+$/g;

// -----------------------------------------------------------------------------

function isLetter(str) {
  return (
    typeof str === "string" &&
    str.length === 1 &&
    str.toUpperCase() !== str.toLowerCase()
  );
}

function isEnabled(maybeARulesValue) {
  if (Number.isInteger(maybeARulesValue) && maybeARulesValue > 0) {
    return maybeARulesValue;
  } else if (
    Array.isArray(maybeARulesValue) &&
    maybeARulesValue.length &&
    Number.isInteger(maybeARulesValue[0]) &&
    maybeARulesValue[0] > 0
  ) {
    return maybeARulesValue[0];
  }
  return 0;
}

// -----------------------------------------------------------------------------

export {
  wholeExtensionRegex,
  isEnabled,
  validateDigitAndUnit,
  validateString,
  isLetter
};
