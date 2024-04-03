function alertTimezone(event) {
  if (event.target.value == "paris") {
    console.log(parisTime);
  }
  if (event.target.value == "tokyo") {
    console.log(tokyoTime);
  }
  if (event.target.value == "sydney") {
    console.log(sydneyTime);
  }
}

//Toronto Time
let torontoTimeElement = document.querySelector("#totime");
let torontoDateElement = document.querySelector("#todate");

setInterval(function () {
  let torontoTime = moment()
    .tz("Canada/Toronto")
    .format("h:mm:ss [<small>]A[</small>]");
  let torontoDate = moment().tz("Canada/Toronto").format("dddd, MMMM D, YYYY");

  torontoTimeElement.innerHTML = torontoTime;
  torontoDateElement.innerHTML = torontoDate;
}, 10);

//Sydney Time
let sydneyTimeElement = document.querySelector("#sydtime");
let sydneyDateElement = document.querySelector("#syddate");

setInterval(function () {
  let sydneyTime = moment()
    .tz("Australia/Sydney")
    .format("h:m:ss [<small>]A[</small>]");
  let sydneyDate = moment().tz("Australia/Sydney").format("dddd, MMMM D, YYYY");

  sydneyTimeElement.innerHTML = sydneyTime;
  sydneyDateElement.innerHTML = sydneyDate;
}, 10);

let tokyoTime = moment().tz("Asia/Tokyo").format("dddd, MMMM D, YYYY h:m:ss A");

let parisTime = moment()
  .tz("Europe/Paris")
  .format("dddd, MMMM D, YYYY h:m:ss A");

let citySelect = document.querySelector("#citySelect");
citySelect.addEventListener("change", alertTimezone);
