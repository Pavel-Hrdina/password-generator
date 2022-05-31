import "../dist/output.css";

// Globalní proměné
const range = document.getElementById("range");
const textKterySeSchova = document.getElementById("text");
const button = document.getElementById("schovatText");

// Schová text a tlačítko

button.addEventListener("click", () => {
  textKterySeSchova.innerHTML = "";
  button.classList = "";
  button.innerHTML = "";
});

// aktivuje se při změně člísla v inputu
range.addEventListener("change", () => {
  return (document.getElementById("delkaHesla").innerHTML = range.value);
});

// Vygeneruje náhodné heslo
