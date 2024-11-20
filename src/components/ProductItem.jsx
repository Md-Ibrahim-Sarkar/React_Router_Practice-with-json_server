/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { getImage } from "../utils/getImage";

export default function ProductItem({ product }) {
    let imgLink = getImage(`../assets/images/${product.image}`);

    return (
        <div className="col-span-4 shadow-lg border rounded-lg overflow-hidden bg-white dark:bg-gray-800 hover:shadow-2xl transition-shadow duration-300">
            {/* Product Image */}
            <img
                src={imgLink}
                className="h-[250px] w-full object-cover"
                alt={product.title}
            />

            {/* Product Details */}
            <div className="p-4">
                <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100 truncate">
                    {product.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 capitalize mt-1">
                    {product.category}
                </p>

                <div className="flex justify-between items-center mt-4">
                    {/* Price */}
                    <span className="text-lg font-semibold text-green-600 dark:text-green-400">
                        ${product.price}
                    </span>
                    {/* Rating */}
                    <span className="flex items-center text-yellow-500 text-sm font-medium">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 mr-1"
                        >
                            <path d="M12 .587l3.668 7.429 8.18 1.185-5.914 5.76 1.396 8.139L12 18.902l-7.33 3.855 1.396-8.139-5.914-5.76 8.18-1.185z" />
                        </svg>
                        {product.ratting}
                    </span>
                </div>
            </div>

            {/* Read More Button */}
            <Link to={`/category/${product.category}/${product.title}`}
                
                className="block bg-green-600 text-white text-center text-lg font-semibold py-3 hover:bg-green-700 transition-all duration-300"
            >
                Read More
            </Link>
        </div>
    );
}
