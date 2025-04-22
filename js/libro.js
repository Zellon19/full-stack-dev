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
        contenido += "<tr id='libro-" + libro.id_libro + "'>";
        contenido += "<td>" + libro.id_libro + "</td>";
        contenido += "<td>" + libro.titulo + "</td>";
        contenido += "<td>" + libro.autor + "</td>";
        contenido += "<td>" + libro.anio_publicacion + "</td>";
        contenido += "<td>" + available + "</td>";
        contenido += "<td><button class='btn-eliminar' onclick='eliminarLibro(" + libro.id_libro + ")'>Eliminar</button></td>";
        contenido += "</tr>";
    });

    const table = document.getElementById("body-table");
    table.innerHTML = contenido;
}

obtenerLibros();
