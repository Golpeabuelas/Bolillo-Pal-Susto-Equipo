import { procesoMostrarTicket } from "./load_ticket"

const Usuario = JSON.parse(localStorage.getItem('usuario')) || null

if ( Usuario ) {
    procesoMostrarTicket(Usuario.id_usuario)
}