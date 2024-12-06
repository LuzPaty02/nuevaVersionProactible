import {
  whatsappIcon,
  facebookIcon,
  contactIcon,
  phoneIcon,
  instagramIcon,
} from "./assets/iconPaths.jsx";

export default function Footer() {
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

        {/* Right Section: Title, Paragraph, and Lists */}
        <div className="lg:col-span-2 p-4 flex flex-col space-y-6 w-full">
          {/* Title and Paragraph */}
          <div>
            <h2 className="text-4xl lg:text-6xl text-blue font-serif mb-4">Queremos conocerte</h2>
            <p>
              Ponte en contacto con nosotros o visítanos directamente en nuestra
              sucursal ubicada en Zapopan Jal, México.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg">Contáctanos</h3>
            <ul className="space-y-2 pl-4">
              <li className="flex items-center text-blue-950">
                <span className="w-6 h-6 mr-2">{whatsappIcon}</span>
                <a href="tel:+5213338521229" className="text-blue-950">
                  +52 1 33 3852 1229
                </a>
              </li>
              <li className="flex items-center text-blue-950">
                <span className="w-6 h-6 mr-2">{whatsappIcon}</span>
                <a href="tel:+5213321541205" className="text-blue-950">
                  +52 1 33 2154 1205
                </a>
              </li>
              <li className="flex items-center text-blue-950">
                <span className="w-6 h-6 mr-2">{phoneIcon}</span>
                <span>(33) 3852 1229</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg">Redes sociales</h3>
            <ul className="space-y-2 pl-4">
              <li className="flex items-center text-blue-950">
                <span className="w-6 h-6 mr-2">{facebookIcon}</span>
                <span>Facebook</span>
              </li>
              <li className="flex items-center text-blue-950">
                <span className="w-6 h-6 mr-2">{instagramIcon}</span>
                <span>Instagram</span>
              </li>
            </ul>
          </div>

          {/* Email */}
          <div>
            <h3 className="font-bold text-lg">Correo</h3>
            <ul className="pl-4">
              <li className="flex items-center text-blue-950">
                <span className="w-6 h-6 mr-2">{contactIcon}</span>
                <a href="mailto:contacto@proactible.com" className="text-blue-950">
                  contacto@proactible.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


