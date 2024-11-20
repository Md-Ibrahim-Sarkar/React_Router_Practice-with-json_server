import { useLoaderData } from "react-router-dom";
import ProductItem from "./ProductItem";

export default function ProductList() {
    const products = useLoaderData();

    return (
        <div className="col-span-9 bg-gradient-to-b from-gray-50 to-white p-6 rounded-lg shadow-lg  dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
            {/* Section Title */}
            <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800 dark:text-gray-100">
                Our {products[0]?.category}
            </h2>
        
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
