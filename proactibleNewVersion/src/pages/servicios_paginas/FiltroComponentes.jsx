import React from "react";

export default function FiltroComponentes({ categories, selectedCategory, onFilterChange }) {
  return (
    <div className="relative w-full md:w-auto">
      <select
        value={selectedCategory}
        onChange={(e) => onFilterChange(e.target.value)}
        className="w-full md:w-60 border border-gray-300 rounded-lg p-3 shadow-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ease-in-out duration-200"
      >
        {/* Default option when no category is selected */}
        <option value="" className="text-gray-500">
          Filtrar por
        </option>
        {/* Dynamically render categories */}
        {categories.map((category, index) => (
          <option key={index} value={category} className="text-gray-700">
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
