function espace () {
    return console.log(''),console.log('-x'.repeat(30)),console.log('')
}
// Vou anotar algumas propriedades, valores e atributos do javascript

// Hoje eu aprendi os métodos "reverse", "join", "split" e "splice"
// Eles funcionam da seguinte forma:
console.log("//------------------------------------------------------------------------//")

let palavrinha = ['gusttavo', 'ruy nascimento ferreira']
console.log(palavrinha.reverse())

// Ele inverte a ordem dos itens do array. É bom lembrar que funciona como uma função, ou seja, precisa ter parênteses no final.

console.log("//------------------------------------------------------------------------//")

console.log(palavrinha.join(' '))

// O join junta todos os itens do array, e dentro do parênteses se coloca o que irá conter entre os itens, ou até mesmo nada para juntar.

console.log("//------------------------------------------------------------------------//")

const dividindo = palavrinha[0].split(' ')
console.log(dividindo)

// O split divide a string escolhida em sub-grupos de string, basta definir a partir do que será separado, por exemplo: se colocar dentro dos parênteses aspas vazia ele vai separar todas as letras que estão juntas, caso coloque um espaço dentro do parênteses ele vai separar todas que estão separadas por espaço.

console.log("//------------------------------------------------------------------------//")

let arraial = ["um","três","quadro"]
arraial.splice(1, 2, 'dois')
console.log(arraial)

// O splice seleciona um item do array, remove (ou não), e adiciona um novo no index desejado. Dentro dos parênteses funciona da seguinte forma:
// ((primeiro escolhemos o index que iremos colocar o item ou alterar), (segundo escolhemos a quantidade de itens que iremos apagar a partir do index escolhido no primeiro), (Por fim vamos colocar o que entrará no lugar)).


console.log('-x'.repeat(30))

// Utilizando a linha de cima como exemplo, descobri essa propriedade para repetir o valor de uma variavel ou de uma mensagem dentro do console.

console.log('-x'.repeat(30))
console.log('')

// Temos uma propriedade chamada slice, parecida com o splice, só que nesse caso ela corta uma parte APENAS para visualizar, ela não altera o valor da variavel.

let sliceTeste = ["A", "B", "C", "D"]
const inverteSlice = sliceTeste.slice(-4, 4)
console.log(inverteSlice)

// dentro do parênteses colocamos, PRIMEIRO o index inicial, e SEGUNDO o index final que será cortado e os demais à frente do mesmo também serão.
// Importante destacar que é possível utilizar valores negativos, fazendo com que a ordem seja invertida, mas isso apenas para para localizar, logo a ordem em que será apresentado será a mesma. Com isso vale deixar o alerta de que para todo index temos DUAS formas de encontrar o mesmo, por exemplo o valor "0" nesse caso é o A que também pode ser identificado como -4, logo se colocarmos o valor 0 como inicial e o valor -4 como final, o array será apresentado vazio.

espace()
// Temos algumas propriedades para retirar e colocar itens dentro dos arrays, diferente do splice que podemos escolher, esses são padronizados.

let exemploArraysXablau = ['Ruy', 'Nascimento']
console.log(exemploArraysXablau)
exemploArraysXablau.unshift('Gusttavo')
console.log(exemploArraysXablau)
exemploArraysXablau.push('Ferreira')
console.log(exemploArraysXablau)
exemploArraysXablau.shift()
console.log(exemploArraysXablau)
exemploArraysXablau.pop()
console.log(exemploArraysXablau)

// Como no exemplo a cima, as propriedades push e unshift, respectivamente, adicionam um item ao final do array e a outra no inicio do array.
// As outras duas propriedades, pop e shift, respectivamente retiram o ultimo item do array e a outra retira o primeiro item do array.

espace()

let confereElementos = ['Gusttavo','Ruy', 'Nascimento','Ferreira']
console.log(confereElementos.includes('Nascimento'))

// Como apresentado a cima, a propriedade includes, verifica se o elemento escolhido está dentro do array, caso o array possua aquele item, ele retorna "true", caso contrário retorna "false".

espace()

// temos as funçoes "Math" que trazem algumas propriedades da matematica e funções que nos possibilitam fazer algumas coisinhas legais, como por exemplo o Math.random que pega um numero aleatorio, o Math.ceil que arredonta um número para cima, o Math.SQRT que pega a raiz do número.

let numeroRandom = Math.random() * 30
console.log(numeroRandom)

// como pode se ver no console ele não traz um numero inteiro, e sim uma dizima enorme, para corrigir isso podemos utilizar 3 funções Math: Math.ceil, Math.round e Math.floor; Respectivamente, retorna um valor arredondado para cima, retorna um valor arredondado de acordo com qual número está mais proximo, retorna um valor arredondado para baixo.

numeroRandom = Math.round(Math.random() * 30)
console.log(numeroRandom)

// Pronto agora fica um numero inteiro bacanudo.

espace()

// Métodos de consulta DOM!!!

// Bom p encurtar logo, basicamente DOM é uma forma de carregar o javascript junto com o documento html.

// Da p alterar os elementos do documento HTML do site utilizando o javascript!
// Utilizando a tag document no js da p ver todos os elementos escritos em html. E especificando um pouco mais com a ajuda de funções como "getElementById", "getelementsbyClassName", que respectivamente pegam um elemento por id e class, e utilizando as propriedades "innerText" e "innerHTML", que respectivamente selecionam o conteúdo !ignorando as tags escritas no texto como a <strong> e a outra pega o conteúdo inteiro incluindo as tags escritas.
// utilizando Tudo isso da para alterar o conteúdo inteiro de algum elemento dentro do HTML utilizando o JavaScript.

// A tag getElementById pega apenas UM elemento, logo é possível utilizar o innerText direto. Já o getElementsByClassName pega todos os elementos que possuem a class escolhida, e retorna com uma lista parecida com um array/vetor, logo é necessário especificar qual o index da lista a ser alterado ou visualizado no console, a parte bacana é que da p usar laço de repetição para facilitar nossa vida na hora de trocar vários elementos de uma class especifica. Da mesma forma que o getElementsByClassName, o getElementsByTagName também retorna uma lista (mesmo que tenha apenas um elemento dentro dessa lista), a única diferença é que ele pega os elementos por tag HTML.

// Temos as tags query (querySelector() e querySelectorAll), que funcionam como seletores de CSS, podendo especificar exatamente onde iremos pegar tal elemento, seguindo a lógica de mãe filho neto etc... A tag querySelector pega o primeiro elemento que é encontrado de acordo com o parâmetro dado, já o querySelectorAll faz uma NodeList com todos os elementos encontrados com aquele parâmetro dado. Vale ressaltar que uma NodeList é parecida mas não é uma matriz, apesar de podermos utilizar a propriedade length, não conseguimos utilizar as propriedades pop(), push(), unshift() e shift().

// Temos a propriedade "parentNode" que nos diz qual são os "pais" da tag escolhida na função anterior, podemos concatenar essa propriedade para saber quem é o pai do pai. Vale ressaltar que essa propriedade serve apenas pare leitura.

// Existem mais propriedades que tem a mesma ideia de ler os descendentes das tags, dando a possibilidade de caminhar entre elas. São elas as:

/*

parentElement: Retorna o elemento-pai. Nesse caso, se o nó-pai não for um elemento HTML, essa propriedade retornará null.

childNodes: Retorna um NodeList com todos os nós filhos.

children: Retorna um HTMLCollection com todos os elementos filhos.

firstElementChild: Retorna o primeiro elemento filho.

lastElementChild: Retorna o último elemento filho.

nextElementSibling: Retorna o próximo elemento.

previousElementSibling: Retorna o elemento anterior.

*/

// firstChild e lastChild and firstElementChild e lastElementChild, são muito parecidos, com a diferença de que os primeiros acessam a primeira coisa que encontrar à frente do elemento pai, ou seja, isso inclui um espaço em branco. Já os segundos ignoram os espaços em branco e acessam o primeiro ELEMENTO que encontrar. 

// Para criar os elementos HTML pelo javascript utilizamos a função "createElement" e dentro do parametro colocamos a tag HTML que será criada. Após criar um elemento devemos envialo para o html, utilizando a fução "appendChild" que cria um filho a partir de alguma tag antes especificada, e dentro do parametro colocamos o item que será enviado para o site.  

// Do mesmo jeito que o innerHTML retorna as tags tbm, com ele é possivel enviar tags quando for passarmos um valor para algum texto no html.

// Para alterar a estilização de algum elemento basta utilizar a propriedade style após especificar o elemento

// Para criarmos um elemento HTML sem precisarmos escrever a tag após um innerHTML, podemos utilziar o createElement('tag') que irá criar um elemento, e para enviarmos para o HTML utilizamos o comando appendChild("elementoQueIráSerAdicionado") após o elemento pai, por exemplo:
const elementoPai = 'document.querySelector("h1")'
// elementoPai.appendChild("elementoQueIráSerAdicionado");

// Para adicionar classes a um elemento podemos utilizar as propriedades className e classList com a propriedade add... respectivamente, ela sobrescreve o valor da classe de alguma tag, já o segundo ACRESCENTA uma nova classe.