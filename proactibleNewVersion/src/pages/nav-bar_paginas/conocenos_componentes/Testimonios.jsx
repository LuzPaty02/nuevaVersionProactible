import VideoEmbed from "../impacto_componentes/VideoEmbed";

export default function Testimonios() {
  return (
    <div className="grid w-full rounded-lg md:mb-12 md:grid-cols-2 bg-white">
      {/* First Testimonial */}
      <figure className="flex flex-col items-center justify-center p-8 gap-6 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
        <div className="w-full max-w-lg h-64">
          <VideoEmbed />
        </div>
        <blockquote
          className="max-w-2xl mx-auto mb-4 text-gray-500"
          aria-label="Testimonial from Bonnie Green"
        >
          <h3 className="text-lg font-semibold text-gray-900">
            Very easy this was to integrate
          </h3>
          <p className="my-4">
            If you care for your time, I hands down would go with this.
          </p>
        </blockquote>
      </figure>

      {/* Second Testimonial */}
      <figure className="flex flex-col items-center justify-center p-8 gap-6 text-center bg-white border-b border-gray-200 md:rounded-t-none md:rounded-se-lg md:border-e">
        <div className="w-full max-w-lg h-64">
          <VideoEmbed />
        </div>
        <blockquote
          className="max-w-2xl mx-auto mb-4 text-gray-500"
          aria-label="Testimonial from another client"
        >
          <h3 className="text-lg font-semibold text-gray-900">
            Seamless Experience
          </h3>
          <p className="my-4">
            I’ve never been happier with the ease of collaboration.
          </p>
        </blockquote>
      </figure>

      {/* Third Testimonial */}
      <figure className="flex flex-col items-center justify-center p-8 gap-6 text-center bg-white border-b border-gray-200 md:rounded-t-none md:rounded-ss-lg md:border-e">
        <div className="w-full max-w-lg h-64">
          <VideoEmbed />
        </div>
        <blockquote
          className="max-w-2xl mx-auto mb-4 text-gray-500"
          aria-label="Testimonial from another client"
        >
          <h3 className="text-lg font-semibold text-gray-900">
            Great Results
          </h3>
          <p className="my-4">
            The prototypes we built using this have been well received.
          </p>
        </blockquote>
      </figure>

      {/* Fourth Testimonial */}
      <figure className="flex flex-col items-center justify-center p-8 gap-6 text-center bg-white border-b border-gray-200 md:rounded-t-none md:rounded-ss-lg md:border-e">
        <div className="w-full max-w-lg h-64">
          <VideoEmbed />
        </div>
        <blockquote
          className="max-w-2xl mx-auto mb-4 text-gray-500"
          aria-label="Testimonial from another client"
        >
          <h3 className="text-lg font-semibold text-gray-900">
            Great Results
          </h3>
          <p className="my-4">
            The prototypes we built using this have been well received.
          </p>
        </blockquote>
      </figure>
    </div>
  );
}
