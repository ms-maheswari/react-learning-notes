# What is a Hook?

- Hooks are **functions in React** that let you use **state** and other features in **function components**.
- Hooks help you write **cleaner** and **reusable** code without using class components.
- Example: `useState`, `useEffect` are commonly used Hooks.
- Hooks also let you **reuse logic** across components **without changing the component structure**.



## Rules of Hooks

1.  Only use Hooks **inside React function components** or **custom Hooks**  
2.  Only call Hooks **at the top level**, not inside loops or conditions  
3.  **Do not call Hooks conditionally**



##  Common Built-in Hooks

| Hook           | What it Does                          |
|----------------|----------------------------------------|
| `useState()`   | Adds state to a function component     |
| `useEffect()`  | Runs code for side effects (e.g., API) |
| `useContext()` | Gets values from React Context         |
| `useRef()`     | Stores a reference (DOM or value)      |
| `useReducer()` | Handles more complex state logic       |
