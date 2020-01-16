"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ContentErrorBoundary = _interopRequireDefault(require("./_ContentErrorBoundary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var propTypes = {
  /**
   * The content to be placed within the main content area of the container.
   */
  // eslint-disable-next-line react/forbid-prop-types
  content: _propTypes.default.object.isRequired,

  /**
   * The props to be applied to the content.
   */
  // eslint-disable-next-line react/forbid-prop-types
  props: _propTypes.default.object,

  /**
   * Loading indicator to be displayed while loading
   */
  fallback: _propTypes.default.element.isRequired,

  /**
   * Component to wrap around loaded content
   */
  loadedWrapper: _propTypes.default.func,

  /**
   * Component to wrap around errored content
   */
  errorWrapper: _propTypes.default.func.isRequired
};
var defaultProps = {
  props: undefined
};

var CodesplitWrapper = function CodesplitWrapper(_ref) {
  var Content = _ref.content,
      props = _ref.props,
      LoadedWrapper = _ref.loadedWrapper,
      errorWrapper = _ref.errorWrapper,
      fallback = _ref.fallback;
  return _react.default.createElement(_ContentErrorBoundary.default, {
    errorWrapper: errorWrapper
  }, _react.default.createElement(_react.Suspense, {
    fallback: fallback
  }, LoadedWrapper ? _react.default.createElement(LoadedWrapper, null, _react.default.createElement(Content, props)) : _react.default.createElement(Content, props)));
};

CodesplitWrapper.propTypes = propTypes;
CodesplitWrapper.defaultProps = defaultProps;
var _default = CodesplitWrapper;
exports.default = _default;