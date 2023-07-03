const formReserva = document.getElementById('formNuevaReserva');
const reservaId = formReserva.dataset.id;

const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const fecha_ingreso = document.getElementById('fecha_ingreso')
const fecha_salida = document.getElementById('fecha_salida')
const habitacion = document.getElementById('habitacion')
const cantidad_personas = document.getElementById('cantidad_personas')
const telefono = document.getElementById('telefono')


document.addEventListener('DOMContentLoaded', async () => {
    // Traemos la reserva que se va a editar
    const datos = await fetch(`/api/${reservaId}`);
    const respuesta = await datos.json();

    // Mostrar en el formulario los respuesta de la reserva que se quiere actualizar
    nombre.value = respuesta.nombre;
    apellido.value = respuesta.apellido;
    fecha_ingreso.value = respuesta.fecha_ingreso;
    fecha_salida.value = respuesta.fecha_salida;
    habitacion.value = respuesta.habitacion;
    cantidad_personas.value = respuesta.cantidad_personas;
    telefono.value = respuesta.telefono;
});


formReserva.addEventListener('submit', async (e) => {
    e.preventDefault();

    reservaActualizada = {
        nombre: nombre.value,
        apellido: apellido.value,
        fecha_ingreso: fecha_ingreso.value,
        fecha_salida: fecha_salida.value,
        habitacion: habitacion.value,
        cantidad_personas: cantidad_personas.value,
        telefono: telefono.value
    }


    // Se envían los nuevos datos al servidor express
    const respuesta = await fetch(`/api/${reservaId}`, {
        method: 'PUT',
        body: JSON.stringify(reservaActualizada),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const datos = await respuesta.json();

    // Mostrar mensajes al usuario
    alert(datos.message);

    // Redireccionar al usuario
    window.location.href = '/'

})