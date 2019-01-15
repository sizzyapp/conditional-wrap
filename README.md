### 🙋‍♂️ Made by [@thekitze](https://twitter.com/thekitze)  

### Other projects:
- 🏫 [React Academy](https://reactacademy.io) - Interactive React and GraphQL workshops
- 💌 [Twizzy](https://twizzy.app) - A standalone app for Twitter DM
- 💻 [Sizzy](https://sizzy.co) - A tool for testing responsive design on multiple devices at once
- 🤖 [JSUI](https://github.com/kitze/JSUI) - A powerful UI toolkit for managing JavaScript apps

---

# conditional-wrap
A simple React component for wrapping children based on a condition.   

### Install
```
yarn add conditional-wrap
```

### Example
[Open demo on CodeSandbox](https://codesandbox.io/s/2wmr700nwp)

```js
import React from 'react';
import { render } from 'react-dom';
import { Tooltip } from 'react-tippy';

import ConditionalWrap from 'conditional-wrap';

const Button = ({ tooltip, children }) => (
  <ConditionalWrap
    condition={!!tooltip}
    wrap={children => (
      <Tooltip position="bottom" title={tooltip}>
        {children}
      </Tooltip>
    )}
  >
    <button>{children}</button>
  </ConditionalWrap>
);

const Demo = () => (
  <div>
    <Button> Normal button </Button>
    <Button tooltip="Hi there!"> Button with a tooltip! </Button>
  </div>
);

render(<Demo />, document.getElementById('root'));
```
