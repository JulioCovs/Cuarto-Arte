import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Clientes from "./pages/Clientes";
import Musicos from "./pages/Musicos";
import Eventos from "./pages/Eventos";
import Pagos from "./pages/Pagos";
import Reportes from "./pages/Reportes";
import Avisos from "./pages/Avisos";

import Layout from "./components/Layout";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {!loggedIn ? (
          <Route path="*" element={<Login onLogin={() => setLoggedIn(true)} />} />
        ) : (
          <Route element={<Layout />}>
            <Route path="/" element={<Menu />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/musicos" element={<Musicos />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/avisos" element={<Avisos />} />
            <Route path="/pagos" element={<Pagos />} />
            <Route path="/reportes" element={<Reportes />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
