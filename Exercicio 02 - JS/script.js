        //urlParams serve para trabalhar com os parâmetros de uma URL
        const urlParams = new URLSearchParams(window.location.search);
        
        //document.getElementById Retorna a referência do elemento através do seu ID
        document.getElementById('nome').textContent = urlParams.get('nome');
        document.getElementById('tel_cel').textContent = urlParams.get('tel_cel');
        document.getElementById('cep').textContent = urlParams.get('cep');
        document.getElementById('endereco').textContent = urlParams.get('endereco');
        document.getElementById('num_casa').textContent = urlParams.get('num_casa');
        document.getElementById('complemento').textContent = urlParams.get('complemento');
        document.getElementById('bairro').textContent = urlParams.get('bairro');
        document.getElementById('cidade').textContent = urlParams.get('cidade');
        document.getElementById('estado').textContent = urlParams.get('estado');