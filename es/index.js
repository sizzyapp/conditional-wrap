import React from 'react';

export default (function (_ref) {
  var condition = _ref.condition,
      children = _ref.children,
      wrap = _ref.wrap;
  return condition ? React.cloneElement(wrap(children)) : children;
});