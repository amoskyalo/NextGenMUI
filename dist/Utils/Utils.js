"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startDate = exports.monthsOfTheYear = exports.handlePrint = exports.handleExportToExcel = exports.dateObject = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var XLSX = _interopRequireWildcard(require("xlsx"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const date = new Date();
const handleExportToExcel = (columns, handleSearch) => {
  const headers = columns.map(column => column.headerName);
  const data = handleSearch.map(row => columns.map(column => column.field === "actions" ? "" : row[column.field]));
  const allData = [headers, ...data];
  const ws = XLSX.utils.aoa_to_sheet(allData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  XLSX.writeFile(wb, "orders.xlsx");
};
exports.handleExportToExcel = handleExportToExcel;
const handlePrint = () => {
  window.print();
};
exports.handlePrint = handlePrint;
const dateObject = exports.dateObject = {
  '$D': date.getDate(),
  '$H': date.getHours(),
  '$L': "en",
  '$M': date.getMonth(),
  '$W': date.getDay(),
  '$d': date,
  '$isDayjsObject': true,
  '$m': date.getMinutes(),
  '$ms': date.getMilliseconds(),
  '$s': date.getSeconds(),
  '$u': undefined,
  '$x': {},
  '$y': date.getFullYear()
};
const startDate = exports.startDate = {
  '$M': date.getMonth() - 1
};
const monthsOfTheYear = exports.monthsOfTheYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];