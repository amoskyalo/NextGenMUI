"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _FormModel = _interopRequireDefault(require("./FormModel"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const StepperFormModel = _ref => {
  var _steps$activeStep;
  let {
    steps,
    onFieldChange,
    isLoading,
    onSubmit,
    width,
    buttonLabel,
    submitButtonWidth,
    gridColumnsCount,
    options
  } = _ref;
  const [activeStep, setActiveStep] = (0, _react.useState)(0);
  const totalSteps = () => {
    return steps.length;
  };
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  const handleNext = () => {
    const newActiveStep = activeStep + 1;
    setActiveStep(newActiveStep);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: _objectSpread({
      width
    }, options === null || options === void 0 ? void 0 : options.stepper)
  }, /*#__PURE__*/_react.default.createElement(_material.Stepper, {
    sx: {
      mb: 4
    },
    activeStep: activeStep,
    alternativeLabel: true
  }, steps.map(label => /*#__PURE__*/_react.default.createElement(_material.Step, {
    key: label.label
  }, /*#__PURE__*/_react.default.createElement(_material.StepLabel, null, label.label)))), /*#__PURE__*/_react.default.createElement(_FormModel.default, {
    onFieldChange: onFieldChange,
    inputs: (_steps$activeStep = steps[activeStep]) === null || _steps$activeStep === void 0 ? void 0 : _steps$activeStep.inputs,
    buttonLabel: !isLastStep() ? "Proceed" : buttonLabel,
    isLoading: isLoading,
    onSubmit: !isLastStep() ? handleNext : onSubmit,
    submitButtonWidth: submitButtonWidth,
    gridColumnsCount: gridColumnsCount,
    options: options
  }), /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      display: 'flex',
      flexDirection: 'row',
      pt: 2
    }
  }, activeStep !== 0 && /*#__PURE__*/_react.default.createElement(_material.Button, {
    color: "inherit",
    onClick: handleBack,
    sx: {
      mr: 1
    }
  }, "Back"), /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      flex: '1 1 auto'
    }
  }), !isLastStep() && /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: handleNext,
    sx: {
      mr: 1
    }
  }, "Next")));
};
StepperFormModel.propTypes = {
  steps: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string,
    inputs: _propTypes.default.arrayOf(_propTypes.default.shape({
      name: _propTypes.default.string.isRequired,
      type: _propTypes.default.string,
      label: _propTypes.default.string.isRequired,
      value: _propTypes.default.any.isRequired,
      required: _propTypes.default.bool
    })).isRequired
  })),
  onFieldChange: _propTypes.default.func.isRequired,
  isLoading: _propTypes.default.bool,
  onSubmit: _propTypes.default.func.isRequired,
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  gridColumnsCount: _propTypes.default.number,
  submitButtonWidth: _propTypes.default.number,
  buttonLabel: _propTypes.default.string,
  options: _propTypes.default.object
};
var _default = exports.default = StepperFormModel;