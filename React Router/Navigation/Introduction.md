In React (especially with React Router), **navigation means moving between different pages or views** in your application without reloading the entire webpage.

## What is Navigation?
Navigation is how users go from:

`/home → /about`

`/products → /products/123`

`/login → /dashboard`

In React apps, we use navigation to **load different components based on the current URL path** — all within a Single Page Application (SPA).

| Feature        | Tool                     | Description                            |
| -------------- | ------------------------ | -------------------------------------- |
| Links          | `Link` / `NavLink`       | For clickable navigation               |
| Programmatic   | `useNavigate()`          | For navigation via buttons or logic    |
| Route Matching | `<Routes>` and `<Route>` | To decide what to render for each path |
