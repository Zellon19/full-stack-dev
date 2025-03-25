async function obtenerLibros() {

    try {
        const respuesta = await fetch ("../full-stack-dev/backend/routes/api.php");
        const libros= await respuesta.json();
        mostrarLibros(libros);
    }catch(error){
        console.error("Error al obtener libros" + error);
    }   
}

function mostrarLibros(libros) {
    let contenido="";
    libros.forEach(libro => {
        let availabel = libro.disponible === 1 ? "Si" : "No";
        contenido += "<tr>"
        contenido += "<td>" + libro.id_libro + "</td>";
        contenido += "<td>" + libro.titulo + "</td>";
        contenido += "<td>" + libro.autor + "</td>";
        contenido += "<td>" + libro.anio_publicacion + "</td>";
        contenido += "<td>" + availabel + "</td>";
        contenido += "</tr>"
        console.log(libro);
    });

    const table = document.getElementById("body-table");
    table.innerHTML = contenido;

}

obtenerLibros();
