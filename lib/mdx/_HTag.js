"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bind = _interopRequireDefault(require("classnames/bind"));

var _MarkdownTagsModule = _interopRequireDefault(require("./MarkdownTags.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var cx = _bind.default.bind(_MarkdownTagsModule.default);

var propTypes = {
  /**
   * The html tag for this component. Assumed to be an H tag.
   */
  Tag: _propTypes.default.string,

  /**
   * Props to apply to this component tag
   */
  props: _propTypes.default.shape({
    className: _propTypes.default.string.isRequired,
    children: _propTypes.default.node,
    id: _propTypes.default.string
  })
};
/**
 * A component to represent an H tag for MDX.
 * @param {{ Tag, props: componentProps }} props
 */

var H = function H(_ref) {
  var Tag = _ref.Tag,
      componentProps = _ref.props;
  var aRef = (0, _react.useRef)(null); // This effect is for scrolling the h-tag into view after initial load of the page.

  (0, _react.useEffect)(function () {
    if (!window.location || window.location.length < 2) {
      return;
    }

    var requestedId = window.location.hash.slice(1);

    if (componentProps.id === requestedId) {
      aRef.current.scrollIntoView();
    }
  }, [componentProps.id]);
  return _react.default.createElement(Tag, _extends({}, componentProps, {
    className: [cx(Tag), componentProps.className].join(' ')
  }), _react.default.createElement("a", {
    ref: aRef,
    "aria-hidden": "true",
    href: "#".concat(componentProps.id),
    tabIndex: "-1",
    className: cx('a', 'anchor')
  }, _react.default.createElement("span", {
    className: cx('icon', 'icon-link')
  })), componentProps.children);
};

H.propTypes = propTypes;
var _default = H;
exports.default = _default;