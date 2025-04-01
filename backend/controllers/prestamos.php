<?php
require "../models/prestamo.php"; // Importar el modelo

$prestamoModel = new Prestamo($pdo); // Instancia del modelo

function obtenerprestamos() {
    global $prestamoModel; //Global hace referencia la ámbito global, se refiere a que los objetos son accesibles en cualquier parte del código incluyendo cualquier función o clase.
    echo json_encode($prestamoModel->obtenerTodos()); //echo = imprimir 
}

function agregarprestamo($id_libro, $id_usuario, $fecha_prestamo, $fecha_devolucion) {
    global $prestamoModel;
    if ($prestamoModel->agregar($id_libro, $id_usuario, $fecha_prestamo, $fecha_devolucion)) {
        echo json_encode(["message" => "Prestamo agregado"]);
    } else {
        echo json_encode(["error" => "Error al agregar el Prestamo"]);
    }
}
?>