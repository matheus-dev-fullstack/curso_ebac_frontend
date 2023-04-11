function multiplicaDoisNumeros (valor1:number, valor2:number): number {
    return valor1 * valor2;
}
// ou
const multiplicaDoisValores = (valor1: number, valor2:number): number => valor1 * valor2;


function dizOi(nome: string) {
    return `Olá ${nome}!`;
}

console.log(multiplicaDoisNumeros(3, 4));
console.log(multiplicaDoisValores(5, 6));
console.log(dizOi('Natasha'));

