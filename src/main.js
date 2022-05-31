import "../dist/output.css";

// Globalní proměné
const range = document.getElementById("range");
const textKterySeSchova = document.getElementById("text");
const button = document.getElementById("schovatText");
const heslo = document.getElementById("heslo");

// Schová text a tlačítko

button.addEventListener("click", () => {
  textKterySeSchova.innerHTML = "";
  button.classList = "";
  button.innerHTML = "";
});

// aktivuje se při změně člísla v inputu
range.addEventListener("change", () => {
  vygenerovatHeslo(range.value);
  return (document.getElementById("delkaHesla").innerHTML = range.value);
});

// ZVybere checkbox

const getChar = (num) => {
  return document.querySelector("input[name=" + num + "]").checked;
};

// Vygeneruje náhodné heslo ze seznamu možností

const vygenerovatHeslo = (length) => {
  var password = "";

  const velkaPismenaString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const malaPismenaString = "abcdefghijklmnopqrstuvwXY";
  const symbolyString = "!#$%&()*+-./:;<>?=@[]";
  const cislaString = "0123456789";

  if (getChar("velkaPismena")) password += velkaPismenaString;
  if (getChar("malaPismena")) password += malaPismenaString;
  if (getChar("symboly")) password += symbolyString;
  if (getChar("cisla")) password += cislaString;

  var result = "";

  for (var i = 0; i < length; i++) {
    let num = Math.floor(Math.random() * password.length);
    result += password[num];
  }
  // Zkontroluje zda je checkbox velka pismena symboly true, a když ano tak nastaví odstraní velká písmena

  return (heslo.innerHTML = result);
};
