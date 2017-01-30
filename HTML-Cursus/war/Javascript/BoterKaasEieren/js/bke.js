/***************************************************
 * bke.js
 * -------------------------------------------------
 * In dit bestand staat alle javascript code
 * om ons spel te laten werken.
 *
 **************************************************/



var btnStartStop;



window.onload = function() {
    //Elementen selectern
    btnStartStop =  document.querySelector('Button');

    //EventListners
    btnStartStop.addEventListener('click', btnStartReset);
};

function btnStartReset(event) {
    if (this.innerText == 'Start spel') {
        this.innerText = 'Reset spel';
    } else {
        this.innerText = 'Start spel';
    }
}

if (document.getElementsByClassName("players-turn" == 1)) {
var td = document.getElementsByTagName(td);
    td.setAttribute("src", "img/cross.jpg")
}
cel =  document.querySelector('Button');