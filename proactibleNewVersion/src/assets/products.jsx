// Data.js
const productData = [
  {
    titulo: "Liner de la marca ALPS",
    descripcion:
      "Contamos con diferentes diseños acordes al tipo de actividad y muñón, así como grosor de 3mm o 6mm.",
    imagePath: "/src/assets/images/images/venta_componentes_imgs/liner.png",
    categoria: "Liner",
  },
  {
    titulo: "Liner Skeo Skinguard",
    descripcion:
      "Los beneficios que tiene el Liner Skeo Skinguard son los siguientes: Tiene partículas antibacterianas que ayudan a evitar que las bacterias se multipliquen y protegen el material de silicona. Cuenta con un mejor control del olor causado por las bacterias. La piel no es afectada por el aditivo antibacterial.P004",
    imagePath:
      "src/assets/images/images/venta_componentes_imgs/linear_skeo.png",
    categoria: "Liner",
  },
  {
    titulo: "Liner ALPS superior performance",
    descripcion:
      "Liner ALPS superior performance para amputación transtibial, disponible en varias tallas. NO INCLUYE ENVÍO. En caso de contar con el programa de garantía de Proactible se aplicará un 10% dedescuento.",
    imagePath:
      "src/assets/images/images/venta_componentes_imgs/Liner_ALPS_supPerformance.png",
    categoria: "Liner",
  },
  {
    titulo: "Liner ComfortSil. Basic Streifeneider",
    descripcion:
      "De silicona especialmente blanda de 3 mm. Comodidad óptima y agradable amortiguación. Tejido de punto de una sola pieza para facilitar el enrollado y desenrollado del liner. Matriz externa distal con tejido de punto de 10 cm, reduce el trazo distal. Franja vertical tejida en la parte delantera para una mejor orientación al vestirse. El control de rotación distal favorece a la conducción de la prótesis de pierna. Cuenta con descuento con garantía extendida.",
    imagePath:
      "src/assets/images/images/venta_componentes_imgs/Liner_ComfortSil.png",
    categoria: "Liner",
  },

  {
    titulo: "Liner Iceross Seal In- Transfemoral",
    descripcion:
      "El liner Iceross Seal-In TF ofrece seguridad y libertad de movimiento para usuarios con amputación transfemoral y elevado nivel de actividad.Ya que cuenta con una resistente cubierta de tela que permite la expansión radial y una cómoda elasticidad",
    imagePath:
      "src/assets/images/images/venta_componentes_imgs/Liner_Iceross_Seal.png",
    categoria: "Liner",
  },
  {
    titulo: "Rodilla 3R80",
    descripcion:
      "Resistente al agua hasta una profundidad de 3 metros y cuenta con un bloqueo manual para una seguridad aún mayor precisamente en entornos mojados.",
    imagePath:
      "src/assets/images/images/venta_componentes_imgs/rodilla_3R80.png",
    categoria: "Rodilla",
  },
  {
    titulo: "Pie Balance Foot J",
    descripcion:
      "Es un pie ligero, para personas que caminan más despacio. Ofrece excelente estabilidad y apoyo.",
    imagePath:
      "src/assets/images/images/venta_componentes_imgs/pie_balance_foot_J.png",
    categoria: "Pie",
  },
  {
    titulo: "Pie Taleo",
    descripcion:
      " Pie prótesico de material compuesto. Talla 22 a 30.Transmite una sensación natural y agradable. Es resistente al agua.",
    imagePath: "src/assets/images/images/venta_componentes_imgs/pie_Taleo.png",
    categoria: "Pie",
  },
  {
    titulo: "Funda protectora CONFETTI II CANVAS",
    descripcion:
      "Funda protectora para prótesis transfemoral de la marca ID ethnos. Pesa aproximadamente 400 gramos, es compatible con varias rodillas y resistente contra el agua. CP006",
    imagePath:
      "src/assets/images/images/venta_componentes_imgs/fundaprotectora_confetti.png",
    categoria: "Funda protectora",
  },
  {
    titulo: "Valvula Pushvalve",
    descripcion: "21Y14",
    imagePath: "src/assets/images/images/venta_componentes_imgs/valvula_p.png",
    categoria: "Valvula",
  },
  {
    titulo: "Manga de Neopreno",
    descripcion:
      "Manga de neopreno para prótesis transtibial. Tallas 1.0 a 3.5. Cuenta con descuento con garantía extendida.",
    imagePath:
      "src/assets/images/images/venta_componentes_imgs/manga_neopreno.png",
    categoria: "Manga",
  },
  {
    titulo: "Pie con articulación",
    descripcion:
      " Pie con articulación de acero. Tallas 22 a 30. Cuenta con descuento en caso de tener garantía extendida.",
    imagePath:
      "src/assets/images/images/venta_componentes_imgs/pie_articulacion.png",
    categoria: "Pie",
  },
  {
    titulo: "Pie Sach",
    descripcion:
      "Pie de tobillo sólido  madera. Talla 21 a 28. Con partido de sandalia. Hecho en México. Cuenta con descuento con garantía extendida.",
    imagePath: "src/assets/images/images/venta_componentes_imgs/pie_sach.png",
    categoria: "Pie",
  },
  {
    titulo: "Bolsa de fácil colocación",
    descripcion:
      "Bolsa de fácil colocación de prótesis para amputación transfemoral (por arriba de rodilla)",
    imagePath:
      "src/assets/images/images/venta_componentes_imgs/bolsa_facil_colocacion.png",
    categoria: "Bolsa",
  },
  {
    titulo: "Pie articulado de titanio (Single Axis)",
    descripcion:
      "Pie con articulación de titanio. Tallas 22 a 28. Cuenta con descuento en caso de tener garantía extendida.",
    imagePath:
      "src/assets/images/images/venta_componentes_imgs/pie_titanio.png",
    categoria: "Pie",
  },
  {
    titulo: "Rodilla 3R60",
    descripcion:
      "Rodilla policéntrica. La rodilla 3R60 te permite caminar bien de nuevo, segurirdad potenciada, caminar por terrenos irregulares y pendientes, al igual que sentarse y arrodillarse relajadamente Su nivel de movilidad es de 2, 3. Peso corporal máx: 125kg",
    imagePath:
      "src/assets/images/images/venta_componentes_imgs/rodilla3R60.jpg",
    categoria: "Rodilla",
  },
  {
    titulo: "Pie Rush",
    descripcion:
      "El pie rush proporciona el movimiento de pie y tobillo más realista y receptivo disponible. Fabricado con un compuesto de vidrio de ingeniería avanzada, que es tres veces más flexible que la mayoría de las prótesis de pie convencionales.",
    imagePath: "src/assets/images/images/venta_componentes_imgs/pie_rush.jpg",
    categoria: "Pie",
  },
  {
    titulo: "Rodilla 3I15",
    descripcion:"La rodilla monocéntrica modular 3I15 tiene movilidad 1,2",
    imagePath: "src/assets/images/images/venta_componentes_imgs/rodilla3I15.jpg",
    categoria: "Rodilla",
  },
];

export default productData;
