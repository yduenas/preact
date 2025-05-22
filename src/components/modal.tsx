interface ModalProps {
    numero: string;
    CO_EMPR: string;
    CO_DEPA: string;
    CO_AREA: string;
    DE_AREA: string;
    DE_REFE: string;
}
function Modal({numero, CO_EMPR, CO_DEPA, CO_AREA, DE_AREA, DE_REFE}: ModalProps ){
  //  $('#Modal-0111001').modal('show');
const modalElement = document.getElementById('Modal-0111005');
if (modalElement) {
    modalElement.style.display = 'block';
}
    return (

         <div className="modal fade" id={`Modal-${CO_EMPR}${CO_DEPA}${CO_AREA}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">{DE_AREA}</h5><hr></hr>

                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <form method="POST" action="https://grupo.tailoy.com.pe/trabajaconnosotros/citas/registro/">

                  <div className="modal-body">
                    <p  className="text-danger">Recuerda que previamente te has debido de registrar en Nuestro portal
                      <a href="https://www.grupo.tailoy.com.pe/trabajaconnosotros/">TRABAJA CON NOSOTROS</a>
                    </p>
                    <p>Ingresa tus datos y selecciona fecha disponible :</p>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ display: "none" }}>TIENDA SURQUILLO</span>
                        <input name="CO_EMPR" type="hidden" className="form-control" placeholder="EMPRESA" 			value={CO_EMPR} required />
                        <input name="CO_DEPA" type="hidden" className="form-control" placeholder="DEPARTAMENTO" value={CO_DEPA} required />
                        <input name="CO_AREA" type="hidden"	className="form-control" placeholder="TIENDA" 			value={CO_AREA} required />
                        <input name="DE_AREA" type="hidden"	className="form-control" placeholder="TIENDA" 			value={DE_AREA} required />
                        <input name="EM_AREA" type="hidden"	className="form-control" placeholder="EM_AREA"			value="mcalero@tailoy.com.pe" required />
                        <input name="NO_DIRE_SEDE" type="hidden"	className="form-control" placeholder="EM_AREA"	value={DE_REFE} required />
                        <input name="NO_UBIC_GEOG" type="hidden"	className="form-control" placeholder="EM_AREA"	value="SURQUILLO" required />
                        
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">DNI</span>
                      <input name="NU_DOCU_IDEN"  type="text" className="form-control" placeholder="DNI" aria-label="Username" aria-describedby="basic-addon1" minLength={8} maxLength={20} required />
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">NOMBRE</span>
                      <input  name="NO_TRAB" type="text" className="form-control" placeholder="NOMBRES Y APELLIDOS" aria-label="Username" aria-describedby="basic-addon1"  pattern="^[a-zA-Z ]*$" required />
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">CORREO</span>
                      <input  name="NO_DIRE_MAIL" type="email" className="form-control" placeholder="CORREO ELECTRONICO" aria-label="Username" aria-describedby="basic-addon1" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" required />
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">CELULAR</span>
                      <input  name="NU_TEL1" type="text" className="form-control" placeholder="TELEFONO" aria-label="Username" aria-describedby="basic-addon1"
                      min="9" max="9"  pattern="[0-9]{9}" minLength={9} maxLength={9} required />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">FECHA DISPONIBLE</span>

                        <select className="form-control"
                                name="FE_CITA" id="HORA_CITA" 
                                // value={currentValue}                                 
                                defaultValue={'DEFAULT'} 
                                // onChange={props.onChange}
                                required>
                          <option value="DEFAULT" disabled >Escoge la fecha y hora</option>

                          <option value="2025-05-19 17:00:00.000">19/05/2025 05:00 PM</option>
                          <option value="2025-05-20 11:00:00.000">20/05/2025 11:00 AM</option>
                          <option value="2025-05-20 15:00:00.000">20/05/2025 03:00 PM</option>
                          <option value="2025-05-20 17:00:00.000">20/05/2025 05:00 PM</option>
                          <option value="2025-05-21 11:00:00.000">21/05/2025 11:00 AM</option>
                          <option value="2025-05-21 15:00:00.000">21/05/2025 03:00 PM</option>
                          <option value="2025-05-21 17:00:00.000">21/05/2025 05:00 PM</option>
                          <option value="2025-05-26 11:00:00.000">26/05/2025 11:00 AM</option>
                          <option value="2025-05-26 15:00:00.000">26/05/2025 03:00 PM</option>
                          <option value="2025-05-26 17:00:00.000">26/05/2025 05:00 PM</option>
                          <option value="2025-05-27 11:00:00.000">27/05/2025 11:00 AM</option>
                          <option value="2025-05-27 15:00:00.000">27/05/2025 03:00 PM</option>
                          <option value="2025-05-27 17:00:00.000">27/05/2025 05:00 PM</option>
                          <option value="2025-05-28 11:00:00.000">28/05/2025 11:00 AM</option>
                          <option value="2025-05-28 15:00:00.000">28/05/2025 03:00 PM</option>
                          <option value="2025-05-28 17:00:00.000">28/05/2025 05:00 PM</option>
                          
                        </select>

                    </div>

                    <div className="input-group mb-3">
                      <button type="submit" className="form-control btn btn-primary">Sacar cita</button>
                    </div>


                    <p>Dirección : {DE_REFE}</p>


                    <div style={{ width: "50%" }}>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1950.4895490289807!2d-77.0268423!3d-12.1135826!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8123c9421e9%3A0x853e82aca589e9a9!2sTai%20Loy!5e0!3m2!1ses-419!2spe!4v1669073394556!5m2!1ses-419!2spe" width="450" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>

                  </div>
                </form>
              </div>
            </div>
          </div>

    )
}
export default Modal