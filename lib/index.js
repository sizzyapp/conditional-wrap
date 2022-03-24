'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var condition = _ref.condition,
      children = _ref.children,
      wrap = _ref.wrap;
  return condition ? _react2.default.cloneElement(wrap(children)) : children;
};

module.exports = exports['default'];