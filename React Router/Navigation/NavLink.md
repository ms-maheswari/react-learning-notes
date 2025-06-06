## NavLink
- Does everything Link does, plus it can **style the link differently when it's active**  (e.g., when the current URL matches the link's path).

- Very useful for navigation bars or menus where you want to highlight the current page.

### Example 
```js
import { NavLink } from 'react-router-dom';

<NavLink 
  to="/about" 
  style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
>
  About
</NavLink>
```
