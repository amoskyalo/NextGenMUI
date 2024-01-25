"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Drawer = _interopRequireDefault(require("@mui/material/Drawer"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _Menu = _interopRequireDefault(require("@mui/icons-material/Menu"));
var _DrawerItemsModel = _interopRequireDefault(require("./DrawerItemsModel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const drawerWidth = 270;
const openedMixin = theme => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
});
const closedMixin = theme => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: "calc(".concat(theme.spacing(7), " + 1px)"),
  [theme.breakpoints.up('sm')]: {
    width: "calc(".concat(theme.spacing(8), " + 1px)")
  }
});
const DrawerHeader = (0, _styles.styled)('div')(_ref => {
  let {
    theme
  } = _ref;
  return _objectSpread({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }, theme.mixins.toolbar);
});
const Drawer = (0, _styles.styled)(_Drawer.default, {
  shouldForwardProp: prop => prop !== 'open'
})(_ref2 => {
  let {
    theme,
    open,
    backgroundColor,
    textColor
  } = _ref2;
  return _objectSpread(_objectSpread({
    width: drawerWidth
  }, open && _objectSpread(_objectSpread({}, openedMixin(theme)), {}, {
    '& .MuiDrawer-paper': _objectSpread(_objectSpread({}, openedMixin(theme)), {}, {
      backgroundColor,
      color: textColor,
      padding: "0 16px",
      border: "none"
    })
  })), !open && _objectSpread(_objectSpread({}, closedMixin(theme)), {}, {
    '& .MuiDrawer-paper': _objectSpread(_objectSpread({}, closedMixin(theme)), {}, {
      backgroundColor,
      color: textColor,
      padding: "0 16px",
      border: "none"
    })
  }));
});
const SideBarModel = _ref3 => {
  let {
    listConatinerClassName,
    NavHeader,
    openHeader,
    activeTabBackgroundColor,
    backgroundColor,
    textColor,
    navigateItems,
    options,
    NavFooter
  } = _ref3;
  const [open, setOpen] = (0, _react.useState)(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return /*#__PURE__*/_react.default.createElement(Drawer, {
    variant: "permanent",
    open: openHeader || open,
    backgroundColor: backgroundColor,
    textColor: textColor
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    height: "100vh",
    overflowY: "hidden",
    display: "flex",
    flexDirection: "column"
  }, /*#__PURE__*/_react.default.createElement(DrawerHeader, null, NavHeader ? /*#__PURE__*/_react.default.createElement(NavHeader, null) : /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: open ? handleDrawerClose : handleDrawerOpen
  }, /*#__PURE__*/_react.default.createElement(_Menu.default, {
    sx: {
      color: textColor
    }
  }))), /*#__PURE__*/_react.default.createElement(_material.Box, {
    className: listConatinerClassName,
    flex: 1,
    overflow: "auto",
    overflowX: "hidden",
    paddingX: 1
  }, /*#__PURE__*/_react.default.createElement(_DrawerItemsModel.default, {
    listItems: navigateItems,
    activeTabBackgroundColor: activeTabBackgroundColor,
    textColor: textColor,
    open: open || openHeader,
    options: options
  })), /*#__PURE__*/_react.default.createElement(_material.Divider, {
    color: "gray"
  }), NavFooter && open && /*#__PURE__*/_react.default.createElement(NavFooter, null)));
};
SideBarModel.propTypes = {
  NavHeader: _propTypes.default.node,
  openHeader: _propTypes.default.bool,
  activeTabBackgroundColor: _propTypes.default.string.isRequired,
  backgroundColor: _propTypes.default.string.isRequired,
  textColor: _propTypes.default.string.isRequired,
  listConatinerClassName: _propTypes.default.string,
  navigateItems: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string.isRequired,
    icon: _propTypes.default.node.isRequired,
    renderList: _propTypes.default.func
  }))
};
var _default = exports.default = SideBarModel;