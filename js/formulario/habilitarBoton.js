/**
 * @function
 * Permite validar si todos los campos del formulario cumplan
 * con las propiedades del objeto validity.
 * 
 * El botón enviar se mostrará inhabilitado en caso de que al menos un campo
 * no cumpla las propiedades del objeto validity.
 * 
 * Se agregará la propiedad disabled por medio de setAttribute y el estilo css
 * que anula el pointer-event, además de pintar el borde y fondo de color gris.
 * 
 * Si todos los campos del formulario son validos con el objeto
 * validity.valid, el botón de enviar se deshabilitará, se quitará la propiedad
 * disabled y se removerá el estilo de color gris, volviendo a su estado original.
 */
export function habilitarBotonEnviar() {
    const nombre = document.getElementById("nombreapellido");
    const correo = document.getElementById("correoelectronico");
    const telefono = document.getElementById("telefono");
    const mensaje = document.getElementById("mensaje");
    const btnEnviar = document.getElementById("boton-enviar");
    let nombreapellidoValido = nombreapellido.validity.valid;
    let correoelectronicoValido = correoelectronico.validity.valid;
    let telefonoValido = telefono.validity.valid;
    let mensajeValido = mensaje.validity.valid;

    if (nombreValido && correoValido && asuntoValido && mensajeValido) {
        btnEnviar.removeAttribute("disabled");
        btnEnviar.classList.remove("boton--bloqueado");
    } else {
        btnEnviar.setAttribute("disabled", "true");
        btnEnviar.classList.add("boton--bloqueado");
    }
}