## State

- State refers to an object that **stores components dynamic data**

- It triggers **re-render** when it is updated.

## Syntax

```js
const [state, setState] = useState(initialValue);
```

-  **state** - current state value
-  **setState** - function to update the state
-  **initialValue** - starting value of the state

### Example

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count} </p>
      <button onClick={() => setCount(count + 1)}> Click me</button>
    </div>
  );
}

export default Counter;
```
