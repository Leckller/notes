    // Estrutura condicional if/else //


// !!!!!! Escopo é um bloco de código !!!!!!

// O "if" é utilizado para criar condições dentro de um código. por exepmlo

const temBanana = true
if (temBanana === true) {
    console.log('Vou comer banana')
}
console.log('----------------------------------------------------------------------')

// O "else" cria uma condição que é executada caso nenhuma das outras condiçoes sejam TRUE

const temAbacaxi = false
if (temAbacaxi === true){
    console.log('Vou comer um caxi')
}
else {
console.log('Poxa não tem caxi')
}
console.log("---------------------------------------------------------------------")

// Para casos que serão necessários mais de duas condiçoes utilizamos o "else if"
// "Se não, se" a bota for de couro{blablabla}

const pneuReserva = false
if(pneuReserva === true) {
    console.log("Safe, tem pneu reserva")
}
else if (pneuReserva === false) {
    console.log("fudeu, ficamo de xoxota sem pneu")
}
else{
    console.log("acho q esse pneu aguenta")
}

console.log("---------------------------------------------------------------------")

// Extra!! é possível colocar uma condição dentro de outra condição, dessa forma conferindo outra condição após a validação da condição anterior, mei confuso mas me parece ser útil.

//Podemos simplificar o código utilizando um operador ternário, parecido com a maneira que utilizamos o for. Fazemos da seguinte forma:

//<condição> ? <retorno caso condição seja verdadeira> : <retorno caso condição seja falsa>; 

//Exemplo:
const espinha = undefined
const medico = espinha == true ? 'acho melhor ir ao médico para conferir' : 'melhor correr p médico o quanto antes'
console.log(medico);

//Podemos utilizar este mesmo método apenas para o if, utilizando dois operadores lógicos and (&&)

const gols = 2
const goleada = gols >= 3 && true
console.log(`a quantidade de gols é ${gols}, logo ${goleada} para goleada.`)

// por não ter uma resposta para o "else" é padronizado uma saída de false.

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

const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];
function addCustomer(customer) {
    if(typeof customer == 'string'){
       return trybeBankCustomers.unshift(customer)
    }
    else{
        console.log('pode nao')
    }
}
addCustomer('1')
console.log(trybeBankCustomers)
