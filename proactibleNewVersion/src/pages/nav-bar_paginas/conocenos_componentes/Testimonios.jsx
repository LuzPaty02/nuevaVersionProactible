import VideoEmbed from "../impacto_componentes/VideoEmbed";
import videoData from "../../../assets/videoData.jsx";
export default function Testimonios() {
  return (
      <div className="grid w-full rounded-lg md:mb-12 md:grid-cols-2">
          {videoData.map((video, index) => (
              <figure
                  key={index}
                  className="flex flex-col items-center justify-center p-2 gap-2 sm:gap-4 text-center"
              >
                  <div className="w-full max-w-lg">
                      <VideoEmbed url={video.url} />
                  </div>
                  <blockquote
                      className="max-w-2xl mx-auto text-gray-500 mt-1 sm:mt-2"
                      aria-label={`Testimonial from ${video.titulo}`}
                  >
                      <h3 className="text-lg font-semibold text-gray-900">
                          {video.titulo}
                      </h3>
                      <p className="my-1 sm:my-2">{video.descripcion}</p>
                  </blockquote>
              </figure>
          ))}
      </div>
  );
}

