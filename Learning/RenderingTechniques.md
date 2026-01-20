Static rendering summary

Static rendering is a strategy where the HTML is generated at build time.

Along with the HTML, RSC payloads for components and JavaScript chunks for client-side hydration are created.

Direct route visits serve HTML files.

Client-side navigation uses RSC payloads and JavaScript chunks without additional server requests.

Static rendering is great for performance, especially in blogs, documentation, and marketing pages.

Dynamic Rendering (in very simple words)

Dynamic rendering means the page is created fresh every time someone requests it.
Next.js runs your server code on each request, fetches new data, and then sends the page.

Think of it like cooking a meal on order. Every customer gets food made just for them.

Use dynamic rendering when:

Content depends on the user

You need cookies, auth, or real-time data

Example: dashboards, profiles, admin panels

Result:

Slightly slower than static

More server work

Personalized content

One-line difference (lock this in your brain)

Static = build once, reuse forever
Dynamic = rebuild on every request






In Next.js (App Router), **dynamic parameters** are used when a part of the URL changes, such as `/blog/1` or `/blog/hello-world`, and **static parameters** are used when you want those dynamic routes to be **pre-generated ahead of time** for better performance. A **dynamic route** is created by using square brackets in the folder name, for example `app/blog/[slug]/page.tsx`, where `slug` is the dynamic parameter coming from the URL. By default, Next.js will treat this route as dynamic, meaning the page can be rendered on demand. However, when you add the `generateStaticParams` function, you are telling Next.js in advance which values of that dynamic parameter exist, so it can **prebuild those pages at build time** and serve them instantly like static pages.

`generateStaticParams` runs **only on the server at build time** and returns a list of parameter values. Next.js then uses these values to generate static pages for each route. This is extremely useful for content that is known beforehand, such as blog posts, documentation pages, or product listings. For example, if you know you have blog posts with slugs like `next-js`, `react`, and `javascript`, you can statically generate all of them once instead of rendering them on every request. This improves performance, reduces server load, and gives better SEO because the HTML already exists.

Here is a simple example that shows the full concept in action:

```ts
// app/blog/[slug]/page.tsx

// This tells Next.js which dynamic routes should be statically generated
export async function generateStaticParams() {
  return [
    { slug: "next-js" },
    { slug: "react" },
    { slug: "javascript" },
  ];
}

// Page component receives the dynamic param
export default function BlogPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
      <p>This page was statically generated at build time.</p>
    </div>
  );
}
```

In this example, even though `[slug]` is a **dynamic parameter**, the pages `/blog/next-js`, `/blog/react`, and `/blog/javascript` are **static pages** because they were generated during the build. This is the key idea: **dynamic params control the URL structure**, while **static params control when the page is generated**. If a user requests one of these routes, Next.js simply serves the already-built page instead of running server logic again.

Dynamic parameters without `generateStaticParams` are useful when the data is unknown or frequently changing, such as user profiles or dashboards where pages depend on authentication or real-time data. Static parameters with `generateStaticParams` are best for predictable content that does not change often, such as blogs, courses, or product catalogs. In short, **dynamic params define flexible URLs**, and **static params optimize those URLs by pre-rendering them**, allowing Next.js to balance flexibility with performance in a smart way.
