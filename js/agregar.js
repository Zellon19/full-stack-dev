// Funciones Generales 
async function obtenerLibros() {
    try {
        const respuesta = await fetch("../full-stack-dev/backend/routes/api.php?url=libros");
        const libros = await respuesta.json();
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
        contenido += "<td>" + available + "</td>";
        contenido += "</tr>"
    });

    const table = document.getElementById("body-table-books");
    table.innerHTML = contenido;

}

async function obtenerUsuarios() {
    try {
        const respuesta = await fetch("../full-stack-dev/backend/routes/api.php?url=usuarios");
        const usuarios = await respuesta.json();
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
    });

    const table = document.getElementById("body-table-users");
    table.innerHTML = contenido;
}

obtenerUsuarios();
obtenerLibros();

// Fin Funciones Generales



// Parte Libros



// Fin Parte Libros



// Parte Usuarios
async function addUser() {
    const user_username = document.getElementById("user_username").value;
    const user_email = document.getElementById("user_email").value;
    const user_phone_number = document.getElementById("user_phone_number").value;

    console.log(user_phone_number);
    try {
        const response = await fetch(`../full-stack-dev/backend/routes/api.php?url=agregar-usuario&username=${user_username}&email=${user_email}&phoneNumber=${user_phone_number}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.text();
        console.log(data);

        if (response.ok) {
            console.log("Agregado exitosamente.");
        } else {
            alert("Hubo un error: " + data);
        }

    } catch (error) {
        console.error("Error while trying to add a user: ", error);
    }
}

// Fin Parte Usuarios