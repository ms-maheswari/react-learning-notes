# React Components

- A component is a **reusable piece of UI** in a React application.

- Component's name MUST start with an **upper case letter**.
## Types of Components:
1. **Functional Component** – Modern, uses hooks
2. **Class Component** – Older, uses lifecycle methods

---

### Functional Component Example:

```js
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```
### Class Component Example:
```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```
