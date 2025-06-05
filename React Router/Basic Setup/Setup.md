##  React Router
 React Router is essential for building multi-page SPAs (Single Page Applications).

### 1. Installation
In your React project directory, install React Router:

```js
npm install react-router-dom
```

### 2. Basic Setup with BrowserRouter
In App.js or index.js, wrap your routes with `<BrowserRouter>:`

```js
// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
```