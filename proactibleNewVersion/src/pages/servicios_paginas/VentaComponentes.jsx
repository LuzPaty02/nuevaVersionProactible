import React, { useEffect, useState } from "react";
import { WHATSAPP_LINK } from "../../assets/whatsapp";
import { whatsappIcon } from "../../assets/iconPaths.jsx";
import productData from "../../assets/products.jsx"; // Ensure the path is correct

export default function VentaComponentes() {
  const [products, setProducts] = useState([]);

  // State to track the visibility of the descriptions in mobile view
  const [visibleDescriptionIndex, setVisibleDescriptionIndex] = useState(null);

  useEffect(() => {
    // Directly use productData
    setProducts(productData);
  }, []);

  const toggleDescription = (index) => {
    // Toggle the visibility of the description only in mobile view
    if (window.innerWidth < 768) {
      // Assuming mobile view is below 768px
      setVisibleDescriptionIndex(
        visibleDescriptionIndex === index ? null : index
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h2 className="text-4xl md:text-6xl font-normal text-blue font-serif max-w-full">
        Productos
      </h2>
      <div className="flex flex-wrap justify-center w-full">
        {" "}
        {/* Ensures the container takes full width */}
        {products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col w-full bg-white border-b border-gray-200 p-4 md:flex-row md:justify-between" // Change to flex-col for mobile and flex-row for larger screens
            >
              <div className="flex items-start md:w-auto">
                {" "}
                {/* Wrap image and text */}
                <img
                  className="h-auto w-32 md:w-64 object-cover mr-4" // Set fixed size for images with margin right
                  src={product.imagePath}
                  alt={product.titulo}
                />
                <div className="flex flex-col flex-grow">
                  {" "}
                  {/* Allow this to grow and take available space */}
                  <h5 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 mb-2">
                    {product.titulo}
                  </h5>
                  {/* Show description based on toggle state in mobile version only */}
                  <p
                    className={`font-normal text-gray-700 ${
                      window.innerWidth < 768
                        ? visibleDescriptionIndex === index
                          ? "block"
                          : "hidden"
                        : "block"
                    }`}
                  >
                    {product.descripcion}
                  </p>
                  {window.innerWidth < 768 && (
                    <button
                      className="text-sm text-blue-600 underline mt-1"
                      onClick={() => toggleDescription(index)}
                    >
                      {visibleDescriptionIndex === index
                        ? "Ocultar"
                        : "Ver más"}
                    </button>
                  )}
                </div>
              </div>
              {/* Button below the text and aligned right */}
              <div className="mt-2 md:mt-0 md:ml-4 flex justify-end">
                {" "}
                {/* Margin top for spacing and justify-end for right alignment */}
                <button
                  className="bg-blue-900 flex items-center text-white font-bold rounded-full border-none transition-transform transform hover:scale-105 hover:bg-blue-950 ease-in-out duration-300"
                  style={{
                    minWidth: "140px",
                    height: "30px",
                    padding: "0 10px",
                  }} // Set a min-width and padding
                >
                  <a
                    href={WHATSAPP_LINK}
                    className="flex items-center justify-center w-full"
                  >
                    {" "}
                    {/* Use w-full for the link to take full width */}
                    {whatsappIcon}
                    <span className="m-2 text-sm md:text-xs">Ver costos</span>
                  </a>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
