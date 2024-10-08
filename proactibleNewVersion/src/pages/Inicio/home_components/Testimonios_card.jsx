import carlosYsenor from "../../../assets/images/images/carlosYsenor.jpg";
import { testimoniosIcon, aboutIcon } from "../../../assets/iconPaths";
import { Link } from "react-router-dom";

export default function Testimonios_card() {
  return (
    <div className="max-w-full h-full bg-white border-gray-300 rounded-lg shadow-xl hover:bg-gray-100 flex flex-col ">
      <a href="#" className="flex flex-col md:flex-row h-full">
        <img
          className="overflo-hidden object-cover w-auto h-56 md:h-auto rounded-t-lg md:w-48 md:rounded-none md:rounded-s-lg"
          src={carlosYsenor}
          alt=""
        />
        <div className="p-4 flex flex-col flex-grow justify-between h-full">
          <div className="flex-grow">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-2 flex items-center">
              Testimonios
              <span className="ml-2">{testimoniosIcon}</span>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise
            </p>
          </div>
          <div>
              
            <div className="flex items-end justify-end mt-auto">
            <Link to="/Conocenos">
              <a
                href="#"
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
              </a>
              </Link>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
