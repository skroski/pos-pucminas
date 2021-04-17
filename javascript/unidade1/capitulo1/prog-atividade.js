let n = 15; // os comandos abaixo poder funcionar para quaisquer valores de n

let primo = true;
for(let i = 2; i > 1;  i--){ // Ainda aguardando a resolução do problema.
  if(n%i == 0) // Testa se n é divisível por i
    primo = false;
}
console.log(`${n} ${!primo?"não ":""} é um número primo.`);
