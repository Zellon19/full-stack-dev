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
        contenido += "<td>" + libro.autor + "</td>";
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

async function obtenerPrestamos() {
    try {
        const respuesta = await fetch("../full-stack-dev/backend/routes/api.php?url=prestamos");
        const prestamos = await respuesta.json();
        mostrarPrestamos(prestamos);
    } catch (error) {
        console.error("Error al obtener prestamos" + error);
    }
}

function mostrarPrestamos(prestamos) {
    let contenido = "";
    prestamos.forEach(prestamo => {
        let returned = contenido.fecha_devolucion == null ? "No ha devuelto" : contenido.fecha_devolucion;
        contenido += "<tr>"
        contenido += "<td>" + prestamo.id_prestamo + "</td>";
        contenido += "<td>" + prestamo.id_libro + "</td>";
        contenido += "<td>" + prestamo.id_usuario + "</td>";
        contenido += "<td>" + prestamo.fecha_prestamo + "</td>";
        contenido += "<td>" + returned + "</td>";
        contenido += "</tr>"
        console.log(prestamo);
    });

    const table = document.getElementById("body-table-borrow");
    table.innerHTML = contenido;

}

obtenerPrestamos();
obtenerUsuarios();
obtenerLibros();

/* chequeos */
function checkBooks(name, author, year) {
    if (name && author && year) return true;
    return false;
}
function checkUsers(username, email, phone) {
    if (username && email && phone) return true;
    return false;
}
function checkBorrow(idBook, idUser, borrowDate) {
    if(idBook && idUser && borrowDate) return true;
    return false;
}
// Fin Funciones Generales

// Parte Libros
async function addBook() {
    const book_name = document.getElementById("book_name").value;
    const book_author = document.getElementById("book_author").value;
    const book_pubYear = document.getElementById("book_pubdate").value;

    if (!checkBooks(book_name, book_author, book_pubYear))
        alert("Error de datos en Libro.");
    else {
        try {
            const response = await fetch(`../full-stack-dev/backend/routes/api.php?url=agregar-libro&name=${book_name}&author=${book_author}&publicationYear=${book_pubYear}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.text();
            console.log(data);

            if (response.ok) {
                console.log("Libro agregado exitosamente.");
            } else {
                alert("Hubo un error en libro: " + data);
            }
        } catch (error) {
            console.log("Error while trying to add a book: " + error);
        }
    }
}
// Fin Parte Libros

// Parte Usuarios
async function addUser() {
    const user_username = document.getElementById("user_username").value;
    const user_email = document.getElementById("user_email").value;
    const user_phone_number = document.getElementById("user_phone_number").value;

    if (!checkUsers(user_username, user_email, user_phone_number))
        alert("Error de datos en Usuario.");
    else {
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
                console.log("Usuario agregado exitosamente.");
            } else {
                alert("Hubo un error en usuario: " + data);
            }

        } catch (error) {
            console.error("Error while trying to add an user: ", error);
        }
    }
}
// Fin Parte Usuarios

// Parte Prestamos
async function addBorrow(){
    const bookId = document.getElementById("borrow_bookid").value;
    const userId = document.getElementById("borrow_userid").value;
    const borrowDate = document.getElementById("borrow_borrowdate").value;
    const returnDate = document.getElementById("borrow_returndate").value;

    if(!checkBorrow(bookId, userId, borrowDate)) alert("Error de datos en Prestamo.");
    else {
        try {
            const response = await fetch(`../full-stack-dev/backend/routes/api.php?url=agregar-prestamo&bookId=${bookId}&userId=${userId}&borrowedDate=${borrowDate}&returnedDate=${returnDate}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.text();
            console.log(data);
            if(response.ok){
                console.log("Prestamo agregado exitosamente.");
            } else {
                alert("Hubo un error en prestamo: " + data);
            }
        } catch (error) {
            console.error("Error while trying to borrow a book." + error);
        }
    }
}
// Fin Parte Prestamos