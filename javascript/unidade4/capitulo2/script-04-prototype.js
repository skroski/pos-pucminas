//prototype

// let forma = {
//     x: 10,
//     y: 15
// }

// let retangulo = Object.create(forma);
//     retangulo.largura = 100;
//     retangulo.altura = 50;


// retangulo.__proto__ = forma;
// forma.cor = "azul"
// console.log(forma)
// console.log(retangulo)
// console.log(retangulo.x, retangulo.y)
// console.log(retangulo.cor)


// let f1 = new Forma(10, 15)
// let f2 = new Forma(30, 30)


// Forma.prototype.cor = 'Azul'

// function Forma(x, y) {
//     this.x = x;
//     this.y = y;
// }
// Forma.prototype.move = function (dx, dy) {
//     this.x += dx;
//     this.y += dy;
// }
// let f1 = new Forma (10,15);
// console.log(f1)
// function Cor(n) {
//     this.cor = n;
// }
// function Retangulo(x, y, l, a, n) {

//     Forma.call(this, x, y);
//     Cor.call(this, n)
//     this.largura = l
//     this.altura = a
// }

// Retangulo.prototype = Object.create(Forma.prototype);

// Retangulo.prototype.constructor = Retangulo;

// let r1 = new Retangulo(10, 15, 100, 50, 'Azul')

// console.log(r1)
//r1.move(15, 15)
//console.log(f1)
//console.log(f2)
//f2.move(10, 10)

// let forma2 = {
//     x:10,
//     y:15
// }
// console.log(forma2)

class Forma {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

}
Forma.prototype.move = function (dx, dy) {
    this.x += dx;
    this.y += dy;
}
class Retangulo extends Forma {
    constructor(x, y, l, a) {
        super(x, y);
        this.largura = l
        this.altura = a
    }
}

let r1 = new Retangulo(10, 15, 100, 50)
r1.move(15, 15)
console.log(r1)

