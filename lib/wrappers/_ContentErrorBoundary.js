"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ErrorPage = _interopRequireDefault(require("./_ErrorPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var propTypes = {
  /**
   * children are children
   */
  children: _propTypes.default.element.isRequired,

  /**
   * Component to wrap around errored content
   */
  errorWrapper: _propTypes.default.func.isRequired
};

var ContentErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContentErrorBoundary, _React$Component);

  function ContentErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ContentErrorBoundary);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContentErrorBoundary).call(this, props));
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(ContentErrorBoundary, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ErrorWrapper = _this$props.errorWrapper,
          children = _this$props.children;

      if (this.state.hasError) {
        return _react.default.createElement(ErrorWrapper, null, _react.default.createElement(_ErrorPage.default, {
          error: this.state.error.toString()
        }));
      }

      return children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      // eslint-disable-next-line no-console
      console.error(error);
      return {
        hasError: true,
        error: error
      };
    }
  }]);

  return ContentErrorBoundary;
}(_react.default.Component);

ContentErrorBoundary.propTypes = propTypes;
var _default = ContentErrorBoundary;
exports.default = _default;