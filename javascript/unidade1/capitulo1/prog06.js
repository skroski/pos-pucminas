let frutas = ['laranja', 'maçã', 'banana'];
console.log(1, frutas)
frutas[2] = 'pêra';
console.log(2, frutas);
frutas[5] = 'limão';
console.log(3, frutas);

frutas.length--;
console.log(4, frutas);

frutas[frutas.length] = "morango";
console.log(5, frutas);

let verduras = ['tomate', 'cebola', 'abobrinha'];
console.log(1, verduras);
verduras.sort();
console.log(2, verduras);

// Ordenação com o código escrito, sem o metodo sort
let comp = function (a,b) {
    if(a>b) return -1;
    else if (a<b) return 1
    else return 0;
}

verduras.sort(comp);
console.log(3, verduras)


let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(1, matriz);
console.log(1, matriz [0][1]);