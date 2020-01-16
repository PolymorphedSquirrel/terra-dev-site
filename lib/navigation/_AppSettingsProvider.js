"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AppSettingsContext = _interopRequireDefault(require("./_AppSettingsContext"));

var _siteConfigPropTypes = require("../site/siteConfigPropTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var propTypes = {
  children: _propTypes.default.element.isRequired,
  settingsConfig: _siteConfigPropTypes.settingsConfigPropType.isRequired
};

var AppSettingsProvider = function AppSettingsProvider(_ref) {
  var settingsConfig = _ref.settingsConfig,
      children = _ref.children;
  var _settingsConfig$defau = settingsConfig.defaultLocale,
      defaultLocale = _settingsConfig$defau === void 0 ? 'en' : _settingsConfig$defau,
      defaultTheme = settingsConfig.defaultTheme,
      _settingsConfig$defau2 = settingsConfig.defaultDirection,
      defaultDirection = _settingsConfig$defau2 === void 0 ? 'ltr' : _settingsConfig$defau2,
      themes = settingsConfig.themes;

  var _useState = (0, _react.useState)(defaultLocale),
      _useState2 = _slicedToArray(_useState, 2),
      currentLocale = _useState2[0],
      setCurrentLocale = _useState2[1];

  var _useState3 = (0, _react.useState)(defaultDirection),
      _useState4 = _slicedToArray(_useState3, 2),
      currentDirection = _useState4[0],
      setCurrentDirection = _useState4[1];

  var _useState5 = (0, _react.useState)(defaultTheme),
      _useState6 = _slicedToArray(_useState5, 2),
      currentTheme = _useState6[0],
      setCurrentTheme = _useState6[1];
  /**
   * Place settings on dom
   */


  (0, _react.useEffect)(function () {
    var htmlNode = document.getElementsByTagName('html')[0];

    if (htmlNode.getAttribute('lang') !== currentLocale) {
      htmlNode.setAttribute('lang', currentLocale);
    }

    if (htmlNode.getAttribute('dir') !== currentDirection) {
      htmlNode.setAttribute('dir', currentDirection);
    }
  }, [currentLocale, currentDirection]);
  var appSettings = (0, _react.useMemo)(function () {
    /**
     * Handle setting update and store new settings in state.
     * @param {*} newSettings
     */
    var onUpdate = function onUpdate(_ref2) {
      var locale = _ref2.locale,
          theme = _ref2.theme,
          direction = _ref2.direction;

      if (locale) {
        setCurrentLocale(locale);
      }

      if (theme) {
        setCurrentTheme(theme);
      }

      if (direction) {
        setCurrentDirection(direction);
      }
    };

    return _objectSpread({}, settingsConfig, {
      currentLocale: currentLocale,
      currentTheme: currentTheme,
      currentDirection: currentDirection,
      currentThemeName: themes[currentTheme],
      onUpdate: onUpdate
    });
  }, [settingsConfig, themes, currentLocale, currentTheme, currentDirection]);
  return _react.default.createElement(_AppSettingsContext.default.Provider, {
    value: appSettings
  }, children);
};

AppSettingsProvider.propTypes = propTypes;
var _default = AppSettingsProvider;
exports.default = _default;