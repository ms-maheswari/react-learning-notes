## Link

- Used to navigate between routes.

- Simple and lightweight.

- No built-in support for identifying the active route.


### Example

```js
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/about">About</Link>
    </nav>
  );
}
```
