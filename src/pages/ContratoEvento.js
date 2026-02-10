function ContratoEvento({ evento, volver }) {

    return (
      <div className="page">
  
        <button onClick={volver}>Regresar</button>
  
        <h1>Contrato de Evento - {evento.id}</h1>
  
        <div className="cardGrande">
  
          <h3>Cliente</h3>
          <p>{evento.cliente}</p>
  
          <h3>Músico asignado</h3>
          <p>{evento.musico || "No asignado"}</p>
  
          <h3>Pagos</h3>
          <p>Total: ${evento.total || "0"}</p>
          <p>Anticipo: ${evento.anticipo || "0"}</p>
          <p>
  Restante: $
  {(Number(evento.total) || 0) - (Number(evento.anticipo) || 0)}
</p>

  
        </div>
      </div>
    );
  }
  
  export default ContratoEvento;