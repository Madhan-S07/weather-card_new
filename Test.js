function checkWeather() {

    let city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city");
        return;
    }

    let temperature = 32;
    let condition = "Sunny";

    document.getElementById("city").innerText = city;
    document.getElementById("temperature").innerText = temperature + "°C";
    document.getElementById("condition").innerText = condition;
}