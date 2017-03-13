/***************************************************
 * bke.js
 * -------------------------------------------------
 * In dit bestand staat alle javascript code
 * om ons spel te laten werken.
 *
 **************************************************/

//Elementen selecteren
var x = "img/cross.jpg", o = "img/circle.jpg", e = "img/empty.jpg",
    btnStartStop = document.querySelectorAll('Button')[0],
    btnSpelerEnComputer = document.querySelectorAll('Button')[1],
    speler = document.querySelectorAll('.players-turn tbody tr td')[2],
    spelerImg = document.querySelectorAll('.players-turn tbody tr td img')[0],
    computerSpeler = document.querySelectorAll('.players-turn tbody tr td')[1],
    computerScore = document.querySelectorAll('.rounds-info tbody tr td')[2],
    speler1 = document.querySelectorAll('.rounds-info tbody tr td img')[0],
    speler2 = document.querySelectorAll('.rounds-info tbody tr td img')[1],
    scoreSpeler1 = document.querySelectorAll('.rounds-info tbody tr td')[1],
    scoreSpeler2 = document.querySelectorAll('.rounds-info tbody tr td')[3],
    aantalRondes = document.querySelectorAll('.rounds-info tbody tr td')[5],
    cel1 = document.querySelectorAll('#speelveld table tbody tr td img')[0],
    cel2 = document.querySelectorAll('#speelveld table tbody tr td img')[1],
    cel3 = document.querySelectorAll('#speelveld table tbody tr td img')[2],
    cel4 = document.querySelectorAll('#speelveld table tbody tr td img')[3],
    cel5 = document.querySelectorAll('#speelveld table tbody tr td img')[4],
    cel6 = document.querySelectorAll('#speelveld table tbody tr td img')[5],
    cel7 = document.querySelectorAll('#speelveld table tbody tr td img')[6],
    cel8 = document.querySelectorAll('#speelveld table tbody tr td img')[7],
    cel9 = document.querySelectorAll('#speelveld table tbody tr td img')[8],
    aantalZetten = 0,
    cel1Gevuld = 0,
    cel2Gevuld = 0,
    cel3Gevuld = 0,
    cel4Gevuld = 0,
    cel5Gevuld = 0,
    cel6Gevuld = 0,
    cel7Gevuld = 0,
    cel8Gevuld = 0,
    cel9Gevuld = 0,
    aanDeBeurt = false;


window.onload = function () {

    //EventListners
    btnStartStop.addEventListener('click', btnStartReset);
    btnSpelerEnComputer.addEventListener('click', btnSpelerComputer);
    cel1.addEventListener('click', keuze1);
    cel2.addEventListener('click', keuze2);
    cel3.addEventListener('click', keuze3);
    cel4.addEventListener('click', keuze4);
    cel5.addEventListener('click', keuze5);
    cel6.addEventListener('click', keuze6);
    cel7.addEventListener('click', keuze7);
    cel8.addEventListener('click', keuze8);
    cel9.addEventListener('click', keuze9);

};

/* functies */
function btnStartReset(event) {
    if (this.innerHTML == 'Start spel') {
        this.innerHTML = 'Reset spel';
        aantalRondes.innerHTML++;
    } else {
        this.innerHTML = 'Start spel';
        veldOpschonen();
        scoreSpeler1.innerHTML = 0;
        scoreSpeler2.innerHTML = 0;
        spelerImg.src = x;
        speler.innerHTML = 1;
        aantalRondes.innerHTML = 0;
    }
}

function btnSpelerComputer(event) {
    if (this.innerHTML == 'Tegen speler') {
        this.innerHTML = 'Tegen computer';
        computerScore.innerHTML = "<img width='15' height='15' alt='' title='' src='img/circle.jpg'>" + "&nbsp;Speler 2";
        veldOpschonen();
        scoreSpeler1.innerHTML = 0;
        scoreSpeler2.innerHTML = 0;
        spelerImg.src = x;
        speler.innerHTML = 1;
        if (btnStartStop.innerHTML == "Reset spel") {
            aantalRondes.innerHTML = 1;
        }
        if (speler.innerHTML == "2") {
            computerSpeler.innerHTML = "Speler 2";
        }
    } else {
        this.innerHTML = 'Tegen speler';
        computerScore.innerHTML = "<img width='15' height='15' alt='' title='' src='img/circle.jpg'>" + "&nbsp;Computer";
        veldOpschonen();
        scoreSpeler1.innerHTML = 0;
        scoreSpeler2.innerHTML = 0;
        spelerImg.src = x;
        speler.innerHTML = 1;
        if (btnStartStop.innerHTML == "Reset spel") {
            aantalRondes.innerHTML = 1;
        }
        if (speler.innerHTML == "2") {
            computerSpeler.innerHTML = "Computer";
        }
    }
}

function keuze1(event) {
    if (btnSpelerEnComputer.innerHTML == "Tegen speler") {
        if (cel1.src != speler1.src && cel1.src != speler2.src && speler.innerHTML == 1) {
            cel1Gevuld = 1;
            aantalZetten++;
            if (btnStartStop.innerHTML != "Start spel") {
                cel1.src = x;
                speler.innerHTML = 2;
                spelerImg.src = o;
                computerSpeler.innerHTML = "Computer";
                setTimeout(computerAanzet, 1000);
                gewonnen();
            }
        }
    } else {
        if (btnSpelerEnComputer.innerHTML == "Tegen computer") {
            if (cel1.src != speler1.src && cel1.src != speler2.src) {
                cel1Gevuld = 1;
                aantalZetten++;
                if (btnStartStop.innerHTML != "Start spel" && speler.innerHTML == 1) {
                    cel1.src = x;
                    spelerImg.src = o;
                    speler.innerHTML = 2;
                    gewonnen();
                } else if (btnStartStop.innerHTML != "Start spel" && speler.innerHTML == 2) {
                    cel1.src = o;
                    spelerImg.src = x;
                    speler.innerHTML = 1;
                    gewonnen();
                }
            }
            if (speler.innerHTML == "1" || speler.innerHTML == "2") {
                computerSpeler.innerHTML = "Speler";
            }
        }
    }
}

function keuze2(event) {
    if (btnSpelerEnComputer.innerHTML == "Tegen speler") {
        if (cel2.src != speler1.src && cel2.src != speler2.src && speler.innerHTML == 1) {
            cel2Gevuld = 1;
            aantalZetten++;
            if (btnStartStop.innerHTML != "Start spel") {
                cel2.src = x;
                speler.innerHTML = 2;
                spelerImg.src = o;
                computerSpeler.innerHTML = "Computer";
                setTimeout(computerAanzet, 1000);
                gewonnen();
            }
        }
    } else {
        if (btnSpelerEnComputer.innerHTML == "Tegen computer") {
            if (cel2.src != speler1.src && cel2.src != speler2.src) {
                cel2Gevuld = 1;
                aantalZetten++;
                if (btnStartStop.innerHTML != "Start spel" && speler.innerHTML == 1) {
                    cel2.src = x;
                    spelerImg.src = o;
                    speler.innerHTML = 2;
                    gewonnen();
                } else if (btnStartStop.innerHTML != "Start spel" && speler.innerHTML == 2) {
                    cel2.src = o;
                    spelerImg.src = x;
                    speler.innerHTML = 1;
                    gewonnen();
                }
            }
            if (speler.innerHTML == "1" || speler.innerHTML == "2") {
                computerSpeler.innerHTML = "Speler";
            }
        }
    }
}

function keuze3(event) {
    if (btnSpelerEnComputer.innerHTML == "Tegen speler") {
        if (cel3.src != speler1.src && cel3.src != speler2.src && speler.innerHTML == 1) {
            cel3Gevuld = 1;
            aantalZetten++;
            if (btnStartStop.innerHTML != "Start spel") {
                cel3.src = x;
                speler.innerHTML = 2;
                spelerImg.src = o;
                computerSpeler.innerHTML = "Computer";
                setTimeout(computerAanzet, 1000);
                gewonnen();
            }
        }
    } else {
        if (btnSpelerEnComputer.innerHTML == "Tegen computer") {
            if (cel3.src != speler1.src && cel3.src != speler2.src) {
                cel3Gevuld = 1;
                aantalZetten++;
                if (btnStartStop.innerHTML != "Start spel" && speler.innerHTML == 1) {
                    cel3.src = x;
                    spelerImg.src = o;
                    speler.innerHTML = 2;
                    gewonnen();
                } else if (btnStartStop.innerHTML != "Start spel" && speler.innerHTML == 2) {
                    cel3.src = o;
                    spelerImg.src = x;
                    speler.innerHTML = 1;
                    gewonnen();
                }
            }
            if (speler.innerHTML == "1" || speler.innerHTML == "2") {
                computerSpeler.innerHTML = "Speler";
            }
        }
    }
}

function keuze4(event) {
    if (btnSpelerEnComputer.innerHTML == "Tegen speler") {
        if (cel4.src != speler1.src && cel4.src != speler2.src && speler.innerHTML == 1) {
            cel4Gevuld = 1;
            aantalZetten++;
            if (btnStartStop.innerHTML != "Start spel") {
                cel4.src = x;
                speler.innerHTML = 2;
                spelerImg.src = o;
                computerSpeler.innerHTML = "Computer";
                setTimeout(computerAanzet, 1000);
                gewonnen();
            }
        }
    } else {
        if (btnSpelerEnComputer.innerHTML == "Tegen computer") {
            if (cel4.src != speler1.src && cel4.src != speler2.src) {
                cel4Gevuld = 1;
                aantalZetten++;
                if (btnStartStop.innerHTML != "Start spel" && speler.innerHTML == 1) {
                    cel4.src = x;
                    spelerImg.src = o;
                    speler.innerHTML = 2;
                    gewonnen();
                } else if (btnStartStop.innerHTML != "Start spel" && speler.innerHTML == 2) {
                    cel4.src = o;
                    spelerImg.src = x;
                    speler.innerHTML = 1;
                    gewonnen();
                }
            }
            if (speler.innerHTML == "1" || speler.innerHTML == "2") {
                computerSpeler.innerHTML = "Speler";
            }
        }
    }
}

function keuze5(event) {
    if (btnSpelerEnComputer.innerHTML == "Tegen speler") {
        if (cel5.src != speler1.src && cel5.src != speler2.src && speler.innerHTML == 1) {
            cel5Gevuld = 1;
            aantalZetten++;
            if (btnStartStop.innerHTML != "Start spel") {
                cel5.src = x;
                speler.innerHTML = 2;
                spelerImg.src = o;
                computerSpeler.innerHTML = "Computer";
                setTimeout(computerAanzet, 1000);
                gewonnen();
            }
        }
    } else {
        if (btnSpelerEnComputer.innerHTML == "Tegen computer") {
            if (cel5.src != speler1.src && cel5.src != speler2.src) {
                cel5Gevuld = 1;
                aantalZetten++;
                if (btnStartStop.innerHTML != "Start spel" && speler.innerHTML == 1) {
                    cel5.src = x;
                    spelerImg.src = o;
                    speler.innerHTML = 2;
                    gewonnen();
                } else if (btnStartStop.innerHTML != "Start spel" && speler.innerHTML == 2) {
                    cel5.src = o;
                    spelerImg.src = x;
                    speler.innerHTML = 1;
                    gewonnen();
                }
            }
            if (speler.innerHTML == "1" || speler.innerHTML == "2") {
                computerSpeler.innerHTML = "Speler";
            }
        }
    }
}

function keuze6(event) {
    if (btnSpelerEnComputer.innerHTML == "Tegen speler") {
        if (cel6.src != speler1.src && cel6.src != speler2.src && speler.innerHTML == 1) {
            cel6Gevuld = 1;
            aantalZetten++;
            if (btnStartStop.innerHTML != "Start spel") {
                cel6.src = x;
                speler.innerHTML = 2;
                spelerImg.src = o;
                computerSpeler.innerHTML = "Computer";
                setTimeout(computerAanzet, 1000);
                gewonnen();
            }
        }
    } else {
        if (btnSpelerEnComputer.innerHTML == "Tegen computer") {
            if (cel6.src != speler1.src && cel6.src != speler2.src) {
                cel6Gevuld = 1;
                aantalZetten++;
                if (btnStartStop.innerHTML != "Start spel" && speler.innerHTML == 1) {
                    cel6.src = x;
                    spelerImg.src = o;
                    speler.innerHTML = 2;
                    gewonnen();
                } else if (btnStartStop.innerHTML != "Start spel" && speler.innerHTML == 2) {
                    cel6.src = o;
                    spelerImg.src = x;
                    speler.innerHTML = 1;
                    gewonnen();
                }
            }
            if (speler.innerHTML == "1" || speler.innerHTML == "2") {
                computerSpeler.innerHTML = "Speler";
            }
        }
    }
}

function keuze7(event) {
    if (btnSpelerEnComputer.innerHTML == "Tegen speler") {
        if (cel7.src != speler1.src && cel7.src != speler2.src && speler.innerHTML == 1) {
            cel7Gevuld = 1;
            aantalZetten++;
            if (btnStartStop.innerHTML != "Start spel") {
                cel7.src = x;
                speler.innerHTML = 2;
                spelerImg.src = o;
                computerSpeler.innerHTML = "Computer";
                setTimeout(computerAanzet, 1000);
                gewonnen();
            }
        }
    } else {
        if (btnSpelerEnComputer.innerHTML == "Tegen computer") {
            if (cel7.src != speler1.src && cel7.src != speler2.src) {
                cel7Gevuld = 1;
                aantalZetten++;
                if (btnStartStop.innerHTML != "Start spel" && speler.innerHTML == 1) {
                    cel7.src = x;
                    spelerImg.src = o;
                    speler.innerHTML = 2;
                    gewonnen();
                } else if (btnStartStop.innerHTML != "Start spel" && speler.innerHTML == 2) {
                    cel7.src = o;
                    spelerImg.src = x;
                    speler.innerHTML = 1;
                    gewonnen();
                }
            }
            if (speler.innerHTML == "1" || speler.innerHTML == "2") {
                computerSpeler.innerHTML = "Speler";
            }
        }
    }
}

function keuze8(event) {
    if (btnSpelerEnComputer.innerHTML == "Tegen speler") {
        if (cel8.src != speler1.src && cel8.src != speler2.src && speler.innerHTML == 1) {
            cel8Gevuld = 1;
            aantalZetten++;
            if (btnStartStop.innerHTML != "Start spel") {
                cel8.src = x;
                speler.innerHTML = 2;
                spelerImg.src = o;
                computerSpeler.innerHTML = "Computer";
                setTimeout(computerAanzet, 1000);
                gewonnen();
            }
        }
    } else {
        if (btnSpelerEnComputer.innerHTML == "Tegen computer") {
            if (cel8.src != speler1.src && cel8.src != speler2.src) {
                cel8Gevuld = 1;
                aantalZetten++;
                if (btnStartStop.innerHTML != "Start spel" && speler.innerHTML == 1) {
                    cel8.src = x;
                    spelerImg.src = o;
                    speler.innerHTML = 2;
                    gewonnen();
                } else if (btnStartStop.innerHTML != "Start spel" && speler.innerHTML == 2) {
                    cel8.src = o;
                    spelerImg.src = x;
                    speler.innerHTML = 1;
                    gewonnen();
                }
            }
            if (speler.innerHTML == "1" || speler.innerHTML == "2") {
                computerSpeler.innerHTML = "Speler";
            }
        }
    }
}

function keuze9(event) {
    if (btnSpelerEnComputer.innerHTML == "Tegen speler") {
        if (cel9.src != speler1.src && cel9.src != speler2.src && speler.innerHTML == 1) {
            cel9Gevuld = 1;
            aantalZetten++;
            if (btnStartStop.innerHTML != "Start spel") {
                cel9.src = x;
                speler.innerHTML = 2;
                spelerImg.src = o;
                computerSpeler.innerHTML = "Computer";
                setTimeout(computerAanzet, 1000);
                gewonnen();
            }
        }
    } else {
        if (btnSpelerEnComputer.innerHTML == "Tegen computer") {
            if (cel9.src != speler1.src && cel9.src != speler2.src) {
                cel9Gevuld = 1;
                aantalZetten++;
                if (btnStartStop.innerHTML != "Start spel" && speler.innerHTML == 1) {
                    cel9.src = x;
                    spelerImg.src = o;
                    speler.innerHTML = 2;
                    gewonnen();
                } else if (btnStartStop.innerHTML != "Start spel" && speler.innerHTML == 2) {
                    cel9.src = o;
                    spelerImg.src = x;
                    speler.innerHTML = 1;
                    gewonnen();
                }
            }
            if (speler.innerHTML == "1" || speler.innerHTML == "2") {
                computerSpeler.innerHTML = "Speler";
            }
        }
    }
}

function gewonnen(event) {
    if (cel1.getAttribute('src') == speler1.getAttribute('src') && cel2.getAttribute('src') == speler1.getAttribute('src') && cel3.getAttribute('src') == speler1.getAttribute('src')
        || cel4.getAttribute('src') == speler1.getAttribute('src') && cel5.getAttribute('src') == speler1.getAttribute('src') && cel6.getAttribute('src') == speler1.getAttribute('src')
        || cel7.getAttribute('src') == speler1.getAttribute('src') && cel8.getAttribute('src') == speler1.getAttribute('src') && cel9.getAttribute('src') == speler1.getAttribute('src')
        || cel1.getAttribute('src') == speler1.getAttribute('src') && cel4.getAttribute('src') == speler1.getAttribute('src') && cel7.getAttribute('src') == speler1.getAttribute('src')
        || cel2.getAttribute('src') == speler1.getAttribute('src') && cel5.getAttribute('src') == speler1.getAttribute('src') && cel8.getAttribute('src') == speler1.getAttribute('src')
        || cel3.getAttribute('src') == speler1.getAttribute('src') && cel6.getAttribute('src') == speler1.getAttribute('src') && cel9.getAttribute('src') == speler1.getAttribute('src')
        || cel1.getAttribute('src') == speler1.getAttribute('src') && cel5.getAttribute('src') == speler1.getAttribute('src') && cel9.getAttribute('src') == speler1.getAttribute('src')
        || cel3.getAttribute('src') == speler1.getAttribute('src') && cel5.getAttribute('src') == speler1.getAttribute('src') && cel7.getAttribute('src') == speler1.getAttribute('src')) {
        scoreSpeler1.innerHTML++;
        aantalRondes.innerHTML++;
        spelerImg.src = x;
        speler.innerHTML = 1;
        computerSpeler.innerHTML = "Speler";
        veldOpschonen();
        alert("Speler 1 heeft gewonnen!");
    } else if (cel1.getAttribute('src') == speler2.getAttribute('src') && cel2.getAttribute('src') == speler2.getAttribute('src') && cel3.getAttribute('src') == speler2.getAttribute('src')
        || cel4.getAttribute('src') == speler2.getAttribute('src') && cel5.getAttribute('src') == speler2.getAttribute('src') && cel6.getAttribute('src') == speler2.getAttribute('src')
        || cel7.getAttribute('src') == speler2.getAttribute('src') && cel8.getAttribute('src') == speler2.getAttribute('src') && cel9.getAttribute('src') == speler2.getAttribute('src')
        || cel1.getAttribute('src') == speler2.getAttribute('src') && cel4.getAttribute('src') == speler2.getAttribute('src') && cel7.getAttribute('src') == speler2.getAttribute('src')
        || cel2.getAttribute('src') == speler2.getAttribute('src') && cel5.getAttribute('src') == speler2.getAttribute('src') && cel8.getAttribute('src') == speler2.getAttribute('src')
        || cel3.getAttribute('src') == speler2.getAttribute('src') && cel6.getAttribute('src') == speler2.getAttribute('src') && cel9.getAttribute('src') == speler2.getAttribute('src')
        || cel1.getAttribute('src') == speler2.getAttribute('src') && cel5.getAttribute('src') == speler2.getAttribute('src') && cel9.getAttribute('src') == speler2.getAttribute('src')
        || cel3.getAttribute('src') == speler2.getAttribute('src') && cel5.getAttribute('src') == speler2.getAttribute('src') && cel7.getAttribute('src') == speler2.getAttribute('src')) {
        scoreSpeler2.innerHTML++;
        aantalRondes.innerHTML++;
        spelerImg.src = x;
        speler.innerHTML = 1;
        computerSpeler.innerHTML = "Speler";
        veldOpschonen();
        if (btnSpelerEnComputer.innerHTML == "Tegen speler") {
            alert("De computer heeft gewonnen!");
        } else {
            alert("Speler 2 heeft gewonnen!");
        }
    } else if (cel1Gevuld == 1 && cel2Gevuld == 1 && cel3Gevuld == 1 && cel4Gevuld == 1 && cel5Gevuld == 1 && cel6Gevuld == 1 && cel7Gevuld == 1 && cel8Gevuld == 1 && cel9Gevuld == 1) {
        veldOpschonen();
        spelerImg.src = x;
        speler.innerHTML = 1;
        computerSpeler.innerHTML = "Speler";
        aantalRondes.innerHTML++;
        alert("Gelijkspel!");
    }
}

function veldOpschonen(event) {
    cel1.src = e;
    cel2.src = e;
    cel3.src = e;
    cel4.src = e;
    cel5.src = e;
    cel6.src = e;
    cel7.src = e;
    cel8.src = e;
    cel9.src = e;
    cel1Gevuld = 0;
    cel2Gevuld = 0;
    cel3Gevuld = 0;
    cel4Gevuld = 0;
    cel5Gevuld = 0;
    cel6Gevuld = 0;
    cel7Gevuld = 0;
    cel8Gevuld = 0;
    cel9Gevuld = 0;
    aantalZetten = 0;
}

function computerAanzet(event) {
    aantalZetten++;
    if (speler.innerHTML == 2) {
        aanDeBeurt = true;
        if (aanDeBeurt) {
            // Winnen
            // eerste horizontale rij
            if (cel1.getAttribute('src') === o && cel2.getAttribute('src') === o && cel3Gevuld == 0) {
                cel3.src = o;
                cel3Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel1.getAttribute('src') === o && cel3.getAttribute('src') === o && cel2Gevuld == 0) {
                cel2.src = o;
                cel2Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel2.getAttribute('src') === o && cel3.getAttribute('src') === o && cel1Gevuld == 0) {
                cel1.src = o;
                cel1Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }

            // tweede horizontale rij
            else if (cel4.getAttribute('src') === o && cel5.getAttribute('src') === o && cel6Gevuld == 0) {
                cel6.src = o;
                cel6Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel4.getAttribute('src') === o && cel6.getAttribute('src') === o && cel5Gevuld == 0) {
                cel5.src = o;
                cel5Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel5.getAttribute('src') === o && cel6.getAttribute('src') === o && cel4Gevuld == 0) {
                cel4.src = o;
                cel4Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }

            // derde horizontale rij
            else if (cel7.getAttribute('src') === o && cel8.getAttribute('src') === o && cel9Gevuld == 0) {
                cel9.src = o;
                cel9Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel7.getAttribute('src') === o && cel9.getAttribute('src') === o && cel8Gevuld == 0) {
                cel8.src = o;
                cel8Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel8.getAttribute('src') === o && cel9.getAttribute('src') === o && cel7Gevuld == 0) {
                cel7.src = o;
                cel7Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }

            // eerste verticale rij
            else if (cel1.getAttribute('src') === o && cel4.getAttribute('src') === o && cel7Gevuld == 0) {
                cel7.src = o;
                cel7Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel1.getAttribute('src') === o && cel7.getAttribute('src') === o && cel4Gevuld == 0) {
                cel4.src = o;
                cel4Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel4.getAttribute('src') === o && cel7.getAttribute('src') === o && cel1Gevuld == 0) {
                cel1.src = o;
                cel1Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }

            // tweede verticale rij
            else if (cel2.getAttribute('src') === o && cel5.getAttribute('src') === o && cel8Gevuld == 0) {
                cel8.src = o;
                cel8Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel2.getAttribute('src') === o && cel8.getAttribute('src') === o && cel5Gevuld == 0) {
                cel5.src = o;
                cel5Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel5.getAttribute('src') === o && cel8.getAttribute('src') === o && cel2Gevuld == 0) {
                cel2.src = o;
                cel2Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }

            // derde verticale rij
            else if (cel3.getAttribute('src') === o && cel6.getAttribute('src') === o && cel9Gevuld == 0) {
                cel9.src = o;
                cel9Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel3.getAttribute('src') === o && cel9.getAttribute('src') === o && cel6Gevuld == 0) {
                cel6.src = o;
                cel6Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel6.getAttribute('src') === o && cel9.getAttribute('src') === o && cel3Gevuld == 0) {
                cel3.src = o;
                cel3Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }

            // schuin van 1 naar 9
            else if (cel1.getAttribute('src') === o && cel5.getAttribute('src') === o && cel9Gevuld == 0) {
                cel9.src = o;
                cel9Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel1.getAttribute('src') === o && cel9.getAttribute('src') === o && cel5Gevuld == 0) {
                cel5.src = o;
                cel5Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel5.getAttribute('src') === o && cel9.getAttribute('src') === o && cel1Gevuld == 0) {
                cel1.src = o;
                cel1Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }

            // schuin van 3 naar 7
            else if (cel3.getAttribute('src') === o && cel5.getAttribute('src') === o && cel7Gevuld == 0) {
                cel7.src = o;
                cel7Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel3.getAttribute('src') === o && cel7.getAttribute('src') === o && cel5Gevuld == 0) {
                cel5.src = o;
                cel5Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel5.getAttribute('src') === o && cel7.getAttribute('src') === o && cel3Gevuld == 0) {
                cel3.src = o;
                cel3Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
        }

        if (aanDeBeurt) {
            // Blokkeren
            // eerste horizontale rij
            if (cel1.getAttribute('src') === x && cel2.getAttribute('src') === x && cel3Gevuld == 0) {
                cel3.src = o;
                cel3Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel1.getAttribute('src') === x && cel3.getAttribute('src') === x && cel2Gevuld == 0) {
                cel2.src = o;
                cel2Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel2.getAttribute('src') === x && cel3.getAttribute('src') === x && cel1Gevuld == 0) {
                cel1.src = o;
                cel1Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }

            // tweede horizontale rij
            else if (cel4.getAttribute('src') === x && cel5.getAttribute('src') === x && cel6Gevuld == 0) {
                cel6.src = o;
                cel6Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel4.getAttribute('src') === x && cel6.getAttribute('src') === x && cel5Gevuld == 0) {
                cel5.src = o;
                cel5Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel5.getAttribute('src') === x && cel6.getAttribute('src') === x && cel4Gevuld == 0) {
                cel4.src = o;
                cel4Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }

            // derde horizontale rij
            else if (cel7.getAttribute('src') === x && cel8.getAttribute('src') === x && cel9Gevuld == 0) {
                cel9.src = o;
                cel9Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel7.getAttribute('src') === x && cel9.getAttribute('src') === x && cel8Gevuld == 0) {
                cel8.src = o;
                cel8Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel8.getAttribute('src') === x && cel9.getAttribute('src') === x && cel7Gevuld == 0) {
                cel7.src = o;
                cel7Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }

            // eerste verticale rij
            else if (cel1.getAttribute('src') === x && cel4.getAttribute('src') === x && cel7Gevuld == 0) {
                cel7.src = o;
                cel7Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel1.getAttribute('src') === x && cel7.getAttribute('src') === x && cel4Gevuld == 0) {
                cel4.src = o;
                cel4Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel4.getAttribute('src') === x && cel7.getAttribute('src') === x && cel1Gevuld == 0) {
                cel1.src = o;
                cel1Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }

            // tweede verticale rij
            else if (cel2.getAttribute('src') === x && cel5.getAttribute('src') === x && cel8Gevuld == 0) {
                cel8.src = o;
                cel8Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel2.getAttribute('src') === x && cel8.getAttribute('src') === x && cel5Gevuld == 0) {
                cel5.src = o;
                cel5Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel5.getAttribute('src') === x && cel8.getAttribute('src') === x && cel2Gevuld == 0) {
                cel2.src = o;
                cel2Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }

            // derde verticale rij
            else if (cel3.getAttribute('src') === x && cel6.getAttribute('src') === x && cel9Gevuld == 0) {
                cel9.src = o;
                cel9Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel3.getAttribute('src') === x && cel9.getAttribute('src') === x && cel6Gevuld == 0) {
                cel6.src = o;
                cel6Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel6.getAttribute('src') === x && cel9.getAttribute('src') === x && cel3Gevuld == 0) {
                cel3.src = o;
                cel3Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }

            // schuin van 1 naar 9
            else if (cel1.getAttribute('src') === x && cel5.getAttribute('src') === x && cel9Gevuld == 0) {
                cel9.src = o;
                cel9Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel1.getAttribute('src') === x && cel9.getAttribute('src') === x && cel5Gevuld == 0) {
                cel5.src = o;
                cel5Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel5.getAttribute('src') === x && cel9.getAttribute('src') === x && cel1Gevuld == 0) {
                cel1.src = o;
                cel1Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }

            // schuin van 3 naar 7
            else if (cel3.getAttribute('src') === x && cel5.getAttribute('src') === x && cel7Gevuld == 0) {
                cel7.src = o;
                cel7Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel3.getAttribute('src') === x && cel7.getAttribute('src') === x && cel5Gevuld == 0) {
                cel5.src = o;
                cel5Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel5.getAttribute('src') === x && cel7.getAttribute('src') === x && cel3Gevuld == 0) {
                cel3.src = o;
                cel3Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
        }

        if (aanDeBeurt) {
            // IF NO OPP TO BLOCK A WIN, THEN PLAY IN ONE OF THESE SQUARES
            if (cel5.getAttribute('src') === e && cel5Gevuld == 0) {
                cel5.src = o;
                cel5Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel1.getAttribute('src') === e && cel1Gevuld == 0) {
                cel1.src = o;
                cel1Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel3.getAttribute('src') === e && cel3Gevuld == 0) {
                cel3.src = o;
                cel3Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel7.getAttribute('src') === e && cel7Gevuld == 0) {
                cel7.src = o;
                cel7Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel9.getAttribute('src') === e && cel9Gevuld == 0) {
                cel9.src = o;
                cel9Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel2.getAttribute('src') === e && cel2Gevuld == 0) {
                cel2.src = o;
                cel2Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel4.getAttribute('src') === e && cel4Gevuld == 0) {
                cel4.src = o;
                cel4Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel6.getAttribute('src') === e && cel6Gevuld == 0) {
                cel6.src = o;
                cel6Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
            else if (cel8.getAttribute('src') === e && cel8Gevuld == 0) {
                cel8.src = o;
                cel8Gevuld = 1;
                speler.innerHTML = 1;
                spelerImg.src = x;
                computerSpeler.innerHTML = "Speler";
                aanDeBeurt = false;
            }
        }
    }
    setTimeout(gewonnen, 500);
}