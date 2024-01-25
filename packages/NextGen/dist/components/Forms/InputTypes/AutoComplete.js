"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.object.assign.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
const _excluded = ["name", "label", "lookups", "formik"],
  _excluded2 = ["renderField", "name", "lookups", "label"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const renderAutocomplete = _ref => {
  let {
      name,
      label,
      lookups,
      formik
    } = _ref,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_material.Autocomplete, _extends({
    key: name,
    multiple: true,
    id: name,
    options: lookups,
    getOptionLabel: option => option.title,
    onChange: (__, newValue) => {
      const newValues = newValue.map(item => item.value);
      formik.setFieldValue(name, newValues);
    },
    renderInput: params => /*#__PURE__*/_react.default.createElement(_material.TextField, _extends({}, params, {
      error: formik.touched[name] && Boolean(formik.errors[name]),
      helperText: formik.touched[name] && formik.errors[name],
      label: label,
      fullWidth: true
    }))
  }, otherProps));
};
const AutoCompleteField = _ref2 => {
  let {
      input: {
        renderField,
        name,
        lookups,
        label
      },
      formik
    } = _ref2,
    otherProps = _objectWithoutProperties(_ref2.input, _excluded2);
  const inputProps = {
    formik,
    input: _objectSpread({
      name,
      lookups,
      label
    }, otherProps)
  };
  const content = typeof renderField === "function" && /*#__PURE__*/_react.default.isValidElement(renderField(inputProps)) ? renderField(inputProps) : /*#__PURE__*/_react.default.createElement(_material.FormControl, {
    sx: {
      width: "100%"
    },
    key: label
  }, renderAutocomplete(_objectSpread({
    name,
    label,
    lookups,
    formik
  }, otherProps)));
  return content;
};
var _default = exports.default = AutoCompleteField;