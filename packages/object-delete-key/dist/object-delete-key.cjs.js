'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var monkey = _interopDefault(require('ast-monkey'));
var isEmpty = _interopDefault(require('posthtml-ast-is-empty'));
var clone = _interopDefault(require('lodash.clonedeep'));
var checkTypes = _interopDefault(require('check-types-mini'));
var validateTheOnly = _interopDefault(require('util-array-object-or-both'));

// ---------------------------------------------------------------------
// MAIN:

function deleteKey(originalInput, originalOpts) {
  function existy(x) {
    return x != null;
  }
  if (!existy(originalInput)) {
    throw new Error('object-delete-key/deleteKey(): [THROW_ID_01] Please provide the first argument, something to work upon.');
  }
  var defaults = {
    key: null,
    val: undefined,
    cleanup: true,
    only: 'any'
  };
  var opts = Object.assign({}, defaults, originalOpts);
  checkTypes(opts, defaults, {
    msg: 'object-delete-key/deleteKey(): [THROW_ID_00]',
    ignoreKeys: 'val',
    schema: {
      key: ['null', 'string'],
      val: 'whatever'
    }
  });
  opts.only = validateTheOnly(opts.only, {
    msg: 'object-delete-key/deleteKey(): [THROW_ID_03]',
    optsVarName: 'opts.only'
  });
  // after this, opts.only is equal to either: 1) object, 2) array OR 3) any

  if (!existy(opts.key) && !existy(opts.val)) {
    throw new Error('object-delete-key/deleteKey(): [THROW_ID_02] Please provide at least a key or a value.');
  }
  var input = clone(originalInput);

  if (opts.cleanup) {
    var findings = monkey.find(input, { key: opts.key, val: opts.val, only: opts.only });

    // let tests = monkey.drop(input, {index: 8})

    var currentIndex = void 0;
    var nodeToDelete = void 0;
    while (findings) {
      nodeToDelete = findings[0].index;
      for (var i = 1, len = findings[0].path.length; i < len; i++) {
        currentIndex = findings[0].path[len - 1 - i];
        if (isEmpty(monkey.del(monkey.get(input, { index: currentIndex }), { key: opts.key, val: opts.val, only: opts.only }))) {
          nodeToDelete = currentIndex;
        }
      }
      input = monkey.drop(input, { index: nodeToDelete });
      findings = monkey.find(input, { key: opts.key, val: opts.val, only: opts.only });
    }
    return input;
  }
  return monkey.del(input, { key: opts.key, val: opts.val, only: opts.only });
}

module.exports = deleteKey;
