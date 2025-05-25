# Lifecycle Methods (Class Components)

- Lifecycle methods are functions that are called at different stages of a component's life in the DOM.

- They allow you to run code at key points like mounting, updating, and unmounting.

# Lifecycle Phases
1. **Mounting (Component is created and added to the DOM)**
- `componentDidMount()`:

- Called once immediately after the component is mounted.

- Used for API calls, DOM manipulation, or setting timers.

2. **Updating (Component is re-rendered due to state or props change)**
- `componentDidUpdate(prevProps, prevState)`:
- Called after every update.
- Useful for responding to prop or state changes.

3. **Unmounting (Component is removed from the DOM)**
- `componentWillUnmount()`:
- Called before the component is destroyed.
- Ideal for cleaning up (e.g., clearing intervals, unsubscribing).

