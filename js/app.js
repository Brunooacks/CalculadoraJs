function isNumber() {
    var number = document.getElementById('numberid').value;
    var resultado  = isNaN(number);

    if(!resultado) {
        alert('Sim, e um numero')
    } else {
        alert('Nao , e um numero')
    }
  //  console.log(isNaN(number));
}

function somaValores(){

    var number1 = document.getElementById('numberOneId').value;
    var number2 = document.getElementById('numberTwoId').value;

    var resultado = parseInt(number1) + parseInt(number2);

    //alert("O resultado da soma e " + resultado)
    var divResultado = document.getElementsByClassName('resultado');
    var span = document.createElement('span');
    span.innerText = "O resultado da soma é:" + resultado;
    divResultado[0].appendChild(span)

}
