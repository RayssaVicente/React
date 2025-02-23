import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import AdminHome from "./pages/admin/Admin";
import RootLayout from "./pages/RootLayout";
import Product from "./pages/Product";
import { loardProduct } from "./components/loardes/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{
      index: true,
      element: <Home />
    }, {
      path: "products",
      element: <Products />
    }, {
      path: "products/:productId",
      element: <Product />,
      loader: loadProduct
    }, {
      path: "cart",
      element: <Cart />
    }]
  },
  {
    path: "/admin",
    element: <AdminHome />
  }
])

export default router;
