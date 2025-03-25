function obtenerLibros() {

    try {
        const respuesta=await fech ("../backend/routes/api.php");
        const libros=respuesta.json();

    }   

}