-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-07-2023 a las 03:59:22
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `reservadb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id` int(11) NOT NULL,
  `codigo` varchar(100) NOT NULL DEFAULT '1688246093146',
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `fecha_ingreso` datetime NOT NULL,
  `fecha_salida` datetime NOT NULL,
  `habitacion` varchar(100) NOT NULL,
  `cantidad_personas` int(11) NOT NULL,
  `telefono` varchar(100) NOT NULL,
  `estado` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id`, `codigo`, `nombre`, `apellido`, `fecha_ingreso`, `fecha_salida`, `habitacion`, `cantidad_personas`, `telefono`, `estado`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, '1688251361725', 'Juan', 'montaner', '2023-07-07 22:34:00', '2023-07-07 22:38:00', '100', 10, '3704563459', 0, '2023-07-01 22:43:08', '2023-07-02 22:48:39', NULL),
(2, '1688251640024', 'Wagustin', '12', '2023-07-01 22:47:00', '2023-07-01 15:47:00', '3', 1, '3704563459', 0, '2023-07-01 22:47:44', '2023-07-02 23:00:34', NULL),
(3, '1688254596848', 'Agustim', 'Mazza123', '2023-07-06 23:37:00', '2023-07-19 23:37:00', '1', 3, '3704563459', 0, '2023-07-01 23:37:44', '2023-07-02 23:04:17', NULL),
(5, '1688254871386', 'Juan', 'Gus', '2023-07-01 23:41:00', '2023-07-02 00:41:00', '4', 5, '3704563459', 0, '2023-07-01 23:41:45', '2023-07-02 23:04:53', NULL),
(6, '1688330479190', 'Ricardo', 'montaner', '2023-07-02 20:41:00', '2023-07-17 20:41:00', '69', 8, '3704563459', 0, '2023-07-02 20:41:43', '2023-07-02 22:58:15', NULL),
(9, '1688331143099', 'Agustin', 'Mazza', '2023-07-01 23:05:00', '2023-07-03 23:05:00', '1', 1, '3704563459', 0, '2023-07-02 20:52:49', '2023-07-03 01:58:14', NULL),
(10, '1688338115139', 'Juancho', 'Rodriguez', '2023-07-01 22:49:00', '2023-07-09 22:49:00', '3', 2, '3704563459', 0, '2023-07-02 22:49:15', '2023-07-02 22:52:24', NULL),
(11, '1688338451309', 'Walter', 'White', '2023-07-01 22:54:00', '2023-07-15 22:54:00', '1', 2, '3704563459', 1, '2023-07-02 22:54:43', '2023-07-02 22:54:43', NULL),
(12, '1688338820281', 'Jesse', 'Pinkman', '2023-07-01 23:00:00', '2023-07-15 23:00:00', '8', 2, '3704563459', 1, '2023-07-02 23:01:02', '2023-07-02 23:01:02', NULL),
(13, '1688339088399', 'Gustavo', 'Fring', '2023-07-01 23:05:00', '2023-07-08 23:05:00', '69', 45, '3704563459', 1, '2023-07-02 23:05:25', '2023-07-02 23:05:25', NULL),
(14, '1688339373319', 'John', 'Rambo', '2023-07-04 01:57:00', '2023-07-06 01:57:00', '1', 1, '3704563459', 1, '2023-07-02 23:11:37', '2023-07-03 01:58:00', NULL),
(15, '1688349424217', 'Lionel', 'Messi', '2023-07-05 01:58:00', '2023-07-21 01:58:00', '1', 1, '03704563459', 1, '2023-07-03 01:58:39', '2023-07-03 01:58:39', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codigo` (`codigo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
