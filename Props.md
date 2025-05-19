# 🌟 Props in React

- **Props** = Properties  
- Props are used to **pass data** from one component to another.


## 🔹 Why Use Props?

- To **send data** from **parent** to **child** component
- Makes components **reusable** and **dynamic**


## 🧾 Example

### Parent Component

```jsx
function App() {
  return <Welcome name="Maheswari" />;
}
```

### Child Component

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;  // Hello, Maheswari
}
```

- We cannot change props inside the child component.

- Props are immutable.

