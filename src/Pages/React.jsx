import { CheatSheetCard } from "../utils/CheatSheetCard";
import { handleLinkClick } from "../utils/handleLinkClick";

// Main data source for the React cheat sheet
const reactData = [
  {
    id: "installation-setup",
    category: "Installation & Setup",
    items: [
      {
        title: "Vite Project Setup (with Bun)",
        description:
          "<b>Description:</b> A complete guide to starting a new React project using Vite and Bun.<br><b>Step 1: Open Terminal:</b> Navigate to your desired folder.<br><b>Step 2: Check Bun Version:</b> Run `bun -v`.<br><b>Step 3: Install Bun (If Needed):</b> Run `curl -fsSL https://bun.sh/install | bash`.<br><b>Step 4: Verify Installation:</b> Run `bun -v` again.<br><b>Step 5: Create Vite Project:</b> Run `bun create vite`. Follow prompts (select React).<br><b>Step 6: Navigate & Install:</b> `cd your-project-name` then `bun install`.<br><b>Step 7: Run Dev Server:</b> `bun run dev`.<br><b>Link:</b> <a href='https://vite.dev/guide/#scaffolding-your-first-vite-project' target='_blank' rel='noopener noreferrer' class='text-cyan-500 hover:underline'>Vite Official Guide</a>",
        code: `bun -v\ncurl -fsSL https://bun.sh/install | bash # If needed\nbun create vite\ncd your-project-name\nbun install\nbun run dev`,
      },
      {
        title: "Dependencies vs DevDependencies",
        description:
          "<b>Dependencies:</b> Packages your app needs to run in production (e.g., `react`, `react-router-dom`). Installed with `bun add <pkg>` or `npm i <pkg>`.<br><b>Dev Dependencies:</b> Packages only needed for development (e.g., `vite`, `eslint`). Installed with `bun add -d <pkg>` or `npm i -D <pkg>`.",
        code: `// package.json (Example)\n"dependencies": {\n  "react": "^18.2.0"\n},\n"devDependencies": {\n  "vite": "^5.1.4"\n}`,
      },
      {
        title: "Editor Setup (jsconfig.json)",
        description:
          "<b>Purpose:</b> Improves VS Code IntelliSense and enables absolute imports (e.g., `components/Button` instead of `../../`).<br><b>Action:</b> Create a `jsconfig.json` file in your project root.",
        code: `{\n  "compilerOptions": {\n    "baseUrl": "src",\n    "jsx": "react-jsx"\n  },\n  "include": ["src"]\n}`,
      },
      {
        title: "Core: Styled-Components",
        description:
          "<b>Description:</b> A popular library for writing CSS-in-JS.<br><b>Link:</b> <a href='https://www.npmjs.com/package/styled-components' target='_blank' rel='noopener noreferrer' class='text-cyan-500 hover:underline'>Visit npm Page</a>",
        code: `npm i styled-components\nbun add styled-components`,
      },
      {
        title: "Core: React Icons",
        description:
          "<b>Description:</b> Include popular icons in your React projects easily.<br><b>Link:</b> <a href='https://react-icons.github.io/react-icons/' target='_blank' rel='noopener noreferrer' class='text-cyan-500 hover:underline'>Browse Icons</a>",
        code: `npm i react-icons\nbun add react-icons`,
      },
      {
        title: "Utility: React Loading Indicators",
        description:
          "<b>Description:</b> A collection of simple, elegant loading indicators.<br><b>Link:</b> <a href='https://react-loading-indicators.netlify.app/' target='_blank' rel='noopener noreferrer' class='text-cyan-500 hover:underline'>Visit the Website</a>",
        code: `npm i react-loading-indicators\nbun add react-loading-indicators`,
      },
      {
        title: "Utility: React Intersection Observer",
        description:
          "<b>Description:</b> A hook to track when an element enters or leaves the viewport.<br><b>Link:</b> <a href='https://www.npmjs.com/package/react-intersection-observer' target='_blank' rel='noopener noreferrer' class='text-cyan-500 hover:underline'>Visit npm Page</a>",
        code: `npm i react-intersection-observer\nbun add react-intersection-observer`,
      },
      {
        title: "Utility: Tabler Icons React",
        description:
          "<b>Description:</b> A set of high-quality, free SVG icons for React.<br><b>Link:</b> <a href='https://tabler.io/icons' target='_blank' rel='noopener noreferrer' class='text-cyan-500 hover:underline'>Go to Official Website</a>",
        code: `npm i @tabler/icons-react\nbun add @tabler/icons-react`,
      },
    ],
  },
  {
    id: "core-concepts",
    category: "Core Concepts",
    items: [
      {
        title: "What is React?",
        description:
          "<b>Answer:</b> React is a JavaScript library for building user interfaces. It uses a component-based, declarative approach to create interactive and efficient UIs.",
      },
      {
        title: "Declarative vs. Imperative",
        description:
          "<b>Answer:</b><br>• <b>Declarative (React):</b> You describe *what* the UI should look like, and React handles the how. (e.g., `&lt;button&gt;Click me&lt;/button&gt;`).<br>• <b>Imperative (Vanilla JS):</b> You manually describe *how* to create and update the DOM step-by-step.",
      },
      {
        title: "What is JSX?",
        description:
          "<b>Answer:</b> JSX (JavaScript XML) is a syntax extension that lets you write HTML-like code inside JavaScript. It makes writing React components more intuitive.",
        code: `const element = <h1>Hello, world!</h1>;`,
      },
      {
        title: "Components",
        description:
          "<b>Answer:</b> Components are independent, reusable pieces of the UI. They are JavaScript functions that return JSX.<br>• <b>Functional Components:</b> The modern and recommended way.<br>• <b>Class Components:</b> The older way, using ES6 classes.",
        code: `function Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}`,
      },
    ],
  },
  {
    id: "jsx-rendering",
    category: "JSX & Rendering",
    items: [
      {
        title: "Dynamic Values in JSX",
        description:
          "<b>Answer:</b> Use curly braces `{}` to embed JavaScript expressions (variables, function calls, etc.) directly within your JSX.",
        code: `const name = "DevFlux";\nconst element = <h1>Hello, {name}</h1>;`,
      },
      {
        title: "Conditional Rendering",
        description:
          "<b>Answer:</b> Use standard JavaScript techniques to conditionally render JSX.<br>• <b>Ternary Operator:</b> `{condition ? &lt;A /&gt; : &lt;B /&gt;}`<br>• <b>Logical && Operator:</b> `{condition && &lt;A /&gt;}` (renders `&lt;A /&gt;` only if `condition` is true).",
        code: `<div>\n  {isLoggedIn ? <Dashboard /> : <Login />}\n</div>`,
      },
      {
        title: "Looping in JSX",
        description:
          "<b>Answer:</b> Use the `.map()` array method to loop over a list of data and return an array of JSX elements. Each element in the list must have a unique `key` prop.",
        code: `<ul>\n  {items.map(item => <li key={item.id}>{item.name}</li>)}\n</ul>`,
      },
      {
        title: "Fragments",
        description:
          "<b>Answer:</b> Fragments (`&lt;&gt;...&lt;/&gt;`) let you group a list of children without adding extra nodes to the DOM. This is useful when a component needs to return multiple elements.",
        code: `function Columns() {\n  return (\n    <>\n      <td>Hello</td>\n      <td>World</td>\n    </>\n  );\n}`,
      },
    ],
  },
  {
    id: "props-state",
    category: "Props & State",
    items: [
      {
        title: "What are Props?",
        description:
          "<b>Answer:</b> Props (short for properties) are read-only data passed from a parent component to a child component. Data flows one-way (parent to child).",
        code: `// Parent\n<Greeting name="Madhur" />\n\n// Child\nfunction Greeting({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}`,
      },
      {
        title: "What is State?",
        description:
          "<b>Answer:</b> State is data that a component can manage and change over time. When state changes, React re-renders the component to reflect the new data.",
      },
      {
        title: "useState Hook",
        description:
          "<b>Answer:</b> The `useState` hook is used to add state to functional components.<br><b>Syntax:</b> `const [state, setState] = useState(initialState);`<br>• <b>state:</b> The current state value.<br>• <b>setState:</b> A function to update the state.",
        code: `const [count, setCount] = useState(0);\n\n<button onClick={() => setCount(count + 1)}>\n  Clicked {count} times\n</button>`,
      },
      {
        title: "Lifting State Up",
        description:
          "<b>Answer:</b> When multiple components need to share and manage the same state, you should lift that state up to their closest common ancestor component. The parent then passes the state and updater function down to the children as props.",
      },
    ],
  },
  {
    id: "hooks",
    category: "Essential Hooks",
    items: [
      {
        title: "useEffect Hook",
        description:
          "<b>Answer:</b> The `useEffect` hook lets you perform side effects in functional components. Side effects include data fetching, subscriptions, or manually changing the DOM.<br><b>Syntax:</b> `useEffect(() => { ... }, [dependencies]);`<br>• <b>Callback Function:</b> The code to run.<br>• <b>Dependency Array:</b> The effect re-runs if any value in this array changes. An empty array `[]` means it runs only once on mount.",
        code: `useEffect(() => {\n  document.title = \`You clicked \${count} times\`;\n}, [count]);`,
      },
      {
        title: "useRef Hook",
        description:
          "<b>Answer:</b> `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument. It can be used to hold a value that doesn't trigger a re-render or to access a DOM element directly.",
        code: `const inputEl = useRef(null);\n\nconst onButtonClick = () => {\n  inputEl.current.focus();\n};`,
      },
      {
        title: "useReducer Hook",
        description:
          "<b>Answer:</b> An alternative to `useState`. It's usually preferable for managing complex state logic that involves multiple sub-values or when the next state depends on the previous one.<br><b>Syntax:</b> `const [state, dispatch] = useReducer(reducer, initialState);`",
        code: `const [state, dispatch] = useReducer(reducer, {count: 0});\n\n<button onClick={() => dispatch({type: 'increment'})}>+</button>`,
      },
    ],
  },
  {
    id: "context-api",
    category: "Context API (In-Depth)",
    items: [
      {
        title: "Step 1: Create the Context",
        description:
          "<b>Answer:</b> First, create a context object using `createContext`. You can provide a default value, which is used when a component does not have a matching Provider above it in the tree.",
        code: `// src/contexts/ThemeContext.js\nimport { createContext } from 'react';\n\nexport const ThemeContext = createContext('light');`,
      },
      {
        title: "Step 2: Create the Provider",
        description:
          "<b>Answer:</b> Create a Provider component that will wrap the part of your app that needs access to the context. This component will hold the state and pass it to the `Context.Provider`.",
        code: `// src/contexts/ThemeProvider.js\nimport { ThemeContext } from './ThemeContext';\nimport { useState } from 'react';\n\nexport function ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}`,
      },
      {
        title: "Step 3: Wrap Your App",
        description:
          "<b>Answer:</b> In your main app file (like `App.js` or `main.jsx`), wrap the component tree with your new Provider.",
        code: `// src/App.js\nimport { ThemeProvider } from './contexts/ThemeProvider';\n\nfunction App() {\n  return (\n    <ThemeProvider>\n      <MyComponent />\n    </ThemeProvider>\n  );\n}`,
      },
      {
        title: "Step 4: Consume the Context",
        description:
          "<b>Answer:</b> In any child component, use the `useContext` hook to read and subscribe to the context value.",
        code: `// src/components/MyComponent.js\nimport { useContext } from 'react';\nimport { ThemeContext } from '../contexts/ThemeContext';\n\nfunction MyComponent() {\n  const { theme, setTheme } = useContext(ThemeContext);\n\n  return <button>Current theme: {theme}</button>;\n}`,
      },
    ],
  },
  {
    id: "optimization-hooks",
    category: "Optimization Hooks",
    items: [
      {
        title: "React.memo()",
        description:
          "<b>Answer:</b> A higher-order component that memoizes a component, preventing it from re-rendering if its props haven't changed.",
        code: `export default React.memo(MyComponent);`,
      },
      {
        title: "useMemo Hook",
        description:
          "<b>Answer:</b> Memoizes a value. It will only recompute the memoized value when one of the dependencies has changed. Useful for avoiding expensive calculations on every render.<br><b>Syntax:</b> `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`",
      },
      {
        title: "useCallback Hook",
        description:
          "<b>Answer:</b> Memoizes a function. It will return a memoized version of the callback that only changes if one of the dependencies has changed. Useful for passing callbacks to optimized child components.<br><b>Syntax:</b> `const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);`",
      },
    ],
  },
  {
    id: "advanced-concepts",
    category: "Advanced Concepts",
    items: [
      {
        title: "Custom Hooks",
        description:
          "<b>Answer:</b> A custom hook is a JavaScript function whose name starts with `use` and that can call other hooks. It's a way to extract component logic into reusable functions.",
        code: `function useWindowWidth() {\n  const [width, setWidth] = useState(window.innerWidth);\n  // ... logic ...\n  return width;\n}`,
      },
      {
        title: "Prop Drilling",
        description:
          "<b>Answer:</b> The process of passing props down through multiple layers of nested components. It can be cumbersome and is often solved by using Context or state management libraries.",
      },
      {
        title: "Controlled vs. Uncontrolled Components",
        description:
          "<b>Answer:</b><br>• <b>Controlled:</b> Form input elements whose values are controlled by React state.<br>• <b>Uncontrolled:</b> Form input elements where the DOM handles the form data. You typically use a `ref` to get the value when needed.",
      },
      {
        title: "Virtual DOM & Reconciliation",
        description:
          "<b>Answer:</b> React keeps a lightweight copy of the DOM in memory (the Virtual DOM). When state changes, it creates a new virtual DOM tree, compares it with the old one (this is called 'diffing'), and then efficiently updates only the changed parts of the real DOM. This process is called reconciliation.",
      },
    ],
  },
  {
    id: "important-qna",
    category: "Important Q&A",
    items: [
      {
        title: "What are Bundlers (Vite, Parcel)?",
        description:
          "<b>Answer:</b> Bundlers are tools that take your React code, CSS, images, and other assets, and combine them into optimized files that a browser can understand. Vite is known for its extremely fast development server.",
      },
      {
        title:
          "What is the difference between `useMemo`, `useCallback`, and `React.memo`?",
        description:
          "<b>Answer:</b><br>• <b>`useMemo`</b> memoizes a *value*.<br>• <b>`useCallback`</b> memoizes a *function*.<br>• <b>`React.memo`</b> memoizes a *component*.",
      },
      {
        title: "What is Derived State?",
        description:
          "<b>Answer:</b> State that is calculated from other state or props. It's best to calculate it during rendering instead of storing it in state to avoid data duplication. Example: `const fullName = `${firstName} ${lastName}`;`",
      },
      {
        title: "What are the Rules of Hooks?",
        description:
          "<b>Answer:</b><br>1. Only call hooks at the top level of your component.<br>2. Don't call hooks inside loops, conditions, or nested functions.<br>3. Only call hooks from React function components or custom hooks.",
      },
      {
        title: "What is `forwardRef`?",
        description:
          "<b>Answer:</b> A function that lets a component expose a DOM ref to its parent component. It's useful for accessing the DOM node of a child component from the parent.",
      },
      {
        title: "What is `useId`?",
        description:
          "<b>Answer:</b> A hook for generating unique, stable IDs that can be used for accessibility attributes, like connecting a `&lt;label&gt;` to an `&lt;input&gt;`.",
      },
    ],
  },
  {
    id: "best-practices",
    category: "Best Practices",
    items: [
      {
        title: "Keep Components Small",
        description:
          "<b>Description:</b> Break down large components into smaller, single-responsibility components. This makes them easier to read, test, and maintain.",
      },
      {
        title: "Use Keys Correctly",
        description:
          "<b>Description:</b> Always provide stable and unique keys when rendering lists. Avoid using the array index as a key if the list can be reordered, added to, or filtered.",
      },
      {
        title: "Colocate State",
        description:
          "<b>Description:</b> Keep state as close as possible to where it's needed. If state is only used by one component, keep it local. If it's needed by multiple components, lift it up to the nearest common ancestor.",
      },
      {
        title: "Avoid Premature Optimization",
        description:
          "<b>Description:</b> Don't overuse `useMemo`, `useCallback`, and `React.memo`. Apply them only when you have identified a performance bottleneck.",
      },
    ],
  },
  {
    id: "accessibility",
    category: "Accessibility (A11y)",
    items: [
      {
        title: "Use Semantic HTML",
        description:
          "<b>Description:</b> Use semantic HTML elements (`&lt;nav&gt;`, `&lt;main&gt;`, `&lt;button&gt;`) whenever possible. They provide built-in accessibility features.",
      },
      {
        title: "Label Form Elements",
        description:
          "<b>Description:</b> Always associate a `&lt;label&gt;` with form controls like `&lt;input&gt;`, `&lt;textarea&gt;`, and `&lt;select&gt;`. Use the `htmlFor` attribute.",
      },
      {
        title: "Manage Focus",
        description:
          "<b>Description:</b> Ensure your application is navigable using a keyboard. Manage focus programmatically when content appears or disappears, for example, by using `ref.current.focus()` in a modal.",
      },
      {
        title: "Use ARIA Attributes",
        description:
          "<b>Description:</b> Use ARIA (Accessible Rich Internet Applications) attributes to provide extra information to screen readers when semantic HTML is not enough, for example `aria-label` or `role`.",
      },
    ],
  },
];

// The main component that you will export
export default function ReactCheatSheet() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 font-sans text-gray-800 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="mb-10 text-center">
          <h1 className="mb-2 text-4xl font-extrabold text-gray-900 sm:text-5xl dark:text-neutral-100">
            The Definitive React Cheat Sheet
          </h1>
          <p className="mt-2 text-lg text-cyan-400">
            Your complete and professional guide to React.
          </p>
        </header>
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Table of Contents */}
          <aside className="mb-8 lg:col-span-3 lg:mb-0">
            <div className="sidebar sticky top-25 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
              <h2 className="mb-4 border-b border-gray-300 pb-2 text-xl font-bold dark:border-gray-600">
                Table of Contents
              </h2>
              <nav>
                <ul className="space-y-2 text-sm">
                  {reactData.map((category) => (
                    <li key={category.id}>
                      <a
                        href={`#${category.id}`}
                        onClick={(e) => handleLinkClick(e, category.id)}
                        className="transition-colors hover:text-cyan-400"
                      >
                        {category.category}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-8 lg:col-span-9">
            {reactData.map((categoryData) => (
              <div
                key={categoryData.id}
                id={categoryData.id}
                className="scroll-mt-20"
              >
                <h2 className="mb-8 border-b-2 border-cyan-500 pb-2 text-3xl font-bold text-gray-900 dark:text-white">
                  {categoryData.category}
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {categoryData.items.map((item, itemIndex) => (
                    <CheatSheetCard
                      key={itemIndex}
                      title={item.title}
                      description={item.description || ""}
                      code={item.code}
                    />
                  ))}
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
