import { useState, useEffect } from "react";
import Modal from "../../src/components/modal";
import Tienda from "../../src/components/tienda";

function Tabla() {
  type TiendaType = {
    CO_EMPR: string | number;
    CO_DEPA: string | number;
    CO_AREA: string | number;
    DE_AREA: string;
    DE_REFE: string;
    FE_CITAS: []; // Add FE_CITA as optional (or required if always present)
  };

  const [tiendas, setTiendas] = useState<TiendaType[]>([]);

  useEffect(() => {
    const fetchTiendas = async () => {
      const response = await fetch(
        "https://grupo.tailoy.com.pe/trabajaconnosotros/citas/api"
      );
      const data = await response.json();
      console.log(data, "Tiendas");
      setTiendas(data);
    };
    fetchTiendas();
  }, []);

  return (
    <div className="col-md-8  mt-3">
      <div>
        En este portal podras reservar citas pra entrevistas de{" "}
        <strong>puestos vacantes</strong> en nuestras{" "}
        <strong>tiendas y almacenes</strong>.
      </div>
      <br></br>
      <div>
        Para puestos en otras areas da click{" "}
        <a href="https://grupo.tailoy.com.pe/trabajaconnosotros/">aqui</a>
      </div>
      <br></br>

      <table id="example" className="table " style={{ width: "100%" }}>
        <thead className="table-active">
          <tr>
            <th style={{ width: "10%" }}> #</th>
            <th style={{ width: "70%" }}> TIENDAS / ALMACENES</th>
            <th style={{ width: "20%" }}> CITA</th>
          </tr>
        </thead>

        <tbody>
          {tiendas.map((tienda, index) => (
            <Tienda
              key={index}
              numero={(index + 1).toString()}
              CO_EMPR={String(tienda.CO_EMPR)}
              CO_DEPA={String(tienda.CO_DEPA)}
              CO_AREA={String(tienda.CO_AREA)}
              DE_AREA={tienda.DE_AREA}
              DE_REFE={tienda.DE_REFE}
            />
          ))}
        </tbody>
      </table>

      {tiendas.map((tienda, index) => (
        <Modal
          key={index}
          numero={(index + 1).toString()}
          CO_EMPR={String(tienda.CO_EMPR)}
          CO_DEPA={String(tienda.CO_DEPA)}
          CO_AREA={String(tienda.CO_AREA)}
          DE_AREA={tienda.DE_AREA}
          DE_REFE={tienda.DE_REFE}
          FE_CITAS={tienda.FE_CITAS} // Pass an empty array or the appropriate value here
        />
      ))}
    </div>
  );
}
export default Tabla;
