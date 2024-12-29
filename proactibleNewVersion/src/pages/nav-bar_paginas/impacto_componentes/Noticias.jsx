import noticiasProactible from "../../../assets/noticiasProactible.jsx";
import { useEffect } from "react";

export default function Noticias() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Remove the "#" from hash
      if (element) {
        const offset = 80; // Adjust this value based on the height of your title or navbar
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    }
  }, []); // Runs on component mount

  return (
    <div className="md:m-4 p-6 border border-gray-200 rounded-xl bg-white shadow-md">
      <time className="block text-xl font-semibold text-blue-600 mb-6 text-center sm:text-left">
        Noticias de Proactible
      </time>
      <ol className="space-y-6">
        {noticiasProactible.map((noticia, index) => {
          console.log(`Rendering noticia ${index}:`, noticia);

          return (
            <li
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start"
            >
              <img
                className="w-full h-auto sm:w-40 sm:h-40 mb-4 sm:mb-0 sm:me-4 object-cover rounded-md"
                src={noticia.imagen}
                alt={noticia.titulo}
                onError={(e) => {
                  console.error(
                    `Image failed to load for noticia ${index}:`,
                    e.target.src
                  );
                }}
              />

              <div className="flex flex-col text-start sm:text-left">
                <h3 className="text-base font-semibold text-gray-800 ">
                  {noticia.titulo}
                </h3>
                <p className="mt-2 text-sm  text-gray-600">
                  {noticia.descripcion}
                </p>
                {/* Stack Date and Leer Más */}
                <div className="flex flex-col mt-2">
                  <div className="inline-flex items-center text-xs text-gray-500">
                    <svg
                      className="w-3 h-3 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z" />
                    </svg>
                    {noticia.fecha}
                  </div>
                  <a
                    href={noticia.url}
                    className="mt-2 inline-flex items-center text-sm font-normal text-blue-600 hover:underline"
                  >
                    Ver más
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
