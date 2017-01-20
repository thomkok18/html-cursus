document.getElementById('cart-hplus').addEventListener('submit', total);

function total(event) {
    event.preventDefault();

    var aantal = document.getElementById('txt-value');

    if(aantal.value === '' || aantal.value === '0') {
        alert('Vul het aantal in.');

        aantal.focus();
    }
}