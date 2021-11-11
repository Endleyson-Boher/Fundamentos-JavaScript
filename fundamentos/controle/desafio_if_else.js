const a = 10;
const b = 28;
const operacao = '1' // + - * / %

let resultado;

if (operacao === '+') {
    resultado = a + b;
} else if (operacao === '-'){
    resultado = a - b;
} else if (operacao === '*'){
    resultado = a * b;
} else if (operacao === '/'){
    resultado = a / b;
} else if (operacao === '%'){
    resultado = a % b;
} else {
    resultado = 'Valor inválido';
}

console.log(resultado);