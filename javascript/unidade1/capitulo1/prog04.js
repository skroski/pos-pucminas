let idade = 21;
if (idade > 18) console.log('Acesso Permitido');

let acessoPermitido;
let idade2 = 21;

if (idade2 >= 18) acessoPermitido = true;
else acessoPermitido = false;

console.log(acessoPermitido);

acessoPermitido2 = idade2 >= 22 ? true : false;

console.log(acessoPermitido2)


let a = 5, b = 3, operador = '+';

if (operador == '+')
    console.log(a + b);
else if (operador == '-')
    console.log(a - b);
else if (operador == '*')
    console.log(a * b);
else if (operador == '/')
    console.log(a / b);
else
    console.log('Operador inválido');


switch (operador) {
    case '+': console.log(a + b);
    break;
    case '-': console.log(a - b);
    break;
    case '*': console.log(a * b);
    break;
    case '/': console.log(a / b);
    break;
    default: console.log('Operador inválido');
}

let i=0;
while (i< 3){
    console.log(i);
    i++;
}
let j=0;
do{
    console.log(j)
    j++
}while( j<3 )

let k=0;
for (let k = 0; k < 5; k++){
    if (k % 2 == 0)console.log(`O número ${k} é par`);
}

let l=0;
for (let l = 10; l > 0; l--){
    if (l % 2 == 0)console.log(`O número ${l} é par`);
}