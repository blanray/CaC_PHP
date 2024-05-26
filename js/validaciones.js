//Validacion del formulario de contacto


const misRegExp = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

//var miBotonContacto = document.getElementById("miBotonComentarios");
//miBotonContacto.addEventListener('click', validarDatosContacto);

document.addEventListener("DOMContentLoaded", function() {
    let miFormularioRegistro = document.getElementById("miFormRegistro")
    miFormularioRegistro.addEventListener('submit', validarDatosRegistro);

});


document.addEventListener("DOMContentLoaded", function() {
    let miFormularioInicio = document.getElementById("miFormInicio")
    miFormularioInicio.addEventListener('submit', validarDatosInicio);

});

function validarDatosRegistro(evento) {
    evento.preventDefault();

    var miEmail = document.getElementById('miEmailRegistro').value;

    if (miEmail.length == 0) {
        alert('El email no puede estar vacio');
        return;
    }

    if (!misRegExp.correo.test(miEmail)) {
        alert("El formato de mail es incorrecto");
        return;
    };

    var miNombre = document.getElementById('miNombreRegistro').value;

    if (miNombre.length == 0) {
        alert('El nombre no puede estar vacio');
        return;
    }

    if (!misRegExp.nombre.test(miNombre)) {
        alert("El nombre solo puede tener letras y espacios");
        return;
    };

    var miApellido = document.getElementById('miApellidoRegistro').value;

    if (miApellido.length == 0) {
        alert('El apellido no puede estar vacio');
        return;
    }

    if (!misRegExp.nombre.test(miApellido)) {
        alert("El apellido solo puede tener letras y espacios");
        return;
    };

    var miNac = document.getElementById('miFechaNacRegistro').value;

    if (miNac.length == 0) {
        alert('La fecha de nacimiento no puede estar vacia');
        return;
    }

    var miPass = document.getElementById('miPassWordRegistro').value;

    if (miPass.length == 0 || miPass.length<10) {
        alert('El password no puede estar vacio ni tener menos de 10 caracteres');
        return;
    }

    var miPais = document.getElementById('miPaisRegistro').value;

    if (miPais.length == 0) {
        alert('Debe seleccionar un país');
        return;
    }
    var miTyC = document.getElementById('miTyCRegistro').checked;

    if (!miTyC) {
        alert('Debe aceptar los Terminos y Condiciones');
        return;
    }


    setTimeout(() => {
        this.submit();
    }, 2000);

    Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: 'Registro creado exitosamente!',
        showConfirmButton: false,
        timer: 2000
    })

    setTimeout(() => {
        document.getElementById('miEmailRegistro').value = "";
        document.getElementById('miNombreRegistro').value = ""
        document.getElementById('miApellidoRegistro').value = "";
        document.getElementById("miFechaNacRegistro").value = "";
        document.getElementById('miPassWordRegistro').value = "";
        document.getElementById("miPaisRegistro").value = "";
        document.getElementById("miTyCRegistro").checked = false;
    }, 2000);


}

function validarDatosInicio(evento) {
    evento.preventDefault();

    var miEmail = document.getElementById('miEmailInicio').value;

    if (miEmail.length == 0) {
        alert('El email no puede estar vacio');
        return;
    }

    if (!misRegExp.correo.test(miEmail)) {
        alert("El formato de mail es incorrecto");
        return;
    };

    var miPass = document.getElementById('miPassWordInicio').value;

    if (miPass.length == 0 || miPass.length<10) {
        alert('El password no puede estar vacio ni tener menos de 10 caracteres');
        return;
    }

    setTimeout(() => {
        this.submit();
    }, 2000);

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Inicio de Sesion exitoso!',
        showConfirmButton: false,
        timer: 2000
    })

    setTimeout(() => {
        document.getElementById('miEmailInicio').value = "";
        document.getElementById('miPassWordInicio').value = "";
    }, 2000);


}