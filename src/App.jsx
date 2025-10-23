import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { MainLayout } from "./Components/Layout/MainLayout";
import Home from "./Components/UI/Home";
import HTML from "./Pages/HTML";
import CSS from "./Pages/CSS";
import Tailwind from "./Pages/Tailwind";
import JavaScript from "./Pages/JavaScript";
import ReactCheatSheet from "./Pages/React";
import ReactRouter from "./Pages/Router";
import ReactQuery from "./Pages/ReactQuery";
import Axios from "./Pages/Axios";
import RTK from "./Pages/ReduxToolkit";
import Git from "./Pages/Git";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/html",
        element: <HTML />,
      },
      {
        path: "/css",
        element: <CSS />,
      },
      {
        path: "/tailwindcss",
        element: <Tailwind />,
      },
      {
        path: "/javascript",
        element: <JavaScript />,
      },
      {
        // This is the parent route for all /react/* paths
        path: "/react",
        // The element is just an Outlet. It renders the matching child route.
        element: <Outlet />,
        children: [
          {
            // The index route renders when the path is exactly "/react"
            index: true,
            element: <ReactCheatSheet />,
          },
          {
            path: "router", // Renders at /react/router
            element: <ReactRouter />,
          },
          {
            path: "reactquery", // Renders at /react/reactquery
            element: <ReactQuery />,
          },
          {
            path: "axios", // Renders at /react/axios
            element: <Axios />,
          },
          {
            path: "rtk", // Renders at /react/rtk
            element: <RTK />,
          },
        ],
      },
      {
        path: "/git",
        element: <Git />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
