import { GuideCard } from "../utils/GuideCard";
import { handleLinkClick } from "../utils/handleLinkClick";

// The main data source for the React Query guide
const queryData = [
  {
    id: "installation",
    category: "Installation",
    items: [
      {
        title: "Install TanStack Query",
        description: "Install the core TanStack Query library.",
        code: `npm i @tanstack/react-query\nbun add @tanstack/react-query`,
        link: {
          href: "https://tanstack.com/query/latest/docs/framework/react/installation",
          text: "Go to Official Website",
        },
      },
      {
        title: "Install DevTools (Recommended)",
        description:
          "Install the DevTools for the best development experience.",
        code: `npm i -D @tanstack/react-query-devtools\nbun add --dev @tanstack/react-query-devtools`,
        link: {
          href: "https://tanstack.com/query/v5/docs/framework/react/devtools",
          text: "Go to Official Website",
        },
      },
    ],
  },
  {
    id: "introduction",
    category: "Introduction to TanStack Query",
    items: [
      {
        title: "What is TanStack Query?",
        description:
          "TanStack Query (formerly React Query) is a powerful library for fetching, caching, synchronizing, and updating server state in your React applications. It's not a data fetching library itself (like Axios), but rather a state management library specifically for server state.",
      },
      {
        title: "Why Learn TanStack Query?",
        description:
          "It dramatically simplifies data fetching logic by abstracting away the complexities of caching, background refetching, and error handling. Mastering this library can significantly improve your app's performance and your productivity as a developer.",
      },
      {
        title: "Advantages of React Query",
        description: `<ul>
                    <li class="mb-2"><strong>Simplified Data Fetching:</strong> A simple <code>useQuery</code> hook replaces complex <code>useState</code> and <code>useEffect</code> combinations.</li>
                    <li class="mb-2"><strong>Automatic Caching:</strong> Data is cached intelligently, reducing redundant network requests and making your app feel faster.</li>
                    <li class="mb-2"><strong>Background Refetching:</strong> Keeps data fresh by automatically refetching in the background when the user re-focuses a window or reconnects to the internet.</li>
                    <li class="mb-2"><strong>Built-in States:</strong> Natively provides loading, error, and success states without extra boilerplate code.</li>
                    <li class="mb-2"><strong>Advanced Features:</strong> Out-of-the-box support for complex patterns like pagination, infinite scrolling, and optimistic updates.</li>
                </ul>`,
      },
    ],
  },
  {
    id: "comparison",
    category: "When to Use TanStack Query",
    items: [
      {
        title: "TanStack vs. Axios vs. Redux",
        fullWidth: true,
        description: `
                <div class="overflow-x-auto"><table class="w-full text-left">
                    <thead><tr><th>Feature</th><th>Axios</th><th>Redux/RTK</th><th>TanStack Query</th></tr></thead>
                    <tbody>
                        <tr><td>API Requests</td><td>✅</td><td>✅ (with thunks)</td><td>✅</td></tr>
                        <tr><td>Data Caching</td><td>❌</td><td>❌ (manual)</td><td>✅</td></tr>
                        <tr><td>Auto Refetch</td><td>❌</td><td>❌</td><td>✅</td></tr>
                        <tr><td>Pagination/Infinite Scroll</td><td>❌</td><td>❌</td><td>✅</td></tr>
                        <tr><td>Global UI State</td><td>❌</td><td>✅</td><td>❌</td></tr>
                        <tr><td>Boilerplate-Free</td><td>✅</td><td>❌</td><td>✅</td></tr>
                    </tbody>
                </table></div>
                <br><strong>Conclusion:</strong> Use them together!
                <ul>
                    <li>✅ <strong>Axios:</strong> To make the actual API requests.</li>
                    <li>✅ <strong>TanStack Query:</strong> To manage the server state (caching, loading, errors).</li>
                    <li>✅ <strong>Redux/RTK:</strong> For managing global client state (e.g., theme, user auth).</li>
                </ul>`,
      },
    ],
  },
  {
    id: "setup",
    category: "Configuration",
    items: [
      {
        title: "Setup QueryClientProvider",
        description:
          "The `QueryClientProvider` uses React's Context API to provide a `QueryClient` instance to your entire application. This client is the 'brain' that manages all of your caching and data fetching logic.",
        code: `// main.jsx or App.jsx\nimport { QueryClient, QueryClientProvider } from '@tanstack/react-query';\n\n// 1. Create a client instance\nconst queryClient = new QueryClient();\n\nfunction App() {\n  return (\n    // 2. Provide the client to your app\n    <QueryClientProvider client={queryClient}>\n      <YourAppComponents />\n    </QueryClientProvider>\n  );\n}`,
      },
      {
        title: "Adding the DevTools",
        description:
          "The DevTools are essential for debugging. They provide a visual interface to inspect your cache, see query states, and understand how your data is being managed.",
        code: `import { ReactQueryDevtools } from '@tanstack/react-query-devtools';\nimport { QueryClient, QueryClientProvider } from '@tanstack/react-query';\n\nconst queryClient = new QueryClient();\n\nfunction App() {\n  return (\n    <QueryClientProvider client={queryClient}>\n      <YourAppComponents />\n      <ReactQueryDevtools initialIsOpen={false} />\n    </QueryClientProvider>\n  );\n}`,
      },
    ],
  },
  {
    id: "core-hooks",
    category: "Core Concepts & Hooks",
    items: [
      {
        title: "Fetching Data with `useQuery`",
        description:
          "The `useQuery` hook is used for fetching (GET) data. It requires at least two arguments: a unique `queryKey` to identify the data, and a `queryFn` that returns a promise (e.g., an Axios call).",
        code: `import { useQuery } from '@tanstack/react-query';\nimport axios from 'axios';\n\n// API function\nconst fetchPosts = async () => {\n  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');\n  return data;\n};\n\nfunction Posts() {\n  const { data, isLoading, isError, error } = useQuery({\n    queryKey: ['posts'],\n    queryFn: fetchPosts,\n  });\n\n  if (isLoading) return <div>Loading...</div>;\n  if (isError) return <div>Error: {error.message}</div>;\n\n  return <ul>{data.map(post => <li key={post.id}>{post.title}</li>)}</ul>;\n}`,
      },
      {
        title: "Controlling Refetching with `staleTime`",
        description:
          "`staleTime` is the duration (in ms) that fetched data is considered 'fresh'. During this time, TanStack Query will serve the data from the cache without triggering a new network request. The default is `0` (always stale).",
        code: `useQuery({\n  queryKey: ['posts'],\n  queryFn: fetchPosts,\n  // Data will be considered fresh for 5 minutes\n  staleTime: 1000 * 60 * 5,\n});`,
      },
      {
        title: "Cache Management with `gcTime`",
        description:
          "`gcTime` (garbage collection time) is the duration (in ms) that inactive query data is kept in the cache. Once a query has no active observers and `gcTime` has passed, its data is deleted. The default is 5 minutes.",
        code: `useQuery({\n  queryKey: ['posts'],\n  queryFn: fetchPosts,\n  // Inactive data will be removed from cache after 10 minutes\n  gcTime: 1000 * 60 * 10,\n});`,
      },
      {
        title: "Modifying Data with `useMutation`",
        description:
          "The `useMutation` hook is for operations that modify data on the server (CREATE, UPDATE, DELETE). It gives you a `mutate` function to trigger the operation and handles loading/error states for you.",
        code: `import { useMutation, useQueryClient } from '@tanstack/react-query';\n\nconst createPost = async (newPost) => {\n  const { data } = await axios.post('/posts', newPost);\n  return data;\n};\n\nfunction AddPostForm() {\n  const queryClient = useQueryClient();\n\n  const mutation = useMutation({\n    mutationFn: createPost,\n    onSuccess: () => {\n      // Invalidate and refetch the 'posts' query to show the new post\n      queryClient.invalidateQueries({ queryKey: ['posts'] });\n    },\n  });\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    mutation.mutate({ title: 'New Post', body: 'Content' });\n  };\n\n  return <form onSubmit={handleSubmit}>...</form>;\n}`,
      },
      {
        title: "Managing Queries with `useQueryClient`",
        description: `The <code>useQueryClient</code> hook gives you access to the Query Client instance, which is the 'brain' behind all of your queries. It allows you to directly interact with the cache to perform actions like invalidating, updating, or reading query data.`,
        code: `import { useQueryClient } from '@tanstack/react-query';\n\nfunction MyComponent() {\n  const queryClient = useQueryClient();\n\n  // 1. Invalidate (mark as stale to trigger refetch)\n  queryClient.invalidateQueries({ queryKey: ['posts'] });\n\n  // 2. Manually set query data (optimistic updates)\n  queryClient.setQueryData(['posts', 1], (oldData) => {\n    return { ...oldData, title: 'Updated Title' };\n  });\n\n  // 3. Get query data from the cache\n  const posts = queryClient.getQueryData(['posts']);\n\n  // 4. Remove a query from the cache\n  queryClient.removeQueries({ queryKey: ['posts'] });\n}`,
      },
    ],
  },
  {
    id: "advanced-patterns",
    category: "Advanced Patterns",
    items: [
      {
        title: "Pagination with `keepPreviousData`",
        description:
          "For pagination, you can use `useQuery` and pass the page number in the `queryKey`. The `placeholderData: keepPreviousData` option ensures a smooth UX by showing the old data while the new page is being fetched.",
        code: `import { keepPreviousData } from '@tanstack/react-query';\n\nfunction PaginatedPosts() {\n  const [page, setPage] = useState(1);\n\n  const { data } = useQuery({\n    queryKey: ['posts', page],\n    queryFn: () => fetchPostsByPage(page),\n    placeholderData: keepPreviousData,\n  });\n\n  // ... render posts and next/previous buttons\n}`,
      },
      {
        title: "Infinite Scrolling with `useInfiniteQuery`",
        description:
          "The `useInfiniteQuery` hook is designed for infinite scroll lists. It manages pages of data for you and provides a `fetchNextPage` function to load more.",
        code: `const { \n  data, \n  fetchNextPage, \n  hasNextPage, \n  isFetchingNextPage \n} = useInfiniteQuery({\n  queryKey: ['projects'],\n  queryFn: fetchProjects, // e.g., ({ pageParam = 1 }) => fetch(\`/projects?page=\${pageParam}\`)\n  initialPageParam: 1,\n  getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,\n});`,
      },
      {
        title: "Implementing Infinite Scroll with Intersection Observer",
        description:
          "A common pattern is to use a library like `react-intersection-observer` to detect when the user has scrolled to the bottom of the list, and then call `fetchNextPage`.",
        code: `import { useInView } from 'react-intersection-observer';\n\nfunction InfiniteProjects() {\n  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(...);\n  const { ref, inView } = useInView();\n\n  React.useEffect(() => {\n    if (inView && hasNextPage) {\n      fetchNextPage();\n    }\n  }, [inView, hasNextPage, fetchNextPage]);\n\n  return (\n    <div>\n      {/* Map over data.pages to render projects */}\n      <div ref={ref}>Loading more...</div>\n    </div>\n  );\n}`,
      },
      {
        title: "Real-Time Polling with `refetchInterval`",
        description:
          "To keep data updated in real-time, use <code>refetchInterval</code> to poll the API at a regular interval. You can also use <strong><code>refetchIntervalInBackground: true</code></strong> to continue polling even when the browser tab is not active.<br><br><strong>Pro Tip:</strong> Polling respects <code>staleTime</code>. If you set a long <code>staleTime</code>, the query will only refetch at the specified interval *after* the data becomes stale. For immediate and consistent polling, keep <code>staleTime</code> at its default of <code>0</code>.",
        code: `useQuery({\n  queryKey: ['liveData'],\n  queryFn: fetchLiveData,\n  // Refetch every 5 seconds\n  refetchInterval: 5000,\n  // Continue polling even when tab is in the background\n  refetchIntervalInBackground: true,\n});`,
      },
    ],
  },
];

// The main component that you will export
export default function ReactQueryCheatSheet() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 font-sans text-gray-800 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="mb-10 text-center">
          <h1 className="mb-2 text-4xl font-extrabold text-gray-900 sm:text-5xl dark:text-neutral-100">
            TanStack Query Study Guide
          </h1>
          <p className="text-lg text-cyan-600 dark:text-cyan-400">
            A professional guide to managing server state in React.
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
                    {queryData.map((category) => (
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
            {queryData.map((categoryData) => (
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
                    <div
                      key={itemIndex}
                      className={item.fullWidth ? "md:col-span-2" : ""}
                    >
                      <GuideCard
                        title={item.title}
                        description={item.description || ""}
                        code={item.code}
                        link={item.link}
                      />
                    </div>
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
