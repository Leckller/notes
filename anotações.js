// Vou anotar algumas propriedades, valores e atributos do javascript

// Hoje eu aprendi os métodos "reverse", "join" e "split"
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