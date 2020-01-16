"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bind = _interopRequireDefault(require("classnames/bind"));

var KeyCode = _interopRequireWildcard(require("keycode-js"));

var _IconCaretRight = _interopRequireDefault(require("terra-icon/lib/icon/IconCaretRight"));

var _IconCaretDown = _interopRequireDefault(require("terra-icon/lib/icon/IconCaretDown"));

var _siteConfigPropTypes = require("../site/siteConfigPropTypes");

var _CollapsingNavigationMenuModule = _interopRequireDefault(require("./CollapsingNavigationMenu.module.scss"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var cx = _bind.default.bind(_CollapsingNavigationMenuModule.default);

var propTypes = {
  /**
   * Currently selected path
   */
  selectedPath: _propTypes.default.string,

  /**
   * menu items to display.
   */
  menuItems: _siteConfigPropTypes.menuItemPropType.isRequired,

  /**
   * On select callback
   */
  onSelect: _propTypes.default.func.isRequired
};
var defaultProps = {
  selectedPath: undefined
};
/**
 * Enables focus styles for the target of the given event. Typically used as an onBlur callback on selectable elements.
 */

var enableFocusStyles = function enableFocusStyles(event) {
  event.currentTarget.setAttribute('data-focus-styles-enabled', 'true');
};
/**
 * Disables focus styles for the target of the given event. Typically used as an onMouseDown callback on selectable elements.
 */


var disableFocusStyles = function disableFocusStyles(event) {
  event.currentTarget.setAttribute('data-focus-styles-enabled', 'false');
};

var CollapsingNavigationMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CollapsingNavigationMenu, _React$Component);

  _createClass(CollapsingNavigationMenu, null, [{
    key: "keysToItem",

    /**
     * Returns a list of keys in the tree to 'open' that lead to the selected path.
     * @param {*} item the item to traverse
     * @param {*} selectedPath the currently selected path
     */
    value: function keysToItem(item, selectedPath) {
      var paths = [];

      if (item.childItems) {
        item.childItems.some(function (childItem) {
          if (selectedPath === childItem.path) {
            paths = [item.path]; // if found bail early.

            return true;
          }

          var childPaths = CollapsingNavigationMenu.keysToItem(childItem, selectedPath);

          if (childPaths.length > 0) {
            paths = childPaths.concat([item.path]); // if found bail early.

            return true;
          }

          return false;
        });
      }

      return paths;
    }
    /**
     * Returns an object containing the keys of the items to open to reveal the selected path in the tree.
     * @param {*} menuItems list of all menu items
     * @param {*} selectedPath the currently selected path
     */

  }, {
    key: "openKeysToItem",
    value: function openKeysToItem(menuItems, selectedPath) {
      return CollapsingNavigationMenu.keysToItem(menuItems, selectedPath).reduce(function (acc, path) {
        acc[path] = true;
        return acc;
      }, {});
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var menuItems = _ref.menuItems,
          selectedPath = _ref.selectedPath;
      var newState = {
        isNewSelectedPath: false
      };

      if (state.previousSelectedPath !== selectedPath) {
        newState.isNewSelectedPath = true;
        newState.openKeys = _objectSpread({}, state.openKeys, {}, CollapsingNavigationMenu.openKeysToItem(menuItems[0], selectedPath));
        newState.previousSelectedPath = selectedPath;
      }

      return newState;
    }
  }]);

  function CollapsingNavigationMenu(props) {
    var _this;

    _classCallCheck(this, CollapsingNavigationMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CollapsingNavigationMenu).call(this, props));
    var menuItems = props.menuItems,
        selectedPath = props.selectedPath;
    _this.renderMenuItems = _this.renderMenuItems.bind(_assertThisInitialized(_this));
    _this.handleOnClick = _this.handleOnClick.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.selectedItem = _react.default.createRef();
    _this.state = {
      previousSelectedPath: selectedPath,
      openKeys: CollapsingNavigationMenu.openKeysToItem(menuItems[0], selectedPath),
      isNewSelectedPath: false
    };
    return _this;
  }

  _createClass(CollapsingNavigationMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.selectedItem && this.selectedItem.current) {
        this.selectedItem.current.scrollIntoView();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var isNewSelectedPath = this.state.isNewSelectedPath;

      if (isNewSelectedPath && this.selectedItem && this.selectedItem.current) {
        this.selectedItem.current.scrollIntoView();
      }
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event, item) {
      if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE || event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
        this.handleOnClick(event, item);
      }
    }
  }, {
    key: "handleOnClick",
    value: function handleOnClick(event, item) {
      var onSelect = this.props.onSelect;
      var openKeys = this.state.openKeys;

      if (!item.childItems) {
        onSelect(item.path);
        return;
      }

      openKeys[item.path] = !openKeys[item.path];
      this.setState({
        openKeys: openKeys
      });
    }
  }, {
    key: "renderMenuItems",
    value: function renderMenuItems(menuItems, firstLevel) {
      var _this2 = this;

      var selectedPath = this.props.selectedPath;
      var openKeys = this.state.openKeys;

      if (!menuItems) {
        return undefined;
      }

      return menuItems.map(function (item) {
        var itemIsOpen = openKeys[item.path];
        var itemHasChildren = item.childItems !== undefined;
        var isSelected = false;
        var selectedRef;

        if (selectedPath === item.path) {
          isSelected = true;
          selectedRef = _this2.selectedItem;
        }

        return _react.default.createElement(_react.default.Fragment, {
          key: item.path
        }, _react.default.createElement("div", {
          className: !firstLevel ? cx('indent') : null
        }, _react.default.createElement("div", {
          className: cx(['item', {
            'is-selected': isSelected
          }]),
          tabIndex: "0",
          role: "link",
          "aria-haspopup": itemHasChildren,
          onKeyDown: function onKeyDown(event) {
            return _this2.handleKeyDown(event, item);
          },
          onClick: function onClick(event) {
            return _this2.handleOnClick(event, item);
          },
          onBlur: enableFocusStyles,
          onMouseDown: disableFocusStyles,
          "data-focus-styles-enabled": true,
          ref: selectedRef
        }, itemHasChildren ? _react.default.createElement("span", {
          className: cx('disclosure')
        }, itemIsOpen ? _react.default.createElement(_IconCaretDown.default, {
          className: cx('caret')
        }) : _react.default.createElement(_IconCaretRight.default, {
          className: cx('caret')
        })) : null, item.name), itemIsOpen ? _this2.renderMenuItems(item.childItems) : null));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var menuItems = this.props.menuItems;
      return _react.default.createElement("div", {
        className: cx('collapsing-navigation-menu'),
        id: "terra-dev-site-nav-menu",
        tabIndex: "-1"
      }, menuItems ? this.renderMenuItems(menuItems[0].childItems, true) : undefined);
    }
  }]);

  return CollapsingNavigationMenu;
}(_react.default.Component);

CollapsingNavigationMenu.propTypes = propTypes;
CollapsingNavigationMenu.defaultProps = defaultProps;
var _default = CollapsingNavigationMenu;
exports.default = _default;