function obtenerLibros() {

    try {
        const respuesta=await fech ("../backend/routes/api.php");
        const libros=respuesta.json();
        const contenedor=document.getElementById("contenedor-libros");
        contenedor.innerHTML=mostrarLibros(libros);   
    }catch(error){
        console.error("Error al obtener libros" + error);
    }   

}