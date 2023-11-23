"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _reactRouterDom = require("react-router-dom");
var _ExpandMore = _interopRequireDefault(require("@mui/icons-material/ExpandMore"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const ListItemsModel = _ref => {
  let {
    listItems,
    expanded,
    open,
    setExpanded,
    handleClick,
    textColor,
    activeTabBackgroundColor
  } = _ref;
  const location = (0, _reactRouterDom.useLocation)();
  const navigate = (0, _reactRouterDom.useNavigate)();
  const path = location.pathname;
  function getActiveTab(tab) {
    let active = false;
    if (path === tab.path && !tab.subLinks) {
      // for tabs without sublinks
      active = true;
    } else if (tab.subLinks) {
      // for tabs with sublinks
      const sublinkWithCurrentPath = tab.subLinks.find(link => link.path === path);
      if (sublinkWithCurrentPath) {
        active = true;
      }
    }
    return active;
  }
  function getActiveSubLink(tab) {
    let active = false;
    const sublinkWithCurrentPath = tab.subLinks.find(link => link.path === path);
    if (sublinkWithCurrentPath) {
      active = true;
    }
    return active;
  }
  return /*#__PURE__*/_react.default.createElement(_material.List, null, listItems.map(item => item.renderList && item.renderList(_objectSpread(_objectSpread({}, item), {}, {
    open,
    isActiveTab: getActiveTab(item)
  })) ? item.renderList(_objectSpread(_objectSpread({}, item), {}, {
    open,
    isActiveTab: getActiveTab(item)
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
    key: item === null || item === void 0 ? void 0 : item.name
  }, /*#__PURE__*/_react.default.createElement(_material.ListItem, {
    disablePadding: true,
    onClick: () => handleClick(item),
    sx: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: getActiveTab(item) && activeTabBackgroundColor,
      borderRadius: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemButton, {
    sx: {
      justifyContent: open ? 'initial' : 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemIcon, {
    sx: {
      minWidth: 0,
      mr: open ? 2 : 'auto',
      ml: open ? 0 : 0.5
    }
  }, /*#__PURE__*/_react.default.createElement(item.icon, {
    sx: {
      color: textColor
    }
  })), /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
    primary: item.name,
    sx: {
      opacity: open ? 1 : 0
    }
  }), item.subLinks && open && /*#__PURE__*/_react.default.createElement(_ExpandMore.default, {
    sx: {
      color: textColor
    },
    onClick: () => setExpanded(item.name)
  }))), expanded === item.name && item.subLinks && open && /*#__PURE__*/_react.default.createElement(_material.Fade, {
    in: Boolean(expanded),
    timeout: 700
  }, /*#__PURE__*/_react.default.createElement(_material.List, {
    sx: {
      ml: 5,
      py: 0
    }
  }, item.subLinks.map(link => link.renderList && link.renderList(_objectSpread(_objectSpread({}, link), {}, {
    open,
    parentTabActive: getActiveTab(item),
    isActive: getActiveSubLink(item)
  })) ? link.renderList(_objectSpread(_objectSpread({}, link), {}, {
    open,
    parentTabActive: getActiveTab(item),
    isActive: getActiveSubLink(item)
  })) : /*#__PURE__*/_react.default.createElement(_material.ListItem, {
    disablePadding: true,
    key: link.name,
    onClick: () => navigate(link.path)
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemButton, {
    sx: {
      paddingY: 0.5
    }
  }, link.icon && /*#__PURE__*/_react.default.createElement(_material.ListItemIcon, {
    sx: {
      minWidth: 0,
      mr: 1.5
    }
  }, /*#__PURE__*/_react.default.createElement(link.icon, {
    sx: {
      color: textColor,
      fontSize: 18
    }
  })), /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
    primary: link.name,
    sx: {
      "& .MuiListItemText-primary": {
        fontSize: 14
      }
    }
  })))))))));
};
var _default = exports.default = ListItemsModel;