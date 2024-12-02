import React, { useState } from "react";
import { addBook } from "../api/books";

const BookForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        category: "",
        price: "",
        cover: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            !formData.title ||
            !formData.author ||
            !formData.category ||
            !formData.price ||
            !formData.cover
        ) {
            alert("All fields are required.");
            return;
        }
        await addBook(formData);
        window.location.href = "/";
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto p-6 border rounded-lg shadow-md bg-white">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Title:</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Pavadinimas"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    minLength="3"
                    maxLength="100"
                    className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Author:</label>
                <input
                    type="text"
                    name="author"
                    placeholder="Autorius"
                    value={formData.author}
                    onChange={handleChange}
                    required
                    pattern="^[A-Za-z\s]+$"
                    className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Category:</label>
                <input
                    type="text"
                    name="category"
                    placeholder="Kategorija"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Price:</label>
                <input
                    type="number"
                    name="price"
                    placeholder="Kaina"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    min="0.01"
                    step="0.01"
                    className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Cover URL:</label>
                <input
                    type="url"
                    name="cover"
                    placeholder="Nuoroda į paveikslėlį"
                    value={formData.cover}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Submit
            </button>
        </form>
    );
};

export default BookForm;
