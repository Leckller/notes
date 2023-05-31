  // Operadores Lógicos //


    // Operador lógico "AND" dentro do código é escrito da seguinte forma "&&"
    // Sua função é de retornar o valor TRUE quando ambas condições retornarem TRUE

    let tenhoDinheiro = true;
    let fimDeSemana = true;
    var comparacaoAND = tenhoDinheiro && fimDeSemana
    console.log(comparacaoAND)
    // Retorna o valor TRUE devido ambas operaçoes serem TRUE 

//----------------------------------------------------------------------------------//

    // Operador lógico "OR" dentro do código é escrito da seguinte forma "||" 
    // Sua função é retornar o valor TRUE quando pelo menos uma das condições for TRUE

    let gasosaNoTanque = false
    let dindinParaAbastecer = true
    var boraPaResenha = gasosaNoTanque || dindinParaAbastecer
    console.log(boraPaResenha)
    // Retorna o valor TRUE devido uma das condiçoes possuirem valor TRUE

//-----------------------------------------------------------------------------------//

    // Operador lógico "NOT" dentro do código é escrito da seguinte forma "!"
    // Sua função é de inverter o valor de alguma variável. Por exemplo

    let nick = 'Leckler'
    let realName = 'Ruy'
    let comparacao = nick === realName
    let resultado = !comparacao 
    console.log(resultado)
    // O valor retorna True devido a inversão do valor da variável "comparacao".

//-----------------------------------------------------------------------------------//