import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "50px", position: "relative", zIndex: 1 }}>
      <h1>Menú Principal</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        <div className="card" onClick={() => navigate("/clientes")}>
          Clientes
        </div>

        <div className="card" onClick={() => navigate("/eventos")}>
          Eventos
        </div>
      </div>
    </div>
  );
}

export default Menu;
