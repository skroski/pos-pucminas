export let contador = {
    valor: 0
};
export const MAXIMO = 3;
export function conta(){
    if(contador < MAXIMO) contador.valor++
    return contador.valor;
}