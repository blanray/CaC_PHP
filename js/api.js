//API REST Clima(Weatherbit)


var miSelect = document.getElementById("miPaisRegistro");
miSelect.addEventListener('change', buscarClima);

function buscarClima() {

    var miSelectorTemp = document.getElementById("miPaisRegistro");
    var opcion = miSelectorTemp.value;
    var miLocalidad = "";

    switch (opcion) {
        case "":
            miLocalidad = "Buenos%20Aires";
            break;
        case "AR":
            miLocalidad = "Buenos%20Aires";
            break;
        case "BO":
            miLocalidad = "Sucre";
            break;
        case "BR":
            miLocalidad = "Rio";
            break;
        case "CH":
            miLocalidad = "Santiago";
            break;
        case "CO":
            miLocalidad = "Bogota";
            break;
        case "EC":
            miLocalidad = "Quito";
            break;
        case "PY":
            miLocalidad = "Asuncion";
            break;
        case "PE":
            miLocalidad = "Lima";
            break;
        case "UY":
            miLocalidad = "Montevideo";
            break;
        case "VE":
            miLocalidad = "Caracas";
            break;
        default:
            miLocalidad = "Buenos%20Aires";
            break;
    }


    const options = {

        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0b22bd4a15msh3ef9beedd23e3a1p11a250jsn508592bab82f',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    var miURL = "https://weatherapi-com.p.rapidapi.com/current.json?q=" + miLocalidad;

    fetch(miURL, options)
        .then(response => response.json())
        .then(response => completarClima(response))
        .catch(err => console.error(err));

}

function completarClima(response) {

    var miImagenClima = document.getElementById("miImagenClima");
    var miImagen = response.current.condition.icon
    var miClimaActual = document.getElementById("miClimaActual");

    miImagenClima.setAttribute("src", miImagen);

    miClimaActual.textContent = response.location.name + " " + response.current.temp_c + "°";

    return
}