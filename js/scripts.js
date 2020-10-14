var num1 = "";
var num2 = "";
var operador = "";

function pegarOperador(sinal) {
    play;

    if(num1 != "") {
        if(num2 == "") {
            operador = sinal;
            atualizarDisplay(num1 + sinal);
        }
    }
}

function pegarValor(valor) {
    tocar();

    if(operador == "") {
        num1 = num1 + valor;
        atualizarDisplay(num1);
    } else {
        num2 = num2 + valor;
        atualizarDisplay(num2);
    }
}

function atualizarDisplay(valor) {
    document.getElementById('display').innerHTML = num1;
}

function tocar() {
    var blip;
    blip = document.getElementById("blip");

    blip.volume = 1;
    blip.play();
}