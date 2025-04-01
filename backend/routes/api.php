<?php
require "../controllers/libros.php"; // Importar el controlador que maneja la lógica de negocio
require "../controllers/usuarios.php";

// Obtener el método de la solicitud HTTP (GET, POST, etc.)
$solicitud = $_GET["url"];

// Si la solicitud es de tipo GET, se llama a la función obtenerLibros()
switch($solicitud){
    case "libros":
        obtenerLibros();
        break;
    case "usuarios":
        obtenerUsuarios();
        break;
    default:
        echo json_encode(["error" => "Método no permitido"]);
        break;
    }
/*
// Si la solicitud es de tipo POST, se procesa la entrada y se agrega un libro
elseif ($requestMethod == "POST") {
    // Leer los datos enviados en el cuerpo de la solicitud (formato JSON)
    $data = json_decode(file_get_contents("php://input"), true);
    
    // Llamar a la función agregarLibro() pasando los valores extraídos del JSON
    agregarLibro($data['titulo'], $data['autor'], $data['anio_publicacion']);
} 
// Si se usa otro método HTTP no permitido, se devuelve un mensaje de error en formato JSON
else {
    echo json_encode(["error" => "Método no permitido"]);
} */
?>