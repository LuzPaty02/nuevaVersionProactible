import distintivosPaths from "../../../assets/distintivosPaths.jsx";

export default function Distintivos() {
    return (
        <section className="w-full px-1 py-8 md:py-16 bg-white">
            <h2 className="p-4 text-3xl md:text-4xl text-center font-normal pb-8 text-blue font-serif max-w-full">
                Contamos con los distintivos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {distintivosPaths.map((distintivo, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center h-full p-4"
                    >
                        <img
                            src={distintivo.url}
                            alt={distintivo.subtitulo}
                            className="w-24 h-24 object-contain mb-3"
                        />
                        <h3 className="text-base sm:text-lg md:text-xl font-normal font-serif mb-2 max-w-[300px]">
                            {distintivo.subtitulo}
                        </h3>
                        <p className="leading-snug text-gray-800 font-normal font-serif max-w-[300px]">
                            {distintivo.descripcion}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
