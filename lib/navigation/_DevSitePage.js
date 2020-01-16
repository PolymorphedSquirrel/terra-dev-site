"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));

var _SecondaryNavigationLayout = _interopRequireDefault(require("./_SecondaryNavigationLayout"));

var _PlaceholderPage = _interopRequireDefault(require("../static-pages/_PlaceholderPage"));

var _siteConfigPropTypes = require("../site/siteConfigPropTypes");

var _ComponentToolbar = _interopRequireDefault(require("./_ComponentToolbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var propTypes = {
  /**
   * Root path for the navigation page.
   */
  rootPath: _propTypes.default.string.isRequired,

  /**
   * Component to be displayed if menu item is found but not content
   */
  placeholderSrc: _propTypes.default.string.isRequired,

  /**
   * Component to be displayed if the route is not found.
   */
  notFoundComponent: _propTypes.default.node.isRequired,

  /**
   * Current content on the page
   */
  // eslint-disable-next-line react/forbid-prop-types
  pageContent: _propTypes.default.object.isRequired,

  /**
   * Config describing the secondary navigation menu
   */
  menuItems: _propTypes.default.PropTypes.arrayOf(_propTypes.default.shape({
    text: _propTypes.default.string,
    path: _propTypes.default.string
  })),

  /**
   * capabilities set per root route.
   */
  capabilities: _siteConfigPropTypes.capabilitiesPropType.isRequired,

  /**
   * Injected by react-router: represent where the app is now, where you want it to go,
   * or even where it was.
   */
  location: _propTypes.default.shape({
    pathname: _propTypes.default.string
  }).isRequired,

  /**
   * Injected by react-router: the object representing browser history.
   */
  // eslint-disable-next-line react/forbid-prop-types
  history: _propTypes.default.object.isRequired
};

var DevSitePage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DevSitePage, _React$Component);

  function DevSitePage(props) {
    var _this;

    _classCallCheck(this, DevSitePage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DevSitePage).call(this, props));
    var location = props.location,
        pageContent = props.pageContent;
    _this.generateContent = _this.generateContent.bind(_assertThisInitialized(_this));
    _this.state = {
      initialSelectedMenuKey: location.pathname,
      sortedContentPaths: Object.keys(pageContent).sort().reverse()
    };
    return _this;
  }

  _createClass(DevSitePage, [{
    key: "generateContent",
    value: function generateContent() {
      var _this$props = this.props,
          pageContent = _this$props.pageContent,
          rootPath = _this$props.rootPath,
          placeholderSrc = _this$props.placeholderSrc,
          notFoundComponent = _this$props.notFoundComponent;
      var sortedContentPaths = this.state.sortedContentPaths;
      return _react.default.createElement(_reactRouterDom.Switch, null, sortedContentPaths.map(function (path) {
        return _react.default.createElement(_reactRouterDom.Route, {
          key: path,
          path: path,
          render: function render() {
            return _react.default.createElement(pageContent[path].component.default.componentClass, pageContent[path].component.default.props);
          }
        });
      }), _react.default.createElement(_reactRouterDom.Route, {
        path: rootPath,
        exact: true,
        render: function render() {
          return _react.default.createElement(_PlaceholderPage.default, {
            src: placeholderSrc
          });
        }
      }), _react.default.createElement(_reactRouterDom.Route, {
        render: function render() {
          return notFoundComponent;
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          history = _this$props2.history,
          menuItems = _this$props2.menuItems,
          location = _this$props2.location,
          pageContent = _this$props2.pageContent,
          capabilities = _this$props2.capabilities,
          rootPath = _this$props2.rootPath;
      var initialSelectedMenuKey = this.state.initialSelectedMenuKey;
      var hideDevTools = !capabilities[rootPath].devTools;

      if (!menuItems) {
        if (hideDevTools) {
          return this.generateContent();
        }

        return _react.default.createElement(_terraContentContainer.default, {
          header: _react.default.createElement(_ComponentToolbar.default, null),
          fill: true
        }, this.generateContent());
      }

      return _react.default.createElement(_SecondaryNavigationLayout.default, {
        menuItems: menuItems,
        isMenuOpen: pageContent[location.pathname] === undefined,
        selectedMenuItemKey: location.pathname,
        onTerminalMenuItemSelection: function onTerminalMenuItemSelection(childKey, metaData) {
          history.push(metaData.path);
        },
        hideDevTools: hideDevTools,
        key: initialSelectedMenuKey
      }, this.generateContent());
    }
  }]);

  return DevSitePage;
}(_react.default.Component);

DevSitePage.propTypes = propTypes;

var _default = (0, _reactRouterDom.withRouter)(DevSitePage);

exports.default = _default;