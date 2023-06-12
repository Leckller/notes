const menu = {
    sandwiches: [
        {
            name: 'Big Mac',
            price: 26.90,
            ingredients: ['2 hambúrgueres', 'alface americana', 'queijo cheddar', 'molho especial', 'cebola', 'picles', 'pão com gergelim'],
            calories: 503,
        },
        {
            name: 'Duplo Quarterão',
            price: 39.90,
            ingredients: ['2 hambúrgueres', 'mostarda', 'ketchup', 'cebola', 'queijo cheddar', 'pão com gergelim'],
            calories: 762,
        },
        {
            name: 'Big Tasty',
            price: 39.90,
            ingredients: ['1 hambúrguer', 'queijo emental', 'tomate', 'alface americana', 'cebola', 'molho tasty', 'pão com gergelim'],
            calories: 944,
        },
    ],
    sideDishes: [
        {
            name: 'Chicken McNuggets - 10 unidades',
            price: 16.90,
            ingredients: ['frango empanado'],
            calories: 414,
        },
        {
            name: 'McFritas Kids',
            price: 8.90,
            ingredients: ['batata', 'sal'],
            calories: 90,
        },
        {
            name: 'McFritas Pequena',
            price: 11.90,
            ingredients: ['batata', 'sal'],
            calories: 211,
        },
        {
            name: 'McFritas Média',
            price: 13.90,
            ingredients: ['batata', 'sal'],
            calories: 295,
        },
        {
            name: 'McFritas Grande',
            price: 15.90,
            ingredients: ['batata', 'sal'],
            calories: 422,
        },
    ],
    desserts: [
        {
            name: 'McFlurry Ovomaltine Caramelo',
            price: 13.90,
            ingredients: ['bebida láctea sabor baunilha', 'flocos de ovomaltine', 'cobertura de caramelo'],
            calories: 462,
        },
        {
            name: 'Top Sundae Chocolate',
            price: 11.90,
            ingredients: ['bebida láctea sabor baunilha', 'cobertura de chocolate', 'farofa de paçoca', 'canudo'],
            calories: 377,
        },
        {
            name: 'Torta de Banana',
            price: 6.90,
            ingredients: ['banana', 'massa crocante'],
            calories: 222,
        },
    ],
    drinks: [
        {
            name: 'Coca-Cola 300ml',
            price: 13.90,
            calories: 129,
        },
        {
            name: 'Del Valle Uva 500ml',
            price: 11.90,
            calories: 200,
        }
    ],
}
function espacamento (){
    console.log("")
console.log('-x'.repeat(40))
console.log("")
}
function readMenu(entrada, _tipo) {
    const lanche = []
    const preco = []
    if (_tipo === 'sandwiches') {
        for (let oI = 0; oI < entrada.sandwiches.length; oI++) {
            lanche.push(entrada.sandwiches[oI].name)
            preco.push(entrada.sandwiches[oI].price)
        }
        for (rI = 0; rI < lanche.length; rI += 1) {
            console.log(lanche[rI], preco[rI])
        }
    }
    else if (_tipo === 'desserts') {
        for (let oI = 0; oI < entrada.desserts.length; oI++) {
            lanche.push(entrada.desserts[oI].name)
            preco.push(entrada.desserts[oI].price)
        }
        for (rI = 0; rI < lanche.length; rI += 1) {
            console.log(lanche[rI], preco[rI])
        }
    }
    else if (_tipo === 'drinks') {
        for (let oI = 0; oI < entrada.drinks.length; oI++) {
            lanche.push(entrada.drinks[oI].name)
            preco.push(entrada.drinks[oI].price)
        }
        for (rI = 0; rI < lanche.length; rI += 1) {
            console.log(lanche[rI], preco[rI])
        }
    }
    else if (_tipo === 'sideDishes') {
        for (let oI = 0; oI < entrada.sideDishes.length; oI++) {
            lanche.push(entrada.sideDishes[oI].name)
            preco.push(entrada.sideDishes[oI].price)
        }
        for (rI = 0; rI < lanche.length; rI += 1) {
            console.log(lanche[rI], preco[rI])
        }
    }

}

espacamento()

function readNameObject(_escolha) {
    for (let NOI = 0; NOI < menu.sandwiches.length; NOI++) {
        if (_escolha === menu.sandwiches[NOI].name) {
            return Object.entries(menu.sandwiches[NOI])
        }
    }
    for (let NOI = 0; NOI < menu.sideDishes.length; NOI++) {
        if (_escolha === menu.sideDishes[NOI].name) {
            return Object.entries(menu.sideDishes[NOI])
        }
    }
    for (let NOI = 0; NOI < menu.desserts.length; NOI++) {
        if (_escolha === menu.desserts[NOI].name) {
            return Object.entries(menu.desserts[NOI])
        }
    }
    for (let NOI = 0; NOI < menu.drinks.length; NOI++) {
        if (_escolha === menu.drinks[NOI].name) {
            return Object.entries(menu.drinks[NOI])
        }
    }
}

espacamento()

const opcoesCompraveis = (dindin) => {
    const compraveis = []
    for (dI = 0; dI < menu.sandwiches.length; dI++) {
        if (menu.sandwiches[dI].price < dindin) {
            compraveis.push(menu.sandwiches[dI].name, menu.sandwiches[dI].price)
        }
    }
    for (dI = 0; dI < menu.sideDishes.length; dI++) {
        if (menu.sideDishes[dI].price < dindin) {
            compraveis.push(menu.sideDishes[dI].name, menu.sideDishes[dI].price)
        }
    }
    for (dI = 0; dI < menu.desserts.length; dI++) {
        if (menu.desserts[dI].price < dindin) {
            compraveis.push(menu.desserts[dI].name, menu.desserts[dI].price)
        }
    }
    for (dI = 0; dI < menu.drinks.length; dI++) {
        if (menu.drinks[dI].price < dindin) {
            compraveis.push(menu.drinks[dI].name, menu.drinks[dI].price)
        }
    }
    return compraveis
}

espacamento()

const readingredientes = (ingredienteX) => {
    const opcoesComIngredienteX = []
    for (let rII = 0; rII < menu.sandwiches.length; rII++) {
        for (let rII2 = 0; rII2 < menu.sandwiches[rII].ingredients.length; rII2++) {
            if (ingredienteX === menu.sandwiches[rII].ingredients[rII2])
            opcoesComIngredienteX.push(menu.sandwiches[rII].name)
        }
    }
    for (let rII = 0; rII < menu.sideDishes.length; rII++) {
        for (let rII2 = 0; rII2 < menu.sideDishes[rII].ingredients.length; rII2++) {
            if (ingredienteX === menu.sideDishes[rII].ingredients[rII2])
            opcoesComIngredienteX.push(menu.sideDishes[rII].name)
        }
    }
    for (let rII = 0; rII < menu.desserts.length; rII++) {
        for (let rII2 = 0; rII2 < menu.desserts[rII].ingredients.length; rII2++) {
            if (ingredienteX === menu.desserts[rII].ingredients[rII2])
            opcoesComIngredienteX.push(menu.desserts[rII].name)
        }
    }
    return opcoesComIngredienteX
}
console.log(readingredientes('bebida láctea sabor baunilha'))
espacamento()
/*
Exercícios:
1. Crie uma função que imprima o nome e o valor de todos os lanches disponíveis;
 
2.Crie uma função que ao passar o nome de um lanche, retorna o objeto completo dele.
 
3. Crie uma função que ao passar o valor que eu tenho na carteira, retorna um array com o nome dos lanches que posso comprar. Exemplo de retorno: [ 'Big Mac', 'Duplo Quarterão', 'Big Tasty' ]
 
4. Crie uma função que ao passar um nome de ingrediente, retorna um array com quais lanches tem aquele ingrediente
 
Exemplo: ao colocar queijo cheddar, retorna:
[
  {
    name: 'Big Mac',
    price: 26.9,
    ingredients: [
      '2 hambúrgueres',
      'alface americana',
      'queijo cheddar',
      'molho especial',
      'cebola',
      'picles',
      'pão com gergelim'
    ],
    calories: 503
  },
  {
    name: 'Duplo Quarterão',
    price: 39.9,
    ingredients: [
      '2 hambúrgueres',
      'mostarda',
      'ketchup',
      'cebola',
      'queijo cheddar',
      'pão com gergelim'
    ],
    calories: 762
  }
]
*/
