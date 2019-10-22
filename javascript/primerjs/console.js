var a = 5;
var c = 8;

function suma(a,b){
    return a+b;
}

suma(a,c);

var s = suma;

s(a,c);

/*  Funciones anonimas: Se ejecutan una sola vez y se retiran
    Las funciones anonimas pueden asignarse a una variable y utilizarla de esa manera
*/
var z = function(a,b){
    return a+b;
}

//MessageBox: Despliega un mensaje en el navegador.
alert("Hola mundo en javascript");
//InputBox: Atrapa el valor como una cadena.
prompt("Teclea tu edad", 0);
