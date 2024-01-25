"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CheckboxOption = _ref => {
  let {
    name,
    value,
    label,
    isChecked,
    onChange,
    checkboxColor,
    labelColor
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    key: value,
    sx: {
      display: "flex",
      alignItems: "center",
      columnGap: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Checkbox, {
    sx: {
      m: 0,
      px: 0,
      color: checkboxColor,
      flex: 1
    },
    name: name,
    checked: isChecked,
    onChange: onChange
  }), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    sx: {
      opacity: "70%",
      color: labelColor
    }
  }, label));
};
const renderBoolean = _ref2 => {
  let {
    booleanOptions,
    name,
    onChange,
    formik,
    multiple
  } = _ref2;
  const isError = formik.touched[name] && Boolean(formik.errors[name]);
  const checkboxColor = isError ? "#d33247" : undefined;
  const labelColor = isError ? "#d33247" : undefined;
  const isChecked = value => multiple ? Array.isArray(formik.values[name]) && formik.values[name].includes(value) : formik.values[name] === value;
  const handleCheckboxChange = (value, event) => {
    if (multiple) {
      const updatedValues = event.target.checked ? [...formik.values[name], value] : formik.values[name].filter(item => item !== value);
      formik.setFieldValue(name, updatedValues);
    } else {
      formik.setFieldValue(name, event.target.checked ? value : null);
    }
    if (typeof onChange === 'function') onChange(event);
  };
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      display: "flex",
      columnGap: 2,
      flexWrap: "wrap"
    }
  }, booleanOptions.map(option => {
    const {
      value,
      label
    } = typeof option === "object" ? option : {
      value: option,
      label: option
    };
    return /*#__PURE__*/_react.default.createElement(CheckboxOption, {
      key: value,
      name: name,
      value: value,
      label: label,
      isChecked: isChecked(value),
      onChange: event => handleCheckboxChange(value, event),
      checkboxColor: checkboxColor,
      labelColor: labelColor
    });
  }));
};
const BooleanField = _ref3 => {
  let {
    formik,
    input: {
      booleanOptions,
      label,
      name,
      onChange,
      multiple,
      renderField
    }
  } = _ref3;
  const inputProps = {
    formik,
    input: {
      booleanOptions,
      name,
      onChange
    }
  };
  const isError = formik.touched[name] && Boolean(formik.errors[name]);
  const labelColor = isError ? "#d33247" : null;
  const content = typeof renderField === 'function' && /*#__PURE__*/_react.default.isValidElement(renderField(inputProps)) ? renderField(inputProps) : /*#__PURE__*/_react.default.createElement(_material.FormControl, null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    sx: {
      opacity: "70%",
      color: labelColor
    }
  }, label), renderBoolean({
    formik,
    booleanOptions,
    name,
    onChange,
    multiple
  }), isError && /*#__PURE__*/_react.default.createElement(_material.Typography, {
    sx: {
      fontSize: 12,
      color: "#d33247",
      mt: 1
    }
  }, formik.errors[name]));
  return content;
};
var _default = exports.default = BooleanField;