//estrutura de repetição while  

let contador = 0;

while(contador < 10){
    contador = contador +1;
    //pode ser também contador++;
    //pode ser também contador+2;
    
    //Interpolador
    console.log(`O contador vale ${contador} vocês viram`);

    //Sem interpolador
    //console.log("O contador vale ",contador," Vocês viram");
}

//estrutura de repetição do while (repita enquanto)

let cont = 0;
do{
    cont = cont + 1
    console.log("Executando do while...");

}while(cont <= 10);

// While primeiro pergunta e depois executa
// Do While primeiro executa e depois pergunta

//estrutura de repetição for - Nessa estrutura a variavel pode ser declarada dentro da estrutura 
let i;
for(i=0;i<10;i++){
    //aqui dentro é o conteúdo que ele vai repetir
    console.log(`Imprimindo o valor de i ${i}`);
}
//let i = é a variavel
//i é igual a 0 (i=0); enquanto o valor do i for menor que 10 (i<10) ele vai executar; i++ vai até 1+9


//for pode ser usando dentro de outro for
for(let linha=0; linha<3; linha++){

    for (let coluna=0; coluna<2; coluna++){

        console.log(`Linha ${linha} | coluna ${coluna}`);
    }
}
