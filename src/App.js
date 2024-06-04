import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import Browse from "./pages/Browse";
import Layout from "./pages/Layout";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      ,
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>;
    </Provider>
  );
}

export default App;
