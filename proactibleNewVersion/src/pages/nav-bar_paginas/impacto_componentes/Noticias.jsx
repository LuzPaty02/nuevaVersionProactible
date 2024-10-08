export default function Noticias() {
    return (
      <div id="/Noticias" className="w-screen p-10">
        <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50">
          <time className="text-xl font-semibold text-blue">
            Noticias de Proactible
          </time>
          <ol className="mt-3 divide-y divide-gray-200">
            <li>
              <a
                href="#"
                className="items-center block p-3 sm:flex hover:bg-gray-100"
              >
                <img
                  className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
                  src="/news-image-1.jpg"
                  alt="news image 1"
                />
                <div className="text-gray-600">
                  <div className="text-base font-normal">
                    <span className="font-medium text-gray-900">
                      Nuevo avance en la prótesis biónica
                    </span>{" "}
                    revolucionará la vida de miles de personas.
                  </div>
                  <div className="text-sm font-normal">
                    Investigadores de Proactible han desarrollado una nueva prótesis con funcionalidades avanzadas que permite un mayor control y adaptabilidad.
                  </div>
                  <span className="inline-flex items-center text-xs font-normal text-gray-500">
                    <svg
                      className="w-2.5 h-2.5 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z" />
                    </svg>
                    Hace 2 horas
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="items-center block p-3 sm:flex hover:bg-gray-100"
              >
                <img
                  className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
                  src="/news-image-2.jpg"
                  alt="news image 2"
                />
                <div>
                  <div className="text-base font-normal text-gray-600">
                    <span className="font-medium text-gray-900">
                      Proactible abre nuevas clínicas en América Latina
                    </span>{" "}
                    para mejorar el acceso a tecnologías avanzadas.
                  </div>
                  <span className="inline-flex items-center text-xs font-normal text-gray-500">
                    <svg
                      className="w-2.5 h-2.5 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z" />
                    </svg>
                    Hace 4 horas
                  </span>
                </div>
              </a>
            </li>
          </ol>
        </div>
      </div>
    );
  }
  