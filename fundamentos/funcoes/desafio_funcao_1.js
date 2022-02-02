// funcao: 2 params -> console.log(+)
// ...(3, 4)
// ...(31, 49)
// funcao: 2 params -> console.log(-)
// ...(11, 7)
// ...(19, 52)

let Numero1 = 4;
let Numero2 = 3;
let Numero3 = 98;
let Numero4 = 31;

function Somar(n1, n2){
    console.log(n1+n2);
}

function Subitrair(n1, n2){
    console.log(n1-n2);
}

console.log("Somar:");

Somar(Numero1, Numero2);
Somar(Numero3, Numero4);

console.log("\nSubitrair:");

Subitrair(Numero1, Numero2);
Subitrair(Numero3, Numero4);