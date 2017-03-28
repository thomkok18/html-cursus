var weekday = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
    datum = new Date(),
    dag = weekday[datum.getDay()],
    dagnummer,
    huur,
    aantalDagen,
    tijd = new Date().toLocaleTimeString(),
    maaltijd,
    dagDatum = datum.getDate(),
    huurDag,
    maand = datum.getMonth(),
    maandNaam,
    jaar = datum.getFullYear(),
    betalen,
    wanneerBetalen,
    spaardoel,
    geld,
    huiswerk,
    afgerond;

function vandaag() {
    document.getElementById("vandaag").innerHTML = "Vandaag is het " + dag + ".";
}

function weekend() {
    if (dag == weekday[0] || dag == weekday[6]) {
        dagnummer = 0 + " dagen";
        huur = "Nog 3 dagen tot je de huur moet betalen.";
    } else if (dag == weekday[1]) {
        dagnummer = 5 + " dagen";
        huur = "Nog 2 dagen tot je de huur moet betalen.";
    } else if (dag == weekday[2]) {
        dagnummer = 4 + " dagen";
        huur = "Nog 1 dag tot je de huur moet betalen.";
    } else if (dag == weekday[3]) {
        dagnummer = 3 + " dagen";
        huur = "Betaal je huur van 200 euro.";
    } else if (dag == weekday[4]) {
        dagnummer = 2 + " dagen";
        huur = "Nog 5 dagen tot je de huur moet betalen.";
    } else if (dag == weekday[5]) {
        dagnummer = 1 + " dag";
        huur = "Nog 4 dagen tot je de huur moet betalen.";
    }
    aantalDagen = "Nog " + dagnummer + " te gaan tot het weekend is.";
    document.getElementById("aantalDagen").innerHTML = aantalDagen;
}

function eten() {
    if (tijd > "22:00:00" || tijd >= "00:00:00") {
        maaltijd = "Is het niet tijd om te slapen?";
    }
    if (tijd >= "07:00:00") {
        maaltijd = "Het is ochtend. Heb je al ontbeten?";
    }
    if (tijd >= "12:00:00") {
        maaltijd = "Het is middag. Heb je al middaggegeten?";
    }
    if (tijd >= "17:00:00") {
        maaltijd = "Het is avond. Heb je al avondgegeten?";
    }
    document.getElementById("maaltijd").innerHTML = maaltijd;
}

function huurBetalen() {
    if (maand == 1 && jaar % 4 == 0) {
        huurDag = 29;
        betalen = huurDag - dagDatum;
    } else {
        huurDag = 28;
        betalen = huurDag - dagDatum;
    }
    if (maand == 2 || maand == 2 || maand == 4 || maand == 6 || maand == 7 || maand == 9 || maand == 11) {
        huurDag = 31;
        betalen = huurDag - dagDatum;
    } else if (maand == 3 || maand == 5 || maand == 8 || maand == 10) {
        huurDag = 30;
        betalen = huurDag - dagDatum;
    }
    if (betalen == 0) {
        wanneerBetalen = "Je moet vandaag je huur betalen!";
    } else if (betalen == 1) {
        wanneerBetalen = "Over " + betalen + " dag moet je de huur betalen.";
    } else if (betalen > 1) {
        wanneerBetalen = "Over " + betalen + " dagen moet je de huur betalen.";
    }
    document.getElementById("huurBetalen").innerHTML = "Eind deze maand betaal je de huur. " + wanneerBetalen;
}

function sparen() {
    geld = 1248;
    spaardoel = geld / 12;
    document.getElementById("sparen").innerHTML = "Je moet  \u20AC" + spaardoel + " sparen per maand om \u20AC" + geld + " te krijgen aan het einde van het jaar.";
}

function datumVandaag() {
    if (maand == 0) {
        maandNaam = "januari";
    } else if (maand == 1) {
        maandNaam = "februari";
    } else if (maand == 2) {
        maandNaam = "maart";
    } else if (maand == 3) {
        maandNaam = "april";
    } else if (maand == 4) {
        maandNaam = "mei";
    } else if (maand == 5) {
        maandNaam = "juni";
    } else if (maand == 6) {
        maandNaam = "juli";
    } else if (maand == 7) {
        maandNaam = "augustus";
    } else if (maand == 8) {
        maandNaam = "september";
    } else if (maand == 9) {
        maandNaam = "oktober";
    } else if (maand == 10) {
        maandNaam = "november";
    } else if (maand == 11) {
        maandNaam = "december";
    }
    document.getElementById("datum").innerHTML = "Vandaag is het: " + dagDatum + " " + maandNaam + " " + jaar;
}

function huiswerkAf() {
    huiswerk = Math.random() * 2;
    if (huiswerk >= 1) {
        afgerond = "Je hebt je huiswerk optijd ingeleverd.";
    } else {
        afgerond = "Je hebt je huiswerk telaat ingeleverd.";
    }

    document.getElementById("huiswerk").innerHTML = afgerond;
}