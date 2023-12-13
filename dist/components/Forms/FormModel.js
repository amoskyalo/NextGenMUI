"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.array.reduce.js");
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var Yup = _interopRequireWildcard(require("yup"));
var _Visibility = _interopRequireDefault(require("@mui/icons-material/Visibility"));
var _VisibilityOff = _interopRequireDefault(require("@mui/icons-material/VisibilityOff"));
var _formik = require("formik");
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
    CustomTitle
  } = _ref;
  const [visiblePasswordFields, setVisiblePasswordFields] = (0, _react.useState)([]);
  const toggleVisibility = fieldName => {
    setVisiblePasswordFields(prev => prev.includes(fieldName) ? prev.filter(name => name !== fieldName) : [...prev, fieldName]);
  };
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
    const schema = inputs.reduce((schemaAcc, input) => {
      const key = input.name;
      let validator = Yup.string().required("This field is required");
      if (key.toLowerCase().includes("email")) {
        validator = validator.email("Invalid email address");
      } else if (key.toLowerCase().includes("password")) {
        validator = validator.min(8, "Password must be at least 8 characters long").matches(/[a-zA-Z]/, "Password must contain at least one letter").matches(/[A-Z]/, "Password must contain at least one uppercase letter").matches(/[a-z]/, "Password must contain at least one lowercase letter").matches(/\d/, "Password must contain at least one number").matches(/[\W_]/, "Password must contain at least one special character");
      } else if (Array.isArray(input.value)) {
        validator = Yup.array().of(Yup.string().required("This field is required")).min(1, "At least one value is required").required("This field is required");
      }
      schemaAcc[key] = validator;
      return schemaAcc;
    }, {});
    return Yup.object().shape(schema);
  };
  const renderInput = (input, formik) => {
    if (Array.isArray(input.lookups)) {
      return input.multiple ? /*#__PURE__*/_react.default.createElement(_material.FormControl, {
        sx: {
          width: "100%"
        },
        size: "small",
        key: input.label
      }, /*#__PURE__*/_react.default.createElement(_material.Autocomplete, {
        key: input.name,
        multiple: true,
        id: input.name,
        defaultValue: input.value,
        options: input.lookups,
        getOptionLabel: option => option.title,
        size: "small",
        onChange: (__, newValue) => {
          const newValues = newValue.map(item => item.value);
          formik.setFieldValue(input.name, newValues);
        },
        renderInput: params => /*#__PURE__*/_react.default.createElement(_material.TextField, _extends({}, params, {
          error: formik.touched[input.name] && Boolean(formik.errors[input.name]),
          helperText: formik.touched[input.name] && formik.errors[input.name],
          label: input.label,
          size: "small",
          fullWidth: true
        }))
      })) : /*#__PURE__*/_react.default.createElement(_material.FormControl, {
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
        error: formik.touched[input.name] && Boolean(formik.errors[input.name]),
        helperText: formik.touched[input.name] && formik.errors[input.name]
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
        key: lookup.title,
        value: lookup === null || lookup === void 0 ? void 0 : lookup.value
      }, lookup === null || lookup === void 0 ? void 0 : lookup.title))), formik.touched[input.name] && formik.errors[input.name] && /*#__PURE__*/_react.default.createElement(_material.Typography, {
        sx: {
          fontSize: 12,
          color: "red",
          mt: 1
        }
      }, formik.errors[input.name]));
    } else {
      return /*#__PURE__*/_react.default.createElement(_material.FormControl, {
        sx: {
          width: "100%"
        },
        size: "small",
        key: input.name
      }, /*#__PURE__*/_react.default.createElement(_material.InputLabel, {
        htmlFor: input.name
      }, input.label), /*#__PURE__*/_react.default.createElement(_material.OutlinedInput, _extends({
        id: input.name,
        fullWidth: true,
        label: input.label,
        name: input.name,
        error: formik.touched[input.name] && Boolean(formik.errors[input.name]),
        helperText: formik.touched[input.name] && formik.errors[input.name],
        type: input.type === "password" && visiblePasswordFields.includes(input.name) ? "text" : input.type,
        disabled: input === null || input === void 0 ? void 0 : input.disabled,
        autoFocus: !!input.value,
        variant: "outlined",
        size: "small"
      }, formik.getFieldProps(input.name), {
        endAdornment: input.type === "password" && /*#__PURE__*/_react.default.createElement(_material.InputAdornment, {
          position: "end"
        }, /*#__PURE__*/_react.default.createElement(_material.IconButton, {
          "aria-label": "toggle password visibility",
          onClick: () => toggleVisibility(input.name),
          edge: "end"
        }, visiblePasswordFields.includes(input.name) ? /*#__PURE__*/_react.default.createElement(_VisibilityOff.default, null) : /*#__PURE__*/_react.default.createElement(_Visibility.default, null)))
      })), formik.touched[input.name] && formik.errors[input.name] && /*#__PURE__*/_react.default.createElement(_material.Typography, {
        sx: {
          fontSize: 12,
          color: "red",
          mt: 1
        }
      }, formik.errors[input.name]));
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
  }, inputs.map(input => renderInput(input, formik)), /*#__PURE__*/_react.default.createElement(_material.Button, {
    type: "submit",
    variant: "contained",
    sx: {
      textTransform: "capitalize",
      width: submitButtonWidth,
      gridColumn: "span ".concat(gridColumnsCount)
    },
    size: "medium",
    disabled: isLoading
  }, isLoading ? /*#__PURE__*/_react.default.createElement(_material.CircularProgress, {
    color: "inherit",
    size: 20
  }) : buttonLabel))));
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
      name: _propTypes.default.string.isRequired,
      value: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired, _propTypes.default.array.isRequired])
    })),
    multiselect: _propTypes.default.bool,
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
  isLoading: false
};
var _default = exports.default = FormModel;