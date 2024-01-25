"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs");
var _LocalizationProvider = require("@mui/x-date-pickers/LocalizationProvider");
var _DatePicker = require("@mui/x-date-pickers/DatePicker");
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DatesField = _ref => {
  let {
    formik,
    input: {
      label,
      name,
      onChange: _onChange
    }
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_material.FormControl, null, /*#__PURE__*/_react.default.createElement(_LocalizationProvider.LocalizationProvider, {
    dateAdapter: _AdapterDayjs.AdapterDayjs
  }, /*#__PURE__*/_react.default.createElement(_DatePicker.DatePicker, {
    size: "small",
    name: name,
    label: label,
    error: formik.touched[name] && Boolean(formik.errors[name]),
    helperText: formik.touched[name] && formik.errors[name],
    onChange: value => {
      formik.setFieldValue(name, value);
      if (_onChange) {
        _onChange(value);
      }
    },
    sx: {
      ".MuiOutlinedInput-input": {
        paddingY: "8px",
        borderRadius: "5px"
      },
      ".MuiInputLabel-root": {
        top: formik.values[name] ? 0 : -7
      }
    }
  })));
};
var _default = exports.default = DatesField;