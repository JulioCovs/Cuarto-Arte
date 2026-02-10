import { useNavigate } from "react-router-dom";
import "../App.css";

function Menu() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Menú Principal</h1>

      <div className="grid">
        <div className="card" onClick={() => navigate("/clientes")}>
          Manejo de Clientes
        </div>

        <div className="card" onClick={() => navigate("/musicos")}>
          Catálogo de Músicos
        </div>

        <div className="card" onClick={() => navigate("/eventos")}>
          Gestión de Eventos
        </div>

        <div className="card" onClick={() => navigate("/avisos")}>
          Aviso de Eventos
        </div>

        <div className="card" onClick={() => navigate("/pagos")}>
          Cobranza y Pagos
        </div>

        <div className="card" onClick={() => navigate("/reportes")}>
          Reportes y Estadísticas
        </div>
      </div>
    </div>
  );
}

export default Menu;