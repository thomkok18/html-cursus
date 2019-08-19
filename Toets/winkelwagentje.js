function function1() {
    document.getElementById("plaatje").innerHTML = "<img class='showAfbeelding' src='img/Sale%20Dames/dames1.png' alt='Korting'>";
}

function function2() {
    document.getElementById("plaatje").innerHTML = "<img class='showAfbeelding' src='img/Sale%20Dames/dames1-1.png' alt='Korting'>";
}

document.getElementById('winkelwagentje').addEventListener('submit', function (event) {
    event.preventDefault();

    var aantal1 = parseInt(document.getElementById('aantal1').value) || 0,
        aantal2 = parseInt(document.getElementById('aantal2').value) || 0,
        aantal3 = parseInt(document.getElementById('aantal3').value) || 0;

    var prijs1 = 45,
        prijs2 = 55,
        prijs3 = 65,
        veters,
        beschermers;

    if (document.getElementById("veters").checked == true) {
        veters = 1.25;
    } else {
        veters = 0;
    }
    if (document.getElementById("beschermers").checked == true) {
        beschermers = 2.35;
    } else {
        beschermers = 0;
    }

    var prijs1Totaal = parseFloat((prijs1 * aantal1) + (veters * aantal1) + (beschermers * aantal1)),
        prijs2Totaal = parseFloat((prijs2 * aantal2) + (veters * aantal2) + (beschermers * aantal2)),
        prijs3Totaal = parseFloat((prijs3 * aantal3) + (veters * aantal3) + (beschermers * aantal3));

    var uitkomstPrijs = parseFloat(prijs1Totaal + prijs2Totaal + prijs3Totaal).toFixed(2);

    console.log('Verstuurd.');
    document.getElementById('totaal').innerHTML = 'Totaal: \u20AC' + uitkomstPrijs;
    document.getElementById('subtotaal1').innerHTML = 'Subtotaal: \u20AC' + prijs1Totaal.toFixed(2);
    document.getElementById('subtotaal2').innerHTML = 'Subtotaal: \u20AC' + prijs2Totaal.toFixed(2);
    document.getElementById('subtotaal3').innerHTML = 'Subtotaal: \u20AC' + prijs3Totaal.toFixed(2);
})