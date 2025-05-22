// import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function Cabecera() {
    return(

        <div className="row  bg-white" > 

          <div className="col-lg-3 col-sm-6 d-none d-sm-none d-md-block">
            <a href="https://grupo.tailoy.com.pe/trabajaconnosotros/" id="link">
              <img src="https://grupo.tailoy.com.pe/trabajaconnosotros/public/assets/img/logo-verde.png" id="imagen" width="250" height="100" />
            </a>
          </div>

          <div className="col-lg-9 col-sm-6 text-center pt-3">
            <h1>Sistema de citas para entrevista</h1>
          </div>

          <div className="col-12 mt-3  bg-primary text-light text-left" >
            <p>Previo a tu registro en nuestro sistema de seleccion te invitamos a que saque una cita en la tienda en la que deseas postulas.</p>
          </div>

          <div className="col-12">
            <p className="text-danger">Recuerda que previamente te has debido de registrar en Nuestro portal
                <a href="https://www.grupo.tailoy.com.pe/trabajaconnosotros/">TRABAJA CON NOSOTROS</a>
            </p>
          </div>

        </div>

    )
}
export default Cabecera