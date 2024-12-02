import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 flex items-center">
            <Link to="/" className="text-white mx-4 no-underline hover:text-gray-300 flex items-center">
                <svg
                    width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <path
                        d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21"
                        stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Home
            </Link>

            <Link to="/add-book" className="text-white mx-4 no-underline hover:text-gray-300 flex items-center">
                <svg
                    width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="2" />
                    <path
                        d="M12 8V16M8 12H16"
                        stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Add Book
            </Link>
        </nav>
    );
};

export default Navbar;
