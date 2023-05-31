let numero = 18;
let nome = "ruy";
let pendencias = true; // Ou false

console.log(typeof numero)
console.log(typeof nome)
console.log(typeof pendencias)
// Qualquer valor escrito entre aspas simples ou duplas será considerado como uma string.
// O separador decimal em javascript é o ponto (".") e não a virgula (",")
//------------------------------------------------------------------------------------------------------//
// Para criarmos uma variável q receberá um valor no futuro utilizamos o "null", ele faz com que
// atribua um valor nulo para a variável.
let profissaoFutura = null
console.log(profissaoFutura)
//------------------------------------------------------------------------------------------------------//
// O "undefined" no geral sinaliza que houve um erro no código, ele aparece em variáveis que não foram
// declaradas e em variáveis que não foram atribuidas um valor.
let variavelSemValor;
console.log(variavelSemValor)
//console.log(variavelNaoDeclarada)
//------------------------------------------------------------------------------------------------------//

// Temos 3 tipos de formas de declarar uma váriavel, com as tags "const" (para variaveis de valor fixo, não há como trocar o valor dessa variavel), "let"(diferente do const, essa variavel pode alterar o seu valor no decorrer do código) e "var" (que no geral funciona como as duas, porém ela pode ser localizada fora dos escopos para verificar o resultado, já a const e let só podem ser acessadas dentro do escopo)
// É possível dar um console em mais de uma variavel utilizando uma virgula entre elas.