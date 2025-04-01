<?php
// Se importa el archivo que contiene la configuración de la base de datos, que establece la conexión
require "../config/database.php"; // Importar la conexión a la base de datos

// Definición de la clase Libro que interactuará con la tabla 'usuario' en la base de datos
class Usuario {
    private $pdo;  // Declaración de una propiedad privada para almacenar la conexión PDO

    // El constructor recibe el objeto $pdo (conexión a la base de datos) y lo asigna a la propiedad $this->pdo
    public function __construct($pdo) {
        $this->pdo = $pdo;  // Asigna la conexión PDO a la propiedad de la clase
    }

    // Método para obtener todos los usuarios de la base de datos
    public function obtenerTodos() {
        // Prepara la consulta SQL para seleccionar todos los registros de la tabla 'usuario'
        $stmt = $this->pdo->prepare("SELECT * FROM usuario");
        
        // Ejecuta la consulta
        $stmt->execute();
        
        // Devuelve todos los resultados como un array asociativo
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Método para agregar un nuevo usuario a la base de datos
    public function agregar($nombre, $email, $telefono) {
        // Prepara la consulta SQL para insertar un nuevo registro en la tabla 'usuario'
        $stmt = $this->pdo->prepare("INSERT INTO usuario (nombre, email, telefono) VALUES (:nombre, :email, :telefono)");
        
        // Ejecuta la consulta con los parámetros proporcionados en la llamada al método
        // Los valores del usuario se pasan en un array asociativo
        return $stmt->execute(["nombre" => $nombre, "email" => $email, "telefono" => $telefono]);
    }
}
?>