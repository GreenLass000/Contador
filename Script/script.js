function inicio() {
    let num = 0;
    let numero = document.getElementById("numero");
    let boton = document.getElementById("boton");
    let char = "";
    boton.onclick = function (e) {
        num++; //aumentamos el contador de clicks
        if (num == 100) {
            char += "·";
            num = 0;
            miles.textContent = char;
            numero.textContent = 0
        } else {
          numero.textContent = num;
        }
    }
}