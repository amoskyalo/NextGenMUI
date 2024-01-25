"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.object.assign.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
const _excluded = ["formik", "name", "label", "onChange", "lookups"],
  _excluded2 = ["name", "label", "onChange", "lookups", "renderField"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const renderSelect = _ref => {
  let {
      formik,
      name,
      label,
      onChange: _onChange,
      lookups
    } = _ref,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_material.Select, _extends({
    labelId: "".concat(name, "-label"),
    id: name,
    label: label,
    name: name,
    error: formik.touched[name] && Boolean(formik.errors[name]),
    helperText: formik.touched[name] && formik.errors[name],
    input: /*#__PURE__*/_react.default.createElement(_material.OutlinedInput, {
      label: label
    }),
    onChange: e => {
      formik.setFieldValue(name, e.target.value, true);
      if (_onChange) {
        _onChange(e);
      }
    },
    MenuProps: {
      PaperProps: {
        style: {
          maxHeight: 300,
          overflowY: 'auto'
        }
      }
    }
  }, otherProps), lookups.map((lookup, __) => /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
    key: lookup.title,
    value: lookup === null || lookup === void 0 ? void 0 : lookup.value
  }, lookup === null || lookup === void 0 ? void 0 : lookup.title)));
};
const SelectField = _ref2 => {
  let {
      formik,
      input: {
        name,
        label,
        onChange,
        lookups,
        renderField
      }
    } = _ref2,
    otherProps = _objectWithoutProperties(_ref2.input, _excluded2);
  const inputProps = {
    formik,
    input: _objectSpread({
      name,
      label,
      onChange,
      lookups
    }, otherProps)
  };
  const content = typeof renderField === "function" && /*#__PURE__*/_react.default.isValidElement(renderField(inputProps)) ? renderField(inputProps) : /*#__PURE__*/_react.default.createElement(_material.FormControl, {
    sx: {
      width: "100%"
    },
    size: "small",
    key: label
  }, /*#__PURE__*/_react.default.createElement(_material.InputLabel, {
    error: formik.touched[name] && Boolean(formik.errors[name]),
    id: "".concat(name, "-label")
  }, label), renderSelect(_objectSpread({
    formik,
    name,
    label,
    onChange,
    lookups
  }, otherProps)), formik.touched[name] && formik.errors[name] && /*#__PURE__*/_react.default.createElement(_material.Typography, {
    sx: {
      fontSize: 12,
      color: "#d33247",
      mt: 1
    }
  }, formik.errors[name]));
  return content;
};
var _default = exports.default = SelectField;