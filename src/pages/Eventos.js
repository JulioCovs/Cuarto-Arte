import { useState, useEffect } from "react";
import LogisticaEvento from "./LogisticaEvento";
import ContratoEvento from "./ContratoEvento";

function Eventos() {

  const [vista, setVista] = useState("tabla");
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const guardados = localStorage.getItem("eventos");
    if (guardados) {
      setEventos(JSON.parse(guardados));
    } else {
      const iniciales = [
        { id: "EVC-0003", cliente: "Alvaro A.", fecha: "25/12/25", estado: "Confirmado", anticipo: "", total: "", musico: "" },
        { id: "EVC-0051", cliente: "Eric R.", fecha: "05/01/26", estado: "Pendiente", anticipo: "", total: "", musico: "" }
      ];
      setEventos(iniciales);
      localStorage.setItem("eventos", JSON.stringify(iniciales));
    }
  }, []);

  const guardarCambiosEvento = (eventoActualizado) => {
    const nuevosEventos = eventos.map(e =>
      e.id === eventoActualizado.id ? eventoActualizado : e
    );
    setEventos(nuevosEventos);
    localStorage.setItem("eventos", JSON.stringify(nuevosEventos));
  };

  const filtrados = eventos.filter(e =>
    e.cliente.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (vista === "logistica") {
    return (
      <LogisticaEvento
        evento={eventoSeleccionado}
        guardarCambios={guardarCambiosEvento}
        volver={() => setVista("tabla")}
      />
    );
  }

  if (vista === "contrato") {
    return (
      <ContratoEvento
        evento={eventoSeleccionado}
        volver={() => setVista("tabla")}
      />
    );
  }

  return (
    <div className="page">
      <h1>Gestión de eventos</h1>

      <input
        placeholder="Buscar cliente..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="inputBuscar"
      />

      <table className="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th className="accionesHeader">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {filtrados.map((evento) => (
            <tr key={evento.id}>
              <td>{evento.id}</td>
              <td>{evento.cliente}</td>
              <td>{evento.fecha}</td>
              <td>{evento.estado}</td>
              <td className="acciones">
                <button onClick={() => {
                  setEventoSeleccionado(evento);
                  setVista("logistica");
                }}>
                  Logística
                </button>

                <button onClick={() => {
                  setEventoSeleccionado(evento);
                  setVista("contrato");
                }}>
                  Ver Contrato
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Eventos;