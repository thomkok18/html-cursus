naam = prompt("Wat is je naam?");
alert("Hallo, " + naam);
leeftijd = prompt("Hoe oud ben jij?");
// if (leeftijd >= 18) {
//     document.getElementById("leeftijd").innerHTML = "Je bent " + leeftijd + " jaar oud. Je bent volwassen.";
// } else {
//     document.getElementById("leeftijd").innerHTML = "Je bent " + leeftijd + " jaar oud. Je bent nog niet volwassen.";
// }
adres = prompt("Wat is je adres?");
gegevens = [naam, leeftijd, adres];
var text = "";
var i;
for (i = 0; i < gegevens.length; i++) {
    text += gegevens[i] + "<br>";
}
document.getElementById("gegevens").innerHTML = text;