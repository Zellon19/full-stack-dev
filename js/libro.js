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
function mostrarLibros(libros) {
    let contenido="";
    libros.forEach(libro=>{
        contenido +='<h4>${'libro.titulo'}</h4>';
        contenido +='<h4>${'libro.ID'}</h4>';
        contenido +='<h4>${'libro.Titulo'}</h4>';
        contenido +='<h4>${'libro.Autor'}</h4>';
        contenido +='<h4>${'libro.Publicacion'}</h4>';
        contenido +='<h4>${'libro.Disponible'}</h4>';
    });
}
    obtenerLibros();
