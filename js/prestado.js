async function obtenerPrestamos() {
    try {
        const respuesta = await fetch("../full-stack-dev/backend/routes/api.php?url=prestamos");
        const prestamos = await respuesta.json();
        console.log(prestamos);
        mostrarPrestamos(prestamos);
    } catch (error) {
        console.error("Error al obtener prestamos" + error);
    }
}

function mostrarPrestamos(prestamos) {
    let contenido = "";
    prestamos.forEach(prestamo => {
        contenido += "<tr>"
        contenido += "<td>" + prestamo.id_prestamo + "</td>";
        contenido += "<td>" + prestamo.id_libro + "</td>";
        contenido += "<td>" + prestamo.id_usuario + "</td>";
        contenido += "<td>" + prestamo.fecha_prestamo + "</td>";
        contenido += "<td>" + prestamo.fecha_devolucion + "</td>";
        contenido += "</tr>"
        console.log(prestamo);
    });

    const table = document.getElementById("body-table");
    table.innerHTML = contenido;

}

obtenerPrestamos();
