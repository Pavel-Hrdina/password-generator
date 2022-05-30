import "../dist/output.css";

// Globalní proměné
const range = document.getElementById("range");

// aktivuje se při změně člísla v inputu
range.addEventListener("change", () => {
  return (document.getElementById("delkaHesla").innerHTML = range.value);
});
