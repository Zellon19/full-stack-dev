<?php
// Se importa el archivo que contiene la configuración de la base de datos, que establece la conexión
require "../config/database.php"; // Importar la conexión a la base de datos

// Definición de la clase prestamo que interactuará con la tabla 'prestamos' en la base de datos
class Prestamo {
    private $pdo;  // Declaración de una propiedad privada para almacenar la conexión PDO

    // El constructor recibe el objeto $pdo (conexión a la base de datos) y lo asigna a la propiedad $this->pdo
    public function __construct($pdo) {
        $this->pdo = $pdo;  // Asigna la conexión PDO a la propiedad de la clase
    }

    // Método para obtener todos los prestamos de la base de datos
    public function obtenerTodos() {
        // Prepara la consulta SQL para seleccionar todos los registros de la tabla 'prestamos'
        $stmt = $this->pdo->prepare("SELECT * FROM prestamo");
        
        // Ejecuta la consulta
        $stmt->execute();
        
        // Devuelve todos los resultados como un array asociativo
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Método para agregar un nuevo prestamo a la base de datos
    public function agregar($id_libro, $id_usuario, $fecha_prestamo, $fecha_devolucion) {
        // Prepara la consulta SQL para insertar un nuevo registro en la tabla 'prestamos'
        $stmt = $this->pdo->prepare("INSERT INTO prestamo (id_libro, id_usuario, fecha_prestamo, fecha_devolucion) VALUES (:id_libro, :id_usuario, :fecha_prestamo, :fecha_devolucion)");
        
        // Ejecuta la consulta con los parámetros proporcionados en la llamada al método
        // Los valores del prestamo se pasan en un array asociativo
        return $stmt->execute(["id_libro" => $id_libro, "id_usuario" => $id_usuario, "fecha_prestamo" => $fecha_prestamo, "fecha_devolucion" => $fecha_devolucion]);
    }
}
?>