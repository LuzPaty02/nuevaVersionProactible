import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home, Nosotros } from './pages/pageIndex';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </>
  );
}

export default App;
