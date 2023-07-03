const obtenerDatos = async () => {
    //SE SOLICITAN LAS RESERVAS AL SERVIDOR
    const datos = await fetch('http://localhost:4000/api', {
        method: 'GET'
    });
    const reservas = await datos.json();
    return reservas;
}

//CARGAR LAS RESERVAS EN LA TABLA
const mostrarReservas = (reservas, tablaElement) => {
    let registros = '';
    reservas.forEach(reserva => {
        registros += `
          <tr>
               <td>${reserva.codigo}</td>
               <td>${reserva.nombre}</td>
               <td>${reserva.apellido}</td>
               <td>${reserva.fecha_ingreso}</td>
               <td>${reserva.fecha_salida}</td>
               <td>${reserva.habitacion}</td>
               <td>${reserva.cantidad_personas}</td>
               <td>${reserva.telefono}</td>
               <td>
               <div class="row">
               <a href="/editar-reserva/${reserva.id}" class="btn btn-sm btn-warning">Editar</a>
               <button class="btn btn-danger btn-sm" data-id="${reserva.id}" onClick=eliminarReserva(event)>Eliminar</button>
               </div>
               </td>
          </tr>
        `
    })

    tablaElement.innerHTML = registros;

};



const eliminarReserva = async (e) => {
    console.log(e)
    const id = e.target.dataset.id;

const respuesta = await fetch(`/api/${id}`, {
    method: 'DELETE',
})

const datos = await respuesta.json();

alert(datos.message);

window.location.href = '/'

};


document.addEventListener('DOMContentLoaded', async () => {
    // Mostrar las reservas en la tabla
    const tbody = document.getElementById('listadoReservas');
    const reservas = await obtenerDatos() // undefined si no obtenerDatos no retorna nada
    mostrarReservas(reservas, tbody)

});