import { useEffect, useState } from "react";
import { WHATSAPP_LINK } from "../../assets/whatsapp";
import { whatsappIcon } from "../../assets/iconPaths.jsx";
import productData from "../../assets/products.jsx";
import FiltroComponentes from "./FiltroComponentes.jsx"; 
import Footer from "../../Footer.jsx";

export default function VentaComponentes() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [visibleDescriptionIndex, setVisibleDescriptionIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // State to track screen size

  useEffect(() => {
    setProducts(productData);
    setFilteredProducts(productData); // Initially, show all products
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    if (category) {
      setFilteredProducts(products.filter((product) => product.categoria === category));
    } else {
      setFilteredProducts(products); // Show all products if no category is selected
    }
  };

  const toggleDescription = (index) => {
    setVisibleDescriptionIndex(visibleDescriptionIndex === index ? null : index);
  };

  const categories = [...new Set(productData.map((product) => product.categoria))];

  return (
    <div>
      <div className="flex flex-col items-center p-6">
        <h2 className="text-4xl md:text-6xl font-normal text-blue font-serif text-center mb-6">
          Productos
        </h2>

        <div className="flex justify-end w-3/4 md:w-full mb-6 relative z-10">
          <FiltroComponentes
            categories={categories}
            selectedCategory={selectedCategory}
            onFilterChange={handleFilterChange}
          />
        </div>

        <div className="flex flex-wrap justify-center w-full">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={index}
                className="flex flex-col w-full bg-white border-b border-gray-200 p-4 md:flex-row md:justify-between"
              >
                <div className="flex items-start md:w-auto">
                  <img
                    className="h-auto w-32 md:w-64 object-cover mr-4"
                    src={product.imagePath}
                    alt={product.titulo}
                  />
                  <div className="flex flex-col flex-grow items-start">
                    <h5 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 mb-2">
                      {product.titulo}
                    </h5>
                    <p
                      className={`font-normal text-gray-700 ${
                        isMobile
                          ? visibleDescriptionIndex === index
                            ? "block"
                            : "hidden"
                          : "block"
                      }`}
                    >
                      {product.descripcion}
                    </p>
                    {isMobile && (
                      <button
                        className="text-blue-600 text-sm underline mt-1"
                        onClick={() => toggleDescription(index)}
                      >
                        {visibleDescriptionIndex === index ? "Ocultar" : "Ver más"}
                      </button>
                    )}
                  </div>
                </div>
                <div className="mt-2 md:mt-0 md:ml-4 flex justify-end">
                  <button
                    className="bg-blue-900 flex items-center text-white font-bold rounded-full border-none transition-transform transform hover:scale-105 hover:bg-blue-950 ease-in-out duration-300"
                    style={{
                      minWidth: "140px",
                      height: "30px",
                      padding: "0 10px",
                    }}
                  >
                    <a
                      href={WHATSAPP_LINK}
                      className="flex items-center justify-center w-full"
                    >
                      {whatsappIcon}
                      <span className="m-2 text-sm md:text-xs">Cotizar</span>
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
      <Footer />
    </div>
  );
}
