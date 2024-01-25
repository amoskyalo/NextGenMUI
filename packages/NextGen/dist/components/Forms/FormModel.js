"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _AutoComplete = _interopRequireDefault(require("./InputTypes/AutoComplete"));
var _Select = _interopRequireDefault(require("./InputTypes/Select"));
var _TextField = _interopRequireDefault(require("./InputTypes/TextField"));
var _Boolean = _interopRequireDefault(require("./InputTypes/Boolean"));
var _Dates = _interopRequireDefault(require("./InputTypes/Dates"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var Yup = _interopRequireWildcard(require("yup"));
var _formik = require("formik");
var _material = require("@mui/material");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const FormModel = _ref => {
  let {
    validationSchema,
    onSubmit: _onSubmit,
    isLoading,
    inputs,
    width,
    options,
    gridColumnsCount,
    submitButtonWidth,
    buttonLabel,
    CustomTitle,
    showButton,
    CustomSubmitButton
  } = _ref;
  const constructInitialValues = () => {
    let initialValues = {};
    for (let input of inputs) {
      if (input.multiple) {
        const valuesArray = Array.isArray(input.value) ? input.value : [];
        initialValues[input.name] = valuesArray.map(item => item.value);
      } else {
        initialValues[input.name] = input.value !== undefined ? input.value : '';
      }
    }
    return initialValues;
  };
  const getDefaultValidationSchema = () => {
    const schema = inputs === null || inputs === void 0 ? void 0 : inputs.reduce((schemaAcc, input) => {
      const key = input.name;
      if (input.multiple) {
        let validator = Yup.array().of(Yup.string()).nullable(true);
        if (input.isRequired) {
          validator = validator.required("This field is required").min(1, "At least one item must be selected");
        }
        schemaAcc[key] = validator;
        return schemaAcc;
      }
      if (input.isBoolean) {
        let validator = Yup.string().nullable(true);
        if (input.isRequired) {
          validator = validator.required("At least one choice must be selected");
        }
        schemaAcc[key] = validator;
        return schemaAcc;
      }
      if (input.type === "dates") {
        let validator = Yup.object().nullable(true);
        if (input.isRequired) {
          validator = validator.required("Dates must be provided");
        }
        schemaAcc[key] = validator;
        return schemaAcc;
      }
      let validator = Yup.string().nullable(true);
      if (input.isRequired) {
        validator = validator.required("This field is required");
      }
      if (key.toLowerCase().includes("email")) {
        validator = validator.email("Invalid email address");
      } else if (key.toLowerCase().includes("password")) {
        validator = validator.min(8, "Password must be at least 8 characters long").matches(/[a-zA-Z]/, "Password must contain at least one letter").matches(/[A-Z]/, "Password must contain at least one uppercase letter").matches(/[a-z]/, "Password must contain at least one lowercase letter").matches(/\d/, "Password must contain at least one number").matches(/[\W_]/, "Password must contain at least one special character");
      }
      schemaAcc[key] = validator;
      return schemaAcc;
    }, {});
    return Yup.object().shape(schema);
  };
  const getInputType = input => {
    if (Array.isArray(input.lookups)) {
      return input.multiple ? 'multipleAutocomplete' : 'select';
    } else if (input.isBoolean) {
      return 'boolean';
    } else if (input.type === 'dates') {
      return 'dates';
    } else {
      return 'text';
    }
  };
  const renderInput = (input, formik) => {
    switch (getInputType(input)) {
      case 'multipleAutocomplete':
        return /*#__PURE__*/_react.default.createElement(_AutoComplete.default, {
          formik: formik,
          input: input
        });
      case 'select':
        return /*#__PURE__*/_react.default.createElement(_Select.default, {
          formik: formik,
          input: input
        });
      case 'boolean':
        return /*#__PURE__*/_react.default.createElement(_Boolean.default, {
          formik: formik,
          input: input
        });
      case 'dates':
        return /*#__PURE__*/_react.default.createElement(_Dates.default, {
          formik: formik,
          input: input
        });
      case 'text':
      default:
        return /*#__PURE__*/_react.default.createElement(_TextField.default, {
          formik: formik,
          input: input
        });
    }
  };
  return /*#__PURE__*/_react.default.createElement(_formik.Formik, {
    initialValues: constructInitialValues(),
    onSubmit: (values, _ref2) => {
      let {
        resetForm
      } = _ref2;
      _onSubmit(values);
      resetForm();
    },
    validationSchema: validationSchema || getDefaultValidationSchema()
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
      gap: 3,
      marginTop: 3
    }
  }, inputs.map(input => renderInput(input, formik)), showButton && !CustomSubmitButton && /*#__PURE__*/_react.default.createElement(_material.Button, {
    type: "submit",
    variant: "contained",
    sx: {
      textTransform: "capitalize",
      width: submitButtonWidth,
      gridColumn: "span ".concat(gridColumnsCount)
    },
    size: "medium",
    disabled: isLoading,
    disableElevation: true
  }, isLoading ? /*#__PURE__*/_react.default.createElement(_material.CircularProgress, {
    color: "inherit",
    size: 20
  }) : buttonLabel), CustomSubmitButton && showButton && /*#__PURE__*/_react.default.createElement(CustomSubmitButton, null))));
};
FormModel.propTypes = {
  validationSchema: _propTypes.default.object,
  onSubmit: _propTypes.default.func.isRequired,
  isLoading: _propTypes.default.bool,
  inputs: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string.isRequired,
    label: _propTypes.default.string.isRequired,
    type: _propTypes.default.string,
    required: _propTypes.default.bool.isRequired,
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool]),
    lookups: _propTypes.default.arrayOf(_propTypes.default.shape({
      title: _propTypes.default.string.isRequired,
      value: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired, _propTypes.default.array.isRequired])
    })),
    multiselect: _propTypes.default.bool,
    isBoolean: _propTypes.default.bool,
    booleanOptions: _propTypes.default.arrayOf(_propTypes.default.shape({
      label: _propTypes.default.string.isRequired,
      value: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired, _propTypes.default.array.isRequired])
    })),
    disabled: _propTypes.default.bool
  })).isRequired,
  width: _propTypes.default.string,
  options: _propTypes.default.object,
  gridColumnsCount: _propTypes.default.number,
  submitButtonWidth: _propTypes.default.string,
  buttonLabel: _propTypes.default.string,
  CustomTitle: _propTypes.default.node
};
FormModel.defaultProps = {
  width: "100%",
  gridColumnsCount: 1,
  submitButtonWidth: "100%",
  buttonLabel: "Submit",
  isLoading: false,
  showButton: true
};
var _default = exports.default = FormModel;