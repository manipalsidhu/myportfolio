function getWeather() {
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");
    let location = document.getElementById("location");

    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "f146799a557e8ab658304c1b30cc3cfd";

    location.innerHTML = "Wait a second, we are locating you...";

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        let url =
            api +
            "?lat=" +
            latitude +
            "&lon=" +
            longitude +
            "&appid=" +
            apiKey +
            "&units=metric&appid=";

        console.log(url)

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let temp = data.main.temp;
                temperature.innerHTML = temp + "° C";
                location.innerHTML =
                    data.name + " (" + latitude + "°, " + longitude + "°)";
                description.innerHTML = data.weather[0].main;
            });
    }

    function error() {
        location.innerHTML = "Sorry, there are some problems with retrieving your location.";
    }
}

getWeather();

"use strict";
function getnewWeather(city) {
    var apiCall = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = "6e9590afbbc344ada3a83223cd7a669c";
    var url = apiCall + "?q=" + city + "&units=metric&appid=" + apiKey;
    const xhr = new XMLHttpRequest();
    if (xhr.addEventListener) {
        xhr.addEventListener("load", handleOutput);
    }
    else if (xhr.attachEvent) {
        xhr.attachEvent("onload", handleOutput);
    }
    xhr.responseType = "json";

    xhr.open("GET", url, true);
    xhr.send();
}
function handleOutput() {
    if (this.status == 200) {
        console.log(this.response);
        const data = this.response;
        var html = "<p>City: " + data.name + "</p>";
        html += "<p>Weather: " + data.weather[0].description.toUpperCase() + "</p>";
        html += "<p>Temperature: " + data.main.temp + "°C" + "</p>";
        html += "<p>Feels Like: " + data.main.feels_like + "°C" + "</p>";
        html += "<p>Humidity: " + data.main.humidity + "%" + "</p>";
        document.getElementById("forecastInfo").innerHTML = html;
    }
    else {
        document.getElementById("forecastInfo").innerHTML = "<p> Weather information unavailable </p>";
    }
}
function getInfo() {
    var cityName = document.getElementById("cityName").value;
    getnewWeather(cityName);
}
var forecast = document.getElementById("forecast");
if (forecast.addEventListener) {
    forecast.addEventListener("click", getInfo);
}
else if (forecast.attachEvent) {
    forecast.attachEvent("onclick", getInfo);
}
var waitForUser;


if (typeof google !== 'object') {
    var script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCJEZCDBHikcdXC4jpmm-e-BLDRnBCQZrw&callback=geolocationTest";
    document.body.appendChild(script);
}
function geolocationTest() {
    waitForUser = setTimeout(failToAccess, 10000);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(createDirections, failToAccess, { timeout: 10000 });
    } else {
        failToAccess();
    }
}
function createDirections(position) {
    clearTimeout(waitForUser);
    var currentPosLat = position.coords.latitude;
    var currentPosLng = position.coords.longitude;
    var posOptions = {
        center: { lat: currentPosLat, lng: currentPosLng },
        zoom: 11
    };
    var map = new google.maps.Map(document.getElementById("map"), posOptions);
    var marker = new google.maps.Marker({
        position: { lat: currentPosLat, lng: currentPosLng },
        map: map
    });
}
function failToAccess() {
    document.getElementById("map").innerHTML = "Sorry! Could not access your current location.";
}