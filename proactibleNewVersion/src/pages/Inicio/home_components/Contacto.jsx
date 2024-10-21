import Map from "./Map";
import {
  whatsappIcon,
  facebookIcon,
  contactIcon,
  phoneIcon,
  instagramIcon,
} from "../../../assets/iconPaths";

export default function Contacto() {
  return (
    <div className="w-full mt-2 p-4 sm:p-6 md:p-8 text-center sm:text-left bg-slate-300 bg-opacity-30 rounded-lg shadow">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Left Section: Map and Address */}
        <div className="lg:col-span-1 flex mt-6 flex-col justify-start items-center">
          <Map />
          <p className="mt-4 font-bold text-start">
            Calzada Constituyentes 929, Colonia Constitución en Zapopan. C.P.
            4518
          </p>
        </div>

        {/* Right Section: Title, Paragraph, and Buttons */}
        <div className="lg:col-span-2 p-4 flex flex-col space-y-6 w-full">
          {/* Title and Paragraph */}
          <div>
            <h2 className="text-4xl lg:text-6xl text-blue font-serif mb-4">Queremos conocerte</h2>
            <p>
              Ponte en contacto con nosotros o visítanos directamente en nuestra
              sucursal ubicada en Zapopan Jal, México.
            </p>
          </div>

          {/* Buttons Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Contact Info */}
            <div className="space-y-2">
              <h3 className="font-bold text-lg">Contáctanos</h3>
              <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                <button className="min-w-max lg:w-56 h-12 px-4 py-2 text-sm font-medium text-white bg-blue-950 rounded-lg hover:bg-blue-900  focus:ring-4 focus:outline-none focus:ring-blue-300 flex items-center justify-start">
                  {whatsappIcon}
                  <a href="tel:+5213338521229" className="ml-2 text-white">
                    +52 1 33 3852 1229
                  </a>
                </button>

                <button className="min-w-max lg:w-56 h-12 px-4 py-2 text-sm font-medium text-white bg-blue-950 rounded-lg hover:bg-blue-900  focus:ring-4 focus:outline-none focus:ring-blue-300 flex items-center justify-start">
                  {whatsappIcon}
                  <a href="tel:+5213321541205" className="ml-2 text-white">
                    +52 1 33 21541205
                  </a>
                </button>

                <button className="min-w-max lg:w-56 h-12 px-4 py-2 text-sm font-medium text-white bg-blue-950 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 flex items-center justify-start">
                  {phoneIcon}
                  <span className="ml-2">(33) 3852 1229</span>
                </button>
              </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Redes sociales</h3>
              <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                <button className="w-full lg:w-48 h-12 px-4 py-2 text-sm font-medium text-white bg-blue-950 rounded-lg hover:bg-blue-900  focus:ring-4 focus:outline-none focus:ring-blue-300 flex items-center justify-start">
                  {facebookIcon}
                  <span className="ml-2">Facebook</span>
                </button>

                <button className="w-full lg:w-48 h-12 px-4 py-2 text-sm font-medium text-white bg-blue-950 rounded-lg hover:bg-blue-900  focus:ring-4 focus:outline-none focus:ring-blue-300 flex items-center justify-start">
                  {instagramIcon}
                  <span className="ml-2">Instagram</span>
                </button>
              </div>
            </div>

              <h3 className="font-bold text-lg mt-4">Correo</h3>
              <div>
                <button className="w-full lg:w-64 h-12 px-4 py-2 text-sm font-medium text-white bg-blue-950 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 flex items-center justify-start">
                  {contactIcon}
                  <a href="mailto:contacto@proactible.com" className="ml-2 text-white">
                    contacto@proactible.com
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
