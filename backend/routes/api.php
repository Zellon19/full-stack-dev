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
    switch ($solicitud) {
        case "agregar-usuario":
            $username = $_GET["username"];
            $email = $_GET["email"];
            $phoneNumber = $_GET["phoneNumber"];
            agregarUsuario($username, $email, $phoneNumber);
            break;
        case "agregar-libro":
            $name = $_GET["name"];
            $author = $_GET["author"];
            $publicationYear = $_GET["publicationYear"];
            agregarLibro($name, $author, $publicationYear);
            break;
        case "agregar-prestamo":
            $bookId = $_GET["bookId"];
            $userId = $_GET["userId"];
            $borrowDate = $_GET["borrowedDate"];
            $returnDate = $_GET["returnedDate"];
            agregarPrestamo($bookId, $userId, $borrowDate, $returnDate);
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

if ($_SERVER["REQUEST_METHOD"] === "DELETE") {
    $id_libro = $_GET["id"] ?? null;

    if ($id_libro) {
        eliminarUsuario($id_libro);
    } else {
        echo json_encode(["success" => false, "message" => "Invalid book ID"]);
    }
}

