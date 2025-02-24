// Verifica Idade
let idade = prompt("Digite sua idade: ");
idade = parseInt(idade);
if (idade < 0) {
    alert("Digite uma idade válida");
} else if(idade < 18){
    alert("Você é menor de idade");
} else {
    alert("Você é maior de idade");
}