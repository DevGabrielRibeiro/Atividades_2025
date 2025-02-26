function calcularTaxa() {
    var nome = document.getElementById("nome").value;
    var idade = parseInt(document.getElementById("idade").value);
    var resultado = document.getElementById("resultado");
    var carteirinha = document.getElementById("carteirinha").value;
    if (nome === "" || isNaN(idade)) {
        resultado.innerHTML = "Por favor, preencha todos os campos corretamente.";
        resultado.style.color = "red";
        return;
    }

    if (carteirinha === "sim") {
        var taxa;
        if (idade >= 60) {
            taxa = 5;
        } else if (idade > 50) {
            taxa = 7.5;
        } else if(idade >=10){
            taxa = 10;
        } else if (idade < 10){
            taxa = 25;
        }
    } else {
        var taxa;
        if (idade >= 60) {
            taxa = 10;
        } else if (idade > 50) {
            taxa = 15;
        } else if(idade >=10){
            taxa = 20;
        } else if (idade < 10){
            taxa = 50;
        }
    }

    resultado.innerHTML = nome + ", você pagará R$ " + taxa + " para entrar no clube.";
    document.getElementById('resultado').style.display = 'block';
    resultado.style.color = "white";
}