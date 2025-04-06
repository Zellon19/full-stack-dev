<?php
header("Access-Control-Allow-Origin: *"); // Or replace * with your frontend domain for more security
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require "../controllers/libros.php"; // Importar el controlador que maneja la lógica de negocio
require "../controllers/usuarios.php";
require "../controllers/prestamos.php";

// Obtenemos el nombre del json que queremos mostrar de la url
$solicitud = $_GET["url"];

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] === 'POST') {
    switch($solicitud){
        case "agregar-usuario":
            $username = $_GET["username"];
            $email = $_GET["email"];
            $phoneNumber = $_GET["phoneNumber"];
            agregarUsuario($username, $email, $phoneNumber);
            break;
        default:
        echo json_encode(["error" => "Método no permitido"]);
        break;
    }
} else {
    switch ($solicitud) {
        case "libros":
            obtenerLibros();
            break;
        case "usuarios":
            obtenerUsuarios();
            break;
        case "prestamos":
            obtenerPrestamos();
            break;
        default:
            echo json_encode(["error" => "Método no permitido"]);
            break;
    }
}
