/* eslint-disable no-template-curly-in-string */
import { test } from "uvu";
// eslint-disable-next-line no-unused-vars
import { equal, is, ok, throws, type, not, match } from "uvu/assert";

import {
  flattenReferencing as ofr,
  flattenObject,
  flattenArr,
  arrayiffyString,
} from "../dist/object-flatten-referencing.esm.js";

// -----------------------------------------------------------------------------
// 01. various throws
// -----------------------------------------------------------------------------

test("01 - throws when inputs are missing/wrong", () => {
  throws(() => {
    ofr();
  }, /THROW_ID_01/g);
  throws(() => {
    ofr({ a: "a" });
  }, /THROW_ID_02/g);
  throws(() => {
    ofr({ a: "a" }, { a: "a" }, 1);
  }, /THROW_ID_03/g);
});

// -----------------------------------------------------------------------------
// 02. B.A.U.
// -----------------------------------------------------------------------------

test("02 - defaults - objects, one level", () => {
  equal(
    ofr(
      {
        key1: "val11.val12",
        key2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      }
    ),
    {
      key1: "%%_val11.val12_%%",
      key2: "%%_val21.val22_%%",
    },
    "02.01 - defaults wrapping strings"
  );
  equal(
    ofr(
      {
        key1: "val11.val12",
        key2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      },
      {
        wrapHeadsWith: "",
        wrapTailsWith: "",
      }
    ),
    {
      key1: "val11.val12",
      key2: "val21.val22",
    },
    "02.02 - heads/tails override, wrapping with empty strings"
  );
  equal(
    ofr(
      {
        key1: "val11.val12",
        key2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      },
      {
        wrapHeadsWith: "{",
        wrapTailsWith: "",
      }
    ),
    {
      key1: "{val11.val12",
      key2: "{val21.val22",
    },
    "02.03 - wrapping only with heads; tails empty"
  );
  equal(
    ofr(
      {
        key1: "val11.val12",
        key2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      },
      {
        wrapHeadsWith: "",
        wrapTailsWith: "}",
      }
    ),
    {
      key1: "val11.val12}",
      key2: "val21.val22}",
    },
    "02.04 - wrapping only with heads; tails empty"
  );
  equal(
    ofr(
      {
        key1: "val11.val12",
        key2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      },
      {
        dontWrapKeys: "key*",
      }
    ),
    {
      key1: "val11.val12",
      key2: "val21.val22",
    },
    '02.05 - does not wrap because starts with "key", string opt'
  );
  equal(
    ofr(
      {
        key1: "val11.val12",
        key2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      },
      {
        dontWrapKeys: ["key*"],
      }
    ),
    {
      key1: "val11.val12",
      key2: "val21.val22",
    },
    '02.06 - does not wrap because starts with "key", array opt'
  );
  equal(
    ofr(
      {
        key1: "val11.val12",
        key2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      },
      {
        dontWrapKeys: ["*1", "*2", "*3"],
      }
    ),
    {
      key1: "val11.val12",
      key2: "val21.val22",
    },
    "02.07 - does not wrap because ends with 1 or 2"
  );
  equal(
    ofr(
      {
        thekey1: "val11.val12",
        akey2: "val21.val22",
      },
      {
        thekey1: "Contact us",
        akey2: "Tel. 0123456789",
      },
      {
        dontWrapKeys: ["a*", "*1", "*3"],
      }
    ),
    {
      thekey1: "val11.val12",
      akey2: "val21.val22",
    },
    "02.08 - mix of various wildcards, sources are strings"
  );
  equal(
    ofr(
      {
        thekey1: { val11: "val12" },
        akey2: { val21: "val22" },
      },
      {
        thekey1: "Contact us",
        akey2: "Tel. 0123456789",
      },
      {
        dontWrapKeys: ["a*", "*1", "*3"],
      }
    ),
    {
      thekey1: "val11.val12",
      akey2: "val21.val22",
    },
    "02.09 - mix of various wildcards, sources are plain objects"
  );
  equal(
    ofr(
      {
        KEY1: "val11.val12",
        KEY2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      },
      {
        dontWrapKeys: "key*",
      }
    ),
    {
      KEY1: "val11.val12",
      KEY2: "val21.val22",
    },
    "02.10 - wildcards are case sensitive since v4.3.0"
  );
});

test("03 - opts.preventDoubleWrapping", () => {
  equal(
    ofr(
      {
        key1: "%%_val11.val12_%%",
        key2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      }
    ),
    {
      key1: "%%_val11.val12_%%",
      key2: "%%_val21.val22_%%",
    },
    "03.01 - preventDoubleWrapping reading default heads/tails"
  );
  equal(
    ofr(
      {
        key1: "%%_val11.val12_%%",
        key2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      },
      {
        preventDoubleWrapping: false,
      }
    ),
    {
      key1: "%%_%%_val11.val12_%%_%%",
      key2: "%%_val21.val22_%%",
    },
    "03.02 - preventDoubleWrapping off"
  );
  equal(
    ofr(
      {
        key1: "{val11.val12}",
        key2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      },
      {
        wrapHeadsWith: "{",
        wrapTailsWith: "}",
      }
    ),
    {
      key1: "{val11.val12}",
      key2: "{val21.val22}",
    },
    "03.03 - preventDoubleWrapping reading default heads/tails"
  );
  equal(
    ofr(
      {
        key1: "aaa %%val11.val12%% bbb",
        key2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      },
      {
        wrapHeadsWith: "%%",
        wrapTailsWith: "%%",
      }
    ),
    {
      key1: "aaa %%val11.val12%% bbb",
      key2: "%%val21.val22%%",
    },
    "03.04 - preventDoubleWrapping reading default heads/tails"
  );
});

test("04 - flattens an array value but doesn't touch other one", () => {
  equal(
    ofr(
      {
        key1: {
          key2: ["val1", "val2", "val3"],
        },
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        key1: "Contact us",
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      }
    ),
    {
      key1: "%%_key2.val1_%%<br />%%_key2.val2_%%<br />%%_key2.val3_%%",
      key3: {
        key4: ["%%_val4_%%", "%%_val5_%%", "%%_val6_%%"],
      },
    },
    "04.01"
  );
  equal(
    ofr(
      {
        key1: {
          key2: ["val1", "val2", "val3"],
        },
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        key1: "Contact us",
        key3: {
          key4: ["%%_val4_%%", "%%_val5_%%", "%%_val6_%%"],
        },
      },
      {
        xhtml: false,
      }
    ),
    {
      key1: "%%_key2.val1_%%<br>%%_key2.val2_%%<br>%%_key2.val3_%%",
      key3: {
        key4: ["%%_val4_%%", "%%_val5_%%", "%%_val6_%%"],
      },
    },
    "04.02"
  );
  equal(
    ofr(
      {
        key1: {
          key2: ["val1", "val2", "val3"],
        },
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        key1: "Contact us",
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
      }
    ),
    {
      key1: "%%_key2.val1_%%<br />%%_key2.val2_%%<br />%%_key2.val3_%%",
      key3: {
        key4: ["%%_val4_%%", "%%_val5_%%", "%%_val6_%%"],
      },
    },
    "04.03"
  );
  equal(
    ofr(
      {
        key1: {
          key2: ["val1", "val2", "val3"],
        },
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        key1: "Contact us",
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
        xhtml: false,
      }
    ),
    {
      key1: "%%_key2.val1_%%<br>%%_key2.val2_%%<br>%%_key2.val3_%%",
      key3: {
        key4: ["%%_val4_%%", "%%_val5_%%", "%%_val6_%%"],
      },
    },
    "04.04"
  );
  equal(
    ofr(
      {
        key1: {
          key2: ["val1", "val2", "val3"],
        },
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        key1: "Contact us",
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        mergeArraysWithLineBreaks: false,
      }
    ),
    {
      key1: "%%_key2.val1_%%%%_key2.val2_%%%%_key2.val3_%%",
      key3: {
        key4: ["%%_val4_%%", "%%_val5_%%", "%%_val6_%%"],
      },
    },
    "04.05 - does not put <br /> at all when flattening arrays"
  );
});

test("05 - wildcards in opts.dontWrapKeys", () => {
  equal(
    ofr(
      {
        key1: {
          key2: ["val1", "val2", "val3"],
        },
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        key1: "Contact us",
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        dontWrapKeys: "*1",
      }
    ),
    {
      key1: "key2.val1<br />key2.val2<br />key2.val3",
      key3: {
        key4: ["%%_val4_%%", "%%_val5_%%", "%%_val6_%%"],
      },
    },
    "05.01 - does not wrap the key1 contents"
  );
  equal(
    ofr(
      {
        key3: {
          key4: ["val4", "val5", "val6"],
        },
        key1: {
          key2: ["val1", "val2", "val3"],
        },
      },
      {
        key1: "Contact us",
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        dontWrapKeys: "*1",
      }
    ),
    {
      key1: "key2.val1<br />key2.val2<br />key2.val3",
      key3: {
        key4: ["%%_val4_%%", "%%_val5_%%", "%%_val6_%%"],
      },
    },
    "05.02 - opposite key order"
  );
  equal(
    ofr(
      {
        key1: {
          key2: ["val1", "val2", "val3"],
        },
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        key1: "Contact us",
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        xhtml: false,
        dontWrapKeys: "*3",
      }
    ),
    {
      key1: "%%_key2.val1_%%<br>%%_key2.val2_%%<br>%%_key2.val3_%%",
      key3: {
        key4: ["val4", "val5", "val6"],
      },
    },
    "05.03 - does not touch key3 children"
  );
  equal(
    ofr(
      {
        key1: {
          key2: ["val1", "val2", "val3"],
        },
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        key1: "Contact us",
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
        dontWrapKeys: "key3*",
      }
    ),
    {
      key1: "%%_key2.val1_%%<br />%%_key2.val2_%%<br />%%_key2.val3_%%",
      key3: {
        key4: ["val4", "val5", "val6"],
      },
    },
    "05.04 - does not wrap the key3 children"
  );
  equal(
    ofr(
      {
        key1: {
          key2: ["val1", "val2", "val3"],
        },
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        key1: "Contact us",
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
        xhtml: false,
        dontWrapKeys: "key4*",
      }
    ),
    {
      key1: "%%_key2.val1_%%<br>%%_key2.val2_%%<br>%%_key2.val3_%%",
      key3: {
        key4: ["val4", "val5", "val6"],
      },
    },
    "05.05 - nothing, because key4 is not top-level"
  );
});

test("06 - array of input vs string of reference", () => {
  equal(
    ofr(
      {
        key1: ["val1", "val2", "val3"],
        key3: {
          key4: ["val4", "val5"],
        },
      },
      {
        key1: "Contact us",
        key3: {
          key4: ["aaa", "zzz"],
        },
      }
    ),
    {
      key1: "%%_val1_%%<br />%%_val2_%%<br />%%_val3_%%",
      key3: {
        key4: ["%%_val4_%%", "%%_val5_%%"],
      },
    },
    "06"
  );
});

test("07 - action within an array's contents", () => {
  equal(
    ofr(
      {
        key1: [
          {
            a: "a",
            b: [
              {
                x: "xx",
                z: "zz",
              },
            ],
            c: {
              d: ["e", "f", "g", "h"],
            },
          },
        ],
      },
      {
        key1: [
          {
            a: "a",
            b: [
              {
                x: "xx",
                z: "zz",
              },
            ],
            c: "cc",
          },
        ],
      }
    ),
    {
      key1: [
        {
          a: "%%_a_%%",
          b: [
            {
              x: "%%_xx_%%",
              z: "%%_zz_%%",
            },
          ],
          c: "%%_d.e_%%<br />%%_d.f_%%<br />%%_d.g_%%<br />%%_d.h_%%",
        },
      ],
    },
    "07"
  );
});

test("08 - doesn't wrap empty string values", () => {
  equal(
    ofr(
      {
        key1: ["val1", "val2", "val3"],
        key3: {
          key4: ["val4", ""],
        },
      },
      {
        key1: "Contact us",
        key3: {
          key4: ["aaa", "zzz"],
        },
      }
    ),
    {
      key1: "%%_val1_%%<br />%%_val2_%%<br />%%_val3_%%",
      key3: {
        key4: ["%%_val4_%%", ""],
      },
    },
    "08"
  );
});

test("09 - reference array as value is shorter than input's", () => {
  equal(
    ofr(
      {
        key1: ["val1", "val2", "val3"],
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        key1: "Contact us",
        key3: {
          key4: ["aaa"],
        },
      }
    ),
    {
      key1: "%%_val1_%%<br />%%_val2_%%<br />%%_val3_%%",
      key3: {
        key4: ["%%_val4_%%", "%%_val5_%%", "%%_val6_%%"],
      },
    },
    "09"
  );
});

test("10 - one ignore works on multiple keys", () => {
  equal(
    ofr(
      {
        key_aaaa: "something",
        key_bbbb: "anything",
        wrapme: "oh yes",
      },
      {
        key_aaaa: "Title",
        key_bbbb: "Subtitle",
      },
      {
        dontWrapKeys: ["key*"],
        wrapHeadsWith: "${",
        wrapTailsWith: "}",
      }
    ),
    {
      key_aaaa: "something",
      key_bbbb: "anything",
      wrapme: "oh yes",
    },
    "10.01 - defaults on opts.whatToDoWhenReferenceIsMissing"
  );
  equal(
    ofr(
      {
        key_aaaa: "something",
        key_bbbb: "anything",
        wrapme: "oh yes",
      },
      {
        key_aaaa: "Title",
        key_bbbb: "Subtitle",
      },
      {
        dontWrapKeys: ["key*"],
        wrapHeadsWith: "${",
        wrapTailsWith: "}",
        whatToDoWhenReferenceIsMissing: 0,
      }
    ),
    {
      key_aaaa: "something",
      key_bbbb: "anything",
      wrapme: "oh yes",
    },
    "10.02 - hardcoded defaults on opts.whatToDoWhenReferenceIsMissing"
  );
  equal(
    ofr(
      {
        key_aaaa: "something",
        key_bbbb: "anything",
        wrapme: "oh yes",
      },
      {
        key_aaaa: "Title",
        key_bbbb: "Subtitle",
      },
      {
        dontWrapKeys: ["key*"],
        wrapHeadsWith: "${",
        wrapTailsWith: "}",
        whatToDoWhenReferenceIsMissing: 2,
      }
    ),
    {
      key_aaaa: "something",
      key_bbbb: "anything",
      wrapme: "${oh yes}",
    },
    "10.03 - defaults on opts.whatToDoWhenReferenceIsMissing"
  );
  equal(
    ofr(
      {
        key_aaaa: "something",
        key_bbbb: "anything",
        wrapme: "oh yes",
      },
      {
        key_aaaa: "Title",
        key_bbbb: "Subtitle",
        wrapme: "z",
      },
      {
        dontWrapKeys: ["key*"],
        wrapHeadsWith: "${",
        wrapTailsWith: "}",
      }
    ),
    {
      key_aaaa: "something",
      key_bbbb: "anything",
      wrapme: "${oh yes}",
    },
    '10.04 - normal case, where reference is provided for key "wrapme"'
  );
  equal(
    ofr(
      {
        key_aaaa: { a: "a" },
        key_bbbb: { b: "b" },
        wrapme: { c: "c" },
      },
      {
        key_aaaa: "a",
        key_bbbb: "b",
        wrapme: "c",
      },
      {
        dontWrapKeys: ["key*"],
        wrapHeadsWith: "${",
        wrapTailsWith: "}",
      }
    ),
    {
      key_aaaa: "a.a",
      key_bbbb: "b.b",
      wrapme: "${c.c}",
    },
    "10.05 - same as #04 but with objects"
  );
});

test("11 - deeper level - array VS. string", () => {
  equal(
    ofr(
      {
        a_key: [
          {
            k_key: "k_val",
            l_key: "l_val",
            m_key: ["xxxx", ["1111", "2222", "3333"], "yyyy", "zzzz"],
          },
        ],
        b_key: "b_val",
      },
      {
        a_key: [
          {
            k_key: "k_val",
            l_key: "l_val",
            m_key: ["xxxx", "wwww", "yyyy", "zzzz"],
          },
        ],
        b_key: "b_val",
      }
    ),
    {
      a_key: [
        {
          k_key: "%%_k_val_%%",
          l_key: "%%_l_val_%%",
          m_key: [
            "%%_xxxx_%%",
            "%%_1111_%% %%_2222_%% %%_3333_%%",
            "%%_yyyy_%%",
            "%%_zzzz_%%",
          ],
        },
      ],
      b_key: "%%_b_val_%%",
    },
    "11"
  );
});

test("12 - deeper level - array within array VS. string", () => {
  equal(
    ofr(
      {
        a_key: ["xxxx", ["1111", "2222", "3333"], "yyyy", "zzzz"],
        b_key: "b_val",
      },
      {
        a_key: "a_val",
        b_key: "b_val",
      }
    ),
    {
      a_key:
        "%%_xxxx_%%<br />%%_1111_%% %%_2222_%% %%_3333_%%<br />%%_yyyy_%%<br />%%_zzzz_%%",
      b_key: "%%_b_val_%%",
    },
    "12"
  );
});

test("13 - deeper level - array within array VS. string #2", () => {
  equal(
    ofr(
      {
        a: [
          {
            k_key: "k_val",
            l_key: [["xxxx", "yyyy", "zzzz"], "222", "333", "444", "555"],
            m_key: "m_val",
          },
        ],
      },
      {
        a: [
          {
            k_key: "k_val",
            l_key: "l_val",
            m_key: "m_val",
          },
        ],
      }
    ),
    {
      a: [
        {
          k_key: "%%_k_val_%%",
          l_key:
            "%%_xxxx_%% %%_yyyy_%% %%_zzzz_%%<br />%%_222_%%<br />%%_333_%%<br />%%_444_%%<br />%%_555_%%",
          m_key: "%%_m_val_%%",
        },
      ],
    },
    "13.01 - innermost array is first element"
  );
  equal(
    ofr(
      {
        a: [
          {
            k_key: "k_val",
            l_key: ["111", ["xxxx", "yyyy", "zzzz"], "222", "333", "444"],
            m_key: "m_val",
          },
        ],
      },
      {
        a: [
          {
            k_key: "k_val",
            l_key: "l_val",
            m_key: "m_val",
          },
        ],
      }
    ),
    {
      a: [
        {
          k_key: "%%_k_val_%%",
          l_key:
            "%%_111_%%<br />%%_xxxx_%% %%_yyyy_%% %%_zzzz_%%<br />%%_222_%%<br />%%_333_%%<br />%%_444_%%",
          m_key: "%%_m_val_%%",
        },
      ],
    },
    "13.02 - innermost array is second element"
  );
});

test("14 - one ignore works on multiple keys", () => {
  equal(
    ofr(
      {
        modules: [
          {
            part1: [
              {
                ccc: [
                  {
                    kkk: ["m", "n", "o", "p"],
                  },
                ],
                ddd: "ddd_val1",
              },
            ],
            part2: [
              {
                ccc: [
                  {
                    kkk: ["r", "s", "t", "u"],
                  },
                ],
                ddd: "ddd_val2",
              },
            ],
          },
        ],
      },
      {
        modules: [
          {
            part1: [
              {
                ccc: [
                  {
                    kkk: "kkk_ref1",
                  },
                ],
                ddd: "ddd_ref1",
              },
            ],
            part2: [
              {
                ccc: [
                  {
                    kkk: "kkk_ref2",
                  },
                ],
                ddd: "ddd_ref2",
              },
            ],
          },
        ],
      },
      {
        dontWrapPaths: ["modules[0].part2[0].ccc[0].kkk"],
        wrapHeadsWith: "{{ ",
        wrapTailsWith: " }}",
        xhtml: true,
      }
    ),
    {
      modules: [
        {
          part1: [
            {
              ccc: [
                {
                  kkk: "{{ m }}<br />{{ n }}<br />{{ o }}<br />{{ p }}",
                },
              ],
              ddd: "{{ ddd_val1 }}",
            },
          ],
          part2: [
            {
              ccc: [
                {
                  kkk: "r<br />s<br />t<br />u",
                },
              ],
              ddd: "{{ ddd_val2 }}",
            },
          ],
        },
      ],
    },
    "14"
  );
});

test("15 - opts.mergeWithoutTrailingBrIfLineContainsBr", () => {
  equal(
    ofr(
      {
        key1: [
          "{% if val1 %}{{ val1 }}<br />{% endif %}",
          "{% if val2 %}{{ val2 }}<br />{% endif %}",
          "{% if val3 %}{{ val3 }}{% endif %}",
        ],
      },
      {
        key1: "Contact us",
      },
      {
        wrapGlobalFlipSwitch: false,
      }
    ),
    {
      key1: "{% if val1 %}{{ val1 }}<br />{% endif %}{% if val2 %}{{ val2 }}<br />{% endif %}{% if val3 %}{{ val3 }}{% endif %}",
    },
    "15.01 - default - BRs are detected and no additional BRs are added"
  );
  equal(
    ofr(
      {
        key1: [
          "{% if val1 %}{{ val1 }}<br />{% endif %}",
          "{% if val2 %}{{ val2 }}<br />{% endif %}",
          "{% if val3 %}{{ val3 }}{% endif %}",
        ],
      },
      {
        key1: "Contact us",
      },
      {
        wrapGlobalFlipSwitch: false,
        mergeWithoutTrailingBrIfLineContainsBr: true,
      }
    ),
    {
      key1: "{% if val1 %}{{ val1 }}<br />{% endif %}{% if val2 %}{{ val2 }}<br />{% endif %}{% if val3 %}{{ val3 }}{% endif %}",
    },
    "15.02 - hardcoded default - same as #01"
  );
  equal(
    ofr(
      {
        key1: [
          "{% if val1 %}{{ val1 }}<br />{% endif %}",
          "{% if val2 %}{{ val2 }}<br />{% endif %}",
          "{% if val3 %}{{ val3 }}{% endif %}",
        ],
      },
      {
        key1: "Contact us",
      },
      {
        wrapGlobalFlipSwitch: false,
        mergeWithoutTrailingBrIfLineContainsBr: false,
      }
    ),
    {
      key1: "{% if val1 %}{{ val1 }}<br />{% endif %}<br />{% if val2 %}{{ val2 }}<br />{% endif %}<br />{% if val3 %}{{ val3 }}{% endif %}",
    },
    "15.03 - off - will add excessive BRs"
  );

  // NOW COMBOS:

  equal(
    ofr(
      {
        key1: [
          "{% if val1 %}{{ val1 }}<br />{% endif %}",
          "{% if val2 %}{{ val2 }}<br />{% endif %}",
          "{% if val3 %}{{ val3 }}{% endif %}",
        ],
      },
      {
        key1: "Contact us",
      },
      {
        wrapGlobalFlipSwitch: false,
        xhtml: false,
        mergeWithoutTrailingBrIfLineContainsBr: false,
      }
    ),
    {
      key1: "{% if val1 %}{{ val1 }}<br />{% endif %}<br>{% if val2 %}{{ val2 }}<br />{% endif %}<br>{% if val3 %}{{ val3 }}{% endif %}",
    },
    "15.04 - xhtml = false"
  );
});

// -----------------------------------------------------------------------------
// 03. opts.ignore
// -----------------------------------------------------------------------------

test("16 - opts.ignore & wrapping function", () => {
  equal(
    ofr(
      {
        key1: "val11.val12",
        key2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      }
    ),
    {
      key1: "%%_val11.val12_%%",
      key2: "%%_val21.val22_%%",
    },
    "16.01 - default behaviour"
  );
  equal(
    ofr(
      {
        key1: "val11.val12",
        key2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      },
      {
        ignore: "key1",
      }
    ),
    {
      key1: "val11.val12",
      key2: "%%_val21.val22_%%",
    },
    "16.02 - does not wrap ignored string"
  );
  equal(
    ofr(
      {
        key1: "val11.val12",
        key2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      },
      {
        ignore: ["z", "key1"],
      }
    ),
    {
      key1: "val11.val12",
      key2: "%%_val21.val22_%%",
    },
    "16.03 - does not wrap ignored array"
  );
});

test("17 - flattens an array value but doesn't touch other one", () => {
  equal(
    ofr(
      {
        key1: {
          key2: ["val1", "val2", "val3"],
        },
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        key1: "Contact us",
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      }
    ),
    {
      key1: "%%_key2.val1_%%<br />%%_key2.val2_%%<br />%%_key2.val3_%%",
      key3: {
        key4: ["%%_val4_%%", "%%_val5_%%", "%%_val6_%%"],
      },
    },
    "17.01"
  );
  equal(
    ofr(
      {
        key1: {
          key2: ["val1", "val2", "val3"],
        },
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        key1: "Contact us",
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
      }
    ),
    {
      key1: "%%_key2.val1_%%<br />%%_key2.val2_%%<br />%%_key2.val3_%%",
      key3: {
        key4: ["%%_val4_%%", "%%_val5_%%", "%%_val6_%%"],
      },
    },
    "17.02"
  );
  equal(
    ofr(
      {
        key1: {
          key2: ["val1", "val2", "val3"],
        },
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        key1: "Contact us",
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        ignore: "key1",
      }
    ),
    {
      key1: {
        key2: ["val1", "val2", "val3"],
      },
      key3: {
        key4: ["%%_val4_%%", "%%_val5_%%", "%%_val6_%%"],
      },
    },
    "17.03 - ignore affects key1, default wrapping"
  );
  equal(
    ofr(
      {
        key1: {
          key2: ["val1", "val2", "val3"],
        },
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        key1: "Contact us",
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
        ignore: "key1",
      }
    ),
    {
      key1: {
        key2: ["val1", "val2", "val3"],
      },
      key3: {
        key4: ["%%_val4_%%", "%%_val5_%%", "%%_val6_%%"],
      },
    },
    "17.04 - ignore affects key1, custom wrapping"
  );
  equal(
    ofr(
      {
        key0: {
          key2: ["val1", "val2", "val3"],
        },
        key1: {
          key2: ["val1", "val2", "val3"],
        },
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        key1: "Contact us",
        key0: "Text",
        key3: {
          key4: ["val4", "val5", "val6"],
        },
      },
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
        ignore: "key0",
      }
    ),
    {
      key0: {
        key2: ["val1", "val2", "val3"],
      },
      key1: "%%_key2.val1_%%<br />%%_key2.val2_%%<br />%%_key2.val3_%%",
      key3: {
        key4: ["%%_val4_%%", "%%_val5_%%", "%%_val6_%%"],
      },
    },
    "17.05 - some ignored, some flattened"
  );
});

// -----------------------------------------------------------------------------
// 04. opts.whatToDoWhenReferenceIsMissing
// -----------------------------------------------------------------------------

test("18 - opts.whatToDoWhenReferenceIsMissing", () => {
  equal(
    ofr(
      {
        a: {
          c: "d",
        },
        b: {
          e: "f",
        },
      },
      {
        a: "a",
      }
    ),
    {
      a: "%%_c.d_%%",
      b: {
        e: "f",
      },
    },
    "18.01 - no opts - opt. 0 - skips"
  );
  equal(
    ofr(
      {
        a: {
          c: "d",
        },
        b: {
          e: "f",
        },
      },
      {
        a: "a",
      }
    ),
    {
      a: "%%_c.d_%%",
      b: {
        e: "f",
      },
    },
    "18.02 - opts - opt. 0 hardcoded - skips (same as #01)"
  );
  throws(() => {
    ofr(
      {
        a: {
          c: "d",
        },
        b: {
          e: "f",
        },
      },
      {
        a: "a",
      },
      {
        whatToDoWhenReferenceIsMissing: 1,
      }
    );
  }, "18.03");
  equal(
    ofr(
      {
        a: {
          c: "d",
        },
        b: {
          e: "f",
        },
      },
      {
        a: "a",
      },
      {
        whatToDoWhenReferenceIsMissing: 2,
      }
    ),
    {
      a: "%%_c.d_%%",
      b: "%%_e.f_%%",
    },
    "18.04 - opts - opt. 2 - flattens to string anyway + wraps if permitted"
  );
});

// -----------------------------------------------------------------------------
// 05. Other cases
// -----------------------------------------------------------------------------

test("19 - double-wrapping prevention when markers have white space", () => {
  equal(
    ofr(
      {
        key1: "%%_val11.val12_%%",
        key2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      }
    ),
    {
      key1: "%%_val11.val12_%%",
      key2: "%%_val21.val22_%%",
    },
    "19.01 - base"
  );
  equal(
    ofr(
      {
        key1: "%%_val11.val12_%%", // << notice missing white space around markers
        key2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      },
      {
        wrapHeadsWith: "%%_ ", // << notice the white space around markers
        wrapTailsWith: " _%%",
      }
    ),
    {
      key1: "%%_val11.val12_%%",
      key2: "%%_ val21.val22 _%%",
    },
    "19.02 - whitespace on default heads and tails, checking double wrapping prevention"
  );
  equal(
    ofr(
      {
        key1: "{val11.val12}", // << notice missing white space around markers
        key2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      },
      {
        wrapHeadsWith: "{ ", // << notice the white space around markers
        wrapTailsWith: " }",
      }
    ),
    {
      key1: "{val11.val12}", // << not { {val11.val12} }
      key2: "{ val21.val22 }",
    },
    "19.03 - whitespace on custom heads and tails, checking double wrapping prevention"
  );
});

test("20 - double-wrapping prevention from setting opts.preventWrappingIfContains", () => {
  equal(
    ofr(
      {
        key1: "{% if some_module.some_special_value %}some text{% endif %}",
        key2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      },
      {
        wrapHeadsWith: "{{ ",
        wrapTailsWith: " }}",
      }
    ),
    {
      key1: "{{ {% if some_module.some_special_value %}some text{% endif %} }}",
      key2: "{{ val21.val22 }}",
    },
    "20.01 - default - double wrapping on key1 because {%...%} is not recognised"
  );
  equal(
    ofr(
      {
        key1: "{% if some_module.some_special_value %}some text{% endif %}",
        key2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      },
      {
        wrapHeadsWith: "{{ ",
        wrapTailsWith: " }}",
        preventWrappingIfContains: "{%",
      }
    ),
    {
      key1: "{% if some_module.some_special_value %}some text{% endif %}",
      key2: "{{ val21.val22 }}",
    },
    "20.02 - opts.preventWrappingIfContains, value as string"
  );
  equal(
    ofr(
      {
        key1: "{% if some_module.some_special_value %}some text{% endif %}",
        key2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      },
      {
        wrapHeadsWith: "{{ ",
        wrapTailsWith: " }}",
        preventWrappingIfContains: ["zzz", "{%"],
      }
    ),
    {
      key1: "{% if some_module.some_special_value %}some text{% endif %}",
      key2: "{{ val21.val22 }}",
    },
    "20.03 - opts.preventWrappingIfContains, value as array"
  );
  equal(
    ofr(
      {
        key1: "{% if some_module.some_special_value %}some text{% endif %}",
        key2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      },
      {
        wrapHeadsWith: "{{ ",
        wrapTailsWith: " }}",
        preventWrappingIfContains: ["yyy", "zzz"],
      }
    ),
    {
      key1: "{{ {% if some_module.some_special_value %}some text{% endif %} }}",
      key2: "{{ val21.val22 }}",
    },
    "20.04 - opts.preventWrappingIfContains contents don't match and thus string get double-wrapped"
  );
  equal(
    ofr(
      {
        key1: "{% if some_module.some_special_value %}some text{% endif %}",
        key2: "val21.val22",
      },
      {
        key1: "Contact us",
        key2: "Tel. 0123456789",
      },
      {
        wrapHeadsWith: "{{ ",
        wrapTailsWith: " }}",
        preventWrappingIfContains: ["yyy", "zzz"],
        wrapGlobalFlipSwitch: false,
      }
    ),
    {
      key1: "{% if some_module.some_special_value %}some text{% endif %}",
      key2: "val21.val22",
    },
    "20.05 - opts.preventWrappingIfContains and opts.wrapGlobalFlipSwitch kill switch on"
  );
});

// -----------------------------------------------------------------------------
// 96. util.arrayiffyString
// -----------------------------------------------------------------------------

test("21 - util.arrayiffyString - turns string into an array", () => {
  equal(arrayiffyString("zzz"), ["zzz"], "21");
});

test("22 - util.arrayiffyString - turns empty string into an empty array", () => {
  equal(arrayiffyString(""), [], "22");
});

test("23 - util.arrayiffyString - doesn't touch any other input types", () => {
  equal(arrayiffyString(["a"]), ["a"], "23.01");
  equal(arrayiffyString([]), [], "23.02");
  equal(arrayiffyString(1), 1, "23.03");
  equal(arrayiffyString(null), null, "23.04");
});

// -----------------------------------------------------------------------------
// 98. util.flattenObject
// -----------------------------------------------------------------------------

test("24 - util.flattenObject > empty input", () => {
  equal(flattenObject(), [], "24.01");
  equal(flattenObject({}), [], "24.02");
});

test("25 - util.flattenObject > simple object", () => {
  equal(
    flattenObject(
      {
        a: "b",
        c: "d",
      },
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
        dontWrapKeys: "",
        xhtml: true,
        preventDoubleWrapping: true,
        objectKeyAndValueJoinChar: ".",
      }
    ),
    ["a.b", "c.d"],
    "25"
  );
});

test("26 - util.flattenObject > nested objects", () => {
  equal(
    flattenObject(
      {
        a: { b: "c", d: "e" },
        f: { g: "h", e: "j" },
      },
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
        dontWrapKeys: [],
        xhtml: true,
        preventDoubleWrapping: true,
        objectKeyAndValueJoinChar: ".",
      }
    ),
    ["a.b.c", "a.d.e", "f.g.h", "f.e.j"],
    "26"
  );
});

// -----------------------------------------------------------------------------
// 99. util.flattenArr
// -----------------------------------------------------------------------------

test("27 - util.flattenArr > empty input", () => {
  equal(flattenArr(), "", "27");
});

test("28 - util.flattenArr > simple array", () => {
  equal(
    flattenArr(
      ["a", "b", "c"],
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
        dontWrapKeys: [],
        xhtml: true,
        preventDoubleWrapping: true,
        objectKeyAndValueJoinChar: ".",
      },
      true
    ),
    "%%_a_%% %%_b_%% %%_c_%%",
    "28.01"
  );
  equal(
    flattenArr(
      ["a", "b", "c"],
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
        dontWrapKeys: [],
        xhtml: true,
        preventDoubleWrapping: true,
        objectKeyAndValueJoinChar: ".",
      },
      false
    ),
    "a b c",
    "28.02"
  );
});

test("29 - util.flattenArr + joinArraysUsingBrs", () => {
  equal(
    flattenArr(
      ["a", ["b", "c", "d"], "e"],
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
        dontWrapKeys: [],
        xhtml: true,
        preventDoubleWrapping: true,
        objectKeyAndValueJoinChar: ".",
        mergeArraysWithLineBreaks: true,
      },
      true,
      false // joinArraysUsingBrs
    ),
    "%%_a_%% %%_b,c,d_%% %%_e_%%",
    "29.01"
  );
  equal(
    flattenArr(
      ["a", ["b", "c", "d"], "e"],
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
        dontWrapKeys: [],
        xhtml: true,
        preventDoubleWrapping: true,
        objectKeyAndValueJoinChar: ".",
        mergeArraysWithLineBreaks: true,
      },
      false,
      false // joinArraysUsingBrs
    ),
    "a b,c,d e",
    "29.02"
  );
  equal(
    flattenArr(
      ["a", ["b", "c", "d"], "e"],
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
        dontWrapKeys: [],
        xhtml: true,
        preventDoubleWrapping: true,
        objectKeyAndValueJoinChar: ".",
        mergeArraysWithLineBreaks: false,
      },
      true,
      false // joinArraysUsingBrs
    ),
    "%%_a_%% %%_b,c,d_%% %%_e_%%",
    "29.03"
  );
  equal(
    flattenArr(
      ["a", ["b", "c", "d"], "e"],
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
        dontWrapKeys: [],
        xhtml: true,
        preventDoubleWrapping: true,
        objectKeyAndValueJoinChar: ".",
        mergeArraysWithLineBreaks: false,
      },
      false,
      false // joinArraysUsingBrs
    ),
    "a b,c,d e",
    "29.04"
  );

  // joinArraysUsingBrs = true
  equal(
    flattenArr(
      ["a", ["b", "c", "d"], "e"],
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
        dontWrapKeys: [],
        xhtml: true,
        preventDoubleWrapping: true,
        objectKeyAndValueJoinChar: ".",
        mergeArraysWithLineBreaks: true,
      },
      true,
      true // joinArraysUsingBrs
    ),
    "%%_a_%%<br />%%_b_%% %%_c_%% %%_d_%%<br />%%_e_%%",
    "29.05"
  );
  equal(
    flattenArr(
      ["a", ["b", "c", "d"], "e"],
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
        dontWrapKeys: [],
        xhtml: true,
        preventDoubleWrapping: true,
        objectKeyAndValueJoinChar: ".",
        mergeArraysWithLineBreaks: true,
      },
      false,
      true // joinArraysUsingBrs
    ),
    "a<br />b c d<br />e",
    "29.06"
  );
  equal(
    flattenArr(
      ["a", ["b", "c", "d"], "e"],
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
        dontWrapKeys: [],
        xhtml: true,
        preventDoubleWrapping: true,
        objectKeyAndValueJoinChar: ".",
        mergeArraysWithLineBreaks: false,
      },
      true,
      true // joinArraysUsingBrs
    ),
    "%%_a_%%%%_b_%% %%_c_%% %%_d_%%%%_e_%%",
    "29.07"
  );
  equal(
    flattenArr(
      ["a", ["b", "c", "d"], "e"],
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
        dontWrapKeys: [],
        xhtml: true,
        preventDoubleWrapping: true,
        objectKeyAndValueJoinChar: ".",
        mergeArraysWithLineBreaks: false,
      },
      false,
      true // joinArraysUsingBrs
    ),
    "ab c de",
    "29.08"
  );

  // HTML - no slashes
  equal(
    flattenArr(
      ["a", ["b", "c", "d"], "e"],
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
        dontWrapKeys: [],
        xhtml: false,
        preventDoubleWrapping: true,
        objectKeyAndValueJoinChar: ".",
        mergeArraysWithLineBreaks: true,
      },
      true,
      true // joinArraysUsingBrs
    ),
    "%%_a_%%<br>%%_b_%% %%_c_%% %%_d_%%<br>%%_e_%%",
    "29.09"
  );
  equal(
    flattenArr(
      ["a", ["b", "c", "d"], "e"],
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
        dontWrapKeys: [],
        xhtml: false,
        preventDoubleWrapping: true,
        objectKeyAndValueJoinChar: ".",
        mergeArraysWithLineBreaks: true,
      },
      false,
      true // joinArraysUsingBrs
    ),
    "a<br>b c d<br>e",
    "29.10"
  );
  equal(
    flattenArr(
      ["a", ["b", "c", "d"], "e"],
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
        dontWrapKeys: [],
        xhtml: false,
        preventDoubleWrapping: true,
        objectKeyAndValueJoinChar: ".",
        mergeArraysWithLineBreaks: true,
      },
      true,
      false // joinArraysUsingBrs
    ),
    "%%_a_%% %%_b,c,d_%% %%_e_%%",
    "29.11"
  );
  equal(
    flattenArr(
      ["a", ["b", "c", "d"], "e"],
      {
        wrapHeadsWith: "%%_",
        wrapTailsWith: "_%%",
        dontWrapKeys: [],
        xhtml: false,
        preventDoubleWrapping: true,
        objectKeyAndValueJoinChar: ".",
        mergeArraysWithLineBreaks: true,
      },
      false,
      false // joinArraysUsingBrs
    ),
    "a b,c,d e",
    "29.12"
  );
});

test.run();
