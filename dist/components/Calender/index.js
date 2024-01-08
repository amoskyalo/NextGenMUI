"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.object.assign.js");
var _react = _interopRequireDefault(require("react"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _material = require("@mui/material");
var _AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs");
var _xDatePickers = require("@mui/x-date-pickers");
var _styles = require("@mui/material/styles");
const _excluded = ["onChange", "value"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
const CalendarComponent = _ref2 => {
  let {
      onChange: _onChange,
      value
    } = _ref2,
    props = _objectWithoutProperties(_ref2, _excluded);
  return /*#__PURE__*/_react.default.createElement(_xDatePickers.LocalizationProvider, {
    dateAdapter: _AdapterDayjs.AdapterDayjs
  }, /*#__PURE__*/_react.default.createElement(_xDatePickers.DateCalendar, _extends({
    value: (0, _dayjs.default)(value),
    onChange: value => _onChange(value)
  }, props)));
};
const CalenderModel = _ref3 => {
  let {
    open,
    anchorEl,
    onClose,
    onChange: _onChange2,
    onApplyDateChanges,
    defaultDates
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement(StyledMenu, {
    anchorEl: anchorEl,
    open: open,
    onClose: onClose,
    id: "calender-range"
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      backgroundColor: "white",
      pt: 2,
      px: 3,
      borderRadius: 3,
      width: "max-content"
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex"
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      display: "flex"
    }
  }, /*#__PURE__*/_react.default.createElement(CalendarComponent, {
    value: defaultDates.start,
    onChange: value => _onChange2("startDate", value)
  }), /*#__PURE__*/_react.default.createElement(CalendarComponent, {
    value: defaultDates.end,
    onChange: value => _onChange2("endDate", value),
    disableFuture: true
  }))), /*#__PURE__*/_react.default.createElement(_material.Divider, null), /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      display: "flex",
      justifyContent: "right",
      py: 2.5,
      gap: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Button, {
    size: "small",
    sx: {
      textTransform: "capitalize"
    },
    variant: "outlined",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_material.Button, {
    size: "small",
    sx: {
      textTransform: "capitalize"
    },
    variant: "contained",
    onClick: () => {
      onApplyDateChanges();
      onClose();
    }
  }, "Apply dates"))));
};
var _default = exports.default = CalenderModel;