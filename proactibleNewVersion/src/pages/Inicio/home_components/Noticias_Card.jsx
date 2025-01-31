import { newspaperIcon } from "../../../assets/iconPaths"; // Ensure this is either an SVG component or an SVG string
import { Link } from "react-router-dom";

// Card with button to redirect to Noticias page

export default function Noticias_Card() {
  return (
    <div className="max-w-full h-full bg-white border-gray-300 rounded-lg shadow-lg hover:bg-gray-100 flex flex-col ">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <a href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-2 flex items-center">
              Noticias de Proactible
              <span className="ml-2">{newspaperIcon}</span>
            </h5>
          </a>
          <p className="font-normal text-gray-500 mb-3">
            Conoce sobre nuestras apariciones en el <span className="font-semibold text-gray-600">Foro Ecónomico mundial, El Informador, Mural</span> y más. 
          </p>
        </div>
        <div className="flex items-end justify-end mt-auto">
          <Link to="/Impacto#Noticias"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-950 rounded-lg hover:bg-blue-800 transition-transform duration-300 transform hover:scale-105 ease-in-out focus:ring-4 focus:outline-none focus:ring-blue-300 ml-auto"
            >
              Ver más
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
