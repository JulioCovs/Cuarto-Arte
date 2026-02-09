import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="container">
      <h1>Menú Principal</h1>

      <div className="grid">
        <Link to="/clientes"><button className="card">Clientes</button></Link>
        <Link to="/musicos"><button className="card">Músicos</button></Link>
        <Link to="/eventos"><button className="card">Eventos</button></Link>
        <Link to="/avisos"><button className="card">Avisos</button></Link>
        <Link to="/pagos"><button className="card">Pagos</button></Link>
        <Link to="/reportes"><button className="card">Reportes</button></Link>
      </div>
    </div>
  );
}

export default Menu;
