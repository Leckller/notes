        // switch, case, break //

// funcionam com a mesma ideia do if e else, mas diferente.

// A condicional "switch" pega o valor de uma váriavel, e combina o valor para uma clausa "case", podemos adicionar várias "case" até definirmos um "break", claro, podemos adicionar mais "case" após o break. Da uma olhada no exemplo:
// coloque dois pontos após o valor dado ao case! e então coloque o que acontecerá para quando resultar naquele valor.
const fruta = 'melao';
let mensagem = '';
switch(fruta){
    case 'cenoura':
    mensagem = 'oi, Cueio. voce quer uma cenoura? tá saindo por 3 conto o kg'
    break;
    case 'limao':
    case 'goiaba':
    mensagem = 'mamao e goiaba tá saindo 3 conto o kg'
    break;
    case 'mamao':
    mensagem = '2,50 a unidade'
    case 'melao':
    mensagem = '3 conto a unidade'
    //nesse caso o melao não envia o mesmo valor do mamao porque a mensagem vem antes de melao. após colocar uma mensagem embaixo de melao, ele então dá um resultado.
    break;
}
console.log(mensagem)

// exercicio bacana de laços de repetição
console.log(`ex---------------------------------------------`)
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = []
let mediaAritimetica = []
let maiorNumero = []
let impares = []
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index])
    soma = Number(soma + numbers[index])
    mediaAritimetica = soma / numbers.length
    for (let index2 = 0; index2 < numbers.length; index2++) {
        let comparacao = numbers[index]
        if (comparacao > maiorNumero) {
            maiorNumero = comparacao
        }
    }
    // Preciso saber quantos valores ímpares o vetor tem, e caso nao tenha nenhum imprimir um mensagem.
    const calculoImpares = numbers[index] % 2
    if(calculoImpares != 0){
    impares.push(numbers[index])
    }
}
console.log(`A soma destes números é ${soma}`)
if (mediaAritimetica > 20) {
    console.log(`O valor da média aritmética é maior que 20.`)
}
else if (mediaAritimetica < 20) {
    console.log(`O valor da média aritmética é menor que 20`)
}
console.log(`${maiorNumero} é o maior número do vetor`)
console.log(`${impares.length} é a quantidade de números ímpares `)
