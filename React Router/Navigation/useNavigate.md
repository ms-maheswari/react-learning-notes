## Programmatic Navigation with `useNavigate`

useNavigate allows you to **navigate based on actions** (e.g., button click, form submission).

## Example 
```js
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // some logic here
    navigate('/dashboard');
  };

  return <button onClick={handleLogin}>Login</button>;
}
```
