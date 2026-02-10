import { Outlet, Link, useLocation } from "react-router-dom";
import "../index.css";

function Layout() {
  const location = useLocation();

  // Si estamos en el menú principal, no mostrar el mini menú
  const mostrarMenu = location.pathname !== "/";

  return (
    <div className="darkTheme">

      {mostrarMenu && (
        <div className="topMenu">
          <Link to="/">Home</Link>
          <Link to="/clientes">Clientes</Link>
          <Link to="/musicos">Músicos</Link>
          <Link to="/eventos">Eventos</Link>
          <Link to="/pagos">Pagos</Link>
          <Link to="/reportes">Reportes</Link>
          <Link to="/avisos">Avisos</Link>
        </div>
      )}

      <Outlet />

    </div>
  );
}

export default Layout;