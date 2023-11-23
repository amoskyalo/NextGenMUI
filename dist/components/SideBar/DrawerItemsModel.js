"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _reactRouterDom = require("react-router-dom");
var _ListItemsModel = _interopRequireDefault(require("./ListItemsModel"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DrawerItemsModel = _ref => {
  var _listItems$sections;
  let {
    listItems,
    activeTabBackgroundColor,
    textColor,
    open
  } = _ref;
  const navigation = (0, _reactRouterDom.useNavigate)();
  const [expanded, setExpanded] = (0, _react.useState)(null);
  const handleClick = item => {
    if (Boolean(item.subLinks)) {
      if (Boolean(expanded)) {
        setExpanded(null);
      } else {
        setExpanded(item.name);
      }
    } else {
      navigation(item === null || item === void 0 ? void 0 : item.path);
    }
  };
  function getListModel(listItems) {
    return /*#__PURE__*/_react.default.createElement(_ListItemsModel.default, {
      listItems: listItems,
      expanded: expanded,
      open: open,
      textColor: textColor,
      activeTabBackgroundColor: activeTabBackgroundColor,
      handleClick: handleClick,
      setExpanded: setExpanded
    });
  }
  return Array.isArray(listItems) ? getListModel(listItems) : listItems === null || listItems === void 0 || (_listItems$sections = listItems.sections) === null || _listItems$sections === void 0 ? void 0 : _listItems$sections.map((section, index) => {
    var _listItems$sections2;
    return /*#__PURE__*/_react.default.createElement(_material.Box, {
      key: index,
      sx: {
        marginBottom: 3
      }
    }, section.title && open && /*#__PURE__*/_react.default.createElement(_material.Typography, {
      sx: {
        fontSize: 14,
        mb: .5,
        opacity: "90%"
      }
    }, section.title), getListModel(section.list), index !== (listItems === null || listItems === void 0 || (_listItems$sections2 = listItems.sections) === null || _listItems$sections2 === void 0 ? void 0 : _listItems$sections2.length) - 1 && /*#__PURE__*/_react.default.createElement(_material.Divider, {
      sx: {
        mt: 1
      },
      color: activeTabBackgroundColor
    }));
  });
};
DrawerItemsModel.propTypes = {
  listItems: _propTypes.default.array,
  activeTabBackgroundColor: _propTypes.default.string,
  textColor: _propTypes.default.string,
  open: _propTypes.default.bool
};
var _default = exports.default = DrawerItemsModel;