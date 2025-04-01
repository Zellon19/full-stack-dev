async function obtenerUsuarios() {
    try {
        const respuesta = await fetch("../full-stack-dev/backend/routes/api.php?url=usuarios");
        const usuarios = await respuesta.json();
        console.log(usuarios);
        mostrarUsuarios(usuarios);
    } catch (error) {
        console.error("Error al obtener usuarios" + error);
    }
}

function mostrarUsuarios(usuarios) {
    let contenido = "";
    usuarios.forEach(usuario => {
        contenido += "<tr>"
        contenido += "<td>" + usuario.id_usuario + "</td>";
        contenido += "<td>" + usuario.nombre + "</td>";
        contenido += "<td>" + usuario.email + "</td>";
        contenido += "<td>" + usuario.telefono + "</td>";
        contenido += "</tr>"
        console.log(usuario);
    });

    const table = document.getElementById("body-table");
    table.innerHTML = contenido;

}

obtenerUsuarios();
