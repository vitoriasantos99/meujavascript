//estrutura de decisão
let a = 10;
let b = 20;
//if estrutura básica
if(a>b){
    console.log("Entrou na estrutura");    
}
//if aninhado
if(a<b){
    if(b>a){
        if(a!=b){
            console.log("Entrou na estrutura");
        }
    }
}

let saudacao, periodo;

console.log(`Digite: \n1- Bom dia \n2- Boa tarde \n3 - Boa noite`);

periodo = "3";

if(periodo === 1){
    saudacao ="Bom dia";
}else if(periodo === 2){
    saudacao ="Boa tarde";
}else if(periodo === 3){
    saudacao == "Boa noite";
}else{
    saudacao = "Nenhum período selecionado";
}
console.log(`Você selecionou ${saudacao}`);