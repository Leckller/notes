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