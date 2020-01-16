"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCompactLayout = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bind = _interopRequireDefault(require("classnames/bind"));

var _breakpoints = require("terra-application/lib/breakpoints");

var _terraOverlay = _interopRequireDefault(require("terra-overlay"));

var _OverlayContainer = _interopRequireDefault(require("terra-overlay/lib/OverlayContainer"));

var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));

var _ComponentToolbar = _interopRequireDefault(require("./_ComponentToolbar"));

var _CollapsingNavigationMenu = _interopRequireDefault(require("./_CollapsingNavigationMenu"));

var _SecondaryNavigationLayoutModule = _interopRequireDefault(require("./SecondaryNavigationLayout.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var cx = _bind.default.bind(_SecondaryNavigationLayoutModule.default);

var shouldFocusToggle = false;
var shouldFocusMenu = false;

var isCompactLayout = function isCompactLayout(activeBreakpoint) {
  return activeBreakpoint === 'tiny' || activeBreakpoint === 'small';
};

exports.isCompactLayout = isCompactLayout;
var propTypes = {
  /**
   * Items to display for the menu
   */
  menuItems: _propTypes.default.PropTypes.arrayOf(_propTypes.default.shape({
    text: _propTypes.default.string,
    path: _propTypes.default.string
  })).isRequired,

  /**
   * The menu item selected.
   */
  selectedMenuItemKey: _propTypes.default.string,

  /**
   * Callback on selecting a terminal menu item.
   */
  onTerminalMenuItemSelection: _propTypes.default.func.isRequired,

  /**
   * Sets initial menu open state.
   */
  isMenuOpen: _propTypes.default.bool,

  /**
   * Hide the dev tools part of the toolbar.
   */
  hideDevTools: _propTypes.default.bool,

  /**
   * The element to display in the main content area.
   */
  children: _propTypes.default.element.isRequired,

  /**
   * @private Passed in through withActiveBreakpoint
   */
  activeBreakpoint: _propTypes.default.string.isRequired
};

var SecondaryNavigationLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SecondaryNavigationLayout, _React$Component);

  _createClass(SecondaryNavigationLayout, null, [{
    key: "buildAncestorMap",
    value: function buildAncestorMap(menuItems) {
      var ancestorMap = {};
      menuItems.forEach(function (item) {
        ancestorMap[item.key] = SecondaryNavigationLayout.findAncestor(item.key, menuItems);
      });
      return ancestorMap;
    }
  }, {
    key: "findAncestor",
    value: function findAncestor(key, menuItems) {
      for (var i = 0, numberOfItems = menuItems.length; i < numberOfItems; i += 1) {
        var item = menuItems[i];

        if (item.childKeys && item.childKeys.indexOf(key) >= 0) {
          return item;
        }
      }

      return undefined;
    }
  }, {
    key: "buildSelectionPath",
    value: function buildSelectionPath(key, ancestorMap) {
      if (ancestorMap[key]) {
        return _toConsumableArray(SecondaryNavigationLayout.buildSelectionPath(ancestorMap[key].key, ancestorMap)).concat([key]);
      }

      return [key];
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var newState = {};

      if (state.previousActiveBreakpoint !== props.activeBreakpoint) {
        newState.previousActiveBreakpoint = props.activeBreakpoint;
      }

      if (!isCompactLayout(props.activeBreakpoint) && state.compactMenuIsOpen) {
        /**
         * The compact menu state is reset when a non-compact breakpoint is active.
         */
        newState.compactMenuIsOpen = false;
      }

      return newState;
    }
  }, {
    key: "flattenMenuItems",
    value: function flattenMenuItems(menuItems) {
      return menuItems.reduce(function (accumulatedMenuItems, item) {
        var generatedMenuItems = [{
          text: item.text,
          key: item.path,
          hasSubMenu: item.hasSubMenu,
          childKeys: item.childItems && item.childItems.map(function (childItem) {
            return childItem.path;
          }),
          metaData: !item.hasSubMenu ? {
            path: item.path
          } : undefined
        }];

        if (item.childItems) {
          generatedMenuItems = generatedMenuItems.concat(SecondaryNavigationLayout.flattenMenuItems(item.childItems));
        }

        return accumulatedMenuItems.concat(generatedMenuItems);
      }, []);
    }
  }]);

  function SecondaryNavigationLayout(props) {
    var _this;

    _classCallCheck(this, SecondaryNavigationLayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SecondaryNavigationLayout).call(this, props));
    _this.closeMenu = _this.closeMenu.bind(_assertThisInitialized(_this));
    _this.openMenu = _this.openMenu.bind(_assertThisInitialized(_this));
    _this.handleCollapsingMenuSelection = _this.handleCollapsingMenuSelection.bind(_assertThisInitialized(_this));
    var flattenedMenuItems = SecondaryNavigationLayout.flattenMenuItems(props.menuItems);
    _this.ancestorMap = SecondaryNavigationLayout.buildAncestorMap(flattenedMenuItems);
    _this.state = {
      flattenedMenuItems: flattenedMenuItems,
      previousActiveBreakpoint: props.activeBreakpoint,
      compactMenuIsOpen: props.isMenuOpen,
      menuIsPinnedOpen: true
    };
    return _this;
  }

  _createClass(SecondaryNavigationLayout, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (shouldFocusToggle) {
        document.getElementById('terra-dev-site-menu-toggle').focus();
        shouldFocusToggle = false;
      }

      if (shouldFocusMenu) {
        document.getElementById('terra-dev-site-nav-menu').focus();
        shouldFocusMenu = false;
      }
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      var activeBreakpoint = this.props.activeBreakpoint;
      var isCompact = isCompactLayout(activeBreakpoint);

      if (isCompact) {
        shouldFocusToggle = true;
        this.setState({
          compactMenuIsOpen: false
        });
      } else {
        this.setState({
          menuIsPinnedOpen: false
        });
      }
    }
  }, {
    key: "openMenu",
    value: function openMenu() {
      var activeBreakpoint = this.props.activeBreakpoint;
      var isCompact = isCompactLayout(activeBreakpoint);

      if (isCompact) {
        shouldFocusMenu = true;
        this.setState({
          compactMenuIsOpen: true
        });
      } else {
        this.setState({
          menuIsPinnedOpen: true
        });
      }
    }
  }, {
    key: "handleCollapsingMenuSelection",
    value: function handleCollapsingMenuSelection(selectionKey) {
      var onTerminalMenuItemSelection = this.props.onTerminalMenuItemSelection;
      var flattenedMenuItems = this.state.flattenedMenuItems;
      var selectedItem = flattenedMenuItems.find(function (item) {
        return item.key === selectionKey;
      });
      this.setState({
        compactMenuIsOpen: false
      }, function () {
        // If an endpoint has been reached, reset selection path and update.
        if (onTerminalMenuItemSelection) {
          onTerminalMenuItemSelection(selectionKey, selectedItem.metaData);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          menuItems = _this$props.menuItems,
          activeBreakpoint = _this$props.activeBreakpoint,
          selectedMenuItemKey = _this$props.selectedMenuItemKey,
          hideDevTools = _this$props.hideDevTools;
      var _this$state = this.state,
          compactMenuIsOpen = _this$state.compactMenuIsOpen,
          menuIsPinnedOpen = _this$state.menuIsPinnedOpen;
      var isCompact = isCompactLayout(activeBreakpoint);
      var menuIsVisible = isCompact ? compactMenuIsOpen : menuIsPinnedOpen;
      /**
       * At within compact viewports, the navigation menu should render each menu item as if it has
       * a submenu, as selecting a childless item will cause the menu close.
       */

      var onToggle;

      if (isCompact) {
        onToggle = compactMenuIsOpen ? this.closeMenu : this.openMenu;
      } else {
        onToggle = menuIsPinnedOpen ? this.closeMenu : this.openMenu;
      }

      return _react.default.createElement("div", {
        className: cx(['container', {
          'panel-is-open': menuIsVisible
        }])
      }, _react.default.createElement("div", {
        className: cx('panel')
      }, _react.default.createElement(_CollapsingNavigationMenu.default, {
        menuItems: menuItems,
        selectedPath: selectedMenuItemKey,
        onSelect: this.handleCollapsingMenuSelection
      })), _react.default.createElement(_OverlayContainer.default, {
        className: cx('content'),
        overlay: _react.default.createElement(_terraOverlay.default, {
          isOpen: isCompact ? compactMenuIsOpen : false,
          isRelativeToContainer: true,
          className: cx('overlay'),
          onRequestClose: this.closeMenu
        })
      }, _react.default.createElement(_terraContentContainer.default, {
        header: _react.default.createElement(_ComponentToolbar.default, {
          menuIsVisible: menuIsVisible,
          onToggle: onToggle,
          hideDevTools: hideDevTools
        }),
        fill: true
      }, children)));
    }
  }]);

  return SecondaryNavigationLayout;
}(_react.default.Component);

SecondaryNavigationLayout.propTypes = propTypes;

var _default = (0, _breakpoints.withActiveBreakpoint)(SecondaryNavigationLayout);

exports.default = _default;