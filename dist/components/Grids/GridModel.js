"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _xDataGrid = require("@mui/x-data-grid");
var _material = require("@mui/material");
var _Utils = require("../../Utils/Utils");
var _AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs");
var _LocalizationProvider = require("@mui/x-date-pickers/LocalizationProvider");
var _DatePicker = require("@mui/x-date-pickers/DatePicker");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _Search = _interopRequireDefault(require("@mui/icons-material/Search"));
var _Add = _interopRequireDefault(require("@mui/icons-material/Add"));
var _Print = _interopRequireDefault(require("@mui/icons-material/Print"));
var _ExitToApp = _interopRequireDefault(require("@mui/icons-material/ExitToApp"));
var _empty = _interopRequireDefault(require("../../Assets/empty.gif"));
var loading = _interopRequireWildcard(require("../../Assets/loading.json"));
var _reactLottie = _interopRequireDefault(require("react-lottie"));
const _excluded = ["columns", "rows", "loading", "pageSizeOptions", "pagination", "paginationMode", "FilterComponent", "GridButtonsComponent", "onAdd", "onChangeStartDate", "onChangeEndDate", "disableAdd", "disablePrint", "disableExport", "showGridHeader", "showStartDateFilter", "showEndDateFilter", "showSearchBar", "defaultStartDate", "defaultEndDate"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
const GridModel = _ref => {
  let {
      columns,
      rows,
      loading,
      pageSizeOptions,
      pagination,
      paginationMode,
      FilterComponent,
      GridButtonsComponent,
      onAdd,
      onChangeStartDate,
      onChangeEndDate,
      disableAdd,
      disablePrint,
      disableExport,
      showGridHeader,
      showStartDateFilter,
      showEndDateFilter,
      showSearchBar,
      defaultStartDate,
      defaultEndDate
    } = _ref,
    otherGridProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_material.Box, null, showGridHeader && /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 1
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    columnGap: 3
  }, !disablePrint && /*#__PURE__*/_react.default.createElement(_material.Button, {
    sx: {
      textTransform: "capitalize"
    },
    startIcon: /*#__PURE__*/_react.default.createElement(_Print.default, null),
    variant: "contained",
    size: "small",
    onClick: _Utils.handlePrint
  }, "Print"), !disableExport && /*#__PURE__*/_react.default.createElement(_material.Button, {
    sx: {
      textTransform: "capitalize"
    },
    startIcon: /*#__PURE__*/_react.default.createElement(_ExitToApp.default, null),
    variant: "contained",
    size: "small",
    onClick: () => (0, _Utils.handleExportToExcel)(columns, rows)
  }, "Export to Excel")), /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    columnGap: 3
  }, showSearchBar && /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      border: "1px solid gray",
      borderRadius: 1,
      paddingX: 1,
      minWidth: 300
    }
  }, /*#__PURE__*/_react.default.createElement(_material.TextField, {
    placeholder: "Search",
    fullWidth: true,
    sx: {
      "& .MuiInputBase-input": {
        height: 36,
        padding: 0,
        flex: 1
      },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: "transparent"
        },
        "& fieldset": {
          borderColor: "transparent"
        },
        "&:hover fieldset": {
          borderColor: "transparent"
        }
      },
      "& .MuiOutlinedInput-input": {
        "&:focus": {
          outline: "none"
        }
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_Search.default, {
    sx: {
      color: "gray"
    }
  })), /*#__PURE__*/_react.default.createElement(_LocalizationProvider.LocalizationProvider, {
    dateAdapter: _AdapterDayjs.AdapterDayjs
  }, showStartDateFilter && /*#__PURE__*/_react.default.createElement(_DatePicker.DatePicker, {
    label: "From",
    value: (0, _dayjs.default)(defaultStartDate),
    onChange: onChangeStartDate,
    sx: {
      "& .MuiOutlinedInput-root": {
        height: 38,
        width: 175
      },
      "& .MuiFormLabel-root": {
        top: -7
      }
    }
  }), showEndDateFilter && /*#__PURE__*/_react.default.createElement(_DatePicker.DatePicker, {
    label: "To",
    value: (0, _dayjs.default)(defaultEndDate),
    onChange: onChangeEndDate,
    sx: {
      "& .MuiOutlinedInput-root": {
        height: 38,
        width: 175
      },
      "& .MuiFormLabel-root": {
        top: -7
      }
    }
  })), FilterComponent && /*#__PURE__*/_react.default.createElement(FilterComponent, null), !disableAdd && /*#__PURE__*/_react.default.createElement(_material.Button, {
    startIcon: /*#__PURE__*/_react.default.createElement(_Add.default, null),
    onClick: onAdd,
    variant: "contained",
    size: "small",
    sx: {
      textTransform: "capitalize"
    }
  }, "New"))), GridButtonsComponent && /*#__PURE__*/_react.default.createElement(GridButtonsComponent, null), rows.length > 0 && !loading && /*#__PURE__*/_react.default.createElement("div", {
    id: "printTable"
  }, /*#__PURE__*/_react.default.createElement(_xDataGrid.DataGrid, _extends({
    rows: rows,
    columns: columns,
    loading: loading,
    pageSizeOptions: pageSizeOptions,
    paginationMode: paginationMode,
    pagination: pagination
  }, otherGridProps))), loading && /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_reactLottie.default, {
    options: defaultOptions,
    height: 300,
    width: 300
  })), !loading && rows.length === 0 && /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      paddingY: 4
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _empty.default,
    className: "h-48"
  }), /*#__PURE__*/_react.default.createElement(_material.Typography, null, "Looks like you dont have any data"), !disableAdd && /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: onAdd,
    variant: "contained",
    size: "small",
    sx: {
      textTransform: 'capitalize',
      width: 300,
      mt: 1
    },
    startIcon: /*#__PURE__*/_react.default.createElement(_Add.default, null)
  }, "New")));
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
  onChangeStartDate: _propTypes.default.func,
  onChangeEndDate: _propTypes.default.func,
  showGridHeader: _propTypes.default.bool,
  showSearchBar: _propTypes.default.bool,
  disableAdd: _propTypes.default.bool,
  disablePrint: _propTypes.default.bool,
  disableExport: _propTypes.default.bool,
  defaultStartDate: _propTypes.default.string,
  defaultEndDate: _propTypes.default.string
};
GridModel.defaultProps = {
  disableAdd: false,
  disableExport: false,
  disablePrint: false,
  showGridHeader: true,
  showStartDateFilter: true,
  showEndDateFilter: true,
  showSearchBar: true,
  defaultStartDate: _Utils.fromDate,
  defaultEndDate: _Utils.toDate
};
var _default = exports.default = GridModel;