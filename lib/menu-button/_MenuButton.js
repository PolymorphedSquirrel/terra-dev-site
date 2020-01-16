"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bind = _interopRequireDefault(require("classnames/bind"));

var _terraMenu = _interopRequireDefault(require("terra-menu"));

var _IconChevronDown = _interopRequireDefault(require("terra-icon/lib/icon/IconChevronDown"));

var _terraButton = _interopRequireDefault(require("terra-button"));

var _MenuButtonModule = _interopRequireDefault(require("./MenuButton.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var cx = _bind.default.bind(_MenuButtonModule.default);

var propTypes = {
  /**
   * Button text
   */
  text: _propTypes.default.string.isRequired,

  /**
   * menu items
   */
  items: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,

  /**
   * Selected menu item
   */
  selectedKey: _propTypes.default.string,

  /**
   * On change callback
   */
  onChange: _propTypes.default.func.isRequired
};

var MenuButton = function MenuButton(_ref) {
  var text = _ref.text,
      items = _ref.items,
      selectedKey = _ref.selectedKey,
      _onChange = _ref.onChange;
  var buttonRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_terraMenu.default, {
    isOpen: isOpen,
    targetRef: function targetRef() {
      return buttonRef.current;
    },
    onRequestClose: function onRequestClose() {
      return setIsOpen(false);
    }
  }, _react.default.createElement(_terraMenu.default.ItemGroup, {
    key: text,
    onChange: function onChange(event, index) {
      setIsOpen(false);

      _onChange(items[index]);
    }
  }, items.map(function (item) {
    return _react.default.createElement(_terraMenu.default.Item, {
      text: item,
      key: item,
      isSelected: selectedKey === item
    });
  }))), _react.default.createElement(_terraButton.default, {
    text: text,
    className: cx('button'),
    icon: _react.default.createElement(_IconChevronDown.default, null),
    isReversed: true,
    variant: "ghost",
    refCallback: function refCallback(node) {
      buttonRef.current = node;
    },
    onClick: function onClick() {
      return setIsOpen(true);
    }
  }));
};

MenuButton.propTypes = propTypes;
var _default = MenuButton;
exports.default = _default;