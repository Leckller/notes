document.querySelector('h1').style.color = 'red'
localStorage.setItem('name', 'ruy')
const recoveryName = localStorage.getItem('name')
console.log(recoveryName)
console.log(typeof recoveryName)
localStorage.setItem('idade', 18)
const recoveryIdade =  JSON.parse(localStorage.getItem('idade', 18))
console.log(recoveryIdade)
console.log(typeof recoveryIdade)
const variavelComObjeto = {
    nome: 'leckler',
    sex: 'muito'
}
localStorage.setItem('ficha', JSON.stringify(variavelComObjeto))
const recoveryObject = localStorage.getItem('ficha')
console.log(JSON.parse(recoveryObject))
const balela = ['balelao', 'balelinha'];
localStorage.setItem('baleludos', JSON.stringify(balela))
const recoveryBalela = JSON.parse(localStorage.getItem('baleludos'))
console.log(recoveryBalela)