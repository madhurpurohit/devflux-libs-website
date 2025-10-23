import { GuideCard } from "../utils/GuideCard";
import { handleLinkClick } from "../utils/handleLinkClick";

// The main data source for the Axios guide
const axiosData = [
  {
    id: "introduction",
    category: "Introduction to Axios",
    items: [
      {
        title: "What is Axios?",
        description:
          "Axios is a <strong>promise-based HTTP client</strong> for the browser and Node.js. It makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. It's the most popular library for handling API requests in modern web development.",
      },
      {
        title: "Why Choose Axios over Fetch?",
        description: `While the browser's native <code>fetch()</code> API is powerful, Axios provides several key advantages that make it a preferred choice for many developers:<br><br>
        <ul>
            <li class="mb-2"><strong>Automatic JSON Transformation:</strong> Axios automatically stringifies request data to JSON and parses response data from JSON, eliminating the need for manual <code>JSON.stringify()</code> and <code>response.json()</code> calls.</li>
            <li class="mb-2"><strong>Better Error Handling:</strong> Axios uses promises that reject on network errors or HTTP status codes outside the 2xx range (e.g., 404, 500), making error handling more straightforward with a single <code>.catch()</code> block.</li>
            <li class="mb-2"><strong>Request & Response Interceptors:</strong> You can intercept requests or responses to transform data or add headers (like authentication tokens) before they are sent or handled.</li>
            <li class="mb-2"><strong>Wider Browser Support:</strong> Axios has built-in support for older browsers (like IE11) without requiring polyfills.</li>
        </ul>`,
      },
      {
        title: "Installation",
        description: "You can install Axios using either npm or bun.",
        code: `npm install axios\n\n# Or using bun\nbun add axios`,
      },
    ],
  },
  {
    id: "making-requests",
    category: "Making Requests",
    items: [
      {
        title: "Request Method Aliases",
        description:
          "For convenience, Axios provides aliases for all common HTTP request methods. The `config` object is optional.",
        code: `axios.get(url, [config])\naxios.post(url, [data], [config])\naxios.put(url, [data], [config])\naxios.patch(url, [data], [config])\naxios.delete(url, [config])`,
      },
      {
        title: "GET Request: Fetching Data",
        description:
          "Here is a practical example of fetching a list of users from an API using `axios.get()` inside a React component. It includes handling loading and error states.",
        code: `import React, { useState, useEffect } from 'react';\nimport axios from 'axios';\n\nfunction UserList() {\n  const [users, setUsers] = useState([]);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    const fetchUsers = async () => {\n      try {\n        const response = await axios.get('https://jsonplaceholder.typicode.com/users');\n        setUsers(response.data);\n      } catch (err) {\n        setError('Failed to fetch users.');\n        console.error(err);\n      } finally {\n        setLoading(false);\n      }\n    };\n\n    fetchUsers();\n  }, []);\n\n  if (loading) return <p>Loading...</p>;\n  if (error) return <p>{error}</p>;\n\n  return (\n    <ul>\n      {users.map(user => <li key={user.id}>{user.name}</li>)}\n    </ul>\n  );\n}`,
      },
    ],
  },
  {
    id: "professional-setup",
    category: "Professional Setup",
    items: [
      {
        title: "Creating an Axios Instance",
        description:
          "For larger applications, it's a best practice to create a centralized Axios instance with a custom configuration. This allows you to define a `baseURL`, `timeout`, and common headers (like API keys or auth tokens) in one place.",
        code: `// src/api/axiosInstance.js\nimport axios from 'axios';\n\nconst axiosInstance = axios.create({\n  baseURL: 'https://api.yourapp.com/v1',\n  timeout: 5000, // Request will time out after 5 seconds\n  headers: {\n    'Content-Type': 'application/json',\n    'Authorization': \`Bearer \${process.env.REACT_APP_API_TOKEN}\`\n  }\n});\n\nexport default axiosInstance;`,
      },
      {
        title: "Creating a Reusable API Service",
        description:
          "Building on the instance, you can create a service layer that exports functions for each API endpoint. This abstracts the API logic away from your components, making your code cleaner, more modular, and easier to maintain and test.",
        code: `// src/services/postService.js\nimport axiosInstance from '../api/axiosInstance';\n\n// Function to get all posts\nexport const getAllPosts = () => {\n  return axiosInstance.get('/posts');\n};\n\n// Function to get a single post by ID\nexport const getPostById = (id) => {\n  return axiosInstance.get(\`/posts/\${id}\`);\n};\n\n// Function to create a new post\nexport const createPost = (postData) => {\n  return axiosInstance.post('/posts', postData);\n};\n\n// Function to update a post\nexport const updatePost = (id, postData) => {\n  return axiosInstance.put(\`/posts/\${id}\`, postData);\n};\n\n// Function to delete a post\nexport const deletePost = (id) => {\n  return axiosInstance.delete(\`/posts/\${id}\`);\n};`,
      },
    ],
  },
  {
    id: "crud-operations",
    category: "CRUD Operations Explained",
    items: [
      {
        title: "What are CRUD Operations?",
        description:
          "CRUD stands for <strong>Create, Read, Update, and Delete</strong>. These are the four basic functions of persistent storage and are the foundation for most web applications that interact with data. Axios maps these operations directly to HTTP methods.",
      },
      {
        title: "CREATE (Add Data)",
        description:
          "<strong>HTTP Method: `POST`</strong><br>Used to create a new resource on the server. You send the data for the new resource in the request body.",
        code: `import { createPost } from './services/postService';\n\nconst newPost = { title: 'New Post', body: 'This is the content.' };\n\ncreatePost(newPost)\n  .then(response => {\n    console.log('Post created:', response.data);\n  })\n  .catch(error => {\n    console.error('Error creating post:', error);\n  });`,
      },
      {
        title: "READ (Get Data)",
        description:
          "<strong>HTTP Method: `GET`</strong><br>Used to retrieve a resource or a list of resources from the server. This is a read-only operation and does not modify data.",
        code: `import { getAllPosts } from './services/postService';\n\ngetAllPosts()\n  .then(response => {\n    console.log('All posts:', response.data);\n  })\n  .catch(error => {\n    console.error('Error fetching posts:', error);\n  });`,
      },
      {
        title: "UPDATE (Update Data)",
        description:
          "<strong>HTTP Method: `PUT` or `PATCH`</strong><br>Used to update an existing resource. `PUT` typically replaces the entire resource, while `PATCH` applies a partial update.",
        code: `import { updatePost } from './services/postService';\n\nconst updatedData = { title: 'Updated Title' };\nconst postId = 1;\n\nupdatePost(postId, updatedData)\n  .then(response => {\n    console.log('Post updated:', response.data);\n  })\n  .catch(error => {\n    console.error('Error updating post:', error);\n  });`,
      },
      {
        title: "DELETE (Delete Data)",
        description:
          "<strong>HTTP Method: `DELETE`</strong><br>Used to remove a specific resource from the server.",
        code: `import { deletePost } from './services/postService';\n\nconst postIdToDelete = 1;\n\ndeletePost(postIdToDelete)\n  .then(response => {\n    console.log('Post deleted successfully:', response.status);\n  })\n  .catch(error => {\n    console.error('Error deleting post:', error);\n  });`,
      },
    ],
  },
  {
    id: "best-practices",
    category: "Advanced Tips & Best Practices",
    items: [
      {
        title: "Use Interceptors for Global Logic",
        description:
          "Interceptors are a powerful feature for running your code or modifying requests and responses globally. A common use case is to attach an authentication token to every outgoing request.",
        code: `// Add a request interceptor to the instance\naxiosInstance.interceptors.request.use(config => {\n  // Get token from local storage or state management\n  const token = localStorage.getItem('authToken');\n  if (token) {\n    config.headers.Authorization = \`Bearer \${token}\`;\n  }\n  return config;\n}, error => {\n  return Promise.reject(error);\n});`,
      },
      {
        title: "Handle Global Errors Gracefully",
        description:
          "You can also use response interceptors to handle common HTTP errors (like 401 Unauthorized or 500 Server Error) in one place, preventing code duplication. For example, you can automatically log the user out if a 401 error is received.",
        code: `// Add a response interceptor\naxiosInstance.interceptors.response.use(response => {\n  return response;\n}, error => {\n  if (error.response.status === 401) {\n    // Handle unauthorized access, e.g., redirect to login\n    window.location.href = '/login';\n  }\n  return Promise.reject(error);\n});`,
      },
      {
        title: "Cancel Requests on Component Unmount",
        description:
          "To prevent memory leaks and race conditions, you should cancel pending API requests when a React component unmounts. Axios supports cancellation using an `AbortController`.",
        code: `useEffect(() => {\n  const controller = new AbortController();\n\n  const fetchData = async () => {\n    try {\n      const response = await axios.get('/data', {\n        signal: controller.signal // Pass the signal to the request\n      });\n      // ... setData\n    } catch (error) {\n      if (axios.isCancel(error)) {\n        console.log('Request canceled:', error.message);\n      } else {\n        // ... setError\n      }\n    }\n  };\n\n  fetchData();\n\n  // Cleanup function to abort the request\n  return () => {\n    controller.abort();\n  };\n}, []);`,
      },
      {
        title: "Use Environment Variables for Secrets",
        description:
          "Never hard-code sensitive information like API keys or base URLs directly in your code. Store them in environment variables (e.g., in a `.env` file) and access them via `process.env`. This is more secure and flexible.",
        code: `# .env.local file\nREACT_APP_API_BASE_URL=https://api.example.com\nREACT_APP_API_KEY=your_secret_api_key\n\n// Access in your code\nconst baseURL = process.env.REACT_APP_API_BASE_URL;`,
      },
      {
        title: "Make Concurrent Requests with `axios.all`",
        description:
          "If you need to make multiple independent API calls at the same time, use `axios.all` and `axios.spread`. This is more efficient than making them sequentially, as the requests are fired in parallel.",
        code: `const getUserProfile = () => axios.get('/user/123');\nconst getUserPermissions = () => axios.get('/user/123/permissions');\n\naxios.all([getUserProfile(), getUserPermissions()])\n  .then(axios.spread((profile, permissions) => {\n    // Both requests are complete\n    console.log('Profile:', profile.data);\n    console.log('Permissions:', permissions.data);\n  }));`,
      },
      {
        title: "Keep Your API Services Lean",
        description:
          "Your API service layer (like the `postService.js` example) should be responsible for one thing: communicating with the API. It should not contain business logic, data manipulation, or state management. Keep that logic inside your components or state management solution (like Redux or Zustand). This separation of concerns makes your application much easier to test and reason about.",
      },
    ],
  },
];

// The main component that you will export
export default function Axios() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 font-sans text-gray-800 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="mb-10 text-center">
          <h1 className="mb-2 text-4xl font-extrabold text-gray-900 sm:text-5xl dark:text-neutral-100">
            Axios Study Guide
          </h1>
          <p className="text-lg text-cyan-600 dark:text-cyan-400">
            A professional guide to mastering API requests with Axios.
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
                    {axiosData.map((category) => (
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
            {axiosData.map((categoryData) => (
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
                      link={null}
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
