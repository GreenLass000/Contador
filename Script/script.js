function inicio() {
    let num = 0;
    let numero = document.getElementById("numero");
    let boton = document.getElementById("boton");

    boton.onclick = function (e) {
        numero.textContent = parseInt(num) + 1;
        num++;
    }
}