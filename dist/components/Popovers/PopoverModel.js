"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.object.assign.js");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
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
    horizontal: "right"
  }
}, props)))(_ref => {
  let {
    theme
  } = _ref;
  return {
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 150,
      color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.grey[300],
      boxShadow: "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0"
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5)
        },
        "&:active": {
          backgroundColor: (0, _styles.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
        }
      }
    }
  };
});
const PopoverModel = _ref2 => {
  let {
    popoverItems,
    open,
    anchorEl,
    onClose
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(StyledMenu, {
    id: "customized-popover",
    MenuListProps: {
      "aria-labelledby": "customized-popover"
    },
    anchorEl: anchorEl,
    open: open,
    onClose: onClose
  }, popoverItems === null || popoverItems === void 0 ? void 0 : popoverItems.map((a, i) => /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
    onClick: () => {
      a.onItemClick(a);
      onClose();
    },
    disableRipple: true,
    key: i
  }, a.icon && /*#__PURE__*/_react.default.createElement(a.icon, null), a.name)));
};
PopoverModel.propTypes = {
  popoverItems: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string,
    onItemClick: _propTypes.default.func,
    icon: _propTypes.default.node
  })),
  open: _propTypes.default.bool.isRequired,
  anchorEl: _propTypes.default.string.isRequired,
  onClose: _propTypes.default.func.isRequired
};
var _default = exports.default = PopoverModel;