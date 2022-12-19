const form = document.getElementById('form_numeros');
let formValido = false;

form.addEventListener('submit', function(e) {
    
    e.preventDefault();  

    const valorA = document.getElementById('num_a');
    const valorB = document.getElementById('num_b');
    const mensagemSucesso = `Certo, o valor B: ${valorB.value} é maior que o valor A: ${valorA.value}`

    function bMaior(valorAA, valorBB) {

        if (valorBB > valorAA) {
            const containerMensagemSucesso = document.querySelector('.success-message')
            containerMensagemSucesso.innerHTML = mensagemSucesso;
            containerMensagemSucesso.style.display = 'block';
            document.querySelector('.error-message').style.display = 'none';
    
            valorA.value = '';
            valorB.value = '';
            mensagemSucesso.value = '';
            
            
        } else {
            valorB.style.border = '1px solid red';
            document.querySelector('.error-message').style.display = 'block';
        } 
    }

    bMaior(valorA.value, valorB.value)

    
});


