"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const FormModel = _ref => {
  let {
    onFieldChange,
    onSubmit,
    isLoading,
    disableSubmitButton,
    inputs,
    width,
    options,
    gridColumnsCount,
    submitButtonWidth
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: onSubmit,
    style: _objectSpread({
      display: "grid",
      gridTemplateColumns: "repeat(".concat(gridColumnsCount, ", 1fr)"),
      columnGap: 24,
      rowGap: 24,
      height: "max-content",
      width
    }, options === null || options === void 0 ? void 0 : options.form)
  }, inputs.map((input, __) => !Array.isArray(input.lookups) ? /*#__PURE__*/_react.default.createElement(_material.FormControl, {
    sx: {
      width: "100%"
    },
    size: "small"
  }, /*#__PURE__*/_react.default.createElement(_material.TextField, {
    key: input.label,
    value: input.value || '',
    label: input.label,
    name: input.name,
    type: input.type,
    disabled: input === null || input === void 0 ? void 0 : input.disabled,
    onChange: onFieldChange,
    autoFocus: !!input.value,
    required: input.required,
    variant: "outlined",
    size: "small"
  })) : /*#__PURE__*/_react.default.createElement(_material.FormControl, {
    sx: {
      width: "100%"
    },
    size: "small"
  }, /*#__PURE__*/_react.default.createElement(_material.InputLabel, {
    id: "".concat(input.name, "-label")
  }, input.label), /*#__PURE__*/_react.default.createElement(_material.Select, {
    labelId: "".concat(input.name, "-label"),
    key: input.label,
    label: input.label,
    name: input.name,
    onChange: onFieldChange,
    multiple: input.multiselect,
    disabled: input.disabled,
    required: input.required,
    value: input.multiselect ? input.selectValue : input.value !== null ? input.value : '',
    input: /*#__PURE__*/_react.default.createElement(_material.OutlinedInput, {
      label: input.label
    }),
    MenuProps: {
      PaperProps: {
        style: {
          maxHeight: 300,
          overflowY: 'auto'
        }
      }
    }
  }, input === null || input === void 0 ? void 0 : input.lookups.map((lookup, __) => /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
    key: lookup.name,
    value: lookup === null || lookup === void 0 ? void 0 : lookup.value
  }, lookup === null || lookup === void 0 ? void 0 : lookup.name, " "))))), /*#__PURE__*/_react.default.createElement(_material.Button, {
    type: "submit",
    variant: "contained",
    sx: {
      textTransform: "capitalize",
      height: 42,
      width: submitButtonWidth,
      gridColumn: "span ".concat(gridColumnsCount)
    },
    disabled: disableSubmitButton
  }, isLoading ? /*#__PURE__*/_react.default.createElement(_material.CircularProgress, {
    color: "inherit",
    size: 24
  }) : "Submit"));
};
FormModel.propTypes = {
  options: _propTypes.default.object,
  width: _propTypes.default.number,
  gridColumnsCount: _propTypes.default.number,
  submitButtonWidth: _propTypes.default.number,
  inputs: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string.isRequired,
    label: _propTypes.default.string.isRequired,
    type: _propTypes.default.string,
    required: _propTypes.default.bool.isRequired,
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool]),
    lookups: _propTypes.default.arrayOf(_propTypes.default.shape({
      name: _propTypes.default.string.isRequired,
      value: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired, _propTypes.default.array.isRequired // for multiselect fields
      ])
    })),

    multiselect: _propTypes.default.bool,
    disabled: _propTypes.default.bool
  })).isRequired,
  disableSubmitButton: _propTypes.default.bool,
  isLoading: _propTypes.default.bool,
  onSubmit: _propTypes.default.func,
  onFieldChange: _propTypes.default.func
};
FormModel.defaultProps = {
  width: 300,
  disableSubmitButton: false,
  gridColumnsCount: 1,
  submitButtonWidth: "100%"
};
var _default = exports.default = FormModel;