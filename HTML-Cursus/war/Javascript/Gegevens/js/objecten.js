function myFunction() {
    var dag = new Date();
    var weekday = new Array(7);
    weekday = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
if (weekday != 0 || weekday != 6) {
    var vandaag = weekday[dag.getDay()];
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
    document.getElementById("huurBetalen").innerHTML = huur;
}