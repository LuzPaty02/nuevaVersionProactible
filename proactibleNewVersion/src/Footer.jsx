import {
  goToUrl,
  whatsappIcon,
  facebookIcon,
  contactIcon,
  phoneIcon,
  instagramIcon,
  tiktokIcon,
  youtubeIcon,
} from "./assets/iconPaths";

export default function Footer() {
  return (
    <div className="w-full mt-2 p-4 sm:p-6 md:p-8 text-center sm:text-left bg-slate-300 bg-opacity-30">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1: Title, Text, and Address */}
        <div className="space-y-4">
          <h2 className="text-4xl lg:text-6xl text-blue font-serif">
            Queremos conocerte
          </h2>
          <p>
            Ponte en contacto con nosotros o visítanos directamente en nuestra
            sucursal ubicada en Zapopan Jal, México.
          </p>

          <a
            href="https://maps.app.goo.gl/73vXBwPUQm7qD42b8"
            className="font-bold text-blue underline"
          >
            Calzada Constituyentes 929, Colonia Constitución en Zapopan. C.P.
            4518 {goToUrl} 
          </a>
        </div>

        {/* Column 2: Contact Info and Email */}
        <div className="space-y-4 ">
          <h3 className="font-bold text-lg">Contáctanos</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-blue-950 underline">
              <span className="w-6 h-6 mr-2">{whatsappIcon}</span>
              <a href="tel:+5213338521229">+52 1 33 3852 1229</a>
            </li>
            <li className="flex items-center text-blue-950 underline">
              <span className="w-6 h-6 mr-2">{whatsappIcon}</span>
              <a href="tel:+5213321541205">+52 1 33 2154 1205</a>
            </li>
            <li className="flex items-center text-blue-950 underline">
              <span className="w-6 h-6 mr-2">{phoneIcon}</span>
              <a href="tel:+523338521229">(33) 3852 1229</a>
            </li>
          </ul>
          <h3 className="font-bold text-lg">Correo</h3>
          <ul>
            <li className="flex items-center text-blue-950 underline">
              <span className="w-6 h-6 mr-2">{contactIcon}</span>
              <a href="mailto:contacto@proactible.org">
                 contacto@proactible.org
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Redes sociales</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-blue-950 hover:underline">
              <span className="w-6 h-6 mr-2">{facebookIcon}</span>
              <a href="https://www.facebook.com/@Proactible">Facebook</a>
            </li>
            <li className="flex items-center text-blue-950 hover:underline">
              <span className="w-6 h-6 mr-2">{instagramIcon}</span>
              <a href="https://www.instagram.com/proactible/?hl=es">
                Instagram
              </a>
            </li>
            <li className="flex items-center text-blue-950 hover:underline">
              <span className="w-6 h-6 mr-2">{tiktokIcon}</span>
              <a href="https://www.tiktok.com/@proactible">TikTok</a>
            </li>
            <li className="flex items-center text-blue-950 hover:underline">
              <span className="w-6 h-6 mr-2">{youtubeIcon}</span>
              <a href="https://www.youtube.com/channel/UCywSWWik1l6f8C2NI4AhF-Q">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
