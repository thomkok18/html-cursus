function knop() {
    var datum = new Date();
    var weekday = new Array(7);
    weekday = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
if (weekday != 0 || weekday != 6) {
    var vandaag = weekday[datum.getDay()];
} else {
    var vandaag = "Het is weekend!";
}
    document.getElementById("vandaag").innerHTML = vandaag;

    var dagnummer, huur;
    if (weekday[0] || weekday[6]) {
        dagnummer = 0 + " dagen";
        huur = "Nog 3 dagen tot je de huur moet betalen.";
    }
    if (weekday[1]) {
        dagnummer = 5 + " dagen";
        huur = "Nog 2 dagen tot je de huur moet betalen.";
    }
    if (weekday[2]) {
        dagnummer = 4 + " dagen";
        huur = "Nog 1 dag tot je de huur moet betalen.";
    }
    if (weekday[3]) {
        dagnummer = 3 + " dagen";
        huur = "Betaal je huur van 200 euro.";
    }
    if (weekday[4]) {
        dagnummer = 2 + " dagen";
        huur = "Nog 5 dagen tot je de huur moet betalen.";
    }
    if (weekday[5]) {
        dagnummer = 1 + " dag";
        huur = "Nog 4 dagen tot je de huur moet betalen.";
    }
    var aantalDagen = "Nog " + dagnummer + " te gaan tot het weekend is.";
    document.getElementById("aantalDagen").innerHTML = aantalDagen;

    var tijd = new Date().toLocaleTimeString();
    var maaltijd;
    if (tijd > "22:00:00" || tijd >= "00:00:00") {
        maaltijd = "Is het niet tijd om te slapen?";
    }
    if (tijd >= "07:00:00") {
        maaltijd = "Heb je al ontbeten?";
    }
    if (tijd >= "12:00:00") {
        maaltijd = "Heb je al middaggegeten?";
    }
    if (tijd >= "17:00:00") {
        maaltijd = "Heb je al avondgegeten?";
    }
    document.getElementById("maaltijd").innerHTML = maaltijd;
    var dag = datum.getDate(), huur, maand = datum.getMonth(), jaar = datum.getFullYear(), betalen, wanneerBetalen;

    if (maand == 1 && jaar %4 == 0) {
        huur = 29;
        betalen = huur - dag;
    } else {
        huur = 28;
        betalen = huur - dag;
    }
    if (maand == 0 || maand == 2 || maand == 4 || maand == 6 || maand == 7 || maand == 9 || maand == 11) {
        huur = 31;
        betalen = huur - dag;
    }
    if (maand == 3 || maand == 5 || maand == 8 || maand == 10) {
        huur = 30;
        betalen = huur - dag;
    }
    if (betalen == 0) {
        wanneerBetalen = "Je moet vandaag je huur betalen!";
    }
    if (betalen == 1) {
        wanneerBetalen = "Over " + betalen + " dag moet je de huur betalen.";
    }
    if (betalen > 1) {
        wanneerBetalen = "Over " + betalen + " dagen moet je de huur betalen.";
    }
    document.getElementById("huurBetalen").innerHTML = wanneerBetalen;

    var sparen;

    sparen = 1248 / 12;

    document.getElementById("sparen").innerHTML = "Je moet  \u20AC" + sparen + " sparen per maand.";

    if (maand == 0) {
        maand = "januari";
    }
    if (maand == 1) {
        maand = "februari";
    }
    if (maand == 2) {
        maand = "maart";
    }
    if (maand == 3) {
        maand = "april";
    }
    if (maand == 4) {
        maand = "mei";
    }
    if (maand == 5) {
        maand = "juni";
    }
    if (maand == 6) {
        maand = "juli";
    }
    if (maand == 7) {
        maand = "augustus";
    }
    if (maand == 8) {
        maand = "september";
    }
    if (maand == 9) {
        maand = "oktober";
    }
    if (maand == 10) {
        maand = "november";
    }
    if (maand == 11) {
        maand = "december";
    }

    document.getElementById("datum").innerHTML = "Vandaag is het: " + dag + " " + maand + " " + jaar;

    var huiswerk = Math.random() * 2, afgerond;

    if (huiswerk >= 1) {
        afgerond = "Ik heb mijn huiswerk optijd ingeleverd.";
    } else {
        afgerond = "Ik heb mijn huiswerk telaat ingeleverd.";
    }

    document.getElementById("huiswerk").innerHTML = afgerond;
}