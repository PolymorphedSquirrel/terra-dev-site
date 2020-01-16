"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterDom = require("react-router-dom");

var _terraApplication = _interopRequireDefault(require("terra-application"));

var _terraApplicationNavigation = _interopRequireDefault(require("terra-application-navigation"));

var _siteConfig = _interopRequireDefault(require("build/siteConfig"));

var _Site = _interopRequireDefault(require("./site/_Site"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// eslint-disable-next-line import/no-unresolved, import/extensions
var fetchSearchItems = function fetchSearchItems() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('build/searchItems'));
  }).then(function (_ref) {
    var items = _ref.default;
    return items;
  });
};

var TerraDevSite = function TerraDevSite() {
  return _react.default.createElement(_Site.default, {
    applicationBase: function applicationBase(_ref2) {
      var locale = _ref2.locale,
          themeName = _ref2.themeName,
          child = _ref2.child;
      return _react.default.createElement(_terraApplication.default, {
        locale: locale,
        themeName: themeName,
        themeIsGlobal: true
      }, _react.default.createElement(_reactRouterDom.BrowserRouter, {
        basename: _siteConfig.default.basename
      }, child));
    },
    applicationNavigation: function applicationNavigation(_ref3) {
      var titleConfig = _ref3.titleConfig,
          navigationItems = _ref3.navigationItems,
          extensionItems = _ref3.extensionItems,
          onSelectExtensionItem = _ref3.onSelectExtensionItem,
          activeNavigationItemKey = _ref3.activeNavigationItemKey,
          onSelectNavigationItem = _ref3.onSelectNavigationItem,
          onSelectSettings = _ref3.onSelectSettings,
          utilityItems = _ref3.utilityItems,
          onSelectUtilityItem = _ref3.onSelectUtilityItem,
          child = _ref3.child;
      return _react.default.createElement(_terraApplicationNavigation.default, {
        titleConfig: titleConfig,
        navigationItems: navigationItems,
        extensionItems: extensionItems,
        onSelectExtensionItem: onSelectExtensionItem,
        activeNavigationItemKey: activeNavigationItemKey,
        onSelectNavigationItem: onSelectNavigationItem,
        onSelectSettings: onSelectSettings,
        utilityItems: utilityItems,
        onSelectUtilityItem: onSelectUtilityItem
      }, child);
    },
    fetchSearchItems: fetchSearchItems,
    siteConfig: _siteConfig.default
  });
};

_reactDom.default.render(_react.default.createElement(TerraDevSite, null), document.getElementById('root'));