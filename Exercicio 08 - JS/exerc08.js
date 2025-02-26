function exibirResultados(){
    calcularSoma();
    calcularSubtracao();
    calcularMultiplicacao();
    calcularDivisao();
}

function calcularSoma() {
    //Obter os valores inseridos pelo usuário
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    //Verfificar se os valores são números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Os valores inseridos não são números válidos.");
        return;
    }
    
    //Calcular a soma
    let soma = numero1 + numero2;
    
    //Mostrar o resultado na tela
    document.getElementById('soma').innerText = soma;
    document.getElementById('resultado').style.display = 'block';
}

function calcularSubtracao() {
    //Obter os valores inseridos pelo usuário
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    //Verfificar se os valores são números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Os valores inseridos não são números válidos.");
        return;
    }
    
    //Calcular a soma
    let subtracao = numero1 - numero2;
    
    //Mostrar o resultado na tela
    document.getElementById('subtracao').innerText = subtracao;
    document.getElementById('resultado').style.display = 'block';
}

function calcularDivisao() {
    //Obter os valores inseridos pelo usuário
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    //Verfificar se os valores são números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Os valores inseridos não são números válidos.");
        return;
    }
    
    //Calcular a soma
    let divisao = numero1 / numero2;
    
    //Mostrar o resultado na tela
    document.getElementById('divisao').innerText = divisao;
    document.getElementById('resultado').style.display = 'block';
}

function calcularMultiplicacao() {
    //Obter os valores inseridos pelo usuário
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    //Verfificar se os valores são números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Os valores inseridos não são números válidos.");
        return;
    }
    
    //Calcular a soma
    let multiplicacao = numero1 * numero2;
    
    //Mostrar o resultado na tela
    document.getElementById('multiplicacao').innerText = multiplicacao;
    document.getElementById('resultado').style.display = 'block';
}
