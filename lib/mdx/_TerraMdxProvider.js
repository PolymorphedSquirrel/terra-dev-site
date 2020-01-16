"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@mdx-js/react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tag = _interopRequireDefault(require("./_Tag"));

var _HTag = _interopRequireDefault(require("./_HTag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * Children are children.
   */
  children: _propTypes.default.node
};
/**
 * The components to substitute in for the mdx components
 * We do this to be able to use css modules to style the tags.
 */

var components = {
  a: function a(props) {
    return (0, _Tag.default)({
      Tag: 'a',
      props: props
    });
  },
  blockquote: function blockquote(props) {
    return (0, _Tag.default)({
      Tag: 'blockquote',
      props: props
    });
  },
  code: function code(props) {
    return (0, _Tag.default)({
      Tag: 'code',
      props: props
    });
  },
  dd: function dd(props) {
    return (0, _Tag.default)({
      Tag: 'dd',
      props: props
    });
  },
  dl: function dl(props) {
    return (0, _Tag.default)({
      Tag: 'dl',
      props: props
    });
  },
  dt: function dt(props) {
    return (0, _Tag.default)({
      Tag: 'dt',
      props: props
    });
  },
  h1: function h1(props) {
    return (0, _HTag.default)({
      Tag: 'h1',
      props: props
    });
  },
  h2: function h2(props) {
    return (0, _HTag.default)({
      Tag: 'h2',
      props: props
    });
  },
  h3: function h3(props) {
    return (0, _HTag.default)({
      Tag: 'h3',
      props: props
    });
  },
  h4: function h4(props) {
    return (0, _HTag.default)({
      Tag: 'h4',
      props: props
    });
  },
  h5: function h5(props) {
    return (0, _HTag.default)({
      Tag: 'h5',
      props: props
    });
  },
  h6: function h6(props) {
    return (0, _HTag.default)({
      Tag: 'h6',
      props: props
    });
  },
  hr: function hr(props) {
    return (0, _Tag.default)({
      Tag: 'hr',
      props: props
    });
  },
  img: function img(props) {
    return (0, _Tag.default)({
      Tag: 'img',
      props: props
    });
  },
  input: function input(props) {
    return (0, _Tag.default)({
      Tag: 'input',
      props: props
    });
  },
  kbd: function kbd(props) {
    return (0, _Tag.default)({
      Tag: 'kbd',
      props: props
    });
  },
  li: function li(props) {
    return (0, _Tag.default)({
      Tag: 'li',
      props: props
    });
  },
  ol: function ol(props) {
    return (0, _Tag.default)({
      Tag: 'ol',
      props: props
    });
  },
  p: function p(props) {
    return (0, _Tag.default)({
      Tag: 'p',
      props: props
    });
  },
  pre: function pre(props) {
    return (0, _Tag.default)({
      Tag: 'pre',
      props: props
    });
  },
  strong: function strong(props) {
    return (0, _Tag.default)({
      Tag: 'strong',
      props: props
    });
  },
  table: function table(props) {
    return (0, _Tag.default)({
      Tag: 'table',
      props: props
    });
  },
  td: function td(props) {
    return (0, _Tag.default)({
      Tag: 'td',
      props: props
    });
  },
  th: function th(props) {
    return (0, _Tag.default)({
      Tag: 'th',
      props: props
    });
  },
  tr: function tr(props) {
    return (0, _Tag.default)({
      Tag: 'tr',
      props: props
    });
  },
  ul: function ul(props) {
    return (0, _Tag.default)({
      Tag: 'ul',
      props: props
    });
  }
};
/**
 * The MDX provider to have MDX use our base react components.
 */

var TerraMDXProvider = function TerraMDXProvider(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_react2.MDXProvider, {
    components: components
  }, children);
};

TerraMDXProvider.propTypes = propTypes;
var _default = TerraMDXProvider;
exports.default = _default;