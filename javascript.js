function calcular() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "";
    var operaciones = ["suma", "resta", "multiplicación", "división", "módulo"];
    for (var i = 0; i < operaciones.length; i++) {
        var operacion = operaciones[i];
        var resultado;
        switch (operacion) {
            case "suma":
                resultado = num1 + num2;
                break;
            case "resta":
                resultado = num1 - num2;
                break;
            case "multiplicación":
                resultado = num1 * num2;
                break;
            case "división":
                resultado = num1 / num2;
                break;
            case "módulo":
                resultado = num1 % num2;
                break;
        }
        resultadosDiv.innerHTML += "<p>" + operacion + ": " + resultado + "</p>";
    }
}