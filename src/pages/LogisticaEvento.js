import { useState } from "react";

function LogisticaEvento({ evento, guardarCambios, volver }) {

  const [tab, setTab] = useState("info");

  const [cliente, setCliente] = useState(evento?.cliente || "");
  const [fecha, setFecha] = useState(evento?.fecha || "");
  const [estado, setEstado] = useState(evento?.estado || "");
  const [musico, setMusico] = useState(evento?.musico || "");
  const [total, setTotal] = useState(evento?.total || "");
  const [anticipo, setAnticipo] = useState(evento?.anticipo || "");

  if (!evento) {
    return <div className="page">Cargando...</div>;
  }

  const guardar = () => {
    const actualizado = {
      ...evento,
      cliente,
      fecha,
      estado,
      musico,
      total,
      anticipo
    };

    guardarCambios(actualizado);
    alert("Cambios guardados");
  };

  return (
    <div className="page">

      <button onClick={volver}>← Regresar</button>

      <h1>Logística del Evento - {evento.id}</h1>

      <div className="tabs">
        <button onClick={() => setTab("info")}>Información básica</button>
        <button onClick={() => setTab("musicos")}>Asignación de músicos</button>
        <button onClick={() => setTab("pagos")}>Pagos</button>
      </div>

      {tab === "info" && (
        <div className="cardGrande">
          <h3>Información básica</h3>

          <input
            placeholder="Cliente"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
          />

          <input
            placeholder="Fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />

          <input
            placeholder="Estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          />
        </div>
      )}

      {tab === "musicos" && (
        <div className="cardGrande">
          <h3>Asignar músico o grupo</h3>

          <input
            placeholder="Nombre del músico o grupo"
            value={musico}
            onChange={(e) => setMusico(e.target.value)}
          />
        </div>
      )}

      {tab === "pagos" && (
        <div className="cardGrande">
          <h3>Pagos</h3>

          <input
            placeholder="Total"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          />

          <input
            placeholder="Anticipo"
            value={anticipo}
            onChange={(e) => setAnticipo(e.target.value)}
          />

          <p>
            Restante: ${(Number(total) || 0) - (Number(anticipo) || 0)}
          </p>
        </div>
      )}

      <br />
      <button onClick={guardar}>Guardar cambios</button>

    </div>
  );
}

export default LogisticaEvento;