import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import EditProduct from "./components/EditProduct";
import ViewSingleProduct from "./components/ViewSingleProduct";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/addproduct",
      element: <AddProduct />,
    },
    {
      path: "/productlist",
      element: <ProductList />,
    },

    {
      path: "/edit-product/:id",
      element: <EditProduct />,
    },
    {
      path: "/view-product/:id",
      element: <ViewSingleProduct />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
