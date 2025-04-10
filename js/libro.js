async function obtenerLibros() {
    try {
        const respuesta = await fetch("../full-stack-dev/backend/routes/api.php?url=libros");
        const libros = await respuesta.json();
        console.log(libros);
        mostrarLibros(libros);
    } catch (error) {
        console.error("Error al obtener libros" + error);
    }
}

function mostrarLibros(libros) {
    let contenido = "";
    libros.forEach(libro => {
        let available = libro.disponible === 1 ? "Si" : "No";
        contenido += "<tr>"
        contenido += "<td>" + libro.id_libro + "</td>";
        contenido += "<td>" + libro.titulo + "</td>";
        contenido += "<td>" + libro.autor + "</td>";
        contenido += "<td>" + libro.anio_publicacion + "</td>";
        contenido += "<td>" + available + "</td>";
        contenido += "<td><button class='btn-eliminar' onclick='eliminarLibro(" + libro.id_libro + ")'>Eliminar</button></td>";
        contenido += "</tr>"
        console.log(libro);
    });

    const table = document.getElementById("body-table");
    table.innerHTML = contenido;

}

async function eliminarLibro(id_libro) {
    //Selects the row that's gonna be deleted by it's ID
    const row = document.getElementById("libro-" + id_libro);
    if (row) { 
        row.remove(); //Removes row
        console.log("Libro con ID " + id_libro + " ha sido eliminado.")
    }
}

obtenerLibros();
