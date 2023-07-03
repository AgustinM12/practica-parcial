const Reserva = require('../models/Reserva');
const ctrlReservas = {};

// RENDERIZAR INDEX
ctrlReservas.cargarListaReservas = (req, res) => {
    res.render('index');
}

// RENDERIZAR FORMULARIO NUEVA RESERVA
ctrlReservas.cargarNuevaReserva = (req, res) => {
    res.render('nueva-reserva');
}

// RENDERIZAR EDITAR RESERVAS
ctrlReservas.cargarEditarReserva = (req, res) => {
    const { id } = req.params;
    res.render('editar-reserva', { id });
}



// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas de la tabla reservas en la DB
ctrlReservas.obtenerReservas = async (req, res) => {
    try {
        const reservas = await Reserva.findAll({
            where: {
                estado: true
            }
        });
        return res.json(reservas);
    } catch (error) {
        console.log('Error al obtener las reservas', error);
        return res.status(500).json({
            message: "Error al obtener reservas"
        })
    }
}


//OBTENER UNA SOLA RESERVA POR SU PK
ctrlReservas.obtenerUnaReserva = async (req, res) => {
    try {
        const { id } = req.params;
        const reserva = await Reserva.findByPk(id);
        return res.json(reserva);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error al obtener la reserva'
        })
    }
}






// CREA UNA NUEVA RESERVA
ctrlReservas.crearReserva = async (req, res) => {
    //trae todos los datos del body de la peticion
    const {
        nombre,
        apellido,
        fecha_ingreso,
        fecha_salida,
        habitacion,
        cantidad_personas,
        telefono
    } = req.body;


    try {
        //los guarda en una diferente constante
        const nuevaReserva = new Reserva({
            nombre,
            apellido,
            fecha_ingreso,
            fecha_salida,
            habitacion,
            cantidad_personas,
            telefono
        });

        // los manda a la DB
        await nuevaReserva.save();

        return res.status(201).json({
            message: "Reserva creada exitosamente"
        })
    } catch (error) {
        console.log('Error al crear la reserva', error)

        return res.status(500).json({
            message: 'Error al crear la reserva'
        })
    }
}




// ACTUALIZA UNA RESERVA
ctrlReservas.editarReserva = async (req, res) => {
    try {
        const { id } = req.params;
        const reserva = await Reserva.findByPk(id);
        await reserva.update(req.body)
        return res.json({message: 'Reserva editada correctamente'});
    } catch (error) {
        console.log('Error al actualizar la reserva', error);
        return res.status(500).json({message: 'Error al actualizar la reserva'})
    }
}




// Eliminar una reserva de forma lógica
ctrlReservas.eliminarReserva = async (req, res) => {
    const { id } = req.params;
    try {
        const reserva = await Reserva.findByPk(id);
        await reserva.update({ estado: false });
        return res.json({ message: 'Reserva se eliminó correctamente'})
    } catch (error) {
        console.log('Error al eliminar la reserva', error);
        return res.status(500).json({
            message: 'Error al eliminar la reserva'})
    }
}

module.exports = ctrlReservas;