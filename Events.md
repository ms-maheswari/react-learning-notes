## Events in React

- Events are actions triggered by **user interactions** (like clicks, typing, form submission).
- React handles events using **camelCase** syntax and **functions**.


###  Example

```js
import React from "react";

function App() {
  function handleClick() {
    alert("Button Clicked");
  }

  return (
    <button onClick={handleClick}>Click me</button>
  );
}

export default App;
```


- `Event Listener - onClick `( Attaches to the  element and wait for event )

- `Event Handler - handleClick` ( Function that runs when the event happens )