import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Hook to manage state

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
