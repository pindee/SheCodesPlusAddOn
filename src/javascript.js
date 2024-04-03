function updateTime() {
  let selectedCity = document.querySelector("#selectedCity");
  let CityTime = document.querySelector("#selecttime");
  let CityDate = document.querySelector("#selectdate");

  let updateClock = function () {
    let currentTime = moment();
    let cityquery = citySelect.value;
    let city = citySelect.value.split("/")[1];
    if (cityquery === "current") {
      cityquery = moment.tz.guess();
      city = moment.tz.guess().split("/")[1];
    }

    let time = currentTime.tz(cityquery).format("h:mm:ss [<small>]A</small>");
    let date = currentTime.tz(cityquery).format("dddd, MMMM D, YYYY");

    selectedCity.innerHTML = city;
    CityTime.innerHTML = time;
    CityDate.innerHTML = date;
  };

  // Call updateClock immediately
  updateClock();

  // Call updateClock every second
  setInterval(updateClock, 1000);
}

let citySelect = document.querySelector("#citySelect");
citySelect.addEventListener("change", updateTime);
