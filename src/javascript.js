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
let torontoTime = moment().tz("Canada/Toronto").format("h:mm A");
let torontoDate = moment().tz("Canada/Toronto").format("dddd, MMMM D, YYYY");
let torontoTimeElement = document.querySelector("#totime");
let torontoDateElement = document.querySelector("#todate");
torontoTimeElement.innerHTML = torontoTime;
torontoDateElement.innerHTML = torontoDate;

//Sydney Time
let sydneyTime = moment().tz("Australia/Sydney").format("h:m A");
let sydneyDate = moment().tz("Australia/Sydney").format("dddd, MMMM D, YYYY");
let sydneyTimeElement = document.querySelector("#sydtime");
let sydneyDateElement = document.querySelector("#syddate");
sydneyTimeElement.innerHTML = sydneyTime;
sydneyDateElement.innerHTML = sydneyDate;

let tokyoTime = moment().tz("Asia/Tokyo").format("dddd, MMMM D, YYYY h:m A");

let parisTime = moment().tz("Europe/Paris").format("dddd, MMMM D, YYYY h:m A");

let citySelect = document.querySelector("#citySelect");
citySelect.addEventListener("change", alertTimezone);
