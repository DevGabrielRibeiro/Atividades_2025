//urlParams serve para trabalhar com os parâmetros de uma URL
const urlParams = new URLSearchParams(window.location.search);

//document.getElementById Retorna a referência do elemento através do seu ID
document.getElementById('nome').textContent = urlParams.get('nome');
document.getElementById('email').textContent = urlParams.get('email');
document.getElementById('tipo_contato').textContent = urlParams.get('tipo_contato');
document.getElementById('mensagem').textContent = urlParams.get('mensagem');