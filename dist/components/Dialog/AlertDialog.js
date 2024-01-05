"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const AlertDialog = _ref => {
  let {
    dialogContentText,
    dialogTitle,
    open,
    size,
    onClose,
    onAction
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_material.Dialog, {
    open: open,
    maxWidth: size,
    onClose: onClose
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      paddingY: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_material.DialogTitle, null, dialogTitle), /*#__PURE__*/_react.default.createElement(_material.DialogContent, {
    sx: {
      paddingY: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_material.DialogContentText, {
    sx: {
      fontSize: 14
    }
  }, dialogContentText)), /*#__PURE__*/_react.default.createElement(_material.DialogActions, null, /*#__PURE__*/_react.default.createElement(_material.Button, {
    sx: {
      textTransform: "capitalize"
    },
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: () => {
      onClose();
      onAction();
    },
    autoFocus: true,
    sx: {
      borderRadius: 50,
      paddingX: 4,
      paddingY: 0.7
    },
    variant: "contained"
  }, "Ok"))));
};
AlertDialog.propTypes = {
  dialogContentText: _propTypes.default.string.isRequired,
  dialogTitle: _propTypes.default.string.isRequired,
  open: _propTypes.default.bool.isRequired,
  onClose: _propTypes.default.func.isRequired,
  onAction: _propTypes.default.func.isRequired,
  size: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};
AlertDialog.defaultProps = {
  size: "xs"
};
var _default = exports.default = AlertDialog;