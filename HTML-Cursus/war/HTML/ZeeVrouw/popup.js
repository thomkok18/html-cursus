function function1() {
    document.getElementById("plaatje").innerHTML = "<img class='showAfbeelding' src='img/Sale%20Dames/dames1.png' alt='Korting'>";
}
function function2() {
    document.getElementById("plaatje").innerHTML = "<img class='showAfbeelding' src='img/Sale%20Dames/dames1-1.png' alt='Korting'>";
}

document.getElementById('winkelwagentje').addEventListener('submit', function (event) {
    event.preventDefault();

    var maatDames1 = parseFloat(149.99) || 0, aantalDames1 = parseFloat(document.getElementById('aantal').value) || 0;
    var prijs = '\u20AC' + (maatDames1 * aantalDames1).toFixed(2);

    switch (aantalDames1) {
        case 'één' :
            aantalDames1 = 1;
            break;
        case 'twee' :
            aantalDames1 = 2;
            break;
        case 'drie' :
            aantalDames1 = 3;
            break;
        case 'vier' :
            aantalDames1 = 4;
            break;
        case 'vijf' :
            aantalDames1 = 5;
            break;
        default :
            aantalDames1 = 0;
            break;
    }
    console.log('verstuurd');
    document.getElementById('totaal').value = prijs;
})