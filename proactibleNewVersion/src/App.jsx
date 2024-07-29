import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home  from './pages/Inicio/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
