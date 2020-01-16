"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bind = _interopRequireDefault(require("classnames/bind"));

var _ContentLoadedModule = _interopRequireDefault(require("./ContentLoaded.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var cx = _bind.default.bind(_ContentLoadedModule.default);

var propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.element.isRequired
};

var ContentLoaded = function ContentLoaded(_ref) {
  var children = _ref.children,
      className = _ref.className;
  (0, _react.useEffect)(function () {
    if (!window.location || window.location.length < 2) {
      return;
    }

    var elementName = window.location.hash.slice(1);
    var element = document.getElementById(elementName);

    if (element) {
      element.scrollIntoView();
    }
  }, []);
  return _react.default.createElement("div", {
    id: "site",
    "data-terra-dev-site-content": true,
    className: "".concat(cx('dev-site-content'), " ").concat(className)
  }, children);
};

ContentLoaded.propTypes = propTypes;
var _default = ContentLoaded;
exports.default = _default;