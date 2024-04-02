function alertTimezone(event) {
  if (event.target.value == "paris") {
    alert("It is " + parisTime + " in Paris, Europe 🥐");
  }
  if (event.target.value == "tokyo") {
    alert("It is " + tokyoTime + " in Tokyo, Japan 🎌");
  }
  if (event.target.value == "sydney") {
    alert("It is " + tokyoTime + " in Sydney, Australia 🐨");
  }
}

let tokyoTime = moment().tz("Asia/Tokyo").format("dddd, MMMM D, YYYY h:m A");

let parisTime = moment().tz("Europe/Paris").format("dddd, MMMM D, YYYY h:m A");

let sydneyTime = moment()
  .tz("Australia/Sydney")
  .format("dddd, MMMM D, YYYY h:m A");

let citySelect = document.querySelector("#citySelect");
citySelect.addEventListener("change", alertTimezone);
