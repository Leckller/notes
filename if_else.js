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

