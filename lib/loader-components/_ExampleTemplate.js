"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bind = _interopRequireDefault(require("classnames/bind"));

var _ExampleTemplateModule = _interopRequireDefault(require("./ExampleTemplate.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var cx = _bind.default.bind(_ExampleTemplateModule.default);

var propTypes = {
  /**
   * The example component.
   */
  example: _propTypes.default.element,

  /**
   * The example source code.
   */
  exampleSrc: _propTypes.default.element,

  /**
   * The example title.
   */
  title: _propTypes.default.string,

  /**
   * The example description.
   */
  description: _propTypes.default.node,
  isExpanded: _propTypes.default.bool
};
var defaultProps = {
  isExpanded: false
};

var ExampleTemplate =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ExampleTemplate, _React$Component);

  _createClass(ExampleTemplate, null, [{
    key: "renderHeader",
    value: function renderHeader(title) {
      if (title) {
        return _react.default.createElement("div", {
          className: cx('header')
        }, _react.default.createElement("h2", {
          className: cx('title')
        }, title));
      }

      return null;
    }
  }, {
    key: "renderDescription",
    value: function renderDescription(description) {
      if (description) {
        return _react.default.createElement("div", {
          className: cx('description')
        }, description);
      }

      return null;
    }
  }]);

  function ExampleTemplate(props) {
    var _this;

    _classCallCheck(this, ExampleTemplate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExampleTemplate).call(this, props));
    _this.state = {
      isExpanded: props.isExpanded,
      isBackgroundTransparent: false
    };
    _this.handleBgToggle = _this.handleBgToggle.bind(_assertThisInitialized(_this));
    _this.handleCodeToggle = _this.handleCodeToggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ExampleTemplate, [{
    key: "handleBgToggle",
    value: function handleBgToggle() {
      this.setState(function (prevState) {
        return {
          isBackgroundTransparent: !prevState.isBackgroundTransparent
        };
      });
    }
  }, {
    key: "handleCodeToggle",
    value: function handleCodeToggle() {
      this.setState(function (prevState) {
        return {
          isExpanded: !prevState.isExpanded
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          example = _this$props.example,
          exampleSrc = _this$props.exampleSrc,
          title = _this$props.title,
          description = _this$props.description;
      var _this$state = this.state,
          isExpanded = _this$state.isExpanded,
          isBackgroundTransparent = _this$state.isBackgroundTransparent;
      return _react.default.createElement("div", {
        className: cx('template')
      }, ExampleTemplate.renderHeader(title), _react.default.createElement("div", {
        className: cx('content', {
          'dynamic-content': isBackgroundTransparent
        })
      }, ExampleTemplate.renderDescription(description), example), exampleSrc && _react.default.createElement("div", {
        className: cx('footer')
      }, _react.default.createElement("div", {
        className: cx('button-container')
      }, _react.default.createElement("button", {
        type: "button",
        className: cx('bg-toggle'),
        onClick: this.handleBgToggle
      }, "Toggle Background"), _react.default.createElement("button", {
        type: "button",
        className: cx('code-toggle'),
        onClick: this.handleCodeToggle
      }, _react.default.createElement("span", {
        className: cx('chevron-left')
      }), _react.default.createElement("span", null, "Code"), _react.default.createElement("span", {
        className: cx('chevron-right')
      }))), isExpanded && _react.default.createElement("div", {
        className: cx('code')
      }, exampleSrc)));
    }
  }]);

  return ExampleTemplate;
}(_react.default.Component);

ExampleTemplate.propTypes = propTypes;
ExampleTemplate.defaultProps = defaultProps;
var _default = ExampleTemplate;
exports.default = _default;