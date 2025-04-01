// Função para mostrar o alerta e redirecionar para a página inicial
function confirmarPagamento() {
    alert("Pagamento Realizado com Sucesso");
    window.location.href = "index.html"; // Redireciona para a página inicial
}

// Adiciona o evento de clique ao botão de confirmação de pagamento
document.querySelector("#btn-confirmar-pagamento").addEventListener("click", function(event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário
    confirmarPagamento(); // Chama a função para exibir o alerta e redirecionar
});
