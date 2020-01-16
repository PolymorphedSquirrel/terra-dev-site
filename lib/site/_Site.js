"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _modalManager = _interopRequireDefault(require("terra-application/lib/modal-manager"));

var _DevSiteNavigation = _interopRequireDefault(require("../navigation/_DevSiteNavigation"));

var _Raw = _interopRequireDefault(require("../raw/_Raw"));

var _AppSettingsContext = _interopRequireDefault(require("../navigation/_AppSettingsContext"));

var _AppSettingsProvider = _interopRequireDefault(require("../navigation/_AppSettingsProvider"));

var _siteConfigPropTypes = _interopRequireDefault(require("./siteConfigPropTypes"));

var _TerraMdxProvider = _interopRequireDefault(require("../mdx/_TerraMdxProvider"));

require("./site.module.scss");

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
   * Render prop for rendering terra-application-base or a variant of it.
   */
  applicationBase: _propTypes.default.func.isRequired,

  /**
   * Render prop for rendering application navigation or a variant of it.
   */
  applicationNavigation: _propTypes.default.func.isRequired,

  /**
   * The site config for the application.
   */
  siteConfig: _siteConfigPropTypes.default.isRequired,

  /**
   * function to return search items
   */
  fetchSearchItems: _propTypes.default.func
};

var Site =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Site, _React$Component);

  function Site(props) {
    var _this;

    _classCallCheck(this, Site);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Site).call(this, props));
    _this.redirectSlashRoute = _this.redirectSlashRoute.bind(_assertThisInitialized(_this));
    _this.redirectToReservedRoute = _this.redirectToReservedRoute.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Redirect the page to one of the routes reserved for the additional apps
   * @param {*} props.match the current matching route
   */


  _createClass(Site, [{
    key: "redirectToReservedRoute",
    value: function redirectToReservedRoute(_ref) {
      var match = _ref.match;
      var siteConfig = this.props.siteConfig;
      window.sessionStorage.redirect = window.location.href;
      window.location.pathname = "".concat(siteConfig.basename).concat(match.url, "/");
      return null;
    }
    /**
     * Redirect the page to the version of the page without the root hash route
     * @param {*} props.location the current location
     */

  }, {
    key: "redirectSlashRoute",
    value: function redirectSlashRoute(_ref2) {
      var location = _ref2.location;
      var siteConfig = this.props.siteConfig; // if a hash route is passed in, we're going to redirect to avoid breaking existing tests.

      if (location.hash.startsWith('#/')) {
        return _react.default.createElement(_reactRouterDom.Redirect, {
          to: "/".concat(location.hash.slice(2))
        });
      }

      return _react.default.createElement(_reactRouterDom.Redirect, {
        to: siteConfig.indexPath
      });
    }
  }, {
    key: "renderApplicationBaseChildren",
    value: function renderApplicationBaseChildren() {
      var _this2 = this;

      var _this$props = this.props,
          siteConfig = _this$props.siteConfig,
          applicationNavigation = _this$props.applicationNavigation,
          fetchSearchItems = _this$props.fetchSearchItems;
      return _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/",
        render: this.redirectSlashRoute
      }), siteConfig.apps.map(function (app) {
        return app.path && _react.default.createElement(_reactRouterDom.Route, {
          path: "/".concat(app.path),
          key: app.path,
          render: _this2.redirectToReservedRoute
        });
      }), _react.default.createElement(_reactRouterDom.Route, null, _react.default.createElement(_TerraMdxProvider.default, null, _react.default.createElement(_modalManager.default, null, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
        path: "/raw"
      }, _react.default.createElement(_Raw.default, {
        contentConfig: siteConfig.contentConfig,
        indexPath: siteConfig.indexPath
      })), _react.default.createElement(_reactRouterDom.Route, null, _react.default.createElement(_DevSiteNavigation.default, {
        siteConfig: siteConfig,
        applicationNavigation: applicationNavigation,
        fetchSearchItems: fetchSearchItems
      })))))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          applicationBase = _this$props2.applicationBase,
          siteConfig = _this$props2.siteConfig;
      return _react.default.createElement(_AppSettingsProvider.default, {
        settingsConfig: siteConfig.settingsConfig
      }, _react.default.createElement(_AppSettingsContext.default.Consumer, null, function (_ref3) {
        var currentLocale = _ref3.currentLocale,
            currentThemeName = _ref3.currentThemeName;
        return applicationBase({
          locale: currentLocale,
          themeName: currentThemeName,
          child: _this3.renderApplicationBaseChildren()
        });
      }));
    }
  }]);

  return Site;
}(_react.default.Component);

Site.propTypes = propTypes;
var _default = Site;
exports.default = _default;