var idade = prompt('Qual a sua idade')
if (idade >= 18){
    console.log("aceita uma breja")
} else{
   console.log('aceita um refri')
}
 
var idade = prompt('Qual a sua idade')
if (idade >= 18){
    console.log("aceita uma breja")
} else{
   console.log('aceita um refri')

}

switch(true){
    case(idade>=18):
    console.log('aceita uma breja')
    break;
    case(idade < 18):
    console.log('aceita um refri')
    break;
    default:
    console.log('opcao incorreta')
    break;
}