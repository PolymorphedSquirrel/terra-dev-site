"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _terraSearchField = _interopRequireDefault(require("terra-search-field"));

var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));

var _terraActionHeader = _interopRequireDefault(require("terra-action-header"));

var _terraInfiniteList = _interopRequireWildcard(require("terra-infinite-list"));

var _disclosureManager = require("terra-application/lib/disclosure-manager");

var _fuse = _interopRequireDefault(require("fuse.js"));

var _terraStatusView = _interopRequireDefault(require("terra-status-view"));

var _bind = _interopRequireDefault(require("classnames/bind"));

var _searchModule = _interopRequireDefault(require("./search.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var cx = _bind.default.bind(_searchModule.default);

var propTypes = {
  /**
   * Function to fetch items to search.
   */
  fetchSearchItems: _propTypes.default.func.isRequired,

  /**
   * item selected callback
   */
  onItemSelected: _propTypes.default.func.isRequired
};

var clearResults = function clearResults(setState) {
  return setState({
    results: []
  });
};

var handleSearch = function handleSearch(searchString, state, setState) {
  var options = {
    shouldSort: true,
    tokenize: true,
    includeMatches: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 2,
    keys: ['title', 'tags']
  };
  var searchItems = state.searchItems;

  if (searchItems) {
    var fuse = new _fuse.default(searchItems, options); // "list" is the item array

    var results = fuse.search(searchString);
    setState({
      results: results,
      searchString: searchString,
      searchItems: searchItems
    });
  }
};

var handleSelect = function handleSelect(metaData, onItemSelected, disclosureManager) {
  onItemSelected(metaData.item.path);
  disclosureManager.closeDisclosure();
};

var highlight = function highlight(key, result) {
  // Filter the matches to only ones that match the key
  var valueArray = result.matches.filter(function (item) {
    return item.key === key;
  }).map(function (match) {
    var startIndex = 0; // Split the value string to have spans around the matching indices

    var splitString = match.indices.reduce(function (acc, index) {
      acc.push(match.value.slice(startIndex, index[0]));
      acc.push(_react.default.createElement("span", {
        key: index[0]
      }, match.value.slice(index[0], index[1] + 1)));
      startIndex = index[1] + 1;
      return acc;
    }, []);
    splitString.push(match.value.slice(startIndex));
    return splitString;
  }); // The item has a match that should be highlighted

  if (valueArray.length === 1) {
    return valueArray[0];
  } // else return the item


  return result.item[key];
};

var searchItem = function searchItem(result) {
  return _react.default.createElement("div", {
    className: cx('item')
  }, _react.default.createElement("div", {
    className: cx('title')
  }, highlight('title', result)), _react.default.createElement("div", {
    className: cx('path')
  }, highlight('path', result)));
};

var cacheSearchItems = function cacheSearchItems(fetchSearchItems, state, setState) {
  if (!state.searchItems) {
    fetchSearchItems().then(function (searchItems) {
      var results = state.results,
          searchString = state.searchString;
      setState({
        results: results,
        searchString: searchString,
        searchItems: searchItems
      });
      handleSearch(searchString, state, setState);
    });
  }
};

var Search = function Search(_ref) {
  var fetchSearchItems = _ref.fetchSearchItems,
      onItemSelected = _ref.onItemSelected;

  var _useState = (0, _react.useState)({
    results: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  cacheSearchItems(fetchSearchItems, state, setState);
  var searchItems = state.searchItems,
      searchString = state.searchString,
      results = state.results;

  var disclosureManager = _react.default.useContext(_disclosureManager.DisclosureManagerContext);

  var searchRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    searchRef.focus();
  }, []);
  return _react.default.createElement(_terraContentContainer.default, {
    header: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_terraActionHeader.default, {
      title: "Site Search",
      onBack: disclosureManager.goBack,
      onClose: disclosureManager.closeDisclosure
    }), _react.default.createElement(_terraSearchField.default, {
      className: cx('search-field'),
      isBlock: true,
      placeholder: "Search",
      onSearch: function onSearch(string) {
        return handleSearch(string, state, setState);
      },
      onInvalidSearch: function onInvalidSearch() {
        return clearResults(setState);
      },
      inputRefCallback: function inputRefCallback(inputRef) {
        searchRef = inputRef;
      }
    })),
    fill: true
  }, searchItems && searchString && results.length <= 0 && _react.default.createElement(_terraStatusView.default, {
    variant: "no-matching-results"
  }), results.length > 0 && _react.default.createElement(_terraInfiniteList.default, {
    dividerStyle: "standard"
  }, state.results.map(function (result) {
    return _react.default.createElement(_terraInfiniteList.Item, {
      key: result.item.path,
      isSelectable: true,
      metaData: result,
      onSelect: function onSelect(event, metaData) {
        return handleSelect(metaData, onItemSelected, disclosureManager);
      }
    }, searchItem(result));
  })));
};

Search.propTypes = propTypes;
var _default = Search;
exports.default = _default;