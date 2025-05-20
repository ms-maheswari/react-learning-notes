## Conditional Rendering

Conditional rendering in React allows you to render different UI elements based on some conditions.


Eg : if, logical AND, OR , Ternary Operator

### Example

```js
function Greeting ( { isLoggedIn }){
    if(isLoggedIn){
        return <h1> Welcome Maheswari ! </h1>
    }
    return <h1> Please Login </h1>
}
```