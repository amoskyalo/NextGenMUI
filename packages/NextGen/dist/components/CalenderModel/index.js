"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _material = require("@mui/material");
var _AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs");
var _xDatePickers = require("@mui/x-date-pickers");
const _excluded = ["onChange", "value"];
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
const CalendarComponent = _ref => {
  let {
      onChange: _onChange,
      value
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
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
const CalenderModel = _ref2 => {
  let {
    onClose,
    onChange,
    onApplyDateChanges,
    resetDates,
    setDates
  } = _ref2;
  const [datesValues, setDatesValues] = (0, _react.useState)({
    sd: null,
    ed: null
  });
  const {
    sd,
    ed
  } = datesValues;
  const handleChangeDay = values => {
    if (sd && ed && (values === null || values === void 0 ? void 0 : values.$D) < (sd === null || sd === void 0 ? void 0 : sd.$D)) {
      setDatesValues(prev => _objectSpread(_objectSpread({}, prev), {}, {
        sd: values
      }));
    } else if (!sd) {
      setDatesValues(prev => _objectSpread(_objectSpread({}, prev), {}, {
        sd: values
      }));
      onChange('startDate', values);
    } else {
      if ((values === null || values === void 0 ? void 0 : values.$D) !== (sd === null || sd === void 0 ? void 0 : sd.$D) || (values === null || values === void 0 ? void 0 : values.$M) !== (sd === null || sd === void 0 ? void 0 : sd.$M)) {
        setDatesValues(prev => _objectSpread(_objectSpread({}, prev), {}, {
          ed: values
        }));
        onChange('endDate', values);
      }
    }
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
    function getX() {
      const p = daysWithinFirstCalendar.includes(day.$D);
      return !isSameMonth ? p : p && (day === null || day === void 0 ? void 0 : day.$M) === (sd === null || sd === void 0 ? void 0 : sd.$M);
    }
    const x = getX();
    const y = daysWithinSecondCalendar.includes(day.$D);
    return {
      f: isSameMonth ? x : !x,
      s: isSameMonth ? x : y
    };
  };
  const handleSelectRange = range => {
    const v = range.toLowerCase();
    const lastMonth = currentMonth === 0 ? 11 : currentMonth;
    const year = currentMonth === 0 ? currentYear - 1 : currentYear;
    let dateRange;
    switch (v) {
      case 'this week':
        dateRange = {
          ed: (0, _dayjs.default)(),
          sd: (0, _dayjs.default)().subtract(7, 'day')
        };
        break;
      case 'last 7 days':
        dateRange = {
          ed: (0, _dayjs.default)().subtract(7, 'day'),
          sd: (0, _dayjs.default)().subtract(14, 'day')
        };
        break;
      case 'current month':
        dateRange = {
          ed: (0, _dayjs.default)().date(currentDate),
          sd: (0, _dayjs.default)().date(1)
        };
        break;
      case 'last month':
        dateRange = {
          ed: (0, _dayjs.default)().year(year).month(lastMonth).date((0, _dayjs.default)(lastMonth).daysInMonth()),
          sd: (0, _dayjs.default)().year(year).month(lastMonth).date(1)
        };
        break;
      case 'reset':
        setDatesValues({
          sd: null,
          ed: null
        });
        resetDates();
        break;
    }
    if (v !== 'reset') {
      setDatesValues(dateRange);
      setDates({
        startDate: dateRange.sd,
        endDate: dateRange.ed
      });
    }
  };
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
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
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      display: 'flex',
      flexDirection: "column",
      rowGap: 2,
      mt: 3,
      pr: 4
    }
  }, ["This Week", "Last 7 days", "Current Month", "Last Month", "Reset"].map(val => /*#__PURE__*/_react.default.createElement(_material.Chip, {
    label: val,
    sx: {
      cursor: "pointer",
      maxWidth: "max-content"
    },
    onClick: () => handleSelectRange(val)
  }))), /*#__PURE__*/_react.default.createElement(_material.Divider, {
    orientation: "vertical",
    flexItem: true
  }), /*#__PURE__*/_react.default.createElement(CalendarComponent, {
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
          onDaySelect: values => handleChangeDay(values)
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
        const disabled = () => {
          const {
            $D,
            $M
          } = day;
          return $M === currentMonth && $D > currentDate;
        };
        const selected = handleSelection(day).s && !disabled();
        return /*#__PURE__*/_react.default.createElement(_xDatePickers.PickersDay, {
          day: day,
          disabled: disabled(),
          isFirstVisibleCell: isFirstVisibleCell,
          isLastVisibleCell: isLastVisibleCell,
          outsideCurrentMonth: outsideCurrentMonth,
          selected: day === sd || day === ed || selected,
          onDaySelect: values => handleChangeDay(values)
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
  }, "Apply dates")));
};
var _default = exports.default = CalenderModel;