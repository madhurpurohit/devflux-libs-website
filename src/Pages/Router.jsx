import { GuideCard } from "../utils/GuideCard";
import { handleLinkClick } from "../utils/handleLinkClick";

// The main data source for the React Router guide
const routerData = [
  {
    id: "installation",
    category: "Installation",
    items: [
      {
        title: "React Router DOM",
        description: "Install the standard library for routing in React.",
        code: `npm i react-router-dom\nbun add react-router-dom`,
        link: {
          href: "https://reactrouter.com/en/main/start/installation",
          text: "Go to Official Website",
        },
      },
    ],
  },
  {
    id: "introduction",
    category: "Introduction to React Router",
    items: [
      {
        title: "What is React Router?",
        description:
          "React Router is the standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.",
      },
      {
        title: "Types of Routers",
        description:
          "React Router provides different routers for different environments. For web projects, the primary choice is the <strong>Data API Mode</strong> using <code>createBrowserRouter</code>, which we will focus on here. It enables modern features like loaders, actions, and fetchers.",
      },
      {
        title: "Creating a Browser Router",
        description:
          "The core of React Router is the router instance. You define your application's routes as an array of objects, where each object maps a URL `path` to a React `element`.",
        code: `import { createBrowserRouter, RouterProvider } from "react-router-dom";\nimport Home from "./pages/Home";\nimport About from "./pages/About";\n\n// 1. Define the routes\nconst router = createBrowserRouter([\n  {\n    path: "/", // Corresponds to the root URL\n    element: <Home />,\n  },\n  {\n    path: "/about",\n    element: <About />,\n  },\n]);\n\n// 2. Render the app with the router provider\nfunction App() {\n  return <RouterProvider router={router} />;\n}`,
      },
      {
        title: "Helper: createRoutesFromElements",
        description:
          "This helper function allows you to define your routes using familiar JSX syntax inside a `<Route>` component, which is often more readable and declarative for developers accustomed to React.",
        code: `import {\n  createBrowserRouter,\n  createRoutesFromElements,\n  Route,\n  RouterProvider,\n} from "react-router-dom";\n\nconst router = createBrowserRouter(\n  createRoutesFromElements(\n    <Route>\n      <Route path="/" element={<Home />} />\n      <Route path="/about" element={<About />} />\n    </Route>\n  )\n);\n\nfunction App() {\n  return <RouterProvider router={router} />;\n}`,
      },
    ],
  },
  {
    id: "layout-navigation",
    category: "Layout & Navigation",
    items: [
      {
        title: "App Layout & The <Outlet /> Component",
        description:
          "An App Layout is a parent route that wraps child routes to share a common UI, such as a header, sidebar, or footer. The <strong>`<Outlet />`</strong> component is used within the parent layout to render the matching child route's element.",
        code: `// AppLayout.jsx\nimport { Outlet } from 'react-router-dom';\nimport Header from './Header';\n\nfunction AppLayout() {\n  return (\n    <div>\n      <Header />\n      <main>\n        {/* Child routes will be rendered here */}\n        <Outlet />\n      </main>\n    </div>\n  );\n}\n\n// router configuration\ncreateBrowserRouter([\n  {\n    element: <AppLayout />,\n    children: [\n      { path: '/', element: <Home /> },\n      { path: 'about', element: <About /> },\n    ]\n  }\n]);`,
      },
      {
        title: "Navigation: <Link> vs <NavLink>",
        description:
          "React Router provides two components for navigation:<br><br>• <strong>`Link`</strong>: The primary component for creating navigation links. Use it when you don't need to know if the link is active or not.<br><br>• <strong>`NavLink`</strong>: A special version of `<Link>` that can determine whether or not it is 'active'. This is useful for styling the current navigation link differently.",
        code: `import { Link, NavLink } from 'react-router-dom';\n\nfunction MainNavigation() {\n  return (\n    <nav>\n      {/* NavLink is for primary nav items that need an active state */}\n      <NavLink to="/dashboard">Dashboard</NavLink>\n\n      {/* Link is for items that don't need active styling */}\n      <Link to="/settings">Settings</Link>\n    </nav>\n  );\n}`,
      },
      {
        title: "Styling an Active Link",
        description:
          "There are two common ways to style an active `NavLink`.<br><br><strong>Method 1 (CSS Class):</strong> By default, an active `NavLink` gets an `active` class, which you can style in your CSS.<br><br><strong>Method 2 (Function):</strong> You can pass a function to the `className` or `style` prop to apply styles conditionally based on the `isActive` property.",
        code: `import { NavLink } from 'react-router-dom';\n\nfunction Header() {\n  return (\n    <nav>\n      {/* Method 2: Using the isActive property */}\n      <NavLink \n        to="/"\n        className={({ isActive }) => isActive ? 'text-cyan-400' : 'text-white'}\n      >\n        Home\n      </NavLink>\n      <NavLink \n        to="/about"\n        className={({ isActive }) => isActive ? 'text-cyan-400' : 'text-white'}\n      >\n        About\n      </NavLink>\n    </nav>\n  );\n}`,
      },
    ],
  },
  {
    id: "error-handling",
    category: "Error Handling & Programmatic Navigation",
    items: [
      {
        title: "Handling Errors with `useRouteError`",
        description:
          "When an error is thrown during a loader, action, or rendering, React Router will catch it and render the closest `errorElement`. The `useRouteError` hook provides access to the error object within your error component.",
        code: `// In your router setup\nconst router = createBrowserRouter([\n  {\n    path: "/",\n    element: <AppLayout />,\n    errorElement: <ErrorPage />,\n    children: [ /* ... your routes */ ]\n  }\n]);\n\n// ErrorPage.jsx\nimport { useRouteError, useNavigate } from 'react-router-dom';\n\nfunction ErrorPage() {\n  const error = useRouteError();\n  const navigate = useNavigate();\n\n  return (\n    <div>\n      <h1>Oops! Something went wrong.</h1>\n      <p>{error.statusText || error.message}</p>\n      <button onClick={() => navigate(-1)}>Go Back</button>\n    </div>\n  );\n}`,
      },
      {
        title: "Programmatic Navigation with `useNavigate`",
        description:
          "The `useNavigate` hook gives you a function to navigate programmatically. This is useful for redirecting users after a form submission. Calling <strong>`Maps(-1)`</strong> is equivalent to clicking the browser's back button, taking the user to their previous page.",
        code: `import { useNavigate } from 'react-router-dom';\n\nfunction MyComponent() {\n  const navigate = useNavigate();\n\n  function handleLogin() {\n    // after successful login...\n    navigate('/dashboard');\n  }\n\n  return <button onClick={handleLogin}>Login</button>;\n}`,
      },
    ],
  },
  {
    id: "data-loading",
    category: "Data Loading & State",
    items: [
      {
        title: "Data Loading with `loader`",
        description:
          "A `loader` is a function you provide on a route that fetches data *before* the component renders. This avoids showing loading spinners inside your component and ensures data is ready when the component mounts. It's a more efficient pattern than fetching data in a `useEffect` hook.",
        code: `// In your router setup\nimport { getMovies } from './api';\n\nconst router = createBrowserRouter([\n  {\n    path: '/movies',\n    element: <MoviesPage />,\n    loader: async () => {\n      return getMovies(); // API call\n    },\n  }\n]);`,
      },
      {
        title: "Accessing Data with `useLoaderData`",
        description:
          "The `useLoaderData` hook provides the data returned from your route's `loader` function. This makes data access simple and declarative within your component.",
        code: `// MoviesPage.jsx\nimport { useLoaderData } from 'react-router-dom';\n\nfunction MoviesPage() {\n  // The data from the loader is available here\n  const movies = useLoaderData();\n\n  return (\n    <ul>\n      {movies.map(movie => <li key={movie.id}>{movie.title}</li>)}\n    </ul>\n  );\n}`,
      },
      {
        title: "Global Loading State with `useNavigation`",
        description:
          "The `useNavigation` hook provides the current navigation state (`idle`, `submitting`, or `loading`). You can use this in a layout component to show a global loading indicator whenever any route's loader is running.",
        code: `// AppLayout.jsx\nimport { Outlet, useNavigation } from 'react-router-dom';\n\nfunction AppLayout() {\n  const navigation = useNavigation();\n  const isLoading = navigation.state === 'loading';\n\n  return (\n    <div>\n      <Header />\n      {isLoading && <div className="global-spinner">Loading...</div>}\n      <main>\n        <Outlet />\n      </main>\n    </div>\n  );\n}`,
      },
      {
        title: "Exploring the `useNavigation` Object",
        description:
          "The `useNavigation` hook returns an object with detailed information about the current navigation. This is useful for building advanced pending UI, optimistic updates, and reading form data during submissions.",
        code: `import { useNavigation } from 'react-router-dom';\n\nfunction SomeComponent(){\n  const navigation = useNavigation();\n\n  // The current navigation state: 'idle', 'submitting', or 'loading'\n  navigation.state;\n\n  // The next location the user is navigating to\n  navigation.location;\n\n  // If it's a form submission, the FormData is available\n  navigation.formData;\n\n  // ... and much more for advanced use cases\n  navigation.json;\n  navigation.text;\n  navigation.formAction;\n  navigation.formMethod;\n  navigation.formEncType;\n}`,
      },
    ],
  },
  {
    id: "advanced-routing",
    category: "Advanced Routing",
    items: [
      {
        title: "Dynamic Routing with URL Parameters",
        description:
          "Dynamic routing allows you to create routes that match a pattern. You define a dynamic segment in the path with a colon (e.g., `:movieId`). The `useParams` hook lets you access the actual value of this segment from the URL.",
        code: `// api.js - Example API function\nexport async function getMovieDetails(id) {\n  const res = await fetch(\`https://api.example.com/movies/\${id}\`);\n  return res.json();\n}\n\n// Router setup\n{\n  path: 'movies/:movieId',\n  element: <MovieDetails />,\n  loader: ({ params }) => getMovieDetails(params.movieId),\n}\n\n// MovieDetails.jsx\nimport { useParams, useLoaderData } from 'react-router-dom';\n\nfunction MovieDetails() {\n  const { movieId } = useParams(); // Accesses 'movieId' from the URL\n  const movie = useLoaderData();\n\n  return <h1>Details for {movie.title} (ID: {movieId})</h1>;\n}`,
      },
      {
        title: "Handling Form Submissions with `action`",
        description:
          "An `action` is a function you provide on a route to handle data mutations (POST, PUT, etc.). The <strong>`method`</strong> prop on the `<Form>` component specifies the HTTP method, while the <strong>`action`</strong> prop specifies the URL path to submit to. If `action` is omitted, the form submits to the route it's rendered in.",
        code: `// Router setup\n{\n  path: 'contact',\n  element: <ContactPage />,\n  action: async ({ request }) => {\n    const formData = await request.formData();\n    const submission = Object.fromEntries(formData);\n    await submitContactForm(submission);\n    return redirect('/thank-you');\n  }\n}\n\n// ContactPage.jsx\nimport { Form } from 'react-router-dom';\n\nfunction ContactPage() {\n  return (\n    // This form will POST to the '/contact' route's action\n    <Form method="post">\n      <input name="email" />\n      <textarea name="message" />\n      <button type="submit">Submit</button>\n    </Form>\n  );\n}`,
      },
    ],
  },
];

// The main component that you will export
export default function ReactRouter() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 font-sans text-gray-800 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="mb-10 text-center">
          <h1 className="mb-2 text-4xl font-extrabold text-gray-900 sm:text-5xl dark:text-neutral-100">
            React Router Study Guide
          </h1>
          <p className="text-lg text-cyan-600 dark:text-cyan-400">
            Your complete guide to client-side routing in React.
          </p>
        </header>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sticky Table of Contents */}
          <aside className="mb-8 lg:col-span-3 lg:mb-0">
            <div className="sidebar sticky top-25">
              <div className="rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
                <h2 className="mb-4 border-b border-gray-200 pb-2 text-xl font-bold text-gray-900 dark:border-gray-600 dark:text-cyan-400">
                  Table of Contents
                </h2>
                <nav>
                  <ul className="space-y-2 text-sm">
                    {routerData.map((category) => (
                      <li key={category.id}>
                        <a
                          href={`#${category.id}`}
                          onClick={(e) => handleLinkClick(e, category.id)}
                          className="text-gray-600 transition-colors hover:text-cyan-500 dark:text-gray-400 dark:hover:text-cyan-400"
                        >
                          {category.category}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-12 lg:col-span-9">
            {routerData.map((categoryData) => (
              <section
                key={categoryData.id}
                id={categoryData.id}
                className="scroll-mt-20"
              >
                <h2 className="mb-8 border-b-2 border-cyan-500 pb-2 text-3xl font-bold text-gray-900 dark:text-white">
                  {categoryData.category}
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {categoryData.items.map((item, itemIndex) => (
                    <GuideCard
                      key={itemIndex}
                      title={item.title}
                      description={item.description || ""}
                      code={item.code}
                      link={item.link} // Pass the link prop
                    />
                  ))}
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
