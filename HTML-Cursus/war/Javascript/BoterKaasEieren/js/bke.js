/***************************************************
 * bke.js
 * -------------------------------------------------
 * In dit bestand staat alle javascript code
 * om ons spel te laten werken.
 *
 **************************************************/



var x = "img/cross.jpg", o = "img/circle.jpg",
    btnStartStop = document.querySelector('Button'),
    speler = document.querySelectorAll('.players-turn tbody tr td')[2],
    spelerImg = document.querySelectorAll('.players-turn tbody tr td img')[0],
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
    cel1.addEventListener('click', aanZet1);
    cel2.addEventListener('click', aanZet2);
    cel3.addEventListener('click', aanZet3);
    cel4.addEventListener('click', aanZet4);
    cel5.addEventListener('click', aanZet5);
    cel6.addEventListener('click', aanZet6);
    cel7.addEventListener('click', aanZet7);
    cel8.addEventListener('click', aanZet8);
    cel9.addEventListener('click', aanZet9);

};


/* functies */
function btnStartReset(event) {
    if (this.innerText == 'Start spel') {
        this.innerText = 'Reset spel';
    } else {
        this.innerText = 'Start spel';
    }
}

function aanZet1(event) {
    if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
        cel1.src = x;
        spelerImg.src = o;
        speler.innerText = 2;
    } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
        cel1.src = o;
        spelerImg.src = x;
        speler.innerText = 1;
    }
}
function aanZet2(event) {
    if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
        cel2.src = x;
        spelerImg.src = o;
        speler.innerText = 2;
    } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
        cel2.src = o;
        spelerImg.src = x;
        speler.innerText = 1;
    }
}
function aanZet3(event) {
    if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
        cel3.src = x;
        spelerImg.src = o;
        speler.innerText = 2;
    } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
        cel3.src = o;
        spelerImg.src = x;
        speler.innerText = 1;
    }
}
function aanZet4(event) {
    if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
        cel4.src = x;
        spelerImg.src = o;
        speler.innerText = 2;
    } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
        cel4.src = o;
        spelerImg.src = x;
        speler.innerText = 1;
    }
}
function aanZet5(event) {
    if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
        cel5.src = x;
        spelerImg.src = o;
        speler.innerText = 2;
    } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
        cel5.src = o;
        spelerImg.src = x;
        speler.innerText = 1;
    }
}
function aanZet6(event) {
    if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
        cel6.src = x;
        spelerImg.src = o;
        speler.innerText = 2;
    } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
        cel6.src = o;
        spelerImg.src = x;
        speler.innerText = 1;
    }
}
function aanZet7(event) {
    if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
        cel7.src = x;
        spelerImg.src = o;
        speler.innerText = 2;
    } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
        cel7.src = o;
        spelerImg.src = x;
        speler.innerText = 1;
    }
}
function aanZet8(event) {
    if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
        cel8.src = x;
        spelerImg.src = o;
        speler.innerText = 2;
    } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
        cel8.src = o;
        spelerImg.src = x;
        speler.innerText = 1;
    }
}
function aanZet9(event) {
    if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 1) {
        cel9.src = x;
        spelerImg.src = o;
        speler.innerText = 2;
    } else if (btnStartStop.innerHTML != "Start spel" && speler.innerText == 2) {
        cel9.src = o;
        spelerImg.src = x;
        speler.innerText = 1;
    }
}