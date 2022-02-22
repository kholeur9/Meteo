const dateParser = (date) => {
  let newDate = new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return newDate;
};

function weatherApp() {
  let city = document.getElementById("barre").value;
  const temperatureDegree = document.querySelector(".temperature");
  const humidity = document.querySelector(".humidity");
  const precip = document.querySelector(".precip");
  const vent = document.querySelector(".vent");
  const ville = document.querySelector(".ville");
  const local = document.querySelector(".local");
  const img = document.getElementById("image");
  const weatherDescriptions = document.querySelector(".weather-descriptions");
  fetch(
    "http://api.weatherstack.com/current?access_key=c04e2bd345a31390696514d292b63ae0&query=" +
      city
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const weath = data.current;
      const location = data.request;
      const localTime = data.location;

      temperatureDegree.textContent = weath.temperature + " °C";
      humidity.textContent = weath.humidity + " %";
      precip.textContent = weath.precip + " mm";
      vent.textContent = weath.wind_speed + " Km/h";
      ville.textContent = location.query;
      local.textContent = dateParser(localTime.localtime);
      weatherDescriptions.textContent = weath.weather_descriptions[0];
      img.src = weath.weather_icons[0];
    });
}

const btnCity = document.querySelector(".btn-city");
const container = document.querySelector(".container");
const hello = document.querySelector(".hello");

btnCity.addEventListener("click", () => {
  container.style.display = "block";
  hello.style.display = "none";
});
