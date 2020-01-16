"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));

var _terraActionHeader = _interopRequireDefault(require("terra-action-header"));

var _terraList = _interopRequireWildcard(require("terra-list"));

var _terraHyperlink = _interopRequireDefault(require("terra-hyperlink"));

var _disclosureManager = require("terra-application/lib/disclosure-manager");

var _bind = _interopRequireDefault(require("classnames/bind"));

var _ApplicationSwitcherModule = _interopRequireDefault(require("./ApplicationSwitcher.module.scss"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind.default.bind(_ApplicationSwitcherModule.default);

var propTypes = {
  /**
   * Apps config
   */
  apps: _propTypes.default.arrayOf(_propTypes.default.shape({
    url: _propTypes.default.string,
    title: _propTypes.default.string
  })).isRequired,

  /**
   * Injected by disclosure manager
   */
  disclosureManager: _disclosureManager.disclosureManagerShape.isRequired
};
/**
 * render a component to display apps available to switch to.
 * @param {*} props.disclosureManager disclosure manager object
 * @param {*} props.apps the apps to display
 */

var ApplicationSwitcher = function ApplicationSwitcher(_ref) {
  var disclosureManager = _ref.disclosureManager,
      apps = _ref.apps;
  return _react.default.createElement(_terraContentContainer.default, {
    header: _react.default.createElement(_terraActionHeader.default, {
      title: "Application Switcher",
      onBack: disclosureManager.goBack,
      onClose: disclosureManager.closeDisclosure
    }),
    fill: true
  }, _react.default.createElement(_terraList.default, {
    dividerStyle: "bottom-only"
  }, apps.map(function (app) {
    return _react.default.createElement(_terraList.Item, {
      key: app.url
    }, _react.default.createElement(_terraHyperlink.default, {
      className: cx('item'),
      href: app.url
    }, app.title));
  })));
};

ApplicationSwitcher.propTypes = propTypes;

var _default = (0, _disclosureManager.withDisclosureManager)(ApplicationSwitcher);

exports.default = _default;