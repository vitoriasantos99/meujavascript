//estrutura switch case
console.log("Escolha uma fruta: \n");
console.log("1-Banana\n 2-Tomate\n 3-Morango\n 4-Sair");

let opcao; 

opcao = 2;

switch(opcao){
    case 1: fruta = "Banana";
    break;
    case 2: frura = "Tomate";
    break;
    case 3: fruta = "Morango"
    break;
    default: fruta = "Sair"
    break;
}
console.log(`Você escolheu ${fruta}`);