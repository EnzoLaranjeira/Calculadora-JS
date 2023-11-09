function displaynum(n1) {
    Calculator.text1.value = Calculator.text1.value + n1;
}
function calcular() {
    var expressao = Calculator.text1.value;
    var resultado = eval(expressao);
    
    var historico = document.getElementById("historico");
    var novaEntrada = document.createElement("li");
    novaEntrada.appendChild(document.createTextNode(expressao + " = " + resultado));
    historico.appendChild(novaEntrada);

    Calculator.text1.value = resultado;
}
function toggleHistorico() {
    var historico = document.getElementById("historico").parentElement;
    historico.classList.toggle("esconder");
}
