"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var Yup = _interopRequireWildcard(require("yup"));
var _formik = require("formik");
var _material = require("@mui/material");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const FormModel = _ref => {
  let {
    validationSchema,
    onSubmit: _onSubmit,
    isLoading,
    disableSubmitButton,
    inputs,
    width,
    options,
    gridColumnsCount,
    submitButtonWidth,
    buttonLabel,
    CustomTitle
  } = _ref;
  function constructInitialValues() {
    let initialValues = {};
    for (let input of inputs) {
      initialValues[input.name] = input.value;
    }
    return initialValues;
  }
  function defaultValidationSchema() {
    const schema = {};
    for (let key of Object.keys(constructInitialValues())) {
      if (key.toLowerCase().includes("email")) {
        schema[key] = Yup.string().email("Invalid email address").required("This field required");
      } else if (key.toLowerCase().includes("password")) {
        schema[key] = Yup.string().required("This field is required");
      } else {
        schema[key] = Yup.string().required("This field is required");
      }
    }
    return Yup.object(_objectSpread({}, schema));
  }
  return /*#__PURE__*/_react.default.createElement(_formik.Formik, {
    initialValues: constructInitialValues(),
    onSubmit: values => _onSubmit(values),
    validationSchema: validationSchema || defaultValidationSchema()
  }, formik => /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: formik.handleSubmit,
    style: _objectSpread({
      height: "max-content",
      width
    }, options === null || options === void 0 ? void 0 : options.form)
  }, CustomTitle && /*#__PURE__*/_react.default.createElement(CustomTitle, null), /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      display: "grid",
      gridTemplateColumns: "repeat(".concat(gridColumnsCount, ", 1fr)"),
      columnGap: 3,
      rowGap: 3,
      marginTop: 3
    }
  }, inputs.map((input, __) => !Array.isArray(input.lookups) ? /*#__PURE__*/_react.default.createElement(_material.FormControl, {
    sx: {
      width: "100%"
    },
    size: "small",
    key: input.name
  }, /*#__PURE__*/_react.default.createElement(_material.TextField, _extends({
    id: input.name,
    fullWidth: true,
    label: input.label,
    name: input.name,
    type: input.type,
    disabled: input === null || input === void 0 ? void 0 : input.disabled,
    autoFocus: !!input.value,
    variant: "outlined",
    size: "small"
  }, formik.getFieldProps(input.name), {
    sx: {
      "& .MuiFormLabel-root": {
        color: formik.touched[input.name] && formik.errors[input.name] ? "red" : "default"
      },
      "& .MuiOutlinedInput-input": {
        color: formik.touched[input.name] && formik.errors[input.name] ? "red" : "default"
      },
      "&:hover .MuiOutlinedInput-root fieldset": {
        borderColor: formik.touched[input.name] && formik.errors[input.name] ? "red" : "default"
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: formik.touched[input.name] && formik.errors[input.name] ? "red" : "default"
        },
        "&.Mui-focused fieldset": {
          borderColor: formik.touched[input.name] && formik.errors[input.name] ? "red" : "default"
        }
      }
    }
  })), formik.touched[input.name] && formik.errors[input.name] && /*#__PURE__*/_react.default.createElement(_material.Typography, {
    sx: {
      fontSize: 12,
      color: "red",
      mt: 1
    }
  }, formik.errors[input.name])) : /*#__PURE__*/_react.default.createElement(_material.FormControl, {
    sx: {
      width: "100%"
    },
    size: "small",
    key: input.label
  }, /*#__PURE__*/_react.default.createElement(_material.InputLabel, {
    id: "".concat(input.name, "-label")
  }, input.label), /*#__PURE__*/_react.default.createElement(_material.Select, _extends({
    labelId: "".concat(input.name, "-label"),
    id: input.name,
    label: input.label,
    name: input.name,
    multiple: input.multiselect,
    disabled: input.disabled
  }, formik.getFieldProps(input.name), {
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
  }), input === null || input === void 0 ? void 0 : input.lookups.map((lookup, __) => /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
    key: lookup.name,
    value: lookup === null || lookup === void 0 ? void 0 : lookup.value
  }, lookup === null || lookup === void 0 ? void 0 : lookup.name))), formik.touched[input.name] && formik.errors[input.name] && /*#__PURE__*/_react.default.createElement(_material.Typography, {
    sx: {
      fontSize: 12,
      color: "red",
      mt: 1
    }
  }, formik.errors[input.name]))), /*#__PURE__*/_react.default.createElement(_material.Button, {
    type: "submit",
    variant: "contained",
    sx: {
      textTransform: "capitalize",
      width: submitButtonWidth,
      gridColumn: "span ".concat(gridColumnsCount)
    },
    disabled: disableSubmitButton,
    size: "medium"
  }, isLoading ? /*#__PURE__*/_react.default.createElement(_material.CircularProgress, {
    color: "inherit",
    size: 20
  }) : buttonLabel))));
};
FormModel.propTypes = {
  options: _propTypes.default.object,
  width: _propTypes.default.number,
  gridColumnsCount: _propTypes.default.number,
  submitButtonWidth: _propTypes.default.number,
  buttonLabel: _propTypes.default.string,
  CustomTitle: _propTypes.default.node,
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
  onSubmit: _propTypes.default.func
};
FormModel.defaultProps = {
  width: "100%",
  disableSubmitButton: false,
  gridColumnsCount: 1,
  submitButtonWidth: "100%",
  buttonLabel: "Submit"
};
var _default = exports.default = FormModel;