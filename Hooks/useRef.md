# React useRef Hook

- The useRef Hook allows you to **persist values between renders.**

- **Store mutable values that do not cause re-renders when changed.**

- Access DOM elements directly.

## Syntax
```js
const myRef = useRef(initialValue);
```

- myRef.current holds the value (can be an element, number, object, etc.)

## Key Features
- Does not trigger a re-render when `.current` changes.

- Maintains value across re-renders.


### Example

```js
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}
```