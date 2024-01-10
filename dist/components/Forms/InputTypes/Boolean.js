"use strict";

require("core-js/modules/es.object.assign.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
const _excluded = ["value", "label"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const renderBoolean = _ref => {
  let {
    booleanOptions,
    name,
    onChange: _onChange,
    formik
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      display: "flex",
      columnGap: 4,
      flexWrap: "wrap"
    }
  }, booleanOptions.map(_ref2 => {
    let {
        value,
        label
      } = _ref2,
      otherProps = _objectWithoutProperties(_ref2, _excluded);
    return /*#__PURE__*/_react.default.createElement(_material.Box, {
      key: value,
      sx: {
        display: "flex",
        alignItems: "center",
        columnGap: 1
      }
    }, /*#__PURE__*/_react.default.createElement(_material.Checkbox, _extends({
      sx: {
        m: 0,
        px: 0,
        color: Boolean(formik.errors[name]) ? "#d33247" : null
      },
      name: name,
      checked: formik.values[name] === value,
      onChange: event => {
        const newValue = event.target.checked ? value : null;
        formik.setFieldValue(name, newValue, true);
        if (_onChange) {
          _onChange(event);
        }
      }
    }, otherProps)), /*#__PURE__*/_react.default.createElement(_material.Typography, {
      sx: {
        opacity: "70%",
        color: Boolean(formik.errors[name]) ? "#d33247" : null
      }
    }, label));
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
  const content = typeof renderField === "function" && /*#__PURE__*/_react.default.isValidElement(renderField(inputProps)) ? renderField(inputProps) : /*#__PURE__*/_react.default.createElement(_material.FormControl, null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    sx: {
      opacity: "70%",
      color: Boolean(formik.errors[name]) ? "#d33247" : null
    }
  }, label), renderBoolean({
    formik,
    booleanOptions,
    label,
    name,
    onChange
  }), formik.touched[name] && formik.errors[name] && /*#__PURE__*/_react.default.createElement(_material.Typography, {
    sx: {
      fontSize: 12,
      color: "#d33247",
      mt: 1
    }
  }, formik.errors[name]));
  return content;
};
var _default = exports.default = BooleanField;