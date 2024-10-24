import copaImage from "../../../assets/images/images/copa-removebg-preview.png";

export default function Copa() {
    return (
        <div className="p-4 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="col-span-1 flex flex-col items-center justify-center text-center">
                    <h2 className="px-4 text-4xl md:text-6xl font-normal text-blue font-serif">
                        Copa
                    </h2>
                    <div className="p-6">
                        <p className="mt-4 px-10">
                            Evento enfocado en la Comunidad de Personas con Amputación en México, al cual concebimos como COPA. Con el fin de sensibilizar sobre la situación de las personas con amputación de miembro inferior en México y las diferentes alternativas existentes para una adecuada recuperación de la autonomía.
                        </p>
                    </div>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                    <img src={copaImage} alt="Copa Event" className="w-2/3 h-auto object-cover rounded-xl" />
                </div>
            </div>
        </div>
    );
}
