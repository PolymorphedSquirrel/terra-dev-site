"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _disclosureManager = require("terra-application/lib/disclosure-manager");

var _IconSearch = _interopRequireDefault(require("terra-icon/lib/icon/IconSearch"));

var _IconTile = _interopRequireDefault(require("terra-icon/lib/icon/IconTile"));

var _DevSitePage = _interopRequireDefault(require("./_DevSitePage"));

var _SettingsPicker = _interopRequireDefault(require("./_SettingsPicker"));

var _NotFoundPage = _interopRequireDefault(require("../static-pages/_NotFoundPage"));

var _siteConfigPropTypes = _interopRequireDefault(require("../site/siteConfigPropTypes"));

var _ExtensionWrapper = _interopRequireDefault(require("../wrappers/_ExtensionWrapper"));

var _ApplicationSwitcher = _interopRequireDefault(require("./_ApplicationSwitcher"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Search = _react.default.lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../search/_Search'));
  });
});

var propTypes = {
  /**
   * Render prop for rendering application navigation or a variant of it.
   */
  applicationNavigation: _propTypes.default.func.isRequired,

  /**
   * function to return search items
   */
  fetchSearchItems: _propTypes.default.func,

  /**
   * The site config for the application.
   */
  siteConfig: _siteConfigPropTypes.default.isRequired,

  /**
   * Injected by react-router: represent where the app is now, where you want it to go,
   * or even where it was.
   */
  location: _propTypes.default.shape({
    pathname: _propTypes.default.string
  }),

  /**
   * Injected by react-router: the object representing browser history.
   */
  // eslint-disable-next-line react/forbid-prop-types
  history: _propTypes.default.object,

  /**
   * Injected by with disclosure manager.
   */
  disclosureManager: _disclosureManager.disclosureManagerShape.isRequired
};
var defaultProps = {
  location: undefined,
  history: undefined
};

var DevSiteNavigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DevSiteNavigation, _React$Component);

  _createClass(DevSiteNavigation, null, [{
    key: "propExistsAndChanged",
    value: function propExistsAndChanged(nextProp, currentProp) {
      return nextProp !== undefined && nextProp !== currentProp;
    }
  }, {
    key: "getActiveNavigationItemPath",
    value: function getActiveNavigationItemPath(location, navigationItems) {
      for (var i = 0, numberOfNavigationItems = navigationItems.length; i < numberOfNavigationItems; i += 1) {
        if ((0, _reactRouterDom.matchPath)(location.pathname, navigationItems[i].path)) {
          return navigationItems[i].path;
        }
      }

      return undefined;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(newProps) {
      return {
        activeNavigationItemPath: DevSiteNavigation.getActiveNavigationItemPath(newProps.location, newProps.siteConfig.navigationItems)
      };
    }
  }, {
    key: "launchExtension",
    value: function launchExtension(key, disclosureManager, _ref) {
      var Component = _ref.Component,
          _ref$props = _ref.props,
          props = _ref$props === void 0 ? {} : _ref$props,
          _ref$size = _ref.size,
          size = _ref$size === void 0 ? 'large' : _ref$size;
      disclosureManager.disclose({
        preferredType: 'modal',
        size: size,
        content: {
          key: key,
          component: _react.default.createElement(Component, props)
        }
      });
    }
  }, {
    key: "launchAppSwitcher",
    value: function launchAppSwitcher(key, _ref2) {
      var disclosureManager = _ref2.disclosureManager,
          siteConfig = _ref2.siteConfig;
      disclosureManager.disclose({
        preferredType: 'modal',
        size: 'tiny',
        content: {
          key: key,
          component: _react.default.createElement(_ApplicationSwitcher.default, {
            apps: siteConfig.apps
          })
        }
      });
    }
  }, {
    key: "getUtilityItems",
    value: function getUtilityItems(appsConfig) {
      var utilityItems = [];

      if (appsConfig.length > 0) {
        utilityItems.push({
          icon: _react.default.createElement(_IconTile.default, null),
          key: 'terra-dev-site.application-switcher',
          text: 'Application Switcher',
          metaData: {
            func: DevSiteNavigation.launchAppSwitcher
          }
        });
      }

      return utilityItems;
    }
  }]);

  function DevSiteNavigation(props) {
    var _this;

    _classCallCheck(this, DevSiteNavigation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DevSiteNavigation).call(this, props));
    _this.state = {
      activeNavigationItemPath: undefined
    };
    _this.handleNavigationItemSelection = _this.handleNavigationItemSelection.bind(_assertThisInitialized(_this));
    _this.handleItemSelection = _this.handleItemSelection.bind(_assertThisInitialized(_this));
    _this.handleExtensionSelection = _this.handleExtensionSelection.bind(_assertThisInitialized(_this));
    _this.handleSettingsSelection = _this.handleSettingsSelection.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DevSiteNavigation, [{
    key: "getExtensionItems",
    value: function getExtensionItems() {
      var _this$props = this.props,
          history = _this$props.history,
          fetchSearchItems = _this$props.fetchSearchItems;
      var extensions = this.props.siteConfig.extensions;
      var searchExtension = {
        icon: _react.default.createElement(_IconSearch.default, null),
        key: 'terra-dev-site.search',
        text: 'Search',
        metaData: {
          Component: _ExtensionWrapper.default,
          size: 'large',
          props: {
            content: Search,
            props: {
              fetchSearchItems: fetchSearchItems,
              onItemSelected: function onItemSelected(path) {
                return history.push(path);
              }
            }
          }
        }
      };
      var extensionArray = fetchSearchItems ? [searchExtension] : [];
      return extensions.reduce(function (acc, ext) {
        return acc.concat({
          icon: _react.default.createElement(ext.icon, null),
          key: ext.key,
          text: ext.text,
          metaData: {
            Component: _ExtensionWrapper.default,
            size: ext.size,
            props: {
              content: ext.component
            }
          }
        });
      }, extensionArray);
    }
  }, {
    key: "handleNavigationItemSelection",
    value: function handleNavigationItemSelection(navigationItemKey) {
      var history = this.props.history;
      var activeNavigationItemPath = this.state.activeNavigationItemPath;

      if (activeNavigationItemPath !== navigationItemKey) {
        history.push(navigationItemKey);
      }
    }
  }, {
    key: "handleItemSelection",
    value: function handleItemSelection(key, metaData) {
      metaData.func(key, this.props);
    }
  }, {
    key: "handleExtensionSelection",
    value: function handleExtensionSelection(key, metaData) {
      DevSiteNavigation.launchExtension(key, this.props.disclosureManager, metaData);
    }
  }, {
    key: "handleSettingsSelection",
    value: function handleSettingsSelection() {
      var disclosureManager = this.props.disclosureManager;
      var settingsConfig = this.props.siteConfig.settingsConfig;
      disclosureManager.disclose({
        preferredType: 'modal',
        size: 'small',
        content: {
          key: 'terra-dev-site.settings',
          component: _react.default.createElement(_SettingsPicker.default, {
            config: settingsConfig
          })
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var applicationNavigation = this.props.applicationNavigation;
      var _this$props$siteConfi = this.props.siteConfig,
          nameConfig = _this$props$siteConfi.nameConfig,
          navigationItems = _this$props$siteConfi.navigationItems,
          contentConfig = _this$props$siteConfi.contentConfig,
          indexPath = _this$props$siteConfi.indexPath,
          placeholderSrc = _this$props$siteConfi.placeholderSrc,
          menuItems = _this$props$siteConfi.menuItems,
          capabilities = _this$props$siteConfi.capabilities,
          apps = _this$props$siteConfi.apps;
      var activeNavigationItemPath = this.state.activeNavigationItemPath;

      if (!activeNavigationItemPath) {
        return _react.default.createElement(_NotFoundPage.default, {
          homePath: indexPath
        });
      }

      return _react.default.createElement(_react.default.Fragment, null, applicationNavigation({
        titleConfig: _objectSpread({
          title: nameConfig.title
        }, nameConfig.headline && {
          headline: nameConfig.headline
        }, {}, nameConfig.subline && {
          subline: nameConfig.subline
        }),
        navigationItems: navigationItems.map(function (item) {
          return {
            key: item.path,
            text: item.text
          };
        }),
        extensionItems: this.getExtensionItems(),
        onSelectExtensionItem: this.handleExtensionSelection,
        activeNavigationItemKey: activeNavigationItemPath,
        onSelectNavigationItem: this.handleNavigationItemSelection,
        onSelectSettings: this.handleSettingsSelection,
        utilityItems: DevSiteNavigation.getUtilityItems(apps),
        onSelectUtilityItem: this.handleItemSelection,
        child: _react.default.createElement(_DevSitePage.default, {
          placeholderSrc: placeholderSrc,
          menuItems: menuItems[activeNavigationItemPath],
          pageContent: contentConfig[activeNavigationItemPath],
          rootPath: activeNavigationItemPath,
          key: activeNavigationItemPath,
          notFoundComponent: _react.default.createElement(_NotFoundPage.default, {
            indexPath: indexPath
          }),
          capabilities: capabilities
        })
      }));
    }
  }]);

  return DevSiteNavigation;
}(_react.default.Component);

DevSiteNavigation.propTypes = propTypes;
DevSiteNavigation.defaultProps = defaultProps;

var _default = (0, _disclosureManager.withDisclosureManager)((0, _reactRouterDom.withRouter)(DevSiteNavigation));

exports.default = _default;