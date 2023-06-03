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

console.log('-x'.repeat(30))
console.log('')

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

console.log('')
console.log('-x'.repeat(30))
console.log('')

let confereElementos = ['Gusttavo','Ruy', 'Nascimento','Ferreira']
console.log(confereElementos.includes('Nascimento'))

// Como apresentado a cima, a propriedade includes, verifica se o elemento escolhido está dentro do array, caso o array possua aquele item, ele retorna "true", caso contrário retorna "false".
