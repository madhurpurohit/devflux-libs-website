import { GuideCard } from "../utils/GuideCard";
import { handleLinkClick } from "../utils/handleLinkClick";

// The main data source for the Redux Toolkit guide
const rtkData = [
  {
    id: "installation",
    category: "Installation",
    items: [
      {
        title: "Redux Toolkit",
        description:
          "The official, recommended way to write Redux logic. It includes Redux core, Immer, Reselect, and Redux Thunk.",
        code: `npm i @reduxjs/toolkit\nbun add @reduxjs/toolkit`,
        link: {
          href: "https://redux-toolkit.js.org/introduction/getting-started",
          text: "Go to Official Website",
        },
      },
      {
        title: "React Redux",
        description: "Official React bindings for Redux.",
        code: `npm i react-redux\nbun add react-redux`,
        link: {
          href: "https://react-redux.js.org/introduction/getting-started",
          text: "Go to Official Website",
        },
      },
      {
        title: "Redux DevTools Extension",
        description:
          "A browser extension for debugging Redux applications. (Install as Dev Dependency)",
        code: `npm i -D @redux-devtools/extension\nbun add --dev @redux-devtools/extension`,
        link: {
          href: "https://www.npmjs.com/package/@redux-devtools/extension",
          text: "Go to Official Website",
        },
      },
    ],
  },
  {
    id: "store-setup",
    category: "Store Setup",
    items: [
      {
        title: "1. Create & Configure the Store",
        description:
          "Create a `store.js` file. The `configureStore` function from Redux Toolkit simplifies store setup, automatically combining your slice reducers and adding the Redux DevTools Extension.",
        code: `// store.js\nimport { configureStore } from "@reduxjs/toolkit";\nimport cartReducer from "./features/cart/cartSlice";\nimport userReducer from "./features/user/userSlice";\n\nconst store = configureStore({\n  // The reducer object is where you combine all your slice reducers\n  reducer: {\n    cart: cartReducer,\n    user: userReducer,\n  },\n});\n\nexport default store;`,
      },
      {
        title: "2. Provide the Store to Your App",
        description:
          "In your `main.jsx` file, wrap your `<App />` component with the `<Provider>` component from `react-redux` and pass your created store as a prop. This makes the Redux store available to any nested components.",
        code: `// main.jsx\nimport React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport { Provider } from 'react-redux';\nimport store from './store';\nimport App from './App';\n\nReactDOM.createRoot(document.getElementById('root')).render(\n  <React.StrictMode>\n    <Provider store={store}>\n      <App />\n    </Provider>\n  </React.StrictMode>\n);`,
      },
    ],
  },
  {
    id: "slices",
    category: "Creating Slices",
    items: [
      {
        title: "What is a Slice?",
        description:
          "A 'slice' is a collection of Redux reducer logic and actions for a single feature in your app. The `createSlice` function generates action creators and action types for you, drastically reducing boilerplate.",
      },
      {
        title: "Creating a Slice",
        description:
          "A slice requires a `name` to identify it, an `initialState` value, and a `reducers` object containing functions that define how the state can be updated.",
        code: `// features/cart/cartSlice.js\nimport { createSlice } from "@reduxjs/toolkit";\n\nconst initialState = {\n  items: [],\n  totalQuantity: 0,\n};\n\nconst cartSlice = createSlice({\n  name: 'cart',\n  initialState,\n  reducers: {\n    // Reducer for adding an item to the cart\n    addItem(state, action) {\n      // Redux Toolkit uses Immer internally, so you can 'mutate' the state directly\n      state.items.push(action.payload);\n      state.totalQuantity++;\n    },\n    // Reducer for removing an item\n    removeItem(state, action) {\n      state.items = state.items.filter(item => item.id !== action.payload.id);\n      state.totalQuantity--;\n    },\n  },\n});\n\n// Export the generated action creators\nexport const { addItem, removeItem } = cartSlice.actions;\n\n// Export the reducer function to be added to the store\nexport default cartSlice.reducer;`,
      },
    ],
  },
  {
    id: "using-state-actions",
    category: "Using State & Actions in Components",
    items: [
      {
        title: "Reading State with `useSelector`",
        description:
          "The `useSelector` hook allows your components to extract data from the Redux store state. It takes a selector function as an argument, which receives the entire state object and should return the specific piece of data you need.",
        code: `import { useSelector } from 'react-redux';\n\nfunction CartIcon() {\n  // This selector reads the 'totalQuantity' from the 'cart' slice\n  const totalQuantity = useSelector((state) => state.cart.totalQuantity);\n\n  return <span>Cart ({totalQuantity})</span>;\n}`,
      },
      {
        title: "How the Global State is Structured",
        description:
          "The global state object is structured based on the keys you provided in the `reducer` object in `configureStore`. To access a specific state, you use `state.sliceName.stateProperty`.",
        code: `// Example global state object\nconst state = {\n  cart: {\n    items: [],\n    totalQuantity: 0,\n  },\n  user: {\n    isLoggedIn: false,\n    username: null,\n  }\n}`,
      },
      {
        title: "Dispatching Actions with `useDispatch`",
        description:
          "To update the state, you need to dispatch actions. The `useDispatch` hook gives you the `dispatch` function. You call it with an action creator (like `addItem()`) to trigger a state update.",
        code: `import { useDispatch } from 'react-redux';\nimport { addItem } from '../features/cart/cartSlice';\n\nfunction AddToCartButton({ product }) {\n  const dispatch = useDispatch();\n\n  const handleAddToCart = () => {\n    // Dispatch the 'addItem' action with the product as the payload\n    dispatch(addItem(product));\n  };\n\n  return <button onClick={handleAddToCart}>Add to Cart</button>;\n}`,
      },
    ],
  },
  {
    id: "async-logic",
    category: "Async Logic with createAsyncThunk",
    items: [
      {
        title: "What is `createAsyncThunk`?",
        description:
          "<code>createAsyncThunk</code> is a function for handling asynchronous logic (like API calls) in Redux. It automatically generates action types for pending, fulfilled, and rejected states and dispatches them for you, so you can update your UI based on the request's status.",
      },
      {
        title: "Step 1: Create the Thunk and Slice",
        description:
          "First, define your async thunk with a unique action type prefix (e.g., 'products/fetchProducts') and a payload creator function that performs the async logic. Then, handle the actions generated by the thunk in the `extraReducers` section of your slice.",
        code: `import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';\n\n// 1. Create the async thunk\nexport const fetchProducts = createAsyncThunk(\n  'products/fetchProducts', // Action type prefix\n  async (args, thunkAPI) => { // args receives the argument from dispatch\n    try {\n      const response = await fetch(\`https://api.example.com/products?limit=\${args}\`);\n      const data = await response.json();\n      return data; // This becomes the action.payload on success\n    } catch (error) {\n      // Use thunkAPI.rejectWithValue to send a custom error payload\n      return thunkAPI.rejectWithValue(error.message);\n    }\n  }\n);\n\n// 2. Create the slice and handle the async actions\nconst productsSlice = createSlice({\n  name: 'products',\n  initialState: { data: [], loading: false, error: null },\n  reducers: {},\n  extraReducers: (builder) => {\n    builder\n      .addCase(fetchProducts.pending, (state) => {\n        state.loading = true;\n        state.error = null;\n      })\n      .addCase(fetchProducts.fulfilled, (state, action) => {\n        state.loading = false;\n        state.data = action.payload;\n      })\n      .addCase(fetchProducts.rejected, (state, action) => {\n        state.loading = false;\n        state.error = action.payload;\n      });\n  },\n});\n\nexport default productsSlice.reducer;`,
      },
      {
        title: "Step 2: Dispatch the Thunk in a Component",
        description:
          "Use `useDispatch` to get the dispatch function and `useEffect` to call your async thunk when the component mounts. You can pass an argument to your thunk, which will be received by the payload creator function.",
        code: `import { useEffect } from 'react';\nimport { useDispatch, useSelector } from 'react-redux';\nimport { fetchProducts } from './features/products/productsSlice';\n\nfunction ProductList() {\n  const dispatch = useDispatch();\n  const { data, loading, error } = useSelector((state) => state.products);\n\n  useEffect(() => {\n    // Dispatch the async thunk with an argument (e.g., limit of 20)\n    dispatch(fetchProducts(20));\n  }, [dispatch]);\n\n  if (loading) return <p>Loading products...</p>;\n  if (error) return <p>Error: {error}</p>;\n\n  return <ul>{data.map(product => <li key={product.id}>{product.name}</li>)}</ul>;\n}`,
      },
      {
        title: "How `createAsyncThunk` Works",
        description:
          "When you dispatch `fetchProducts(20)`, the thunk middleware automatically dispatches three possible actions for you:<br><br>1. <strong>Pending:</strong> `{ type: 'products/fetchProducts/pending' }` - Dispatched immediately. <br>2. <strong>Fulfilled:</strong> `{ type: 'products/fetchProducts/fulfilled', payload: [...] }` - Dispatched on successful API response. <br>3. <strong>Rejected:</strong> `{ type: 'products/fetchProducts/rejected', payload: 'Error message' }` - Dispatched if the promise fails.",
      },
    ],
  },
  {
    id: "pro-tips",
    category: "Professional Tips & Best Practices",
    items: [
      {
        title: "Structure Files by Feature (Ducks Pattern)",
        description:
          "Instead of having separate folders for 'actions', 'reducers', and 'constants', keep all the Redux logic for a single feature (like 'cart' or 'user') in one file (e.g., `cartSlice.js`). This is the default pattern encouraged by Redux Toolkit and makes your codebase much easier to navigate and maintain.",
      },
      {
        title: "Optimize Performance with `createSelector`",
        description:
          "For complex data transformations, use the `createSelector` function from the `reselect` library (which is included in Redux Toolkit). It creates memoized selectors that only re-run when their input data changes, preventing unnecessary re-renders in your components.",
        code: `import { createSelector } from '@reduxjs/toolkit';\n\nconst selectCartItems = (state) => state.cart.items;\n\n// This selector will only recalculate if the items array changes\nexport const selectCartTotal = createSelector(\n  [selectCartItems],\n  (items) => items.reduce((total, item) => total + item.price, 0)\n);`,
      },
      {
        title: "Keep Non-Serializable Data Out of the Store",
        description:
          "Avoid putting non-serializable values like functions, promises, or class instances into the Redux store. This can interfere with features like Redux DevTools and persistence. Stick to plain JSON-compatible data (strings, numbers, booleans, objects, arrays).",
      },
      {
        title: "Consider RTK Query for Data Fetching",
        description:
          "While `createAsyncThunk` is great, **RTK Query** is a more powerful data fetching and caching solution built into Redux Toolkit. It provides a `useQuery` hook similar to TanStack Query, automatically handling caching, background refetching, and invalidation, which can eliminate the need to write `createAsyncThunk` and `extraReducers` manually.",
      },
    ],
  },
];

// The main component that you will export
export default function RTK() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 font-sans text-gray-800 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="mb-10 text-center">
          <h1 className="mb-2 text-4xl font-extrabold text-gray-900 sm:text-5xl dark:text-neutral-100">
            Redux Toolkit Study Guide
          </h1>
          <p className="text-lg text-cyan-600 dark:text-cyan-400">
            The official, recommended way to write Redux logic.
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
                    {rtkData.map((category) => (
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
            {rtkData.map((categoryData) => (
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
