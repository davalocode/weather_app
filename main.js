// APi key 09cd56ec77ecd41fa11d8f642001d386
const API_key = "09cd56ec77ecd41fa11d8f642001d386";
let resultado;
let name_of_city = prompt("Whats is your city")

async function cargartiempo() {
    try {
        resultado = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + name_of_city + '&appid=' + API_key + "&units=metric");
        let dato = await resultado.json()

        //Variables para almacenar el valor
        let temperatura_maxima;
        let temperatura_minima;
        let imagen;
        let estado;
        let humidity;

        humidity = "Humidity: " + dato.main.humidity + "%";
        estado = dato.weather[0].description;
        imagen = "http://openweathermap.org/img/wn/" + dato.weather[0].icon + "@2x.png";
        temperatura_maxima = "Max: " + dato.main.temp_max + " Cº";
        temperatura_minima = "Min: " + dato.main.temp_min + " Cº";

        //Cambiar nombre en HTMl
        document.getElementById("description").innerHTML = estado;
        document.getElementById("image_city").src = imagen;
        document.getElementById("name_city").innerHTML = name_of_city + ", " + dato.sys.country;
        document.getElementById("temp_maxima").innerHTML = temperatura_maxima;
        document.getElementById("temp_minima").innerHTML = temperatura_minima;
        document.getElementById("humedad").innerHTML = humidity
    }
    catch (error) {
        alert("Put a valid name");
        name_of_city = prompt("Whats is your city")
        cargartiempo();
    }
}

function new_name() {
    name_of_city = document.getElementById("name").value;
    cargartiempo();
}

cargartiempo();

window.addEventListener("resize", function home() {
    let altura;
    altura = document.getElementById("main_container").style.height;
    altura = innerHeight;
});