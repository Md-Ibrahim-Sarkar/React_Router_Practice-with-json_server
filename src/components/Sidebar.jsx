/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";

export default function Sidebar({ categories }) {
    return (
        <div className="col-span-3 bg-gradient-to-b from-gray-100 to-white p-5 shadow-lg rounded-lg dark:from-gray-900 dark:to-gray-800 dark:text-gray-100 h-screen">
            {/* Sidebar Title */}
            <div className="sticky top-5">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
                Product Categories
            </h2>
            
            {/* Category List */}
            <ul className="space-y-4 ">
                {categories.map((category) => (
                    <li key={category.id}>
                        <NavLink
                            to={`/category/${category.title}`}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "block p-3 bg-green-600 text-white rounded-lg shadow font-semibold"
                                    : isPending
                                    ? "block p-3 bg-yellow-500 text-white rounded-lg shadow font-semibold"
                                    : "block p-3 bg-gray-200 hover:bg-green-500 hover:text-white rounded-lg shadow text-gray-800 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-green-500 font-semibold"
                            }
                        >
                            {category.title}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Navigation Buttons */}
            <div className="mt-16 text-center">
                <Link
                    to="/"
                    className="inline-block py-3 px-6 bg-green-500 text-white rounded-lg shadow-lg font-semibold hover:bg-green-700 transition-all duration-300 mr-3"
                >
                    Go Home
                </Link>
                <Link
                    to="/create"
                    className="inline-block py-3 px-6 bg-red-500 text-white rounded-lg shadow-lg font-semibold hover:bg-red-700 transition-all duration-300"
                >
                    Create Product
                </Link>
            </div>
            </div>
        </div>
    );
}
