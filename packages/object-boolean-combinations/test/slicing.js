import { test } from "uvu";
// eslint-disable-next-line no-unused-vars
import { equal, is, ok, throws, type, not, match } from "uvu/assert";

import { combinations } from "../dist/object-boolean-combinations.esm.js";

// ==============================
// Overrides or slicing
// ==============================

test("01 - three properties two overrides", () => {
  // default, truthy/falsy numbers are output

  equal(
    combinations({ a: false, b: false, c: false }, { a: true, b: true }),
    [
      { a: true, b: true, c: false },
      { a: true, b: true, c: true },
    ],
    "01.01"
  );
  equal(
    combinations({ a: false, b: false, c: false }, { a: "z", b: "y" }),
    [
      { a: "z", b: "y", c: false },
      { a: "z", b: "y", c: true },
    ],
    "01.02 - override key values are strings"
  );
  equal(
    combinations({ a: false, b: false, c: false }, { a: null, b: null }),
    [
      { a: null, b: null, c: false },
      { a: null, b: null, c: true },
    ],
    "01.03 - override key values are strings"
  );
  equal(
    combinations({ a: false, b: false, c: false }, { a: ["x"], b: ["y"] }),
    [
      { a: ["x"], b: ["y"], c: false },
      { a: ["x"], b: ["y"], c: true },
    ],
    "01.04 - override key values are strings"
  );
});

test("02 - four properties three overrides", () => {
  equal(
    combinations(
      {
        a: true,
        b: false,
        c: false,
        d: false,
      },
      { a: true, b: true, c: true }
    ),
    [
      {
        d: false,
        a: true,
        b: true,
        c: true,
      },
      {
        d: true,
        a: true,
        b: true,
        c: true,
      },
    ],
    "02"
  );
});

// edge cases:

test("03 - empty override object", () => {
  equal(
    combinations({ a: true, b: false, c: false }, {}),
    [
      { a: false, b: false, c: false },
      { a: true, b: false, c: false },
      { a: false, b: true, c: false },
      { a: true, b: true, c: false },
      { a: false, b: false, c: true },
      { a: true, b: false, c: true },
      { a: false, b: true, c: true },
      { a: true, b: true, c: true },
    ],
    "03"
  );
});

test("04 - both input and override objects empty", () => {
  equal(combinations({}, {}), [{}], "04");
});

test.run();
