# React useContext Hook


- The useContext Hook provides a way to **pass data deeply through the component tree without having to manually pass props at every level**.

- It helps **avoid prop drilling**, which can become messy when components are deeply nested.

## When to Use What?
- `Props`: Best for **parent-child communication** when the component structure is simple and local.

- `useContext`: **Best for global/shared data** like:

1. Authenticated user info

2. App theme (light/dark)



- Global state in large applications

### Syntax
```js
const value = useContext(MyContext);
```

### Example
```js
import React, { useContext } from 'react';

// 1. Create the context
const AuthContext = React.createContext(null);

// 2. Wrap components with the Provider
function App() {
  return (
    <AuthContext.Provider value={{ user: "Maheswari" }}>
      <Navbar />
      <ProfilePage />
    </AuthContext.Provider>
  );
}

// 3. Consume context using useContext
function Navbar() {
  const auth = useContext(AuthContext);
  return <p>User: {auth.user}</p>;
}

function ProfilePage() {
  const auth = useContext(AuthContext);
  return <h2>Welcome, {auth.user}!</h2>;
}
```