"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _Visibility = _interopRequireDefault(require("@mui/icons-material/Visibility"));
var _VisibilityOff = _interopRequireDefault(require("@mui/icons-material/VisibilityOff"));
const _excluded = ["formik", "name", "label", "type", "onChange", "visiblePasswordFields", "toggleVisibility"],
  _excluded2 = ["name", "label", "type", "onChange", "renderField"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// function fields(type) {
//     switch (type) {
//         case 'textField':
//             return <TextField {...props} />;
//             break;
//         case 'outlined':
//             return <OutlinedInput {...props} />;
//             break;
//     }
// }

const renderTextField = _ref => {
  let {
      formik,
      name,
      label,
      type,
      onChange: _onChange,
      visiblePasswordFields,
      toggleVisibility
    } = _ref,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_material.OutlinedInput, _extends({
    id: name,
    fullWidth: true,
    label: label,
    name: name,
    error: formik.touched[name] && Boolean(formik.errors[name]),
    helperText: formik.touched[name] && formik.errors[name],
    type: type === "password" && visiblePasswordFields.includes(name) ? "text" : type,
    variant: "outlined",
    onChange: e => {
      formik.setFieldValue(name, e.target.value);
      if (_onChange) {
        _onChange(e);
      }
    },
    endAdornment: type === "password" && /*#__PURE__*/_react.default.createElement(_material.InputAdornment, {
      position: "end"
    }, /*#__PURE__*/_react.default.createElement(_material.IconButton, {
      "aria-label": "toggle password visibility",
      onClick: () => toggleVisibility(name),
      edge: "end"
    }, visiblePasswordFields.includes(name) ? /*#__PURE__*/_react.default.createElement(_VisibilityOff.default, null) : /*#__PURE__*/_react.default.createElement(_Visibility.default, null)))
  }, otherProps));
};
const TextField = _ref2 => {
  let {
      formik,
      input: {
        name,
        label,
        type,
        onChange,
        renderField
      }
    } = _ref2,
    otherProps = _objectWithoutProperties(_ref2.input, _excluded2);
  const [visiblePasswordFields, setVisiblePasswordFields] = (0, _react.useState)([]);
  const toggleVisibility = fieldName => {
    setVisiblePasswordFields(prev => prev.includes(fieldName) ? prev.filter(name => name !== fieldName) : [...prev, fieldName]);
  };
  const inputProps = {
    formik,
    input: _objectSpread({
      name,
      label,
      type,
      onChange,
      renderField
    }, otherProps)
  };
  const content = typeof renderField === 'function' && /*#__PURE__*/_react.default.isValidElement(renderField(inputProps)) ? renderField(inputProps) : /*#__PURE__*/_react.default.createElement(_material.FormControl, {
    sx: {
      width: "100%"
    },
    size: "small",
    key: name
  }, /*#__PURE__*/_react.default.createElement(_material.InputLabel, {
    htmlFor: name,
    error: formik.touched[name] && Boolean(formik.errors[name])
  }, label), renderTextField(_objectSpread({
    formik,
    name,
    label,
    type,
    onChange,
    visiblePasswordFields,
    toggleVisibility
  }, otherProps)), formik.touched[name] && formik.errors[name] && /*#__PURE__*/_react.default.createElement(_material.Typography, {
    sx: {
      fontSize: 12,
      color: "#d33247",
      mt: 1
    }
  }, formik.errors[name]));
  return content;
};
var _default = exports.default = TextField;