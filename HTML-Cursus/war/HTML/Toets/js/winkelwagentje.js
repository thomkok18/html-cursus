// * naam: Thom Kok
// * groep: 6C
// * datum: 25-1-2017

document.getElementById('winkelwagentje').addEventListener('submit', function (event) {
    event.preventDefault();

    var aantal1 = parseInt(document.getElementById('aantal1').value) || 0,
        aantal2 = parseInt(document.getElementById('aantal2').value) || 0,
        aantal3 = parseInt(document.getElementById('aantal3').value) || 0;
    var prijs1 = 50.00,
        prijs2 = 20.00,
        prijs3 = 40.00;

    if (document.getElementById('veters').checked == true) {
        var veters = document.getElementById('veters').value;
    } else {
        var veters = 0;
    }
    if (document.getElementById('beschermers').checked == true) {
        var beschermers = document.getElementById('beschermers').value;
    } else {
        var beschermers = 0;
    }

    var prijs1Totaal = parseFloat((prijs1 * aantal1) + (aantal1 * veters) + (aantal1 * beschermers)),
        prijs2Totaal = parseFloat((prijs2 * aantal2) + (aantal2 * veters) + (aantal2 * beschermers)),
        prijs3Totaal = parseFloat((prijs3 * aantal3) + (aantal3 * veters) + (aantal3 * beschermers));

    var uitkomstPrijs = '\u20AC' + parseFloat(prijs1Totaal + prijs2Totaal + prijs3Totaal).toFixed(2);

    console.log('Verstuurd.');
    document.getElementById('totaal').innerHTML = uitkomstPrijs;
    document.getElementById('subtotaal1').innerHTML = 'Subtotaal: \u20AC' + prijs1Totaal.toFixed(2);
    document.getElementById('subtotaal2').innerHTML = 'Subtotaal: \u20AC' + prijs2Totaal.toFixed(2);
    document.getElementById('subtotaal3').innerHTML = 'Subtotaal: \u20AC' + prijs3Totaal.toFixed(2);
})