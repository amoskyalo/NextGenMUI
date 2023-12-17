"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DialogModel = _ref => {
  let {
    onClose,
    open,
    title,
    fullWidth,
    maxWidth,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_material.Dialog, {
    open: open,
    onClose: onClose,
    fullWidth: fullWidth,
    maxWidth: maxWidth
  }, title && /*#__PURE__*/_react.default.createElement(_material.DialogTitle, {
    sx: {
      paddingBottom: 0
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h6",
    sx: {
      fontWeight: 600
    }
  }, title), /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    onClick: onClose,
    "aria-label": "close",
    sx: {
      marginRight: -1.5
    }
  }, /*#__PURE__*/_react.default.createElement(_Close.default, null)))), /*#__PURE__*/_react.default.createElement(_material.DialogContent, {
    sx: {
      paddingBottom: 4
    }
  }, children));
};
DialogModel.propTypes = {
  onClose: _propTypes.default.func.isRequired,
  open: _propTypes.default.bool.isRequired,
  title: _propTypes.default.string,
  fullWidth: _propTypes.default.bool,
  maxWidth: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  children: _propTypes.default.node.isRequired
};
DialogModel.defaultProps = {
  maxWidth: "sm",
  fullWidth: false
};
var _default = exports.default = DialogModel;