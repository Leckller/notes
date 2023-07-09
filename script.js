// Primeira parte
const promo = [
    {product: 'bola de beach tennis', price: 29.99},
    {product: 'mochila de trilha 20 litros', price: 120.99},
    {product: 'capacete de ciclista', price: 180.59},
    {product: 'toalha compacta de secagem', price: 39.99},
    {product: 'kit 5 camisetas Dry Fit', price: 99.99},
    {product: 'caneleiras de peso - 3kg (par)', price: 44.99},
    {product: 'bola de ginástica e pilates', price: 149.59},
    {product: 'óculos de natação', price: 18.99},
    {product: 'capa protetora de prancha de surf', price: 89.59},
    {product: 'bola de basquete', price: 39.99},
  ];

  const button = document.querySelector('#send-button');

button.addEventListener('click', () => {
  const name = document.querySelector('#name-id').value;
  const number = Number(document.querySelector('#number-id').value);

  showPromo(name, number);
});

const testName = (_name, _number) => {
  if (typeof _name !== 'string' || _name === '') {
    throw new Error('Error! o texto inserido é inválido');
  } else if (_number === '' || Number.isNaN(_number) || _number < 1 || _number > 10 || Number.isInteger(_number) === false) {
    throw new Error('Error! insira um texto numérico válido');
  }
}
const showPromo = (aname, anumber) => {
  const firstText = document.querySelector('#text-initial');
  const secondText = document.querySelector('#text-final');
  const productObject = checkNumber(parseInt(anumber));
  try {
    testName(aname, anumber);
    firstText.innerHTML = `Boas-vindas, ${aname}!`;
    secondText.innerHTML = `A promoção do dia é: ${productObject.product} no valor de R$ ${productObject.price}`;
  } catch (erro) {
    return alert(erro.message);
  } finally {
    document.querySelector('#name-id').value = "";
    document.querySelector('#number-id').value = "";
    }
}

// Segunda parte
const checkNumber = (number) => {
  return promo[number - 1];
}