# React Router

- React Router is a **library for routing** in React applications.

- It enables **navigation between different components (pages) without reloading the browser**.

## Features

- Enables client-side routing.

- Navigates without page reload.

- Supports nested routes and dynamic URLs.

- Manages browser history

## Installation

```
npm install react-router-dom
```

## Basic Concepts

- `BrowserRouter` - Wraps the app to enable routing.
- `Routes` - Container for all the route definitions.
- `Route` - Defines a path and the component to render.
- `Link` - Used for navigating between routes without reloading the page.
- `useNavigate` - Programmatically navigate to another route.

## Example

```js
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}
function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
