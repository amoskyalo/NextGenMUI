"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useConstructLookupsFromArrayObjectElements = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
const useConstructLookupsFromArrayObjectElements = (arrEl, nameKey, valueKey) => {
  let arr = [];
  for (let el of arrEl) {
    arr.push({
      name: el[nameKey],
      value: el[valueKey]
    });
  }
  return arr;
};
exports.useConstructLookupsFromArrayObjectElements = useConstructLookupsFromArrayObjectElements;