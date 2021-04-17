function mensagem(nome) {
    console.log(1, `Olá Mundo, ${nome}`);
}
mensagem('Daniel');

function soma(a, b) {
    return +a + +b; // mudança do tipo para integer com o sinal de +
}

let total = soma(4, 5);
console.log(2, soma('3', 2));

console.log(3, total)

// para aprender sobre arguments, não é legível
function soma2(a, b) {
    console.log(4, arguments)
    return arguments[0] + arguments[1];
}

soma2(2, 4, 5, 6, 7, 8);
console.log(5, soma2(2, 4, 5, 6, 7, 8));


let resultado = 4;
function soma3(e, f) {
    let resultado = e + f; // o LET declara a variável e assim é utilizada apenas neste escopo.
    return resultado;
}
console.log(7, resultado);
console.log(8, soma3(2, 8));
console.log(9, resultado);


let nome = 'Daniel';

function mensagem(nome) {
    console.log (10, 'Olá, ' + nome)
}
mensagem('Ana');


let subtracao = function (g, h) {
    return g - h;
    
}


console.log(11, subtracao(10, 7))

let sub2 = subtracao;
console.log(12, sub2(5, 3))



let add = function (i, j) {
    return i + j;
    
}
let sub = function (i, j) {
    return i - j;
    
}
let mut = function (i, j) {
    return i * j;
    
}
let div = function (i, j) {
    return i / j;
    
}

function executa(fn, i, j) {
   return fn(i,j);
    
}
let result1 = executa(soma, 20, 5);
let result2 = executa(sub, 20, 5);
let result3 = executa(mut, 20, 5);
let result4 = executa(div, 20, 5);
console.log(13, result1);
console.log(14, result2);
console.log(15, result3);
console.log(16, result4);


function fatorial(n) {
    if (n<=1) 
    return 1;
    return n*fatorial(n-1);
}
console.log(17, fatorial(6));

let g = function () {
    {return 3};
}
let h = g;
//g= null;
let l = fatorial;

console.log(18, h(6)) // 
console.log(18, l(6)) // 
console.log(19, fatorial(6)) // é uma variavel global



//Arrow Functions

let somaArrow = (x, y) => x + y;

console.log(20, somaArrow(200, 100));