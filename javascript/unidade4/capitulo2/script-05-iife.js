//IIFE - Immediately Invoked Function Expression

// (function (nome) {
//     console.log(`Olá ${nome}`)
// })('Skroski')

let $ = (function () {
    let contadores = [];
    function Contador(i) {
        if (contadores[i] === undefined)
            contadores[i] = 0;
        //this.i = [i];
        this.incrementa = function () {
            contadores[i]++;
            return this;
        }
        this.decrementa = function () {
            contadores[i]--;
            return this;
        }
        this.valor = function () {
            return contadores[i]
        }
    }
    return function (i) {
        return new Contador(i)
    }

})()

let c = $(3)
c.incrementa()
console.log(c.valor());
c.incrementa()
console.log(c.valor());
c.incrementa()
console.log(c.valor());
c.incrementa()
console.log(c.valor());
c.decrementa()
console.log(c.valor());
c.incrementa()
console.log(c.valor());
c.incrementa()
console.log(c.valor());

let c2 = $(0);
c2.incrementa();
console.log(2, c2.valor())
c2.incrementa();
console.log(2, c2.valor())
c2.decrementa();
console.log(2, c2.valor())
c2.incrementa();
console.log(2, c2.valor())