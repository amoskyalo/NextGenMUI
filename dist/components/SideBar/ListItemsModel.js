"use strict";

require("core-js/modules/es.symbol.description.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
var _react = _interopRequireDefault(require("react"));
var _ExpandMore = _interopRequireDefault(require("@mui/icons-material/ExpandMore"));
var _material = require("@mui/material");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const ListItemsModel = _ref => {
  let {
    listItems,
    expanded,
    open,
    setExpanded,
    handleClick,
    textColor,
    activeTabBackgroundColor,
    options
  } = _ref;
  const location = (0, _reactRouterDom.useLocation)();
  const navigate = (0, _reactRouterDom.useNavigate)();
  const path = location.pathname.replace("%20", "-");
  const isActiveTab = tab => {
    var _tab$path;
    if (tab.subLinks) {
      return tab.subLinks.some(link => {
        var _link$path;
        return ((_link$path = link.path) === null || _link$path === void 0 ? void 0 : _link$path.replace(" ", "-")) === path;
      });
    }
    return ((_tab$path = tab.path) === null || _tab$path === void 0 ? void 0 : _tab$path.replace(" ", "-")) === path;
  };
  const getStyle = (styleFunction, item) => typeof styleFunction === 'function' ? styleFunction(_objectSpread(_objectSpread({}, item), {}, {
    open,
    isActiveTab: isActiveTab(item)
  })) : styleFunction;
  const renderListItem = item => /*#__PURE__*/_react.default.createElement(_material.ListItem, {
    disablePadding: true,
    onClick: () => handleClick(item),
    sx: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isActiveTab(item) && activeTabBackgroundColor,
      borderRadius: 1,
      paddingY: 0
    }
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemButton, {
    sx: _objectSpread({
      justifyContent: open ? 'initial' : 'center'
    }, getStyle(options === null || options === void 0 ? void 0 : options.listItemButton, item))
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemIcon, {
    sx: {
      minWidth: 0,
      mr: open ? 2 : 'auto',
      ml: open ? 0 : 0.5
    }
  }, /*#__PURE__*/_react.default.createElement(item.icon, {
    sx: _objectSpread(_objectSpread({}, getStyle(options === null || options === void 0 ? void 0 : options.listIcon, item)), {}, {
      color: options !== null && options !== void 0 && options.getColor ? options.getColor(_objectSpread(_objectSpread({}, item), {}, {
        open,
        isActiveTab: isActiveTab(item)
      })) : textColor
    })
  })), /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
    primary: item.name,
    sx: _objectSpread({
      opacity: open ? 1 : 0,
      color: options !== null && options !== void 0 && options.getColor ? options.getColor(_objectSpread(_objectSpread({}, item), {}, {
        open,
        isActiveTab: isActiveTab(item)
      })) : textColor
    }, getStyle(options === null || options === void 0 ? void 0 : options.listItemText, item))
  }), item.subLinks && open && /*#__PURE__*/_react.default.createElement(_ExpandMore.default, {
    sx: {
      color: options !== null && options !== void 0 && options.getColor ? options.getColor(_objectSpread(_objectSpread({}, item), {}, {
        open,
        isActiveTab: isActiveTab(item)
      })) : textColor
    },
    onClick: () => setExpanded(item.name)
  })));
  const renderList = (item, additionalProps) => {
    if (item.renderList) {
      const renderedComponent = item.renderList(_objectSpread(_objectSpread({}, item), additionalProps));
      if ( /*#__PURE__*/_react.default.isValidElement(renderedComponent)) {
        return renderedComponent;
      }
    }
    return null;
  };
  return /*#__PURE__*/_react.default.createElement(_material.List, {
    sx: {
      rowGap: 1,
      display: "flex",
      flexDirection: "column"
    }
  }, listItems.map(item => renderList(item, {
    open,
    isActiveTab: isActiveTab(item)
  }) || /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
    key: item === null || item === void 0 ? void 0 : item.name
  }, renderListItem(item), expanded === item.name && item.subLinks && open && /*#__PURE__*/_react.default.createElement(_material.Fade, {
    in: Boolean(expanded),
    timeout: 700
  }, /*#__PURE__*/_react.default.createElement(_material.List, {
    sx: {
      ml: 5,
      py: 0
    }
  }, item.subLinks.map(link => renderList(link, {
    open,
    parentTabActive: isActiveTab(item),
    isActive: isActiveTab(link)
  }) || /*#__PURE__*/_react.default.createElement(_material.ListItem, {
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
      color: options !== null && options !== void 0 && options.getColor ? options.getColor(_objectSpread(_objectSpread({}, item), {}, {
        open,
        isActiveTab: isActiveTab(item)
      })) : textColor,
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