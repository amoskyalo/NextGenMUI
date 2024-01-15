"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.object.assign.js");
var _react = _interopRequireWildcard(require("react"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _Replay = _interopRequireDefault(require("@mui/icons-material/Replay"));
var _material = require("@mui/material");
var _AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs");
var _xDatePickers = require("@mui/x-date-pickers");
var _styles = require("@mui/material/styles");
const _excluded = ["onChange", "value"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
    onChange: value => _onChange(value),
    views: ['month', 'day'],
    onViewChange: () => null
  }, props)));
};
const dates = new Date();
const currentDate = dates.getDate();
const currentMonth = dates.getMonth();
const currentYear = dates.getFullYear();
function d() {
  const padToTwoDigits = num => num.toString().padStart(2, "0");
  const day = padToTwoDigits(currentDate);
  const startMonth = padToTwoDigits(currentMonth === 0 ? 12 : currentMonth);
  const endMonth = padToTwoDigits(currentMonth + 1);
  const startYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  const endYear = currentYear;
  const startValues = "".concat(startYear, "-").concat(startMonth, "-").concat(day);
  const endValues = "".concat(endYear, "-").concat(endMonth, "-").concat(day);
  return {
    startValues,
    endValues
  };
}
const CalenderModel = _ref3 => {
  let {
    open,
    anchorEl,
    onClose,
    onChange,
    onApplyDateChanges
  } = _ref3;
  const [datesValues, setDatesValues] = (0, _react.useState)({
    sd: null,
    ed: null
  });
  const {
    sd,
    ed
  } = datesValues;
  const handleChangeDay = (values, type) => {
    if (!sd) {
      setDatesValues(prev => _objectSpread(_objectSpread({}, prev), {}, {
        sd: values
      }));
    } else {
      if ((values === null || values === void 0 ? void 0 : values.$D) !== (sd === null || sd === void 0 ? void 0 : sd.$D)) {
        setDatesValues(prev => _objectSpread(_objectSpread({}, prev), {}, {
          ed: values
        }));
      }
    }
    onChange(type, values);
  };
  const handleSelection = day => {
    if (!ed || !sd) return {
      f: null,
      s: null
    };
    const startDay = sd.$D;
    const endDay = ed.$D;
    const isSameMonth = sd.$M === ed.$M;
    const createDayRange = (start, end) => Array.from({
      length: end - start + 1
    }, (_, i) => start + i);
    const daysWithinFirstCalendar = isSameMonth ? createDayRange(startDay, endDay) : createDayRange(1, startDay - 1);
    const daysWithinSecondCalendar = isSameMonth ? [] : createDayRange(1, endDay);
    const isInFirstCalendar = daysWithinFirstCalendar.includes(day.$D);
    const isInSecondCalendar = daysWithinSecondCalendar.includes(day.$D);
    return {
      f: isSameMonth ? isInFirstCalendar : !isInFirstCalendar,
      s: isInSecondCalendar
    };
  };
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
    display: "flex",
    mb: 1
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      display: "flex"
    }
  }, /*#__PURE__*/_react.default.createElement(CalendarComponent, {
    referenceDate: (0, _dayjs.default)(d().startValues),
    slots: {
      nextIconButton: () => null,
      switchViewIcon: () => null,
      day: params => {
        const {
          day,
          isFirstVisibleCell,
          isLastVisibleCell,
          outsideCurrentMonth
        } = params;
        const selected = handleSelection(day).f;
        return /*#__PURE__*/_react.default.createElement(_xDatePickers.PickersDay, {
          day: day,
          isFirstVisibleCell: isFirstVisibleCell,
          isLastVisibleCell: isLastVisibleCell,
          outsideCurrentMonth: outsideCurrentMonth,
          selected: day === sd || day === ed || selected,
          onDaySelect: values => handleChangeDay(values, "startDate")
        });
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_material.Divider, {
    orientation: "vertical",
    flexItem: true
  }), /*#__PURE__*/_react.default.createElement(CalendarComponent, {
    referenceDate: (0, _dayjs.default)(d().endValues),
    slots: {
      leftArrowIcon: () => null,
      switchViewIcon: () => null,
      day: params => {
        const {
          day,
          isFirstVisibleCell,
          isLastVisibleCell,
          outsideCurrentMonth
        } = params;
        const selected = handleSelection(day).s;
        const disabled = () => {
          const {
            $D,
            $M
          } = day;
          return $M === currentMonth && $D > currentDate;
        };
        return /*#__PURE__*/_react.default.createElement(_xDatePickers.PickersDay, {
          day: day,
          disabled: disabled(),
          isFirstVisibleCell: isFirstVisibleCell,
          isLastVisibleCell: isLastVisibleCell,
          outsideCurrentMonth: outsideCurrentMonth,
          selected: day === sd || day === ed || selected,
          onDaySelect: values => handleChangeDay(values, "endDate")
        });
      }
    }
  }))), /*#__PURE__*/_react.default.createElement(_material.Divider, null), /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      display: "flex",
      justifyContent: "right",
      py: 2.5,
      gap: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Tooltip, {
    title: "Reset dates"
  }, /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    onClick: () => setDatesValues({
      sd: null,
      ed: null
    })
  }, /*#__PURE__*/_react.default.createElement(_Replay.default, null))), /*#__PURE__*/_react.default.createElement(_material.Button, {
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