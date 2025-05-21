#  React useState Hook

- The `useState` Hook allows you to **track state** in a **function component**.

- In React, **state** refers to data that can **change over time** and **affect what the user sees on the screen**.


##  Syntax

```js
const [state, setState] = useState(initialValue);
```
`state`: current state value

`setState`: function to update the value

`initialValue`: starting value (e.g., 0, '', [], etc.)

## What Can State Hold?
You can use useState to store:

- `Strings`: useState("text")

- `Numbers`: useState(0)

- `Booleans`: useState(true)

- `Arrays`: useState([])

- `Objects`: useState({ key: value })

### Example : Login Form with multiple useState's
```js
import React, { useState } from 'react';

function LoginForm() {
    // Multiple useState's
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Logging in with", username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

### Example : Login Form with single useState

```js
import React, { useState } from 'react';

function LoginForm() {
  // Single useState with an object
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Logging in with", user.username, user.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  );
}
```