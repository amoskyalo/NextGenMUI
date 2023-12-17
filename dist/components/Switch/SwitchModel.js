"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.object.assign.js");
var _react = _interopRequireDefault(require("react"));
var _styles = require("@mui/material/styles");
var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));
var _Switch = _interopRequireDefault(require("@mui/material/Switch"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const StyledSwitch = (0, _styles.styled)(props => /*#__PURE__*/_react.default.createElement(_Switch.default, _extends({
  focusVisibleClassName: ".Mui-focusVisible",
  disableRipple: true
}, props)))(_ref => {
  let {
    theme,
    btnColor
  } = _ref;
  return {
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: btnColor,
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5
        }
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff'
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600]
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3
      }
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500
      })
    }
  };
});
const SwitchModel = _ref2 => {
  let props = Object.assign({}, (_objectDestructuringEmpty(_ref2), _ref2));
  return /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, _extends({
    control: /*#__PURE__*/_react.default.createElement(StyledSwitch, _extends({
      sx: {
        m: 1
      }
    }, props, {
      defaultChecked: true
    }))
  }, props));
};
var _default = exports.default = SwitchModel;