import React from 'react';

export const ConditionalWrap = ({ condition, children, wrap }) =>
  condition ? React.cloneElement(wrap(children)) : children;

export default ConditionalWrap;
