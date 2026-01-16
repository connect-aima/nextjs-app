* **`layout.tsx`**: Defines the shared page structure (like navbar/footer) and **persists across route changes**.
* **`template.tsx`**: Wraps a route like a layout but **re-renders fresh on every navigation**, resetting state.

Loading.tsx * **`loading.tsx`**: Shows a temporary loading UI (spinner/skeleton) **while a route or its data is being fetched**.
Error.tsx
 
Component hierarchy in Next.js (App Router, top → bottom):

layout.tsx → template.tsx → loading.tsx / error.tsx → page.tsx → child components,
Parralel routes slots ,condotional routes,unmatched routes ,
intercepted routes=>Intercepting routes in Next.js let you show a different route inside the current page UI (like opening a modal) without fully navigating away.
They keep the background page visible while rendering the intercepted route on top, improving UX for things like previews or dialogs.
Conventions of intercepting routes
Here are the conventions of intercepting routes in Next.js, straight and clean:

Intercepting routes use special folder names with dots: (.), (..), (...), (....)

(.) → intercepts a route at the same level

(..) → intercepts a route one level above

(...) → intercepts a route from the root /

(....) → intercepts a route two levels above

These folders are placed inside the route that wants to intercept another route, not inside the target route
