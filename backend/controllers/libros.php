<?php
require "../models/Libro.php"; // Importar el modelo

$libroModel = new Libro($pdo); // Instancia del modelo

function obtenerLibros() {
    global $libroModel; //Global hace referencia la ámbito global, se refiere a que los objetos son accesibles en cualquier parte del código incluyendo cualquier función o clase.
    echo json_encode($libroModel->obtenerTodos());
}

function agregarLibro($titulo, $autor, $anio_publicacion) {
    global $libroModel;
    if ($libroModel->agregar($titulo, $autor, $anio_publicacion)) {
        echo json_encode(["message" => "Libro agregado"]);
    } else {
        echo json_encode(["error" => "Error al agregar el libro"]);
    }
}
?>