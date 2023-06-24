
const conjustoEntradas = [ 10, 52, 100, 68, 85, 1, 5, 50, 10, 98, 23];
let i = 0;

function gets(){
    const valor = conjustoEntradas[i];
    i = i + 1;
    return valor;
}

function print(texto){
    console.log(texto);
}


module.exports = { 
    gets,
    print
 };





