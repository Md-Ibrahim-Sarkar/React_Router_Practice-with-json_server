import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./components/Root";
import ProductList from "./components/ProductList";
import CreateProduct from "./components/CreateProduct";
import { allProductsByCategory, allProductsLoader, categoryLoader, singleProductDetails } from "./loader/blogLoader";
import { createProduct } from "./Action/formAction";
import ProductDetails from "./components/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: categoryLoader,
        children: [
            {
                path: "/",
                element: <ProductList />,
                index: true,
                loader: allProductsLoader,
                
            },
            {
                path: "/create",
                element: <CreateProduct />,
                action: createProduct,
            },
            {
                path: "/category/:category",
                element: <ProductList />,
                loader: allProductsByCategory,
            },
            {
                path: '/category/:category/:productName',
                element: <ProductDetails />,
                loader: singleProductDetails,

            }
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
