/*
let vTeste = {
    nome: 'leonardo',
    sobrenome: 'Barrocal',
    idade: 19
};

console.log(vTeste.nome + vTeste.sobrenome);

vTeste.nome = 'Teste';

console.log(vTeste.nome);

document.write("<h1>Bem vindo novamente ao meu clube </h1>");
*/

// function basic
/*
function Entrar( ){
    let area = document.getElementById('area-2');
    let vNewName = prompt('digite seu nome por favor');

    if(vNewName == '' || vNewName == null) {
        alert('Digite seu nome para continuar');
    } else {
        area.innerHTML = 'Bem vindo '  + vNewName;
    }
}
*/

function Teste(nome) {
    let vArea2 = document.getElementById('area-bemvindo');
    let vName = prompt('Digite seu sobrenome por favor !');

    vArea2.innerHTML = 'Bem vindo ' + nome + " " + vName;
}

// test array
let vLista = ["Leonardo", "Henrique", "Barrocal", 19];

// modo para visualizar a lista
vLista.join(" / ");

// removendo o primeiro item
vLista.shift();

// removendo o ultimo item da lista
vLista.pop();

//adicionando item a lista
vLista.push(19, "Teste", "Teste2", 20);

// alteracao de itens
// primeiro buscamos para saber se existe o nome
vLista.indexOf("Henrique");
// depois que localizar se tem o item, fazemos a alteracao
vLista[0] = "Leonardo";

/*
if(vLista.indexOf("Leonardo") > 1) {
    alert("Esse item existe na lista");
} else {
    alert("Nao existe esse item na lista");
}
*/

// toString() converte um array em uma string de valores(separados por vírgula)
let vListaTeste = vLista.toString();

// unshift() incluir um novo elemento no início do array
vLista.unshift("Valquiria");

// concat() cria um novo array mesclando arrays existentes
let vMeninos = ["Leonardo", "Matheus", "Andre"];

let vMeninas = ["Julia", "Ana", "Andreia"];

let vCriancas = vMeninos.concat(vMeninas);


// loop com while
/*
let x = 0;

while(x < 10) {
    document.write("<br /> O valor de X e: " + x);
    x++;
}
*/

// loop com for
/*
for(a = 0; a < 10; a++) {
    document.write("<br /> O valor de A e: " + a);
}
*/

// usando switch case
let b = 2;
switch(b) {
    case 0:
        alert("O valor de b e 0 !");
        break;
    case 1:
        alert("O valor de b e 1 !");
        break;
    case 2:
        alert("O valor de b e 2 !");
        break;
    // default serve para quando os casos nao batem com o que queremos
    default:
        alert("Nao existe esse valor");
        break;
}