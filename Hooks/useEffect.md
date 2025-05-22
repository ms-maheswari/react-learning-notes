#  React `useEffect` Hook

- The `useEffect` Hook lets you **perform side effects** in your function components.
- It replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` used in class components.

##  What are Side Effects?
Side effects are operations that interact with the **outside world** or **non-React parts** of the app, such as:
- Fetching data from an API
- Direct DOM manipulation
- Setting up subscriptions or timers
- Logging or analytics



##  Why useEffect?

- In class components:
  - `componentDidMount()` → Run after the component mounts
  - `componentDidUpdate()` → Run after each update
  - `componentWillUnmount()` → Run before unmounting

- In function components:
  - `useEffect()` handles **all** of these behaviors using a **single unified API**.



##  Example: Fetching API Data

```js
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => setData(json));
  }, []); // Runs only once on initial mount

  return (
    <ul>
      {data.slice(0, 5).map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```