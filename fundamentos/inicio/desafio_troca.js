let a =7;
let b = 94;

console.log("a = " + a);
console.log("b = " + b);
console.log();

// depois da troca... a = 94 e b = 7

let c;

c = a;  //
a = b;  //  OU [a, b] = [b, a];
b = c;  //

console.log("a = " + a);
console.log("b = " + b);