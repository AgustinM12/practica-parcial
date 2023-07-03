const formNuevaReserva = document.getElementById('formNuevaReserva')

formNuevaReserva.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const fecha_ingreso = document.getElementById('fecha_ingreso').value
    const fecha_salida = document.getElementById('fecha_salida').value
    const habitacion = document.getElementById('habitacion').value
    const cantidad_personas = document.getElementById('cantidad_personas').value
    const telefono = document.getElementById('telefono').value


    const reserva = {
        nombre,
        apellido,
        fecha_ingreso,
        fecha_salida,
        habitacion,
        cantidad_personas,
        telefono
    }


    const respuesta = await fetch('http://localhost:4000/nueva-reserva', {
        method: 'POST',
        body: JSON.stringify(reserva),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const datos = await respuesta.json()

    alert(datos.message);
    window.location.href = '/'

});
