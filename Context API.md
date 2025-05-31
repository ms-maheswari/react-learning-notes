# Context API in React

The Context API allows you to **share state or values between components without passing props** manually at every level.

It's ideal for:

 - Theme switching (dark/light mode)

- User authentication state

- Language localization

- Global configuration

## Step 1: Create the Context

```js
// UserContext.js
import { createContext } from 'react';

const UserContext = createContext();
export default UserContext;
```

## Step 2: Provide the Context

```js
// App.js
import React from 'react';
import UserContext from './UserContext';
import Child from './Child';

function App() {
  return (
    <UserContext.Provider value="Maheswari">
      <Child />
    </UserContext.Provider>
  );
}

export default App;
```

## Consume the Context

```js
// Child.js
import React, { useContext } from 'react';
import UserContext from './UserContext';

function Child() {
  const user = useContext(UserContext);
  return <h2>Hello, {user}!</h2>;
}

export default Child;
```

## Output
```js
Hello, Maheswari!
```