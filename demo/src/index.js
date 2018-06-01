import React, { Component } from 'react';
import 'react-tippy/dist/tippy.css';
import { render } from 'react-dom';
import { Tooltip } from 'react-tippy';

import ConditionalWrap from '../../src';

const Button = ({ tooltip, children }) => (
  <ConditionalWrap condition={!!tooltip} wrap={children => <Tooltip title={tooltip}>{children}</Tooltip>}>
    <button>{children}</button>
  </ConditionalWrap>
);

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>conditional-wrap</h1>
        <Button> Normal button </Button>
        <br />
        <br />
        <Button tooltip="Hi there!"> Button with a tooltip! </Button>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
