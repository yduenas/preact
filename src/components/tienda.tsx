interface TiendaProps {
  numero: string;
  CO_EMPR: string;
  CO_DEPA: string;
  CO_AREA: string;
  DE_AREA: string;
  DE_REFE: string;
}
function Tienda({
  numero,
  CO_EMPR,
  CO_DEPA,
  CO_AREA,
  DE_AREA,
  DE_REFE,
}: TiendaProps) {
  return (
    <tr>
      <td>{numero}</td>
      <td>
        <a
          href={`producto/${CO_EMPR}/${CO_DEPA}/${CO_AREA}`}
          style={{ textDecoration: "none" }}
          className="text-dark"
        >
          {DE_AREA}
        </a>
        <br />
        <small style={{ fontSize: "10px" }}>{DE_REFE}</small>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={`#Modal-${CO_EMPR}${CO_DEPA}${CO_AREA}`}
        >
          Sacar cita
        </button>
      </td>
    </tr>
  );
}
export default Tienda;
