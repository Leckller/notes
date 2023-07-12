// // const aleatorio = Math.round(Math.random() * 100)
// // console.log(aleatorio)

// // const emailListInData = [
// //     'roberta@email.com',
// //     'paulo@email.com',
// //     'anaroberta@email.com',
// //     'fabiano@email.com',
// //   ];

// // const enviarEmail = (email) => {
// //     console.log(`Email para ${email} foi enviado com sucesso.`)
// // }

// // emailListInData.forEach(enviarEmail)

// // const employees = [
// //     { id: 1, nome: 'Douglas Adams', idade: 20},
// //     { id: 2, nome: 'H. G. Wells', idade: 18},
// //     { id: 3, nome: 'Júlio Verne', idade: 57},
// //     { id: 4, nome: 'Margaret Atwood', idade: 83},
// //     { id: 5, nome: 'Edgar Allan Poe', idade: 19},
// //   ];
  
// // console.log(employees.find((employee) => employee.nome === 'Margaret Atwood').id)

// // const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

// // console.log(idades.find((idade) => idade === 33))

// // const numbers = [19, 21, 30, 3, 45, 22, 15];

// // console.log(numbers.find((elemento) => Number.isInteger((elemento / 3) + (elemento / 5))))

// // const names = ['João', 'Irene', 'Fernando', 'Maria'];

// // console.log(names.find((nome) => nome.length === 5))

// // const musicas = [
// //     { id: '31031685', title: 'Partita in C moll BWV 997' },
// //     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
// //     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// //   ];
  
// // console.log(musicas.find((elemento) => elemento.id === '31031685'));

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) =>arr.some((meliante) => meliante === name);

// console.log(hasName(names, 'Ana'));
// console.log(hasName(names, 'Pedro'));

// const grades = {
//     portugues: 'Aprovado',
//     matematica: 'Reprovado',
//     ingles: 'Aprovado',
//   };
  
// const verifyGrades = Object.values(grades).every((broder) => broder === 'Aprovado'); 

//   console.log(verifyGrades);

// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];

// const verifyAges = (arr, ag) => arr.every((camarada) => camarada.age >= ag)

//   console.log(verifyAges(people, 18));
//   console.log(verifyAges(people, 14));

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];

// people.forEach((elemento, index) => {
//   console.log(Object.values(elemento))
// })

people.sort((a) => Object.values(a))
  console.log(people);