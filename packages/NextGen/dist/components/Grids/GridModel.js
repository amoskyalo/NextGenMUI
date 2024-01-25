"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _CalendarMonth = _interopRequireDefault(require("@mui/icons-material/CalendarMonth"));
var _Print = _interopRequireDefault(require("@mui/icons-material/Print"));
var _ExitToApp = _interopRequireDefault(require("@mui/icons-material/ExitToApp"));
var _Add = _interopRequireDefault(require("@mui/icons-material/Add"));
var _reactLottie = _interopRequireDefault(require("react-lottie"));
var _empty = _interopRequireDefault(require("../../Assets/empty.gif"));
var _loading = _interopRequireDefault(require("../../Assets/loading.json"));
var _GridCalender = _interopRequireDefault(require("../GridCalender/GridCalender"));
var _Utils = require("../../Utils/Utils");
var _material = require("@mui/material");
var _xDataGrid = require("@mui/x-data-grid");
const _excluded = ["columns", "rows", "loading", "FilterComponent", "GridButtonsComponent", "onAdd", "disableAdd", "disableDates", "disablePrint", "disableExport", "showGridHeader", "onPrint", "onDateChange", "onApplyDateChanges"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const buttonStyle = {
  textTransform: 'capitalize'
};
const date = new Date();
const LoadingIndicator = _ref => {
  let {
    options
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_reactLottie.default, {
    options: options,
    height: 300,
    width: 300
  }));
};
const NoDataIndicator = _ref2 => {
  let {
    onAdd,
    disableAdd
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      py: 4
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _empty.default,
    alt: "No data",
    className: "h-48"
  }), /*#__PURE__*/_react.default.createElement(_material.Typography, null, "Looks like you don't have any data"), !disableAdd && /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: onAdd,
    variant: "contained",
    sx: _objectSpread(_objectSpread({}, buttonStyle), {}, {
      width: 300,
      mt: 1
    }),
    startIcon: /*#__PURE__*/_react.default.createElement(_Add.default, null)
  }, "New"));
};
const d = {
  startDate: _objectSpread(_objectSpread({}, _Utils.dateObject), {}, {
    '$M': date.getMonth() === 0 ? 11 : date.getMonth() - 1
  }),
  endDate: _objectSpread(_objectSpread({}, _Utils.dateObject), {}, {
    '$M': date.getMonth()
  })
};
const GridModel = _ref3 => {
  let {
      columns,
      rows,
      loading,
      FilterComponent,
      GridButtonsComponent,
      onAdd,
      disableAdd,
      disableDates,
      disablePrint,
      disableExport,
      showGridHeader,
      onPrint,
      onDateChange,
      onApplyDateChanges: _onApplyDateChanges
    } = _ref3,
    gridProps = _objectWithoutProperties(_ref3, _excluded);
  const [dates, setDates] = (0, _react.useState)(d);
  const [anchorEl, setAnchorEl] = (0, _react.useState)(null);
  const open = Boolean(anchorEl);
  const handleChangeDates = (type, value) => {
    setDates(_objectSpread(_objectSpread({}, dates), {}, {
      [type]: value
    }));
  };
  const handleResetDates = () => setDates(d);
  (0, _react.useEffect)(() => {
    if (onDateChange) {
      onDateChange(dates);
    }
  }, [dates]);
  const {
    startDate: {
      $D: startDay,
      $M: startMonth
    },
    endDate: {
      $D: endDay,
      $M: endMonth
    }
  } = dates;
  const defaultDates = {
    start: "".concat(date.getFullYear(), "-").concat((startMonth + 1).toString().padStart(2, "0"), "-").concat(startDay.toString().padStart(2, "0")),
    end: "".concat(date.getFullYear(), "-").concat((endMonth + 1).toString().padStart(2, "0"), "-").concat(endDay.toString().padStart(2, "0"))
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: _loading.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return /*#__PURE__*/_react.default.createElement(_material.Box, null, showGridHeader && /*#__PURE__*/_react.default.createElement(_material.Box, null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    justifyContent: "space-between",
    mb: 1
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    gap: 3
  }, !disablePrint && /*#__PURE__*/_react.default.createElement(_material.Button, {
    sx: buttonStyle,
    startIcon: /*#__PURE__*/_react.default.createElement(_Print.default, null),
    variant: "outlined",
    onClick: onPrint
  }, "Print"), !disableExport && /*#__PURE__*/_react.default.createElement(_material.Button, {
    sx: buttonStyle,
    startIcon: /*#__PURE__*/_react.default.createElement(_ExitToApp.default, null),
    variant: "outlined",
    onClick: () => (0, _Utils.handleExportToExcel)(columns, rows)
  }, "Export")), /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    gap: 3
  }), /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    gap: 3
  }, !disableDates && /*#__PURE__*/_react.default.createElement(_material.Button, {
    startIcon: /*#__PURE__*/_react.default.createElement(_CalendarMonth.default, null),
    variant: "contained",
    onClick: event => setAnchorEl(event.currentTarget),
    sx: buttonStyle
  }, _Utils.monthsOfTheYear[startMonth], " ", startDay.toString().padStart(2, "0"), " -  ", _Utils.monthsOfTheYear[endMonth], " ", endDay.toString().padStart(2, "0")), /*#__PURE__*/_react.default.createElement(_GridCalender.default, {
    defaultDates: defaultDates,
    onChange: handleChangeDates,
    onApplyDateChanges: () => _onApplyDateChanges(dates),
    anchorEl: anchorEl,
    open: open,
    onClose: () => setAnchorEl(null),
    resetDates: handleResetDates,
    setDates: setDates
  }), FilterComponent && /*#__PURE__*/_react.default.createElement(FilterComponent, null), !disableAdd && /*#__PURE__*/_react.default.createElement(_material.Button, {
    startIcon: /*#__PURE__*/_react.default.createElement(_Add.default, null),
    onClick: onAdd,
    variant: "contained",
    sx: buttonStyle
  }, "New")))), GridButtonsComponent && /*#__PURE__*/_react.default.createElement(GridButtonsComponent, null), rows.length > 0 && !loading ? /*#__PURE__*/_react.default.createElement("div", {
    id: "printTable"
  }, /*#__PURE__*/_react.default.createElement(_xDataGrid.DataGrid, _extends({
    rows: rows,
    columns: columns,
    loading: loading
  }, gridProps))) : loading ? /*#__PURE__*/_react.default.createElement(LoadingIndicator, {
    options: defaultOptions
  }) : /*#__PURE__*/_react.default.createElement(NoDataIndicator, {
    onAdd: onAdd,
    disableAdd: disableAdd
  }));
};
GridModel.propTypes = {
  columns: _propTypes.default.array.isRequired,
  rows: _propTypes.default.array.isRequired,
  loading: _propTypes.default.bool,
  pageSizeOptions: _propTypes.default.arrayOf(_propTypes.default.number),
  paginationMode: _propTypes.default.oneOf(["server", "client"]),
  FilterComponent: _propTypes.default.node,
  GridButtonsComponent: _propTypes.default.node,
  onAdd: _propTypes.default.func,
  disableAdd: _propTypes.default.bool,
  disablePrint: _propTypes.default.bool,
  disableExport: _propTypes.default.bool,
  showGridHeader: _propTypes.default.bool
};
GridModel.defaultProps = {
  disableAdd: false,
  disableExport: false,
  disablePrint: false,
  disableDates: false,
  showGridHeader: true
};
var _default = exports.default = GridModel;