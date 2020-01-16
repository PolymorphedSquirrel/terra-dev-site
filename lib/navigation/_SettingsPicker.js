"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));

var _terraActionHeader = _interopRequireDefault(require("terra-action-header"));

var _terraActionFooter = _interopRequireDefault(require("terra-action-footer"));

var _terraSpacer = _interopRequireDefault(require("terra-spacer"));

var _terraButton = _interopRequireDefault(require("terra-button"));

var _disclosureManager = require("terra-application/lib/disclosure-manager");

var _SelectField = _interopRequireDefault(require("terra-form-select/lib/SelectField"));

var _AppSettingsContext = _interopRequireDefault(require("./_AppSettingsContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var propTypes = {
  /**
   * Config describing the secondary navigation menu
   */
  config: _propTypes.default.shape({
    themes: _propTypes.default.object,
    locales: _propTypes.default.arrayOf(_propTypes.default.string),
    directions: _propTypes.default.arrayOf(_propTypes.default.string)
  }).isRequired
};

var SettingsPicker = function SettingsPicker(_ref) {
  var config = _ref.config;

  var appSettings = _react.default.useContext(_AppSettingsContext.default);

  var _useState = (0, _react.useState)({
    locale: appSettings.currentLocale,
    theme: appSettings.currentTheme,
    direction: appSettings.currentDirection
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var locale = state.locale,
      theme = state.theme,
      direction = state.direction;
  var themes = Object.keys(config.themes);

  var disclosureManager = _react.default.useContext(_disclosureManager.DisclosureManagerContext);

  return _react.default.createElement(_terraContentContainer.default, {
    header: _react.default.createElement(_terraActionHeader.default, {
      title: "Settings",
      onBack: disclosureManager.goBack,
      onClose: disclosureManager.closeDisclosure
    }),
    footer: _react.default.createElement(_terraActionFooter.default, {
      end: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_terraSpacer.default, {
        isInlineBlock: true,
        marginRight: "medium"
      }, _react.default.createElement(_terraButton.default, {
        text: "Submit",
        id: "submit",
        variant: _terraButton.default.Opts.Variants.EMPHASIS,
        onClick: function onClick() {
          appSettings.onUpdate({
            locale: locale,
            theme: theme,
            direction: direction
          });
          disclosureManager.dismiss();
        }
      })), _react.default.createElement(_terraButton.default, {
        text: "Cancel",
        id: "cancel",
        onClick: function onClick() {
          disclosureManager.dismiss();
        }
      }))
    }),
    fill: true
  }, _react.default.createElement(_terraSpacer.default, {
    padding: "medium"
  }, config.locales.length > 1 ? _react.default.createElement(_SelectField.default, {
    label: "Locale",
    selectId: "terra-dev-site-locale-select",
    defaultValue: locale,
    onChange: function onChange(value) {
      setState({
        locale: value,
        theme: theme,
        direction: direction
      });
    }
  }, config.locales.map(function (value) {
    return _react.default.createElement(_SelectField.default.Option, {
      value: value,
      display: value,
      key: value
    });
  })) : undefined, themes.length > 1 ? _react.default.createElement(_SelectField.default, {
    label: "Theme",
    selectId: "terra-dev-site-theme-select",
    defaultValue: theme,
    onChange: function onChange(value) {
      setState({
        locale: locale,
        theme: value,
        direction: direction
      });
    }
  }, themes.map(function (value) {
    return _react.default.createElement(_SelectField.default.Option, {
      value: value,
      display: value,
      key: value
    });
  })) : undefined, config.directions.length > 1 ? _react.default.createElement(_SelectField.default, {
    label: "Direction",
    selectId: "terra-dev-site-direction-select",
    defaultValue: direction,
    onChange: function onChange(value) {
      setState({
        locale: locale,
        theme: theme,
        direction: value
      });
    }
  }, config.directions.map(function (value) {
    return _react.default.createElement(_SelectField.default.Option, {
      value: value,
      display: value,
      key: value
    });
  })) : undefined));
};

SettingsPicker.propTypes = propTypes;
var _default = SettingsPicker;
exports.default = _default;