// Creamos Clase usuario
class Usuario {

    constructor(objetoUsuario) {
        this.username = objetoUsuario.username;
        this.password = objetoUsuario.password;
        this.nombre = objetoUsuario.nombre;
        this.productos = objetoUsuario.productos;
    }
}

usuarioUnico = [
    new Usuario({
      username: "UsuarioUno",
      password: "1234",
      
    })
]


// Creamos una funcion para obtener los usuarios
function obtenerUsuariosDeStorage() {
    const listaUsuariosStorage = localStorage.getItem("usuarios");
    return JSON.parse(listaUsuariosStorage);
}


// Accedemos a los campos que queremos evaluar
const username = document.getElementById("username");
const password = document.getElementById("password");
const mensaje = document.getElementById("mensaje");
const botonIngresar = document.getElementById("ingresar");
botonIngresar.addEventListener("click", validarCredenciales);

function validarCredenciales() {


    if(username.value.length == 0 || password.value.length == 0) {
        mensaje.innerText = "El usuario o la contraseña son incorrectos";
        mensaje.className = "mensaje_incorrecto";
        username.classList.add("is-invalid");
        password.classList.add("is-invalid");

    } else {

    if((username.value == "UsuarioUno") && (password.value == "1234")) {
        mensaje.innerText = "Credenciales correctas";
        mensaje.className = "mensaje_correcto";
        username.classList.add("is-valid");
        password.classList.add("is-valid");

                    
                    const divParrafo = document.getElementById("linkAPagina")
                    let parrafo = document.createElement("p");
                    
                    parrafo.innerHTML = `<a href="index.html" class="entradaAPAgina"><h2>Entrar al sitio</h2></a>`; 
                    
                    divParrafo.appendChild(parrafo);

    } else {
        mensaje.innerText = "El usuario o la contraseña son incorrectos";
            mensaje.className = "mensaje_incorrecto";
            username.classList.add("is-invalid");
            password.classList.add("is-invalid");



    }
    }
    }



function existeUsuario(username, password) {

    const usuarios = obtenerUsuariosDeStorage();
    let existe = false;
    for(const usuario of usuarios) {

        const usernameActual = usuario.username;
        const passwordActual = usuario.password;

        if(usernameActual == username && passwordActual == password) {
            existe = true;
            break;
        }
    }

    return existe;
}
