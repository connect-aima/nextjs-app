* **`layout.tsx`**: Defines the shared page structure (like navbar/footer) and **persists across route changes**.
* **`template.tsx`**: Wraps a route like a layout but **re-renders fresh on every navigation**, resetting state.

Loading.tsx * **`loading.tsx`**: Shows a temporary loading UI (spinner/skeleton) **while a route or its data is being fetched**.
Error.tsx

Component hierarchy in Next.js (App Router, top → bottom):

layout.tsx → template.tsx → loading.tsx / error.tsx → page.tsx → child components

