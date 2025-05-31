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