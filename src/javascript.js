function updateTime() {
  let selectedCity = document.querySelector("#selectedCity");
  let CityTime = document.querySelector("#selecttime");
  let CityDate = document.querySelector("#selectdate");

  let updateClock = function () {
    let currentTime = moment();
    let city = citySelect.value;
    let time = currentTime.tz(city).format("h:mm:ss A");
    let date = currentTime.tz(city).format("dddd, MMMM D, YYYY");

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
