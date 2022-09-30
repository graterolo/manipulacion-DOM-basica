const form = document.querySelector('#form');
const input1 = document.querySelector('#calc1');

const input2 = document.querySelector('#calc2');

const btn = document.querySelector('#btn1');

const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);

input1.addEventListener('blur', validarInput);
input2.addEventListener('blur', validarInput2);

//btn. addEventListener('click', sumarInputValues);

/*function btnOnclic(){
    const sumar = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerHTML = ('El resultado es: ' + sumar);
}*/

function sumarInputValues(event){
    console.log({event});
    event.preventDefault(); 
    const sumar = parseFloat(input1.value) + parseFloat(input2.value);
    pResult.innerHTML = ('El resultado es: ' + sumar);
}
function validarInput(event){
    console.log({event});
    let num1 = input1.value;
    console.log(isNaN(num1));
    if(isNaN(num1)) {
        input1.value = "";
        input1.focus();
        alert("Ingrese solo numeros");
    } 
}
function validarInput2(event){
    console.log({event});
    let num2 = input2.value;
    if(isNaN(num2)) {
        input2.value = "";
        input2.focus();
        alert("Ingrese solo numeros");       
    } 
}

