"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.object.assign.js");
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _CalenderModel = _interopRequireDefault(require("../CalenderModel"));
var _styles = require("@mui/material/styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const StyledMenu = (0, _styles.styled)(props => /*#__PURE__*/_react.default.createElement(_material.Menu, _extends({
  elevation: 0,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "right"
  },
  transformOrigin: {
    vertical: "top",
    horgitizontal: "right"
  }
}, props)))(_ref => {
  let {
    theme
  } = _ref;
  return {
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.grey[300],
      boxShadow: "rgb(255 255 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
    }
  };
});
const GridCalender = _ref2 => {
  let {
    open,
    anchorEl,
    onClose,
    onChange,
    onApplyDateChanges,
    resetDates,
    setDates
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(StyledMenu, {
    anchorEl: anchorEl,
    open: open,
    onClose: onClose,
    id: "calender-range"
  }, /*#__PURE__*/_react.default.createElement(_CalenderModel.default, {
    onChange: onChange,
    onApplyDateChanges: onApplyDateChanges,
    resetDates: resetDates,
    setDates: setDates,
    onClose: onClose
  }));
};
var _default = exports.default = GridCalender;