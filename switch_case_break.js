// switch, case, break //

// funcionam com a mesma ideia do if e else, mas diferente.

// A condicional "switch" pega o valor de uma váriavel, e combina o valor para uma clausa "case", podemos adicionar várias "case" até definirmos um "break", claro, podemos adicionar mais "case" após o break. Da uma olhada no exemplo:
// coloque dois pontos após o valor dado ao case! e então coloque o que acontecerá para quando resultar naquele valor.
const fruta = 'melao';
let mensagem = '';
switch (fruta) {
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
    if (calculoImpares != 0) {
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

console.log(`ex-----------------------------------------------------`)
// desafio fatorial //

let numeroFatorial = 10
let calculoFat = numeroFatorial
for (let fatindex = numeroFatorial - 1; fatindex < numeroFatorial && fatindex > 1; fatindex--) {
    calculoFat = calculoFat * fatindex
    console.log(calculoFat)
}
console.log(`ex-----------------------------------------------------`)
// invertendo frase //
console.log('ex-1')
let word = 'tryber';
let invertendo = []
for (invert = word.length - 1; invert < word.length && invert >= 0; invert--) {
    invertendo.push(word[invert])
}
console.log(word)
console.log(invertendo.join(''))

// Fazendo de um jeito mais simples.
console.log('ex-2')
const separandoSplit = word.split('')
const invertendoReverse = separandoSplit.reverse()
const juntandoJoin = invertendoReverse.join('')
console.log(juntandoJoin)

// Ou tudo de uma vez
console.log('ex-3')
const tudoMisturado = word.split('').reverse().join('')
console.log(tudoMisturado)

console.log(`ex-----------------------------------------------------`)

// Quadrado de Asteristicos //

let numeroQuadrado = 8
if (numeroQuadrado > 1) {
    for (let indexQuadrado = numeroQuadrado; indexQuadrado <= numeroQuadrado && indexQuadrado > 0; indexQuadrado--) {
        let stringQ = []
        for(indexColunaQuadrada = numeroQuadrado; indexColunaQuadrada <= numeroQuadrado && indexColunaQuadrada > 0; indexColunaQuadrada--){
            stringQ.push('*')
        }
        console.log(stringQ.join(''))
    }
}
console.log(`ex-----------------------------------------------------`)

// Piramide de Asteristicos //
let piramide = []
let numeroPiramide = 15
if(numeroPiramide > 2){
    for(let indexPiramide = numeroPiramide; indexPiramide <= numeroPiramide && indexPiramide > 0; indexPiramide--){
        piramide.push('*')
        console.log(piramide.join(''))
    }
}
console.log(`ex-----------------------------------------------------`)

// Piramide de Asteristicos invertida //
// Nesse método utilizei do unshift para adicionar um elemento no incio do array.

let numeroPiramideInvertida = numeroPiramide
let piramideInvertida = ['*']
if(numeroPiramideInvertida > 2){
    for(let indexPiramideI = numeroPiramideInvertida - 1; indexPiramideI <= numeroPiramideInvertida && indexPiramideI > 0; indexPiramideI--){
        piramideInvertida.unshift(' ')
    }
    console.log(piramideInvertida.join(''))

    for(let piramide2 = numeroPiramideInvertida - 2;piramide2 < numeroPiramideInvertida && piramide2 >= 0; piramide2--){
        piramideInvertida.splice(piramide2, 1, '*')
        console.log(piramideInvertida.join(''))
    }
}
console.log(`ex-----------------------------------------------------`)