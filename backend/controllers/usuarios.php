<?php
require "../models/Usuario.php"; // Importar el modelo

$usuarioModel = new Usuario($pdo); // Instancia del modelo

function obtenerUsuarios()
{
    global $usuarioModel; //Global hace referencia la ámbito global, se refiere a que los objetos son accesibles en cualquier parte del código incluyendo cualquier función o clase.
    echo json_encode($usuarioModel->obtenerTodos()); //echo = imprimir 
}

function agregarUsuario($nombre, $email, $telefono)
{
    global $usuarioModel;
    if ($usuarioModel->agregar($nombre, $email, $telefono)) {
        echo json_encode(["message" => "Usuario agregado"]);
    } else {
        echo json_encode(["error" => "Error al agregar el usuario"]);
    }
}
