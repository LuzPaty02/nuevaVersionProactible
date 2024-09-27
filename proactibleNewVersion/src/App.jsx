import React from 'react';
import Navbar from './Navbar'; // Your navbar
import Home from './pages/Inicio/Home'; // Home page
import Protesis from './pages/servicios_paginas/Protesis';
import Ortesis from './pages/servicios_paginas/Ortesis';
import Rehabilitacion from './pages/servicios_paginas/Rehabilitacion';
import VentaComponentes from './pages/servicios_paginas/VentaComponentes';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16 px-6 md:px-8">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/protesis" element={<Protesis />} />
        <Route path="/ortesis" element={<Ortesis />} />
        <Route path="/rehabilitacion" element={<Rehabilitacion />} />
        <Route path="/venta-componentes" element={<VentaComponentes />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
