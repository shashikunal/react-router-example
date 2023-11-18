import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/Home";
import Dashboard from "./components/users/Dashboard";
import AllUsers from "./components/users/AllUsers";
import Products from "./components/products/Products";
import Players from "./components/players/Players";
import Login from "./components/auth/Login";
import Profile from "./components/users/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: "users",
            element: <AllUsers />,
          },

          {
            path: "players",
            element: <Players />,
          },
          {
            path: "users/:id",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
