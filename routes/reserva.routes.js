// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores
const router = require('express').Router();
const {  
    cargarListaReservas,
    cargarNuevaReserva,
    cargarEditarReserva,
    crearReserva,
    obtenerReservas, //TODAS LAS RESERVAS
    obtenerUnaReserva, // OBTENER UNA RESERVA
    editarReserva,
    eliminarReserva 
} = require('../controllers/reserva.controllers')


// ==========================================
//         Rutas para renderizar vistas
// ==========================================

//RENDERIZA LAS VISTAS
router.get('/', cargarListaReservas);

//FORMULARIO PARA RENDERIZAR UNA NUEVA RESERVA
router.get('/nueva-reserva', cargarNuevaReserva);

router.get('/editar-reserva/:id', cargarEditarReserva)


// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api', obtenerReservas)

//OBTENER UNA SOLA RESERVA
router.get('api/:id', obtenerUnaReserva)

// Crear una reserva
router.post('/nueva-reserva', crearReserva);

router.get('/api/:id', obtenerReservas)

// Actualizar una reserva
router.put('/api/:id', editarReserva);

// Eliminar una reserva de forma lógica
router.delete('/api/:id', eliminarReserva);


module.exports = router;