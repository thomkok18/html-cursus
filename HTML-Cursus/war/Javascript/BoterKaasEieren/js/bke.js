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
    aantalZetten = 0,
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
    cel9 = document.querySelectorAll('#speelveld table tbody tr td img')[8];


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
    if (this.innerText == 'Start spel') {
        this.innerText = 'Reset spel';
        aantalRondes.innerHTML++;
    } else {
        this.innerText = 'Start spel';
        veldOpschonen();
        scoreSpeler1.innerHTML = 0;
        scoreSpeler2.innerHTML = 0;
        spelerImg.src = x;
        speler.innerText = 1;
        aantalRondes.innerHTML = 0;
    }
}

function btnSpelerComputer(event) {
    if (this.innerText == 'Tegen speler') {
        this.innerText = 'Tegen computer';
        computerScore.innerHTML = "<img width='15' height='15' alt='' title='' src='img/circle.jpg'>" + "&nbsp;Speler 2";
        veldOpschonen();
        scoreSpeler1.innerHTML = 0;
        scoreSpeler2.innerHTML = 0;
        spelerImg.src = x;
        speler.innerText = 1;
        if (btnStartStop.innerHTML == "Reset spel") {
            aantalRondes.innerHTML = 1;
        }
        if (speler.innerHTML == "2") {
            computerSpeler.innerHTML = "Speler 2";
        }
    } else {
        this.innerText = 'Tegen speler';
        computerScore.innerHTML = "<img width='15' height='15' alt='' title='' src='img/circle.jpg'>" + "&nbsp;Computer";
        veldOpschonen();
        scoreSpeler1.innerHTML = 0;
        scoreSpeler2.innerHTML = 0;
        spelerImg.src = x;
        speler.innerText = 1;
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
        if (cel1.src != speler1.src && cel1.src != speler2.src) {
            aantalZetten++;
            if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
                cel1.src = x;
                spelerImg.src = o;
                speler.innerText = 2;
                gewonnen();
            } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
                cel1.src = o;
                spelerImg.src = x;
                speler.innerText = 1;
                gewonnen();
            }
            if (speler.innerHTML == "1") {
                computerSpeler.innerHTML = "Speler";
            }
            if (speler.innerHTML == "2") {
                computerSpeler.innerHTML = "Computer";
            }
        }
    } else {
        if (btnSpelerEnComputer.innerHTML == "Tegen computer") {
            if (cel1.src != speler1.src && cel1.src != speler2.src) {
                aantalZetten++;
                if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
                    cel1.src = x;
                    spelerImg.src = o;
                    speler.innerText = 2;
                    gewonnen();
                } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
                    cel1.src = o;
                    spelerImg.src = x;
                    speler.innerText = 1;
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
        if (cel2.src != speler1.src && cel2.src != speler2.src) {
            aantalZetten++;
            if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
                cel2.src = x;
                spelerImg.src = o;
                speler.innerText = 2;
                gewonnen();
            } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
                cel2.src = o;
                spelerImg.src = x;
                speler.innerText = 1;
                gewonnen();
            }
            if (speler.innerHTML == "1") {
                computerSpeler.innerHTML = "Speler";
            }
            if (speler.innerHTML == "2") {
                computerSpeler.innerHTML = "Computer";
            }
        }
    } else {
        if (btnSpelerEnComputer.innerHTML == "Tegen computer") {
            if (cel2.src != speler1.src && cel2.src != speler2.src) {
                aantalZetten++;
                if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
                    cel2.src = x;
                    spelerImg.src = o;
                    speler.innerText = 2;
                    gewonnen();
                } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
                    cel2.src = o;
                    spelerImg.src = x;
                    speler.innerText = 1;
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
        if (cel3.src != speler1.src && cel3.src != speler2.src) {
            aantalZetten++;
            if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
                cel3.src = x;
                spelerImg.src = o;
                speler.innerText = 2;
                gewonnen();
            } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
                cel3.src = o;
                spelerImg.src = x;
                speler.innerText = 1;
                gewonnen();
            }
            if (speler.innerHTML == "1") {
                computerSpeler.innerHTML = "Speler";
            }
            if (speler.innerHTML == "2") {
                computerSpeler.innerHTML = "Computer";
            }
        }
    } else {
        if (btnSpelerEnComputer.innerHTML == "Tegen computer") {
            if (cel3.src != speler1.src && cel3.src != speler2.src) {
                aantalZetten++;
                if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
                    cel3.src = x;
                    spelerImg.src = o;
                    speler.innerText = 2;
                    gewonnen();
                } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
                    cel3.src = o;
                    spelerImg.src = x;
                    speler.innerText = 1;
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
        if (cel4.src != speler1.src && cel4.src != speler2.src) {
            aantalZetten++;
            if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
                cel4.src = x;
                spelerImg.src = o;
                speler.innerText = 2;
                gewonnen();
            } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
                cel4.src = o;
                spelerImg.src = x;
                speler.innerText = 1;
                gewonnen();
            }
            if (speler.innerHTML == "1") {
                computerSpeler.innerHTML = "Speler";
            }
            if (speler.innerHTML == "2") {
                computerSpeler.innerHTML = "Computer";
            }
        }
    } else {
        if (btnSpelerEnComputer.innerHTML == "Tegen computer") {
            if (cel4.src != speler1.src && cel4.src != speler2.src) {
                aantalZetten++;
                if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
                    cel4.src = x;
                    spelerImg.src = o;
                    speler.innerText = 2;
                    gewonnen();
                } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
                    cel4.src = o;
                    spelerImg.src = x;
                    speler.innerText = 1;
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
        if (cel5.src != speler1.src && cel5.src != speler2.src) {
            aantalZetten++;
            if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
                cel5.src = x;
                spelerImg.src = o;
                speler.innerText = 2;
                gewonnen();
            } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
                cel5.src = o;
                spelerImg.src = x;
                speler.innerText = 1;
                gewonnen();
            }
            if (speler.innerHTML == "1") {
                computerSpeler.innerHTML = "Speler";
            }
            if (speler.innerHTML == "2") {
                computerSpeler.innerHTML = "Computer";
            }
        }
    } else {
        if (btnSpelerEnComputer.innerHTML == "Tegen computer") {
            if (cel5.src != speler1.src && cel5.src != speler2.src) {
                aantalZetten++;
                if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
                    cel5.src = x;
                    spelerImg.src = o;
                    speler.innerText = 2;
                    gewonnen();
                } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
                    cel5.src = o;
                    spelerImg.src = x;
                    speler.innerText = 1;
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
        if (cel6.src != speler1.src && cel6.src != speler2.src) {
            aantalZetten++;
            if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
                cel6.src = x;
                spelerImg.src = o;
                speler.innerText = 2;
                gewonnen();
            } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
                cel6.src = o;
                spelerImg.src = x;
                speler.innerText = 1;
                gewonnen();
            }
            if (speler.innerHTML == "1") {
                computerSpeler.innerHTML = "Speler";
            }
            if (speler.innerHTML == "2") {
                computerSpeler.innerHTML = "Computer";
            }
        }
    } else {
        if (btnSpelerEnComputer.innerHTML == "Tegen computer") {
            if (cel6.src != speler1.src && cel6.src != speler2.src) {
                aantalZetten++;
                if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
                    cel6.src = x;
                    spelerImg.src = o;
                    speler.innerText = 2;
                    gewonnen();
                } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
                    cel6.src = o;
                    spelerImg.src = x;
                    speler.innerText = 1;
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
        if (cel7.src != speler1.src && cel7.src != speler2.src) {
            aantalZetten++;
            if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
                cel7.src = x;
                spelerImg.src = o;
                speler.innerText = 2;
                gewonnen();
            } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
                cel7.src = o;
                spelerImg.src = x;
                speler.innerText = 1;
                gewonnen();
            }
            if (speler.innerHTML == "1") {
                computerSpeler.innerHTML = "Speler";
            }
            if (speler.innerHTML == "2") {
                computerSpeler.innerHTML = "Computer";
            }
        }
    } else {
        if (btnSpelerEnComputer.innerHTML == "Tegen computer") {
            if (cel7.src != speler1.src && cel7.src != speler2.src) {
                aantalZetten++;
                if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
                    cel7.src = x;
                    spelerImg.src = o;
                    speler.innerText = 2;
                    gewonnen();
                } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
                    cel7.src = o;
                    spelerImg.src = x;
                    speler.innerText = 1;
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
        if (cel8.src != speler1.src && cel8.src != speler2.src) {
            aantalZetten++;
            if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
                cel8.src = x;
                spelerImg.src = o;
                speler.innerText = 2;
                gewonnen();
            } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
                cel8.src = o;
                spelerImg.src = x;
                speler.innerText = 1;
                gewonnen();
            }
            if (speler.innerHTML == "1") {
                computerSpeler.innerHTML = "Speler";
            }
            if (speler.innerHTML == "2") {
                computerSpeler.innerHTML = "Computer";
            }
        }
    } else {
        if (btnSpelerEnComputer.innerHTML == "Tegen computer") {
            if (cel8.src != speler1.src && cel8.src != speler2.src) {
                aantalZetten++;
                if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
                    cel8.src = x;
                    spelerImg.src = o;
                    speler.innerText = 2;
                    gewonnen();
                } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
                    cel8.src = o;
                    spelerImg.src = x;
                    speler.innerText = 1;
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
        if (cel9.src != speler1.src && cel9.src != speler2.src) {
            aantalZetten++;
            if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
                cel9.src = x;
                spelerImg.src = o;
                speler.innerText = 2;
                gewonnen();
            } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
                cel9.src = o;
                spelerImg.src = x;
                speler.innerText = 1;
                gewonnen();
            }
            if (speler.innerHTML == "1") {
                computerSpeler.innerHTML = "Speler";
            }
            if (speler.innerHTML == "2") {
                computerSpeler.innerHTML = "Computer";
            }
        }
    } else {
        if (btnSpelerEnComputer.innerHTML == "Tegen computer") {
            if (cel9.src != speler1.src && cel9.src != speler2.src) {
                aantalZetten++;
                if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
                    cel9.src = x;
                    spelerImg.src = o;
                    speler.innerText = 2;
                    gewonnen();
                } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
                    cel9.src = o;
                    spelerImg.src = x;
                    speler.innerText = 1;
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
    if (cel1.src == speler1.src && cel2.src == speler1.src && cel3.src == speler1.src
        || cel4.src == speler1.src && cel5.src == speler1.src && cel6.src == speler1.src
        || cel7.src == speler1.src && cel8.src == speler1.src && cel9.src == speler1.src
        || cel1.src == speler1.src && cel4.src == speler1.src && cel7.src == speler1.src
        || cel2.src == speler1.src && cel5.src == speler1.src && cel8.src == speler1.src
        || cel3.src == speler1.src && cel6.src == speler1.src && cel9.src == speler1.src
        || cel1.src == speler1.src && cel5.src == speler1.src && cel9.src == speler1.src
        || cel3.src == speler1.src && cel5.src == speler1.src && cel7.src == speler1.src) {
        scoreSpeler1.innerHTML++;
        aantalRondes.innerHTML++;
        spelerImg.src = x;
        speler.innerText = 1;
        aantalZetten = 0;
        veldOpschonen();
    } else if (cel1.src == speler2.src && cel2.src == speler2.src && cel3.src == speler2.src
        || cel4.src == speler2.src && cel5.src == speler2.src && cel6.src == speler2.src
        || cel7.src == speler2.src && cel8.src == speler2.src && cel9.src == speler2.src
        || cel1.src == speler2.src && cel4.src == speler2.src && cel7.src == speler2.src
        || cel2.src == speler2.src && cel5.src == speler2.src && cel8.src == speler2.src
        || cel3.src == speler2.src && cel6.src == speler2.src && cel9.src == speler2.src
        || cel1.src == speler2.src && cel5.src == speler2.src && cel9.src == speler2.src
        || cel3.src == speler2.src && cel5.src == speler2.src && cel7.src == speler2.src) {
        scoreSpeler2.innerHTML++;
        aantalRondes.innerHTML++;
        spelerImg.src = x;
        speler.innerText = 1;
        aantalZetten = 0;
        veldOpschonen();
    } else if (aantalZetten == 9) {
        veldOpschonen();
        aantalZetten = 0;
        spelerImg.src = x;
        speler.innerText = 1;
        aantalRondes.innerHTML++;
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
}