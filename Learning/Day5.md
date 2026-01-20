 Server Components (easy meaning)

Server Components run only on the server
They are used to **fetch data, talk to databases, and prepare UI**. The code never reaches the browser, so it is secure and fast.

You should use Server Components when:

* You need data from a database or API
* You don’t need clicks, state, or event handlers

Example:

```tsx
// Server Component (default)
export default async function UsersPage() {
  const users = await fetch("https://api.example.com/users").then(res => res.json())

  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
}
```

---

### Client Components (easy meaning)

**Client Components run in the browser.**
They are used for **interaction** like clicks, state, animations, and forms.

You should use Client Components when:

* You need `useState`, `useEffect`
* You need button clicks or inputs

Example:

```tsx
"use client"

import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>
}
```

---

### Server + Client Component Pattern (very important)

The **best pattern in Next.js** is:

> **Server Component fetches data → Client Component handles interaction**

Example:

```tsx
// Server Component
import Counter from "./Counter"

export default async function Page() {
  const data = await fetch("https://api.example.com/data").then(res => res.json())

  return <Counter initialData={data} />
}
```

```tsx
// Client Component
"use client"

export default function Counter({ initialData }) {
  return <button>{initialData}</button>
}
```

---

### Suspense (easy meaning)

**Suspense allows you to show a fallback UI while waiting for data.**
Instead of blocking the whole page, React pauses only the slow part.

Think of it like:

> “Show loading here, not everywhere.”

Example:

```tsx
import { Suspense } from "react"

export default function Page() {
  return (
    <Suspense fallback={<p>Loading users...</p>}>
      <Users />
    </Suspense>
  )
}
```

---

### Streaming (easy meaning)

**Streaming means the page is sent to the browser in pieces.**
Fast parts appear immediately, slow parts come later.

Suspense **enables streaming**.

What user experiences:

* Header shows instantly
* Content loads gradually
* Page feels fast

Example:

```tsx
<Suspense fallback={<p>Loading posts...</p>}>
  <Posts />
</Suspense>
```

Here:

* Header renders immediately
* `<Posts />` streams when ready

---

### How Streaming + Suspense work together

* **Suspense** decides *what can wait*
* **Streaming** decides *how it is sent*

Without Suspense → whole page waits
With Suspense → page arrives piece by piece

---

### Simple comparison table

| Concept          | What it does                 |
| ---------------- | ---------------------------- |
| Server Component | Fetches data, runs on server |
| Client Component | Handles clicks & state       |
| Suspense         | Shows fallback while waiting |
| Streaming        | Sends UI in chunks           |

---

### Final mental shortcut (remember this)

* **Server Components** → data & logic
* **Client Components** → interaction
* **Suspense** → “wait here”
* **Streaming** → “send early, finish later”
