const form = document.getElementById("form-ab");
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');

function validaCampo(a,b){
    return b > a
}

form.addEventListener('submit',function(e){
    let formValido = false;
    e.preventDefault();


    const messagemSucesso = 'Formulário válido.';
    const menssagemErro = 'O valor de B precisa ser MAIOR que o valor de A.';


    formValido = validaCampo(campoA.value,campoB.value);


    if (formValido){
        const containerMensagem = document.querySelector(".sucesso");
        containerMensagem.innerHTML = messagemSucesso;
        containerMensagem.style.display = 'block';
        const containerMensagemErro = document.querySelector(".erro");
        containerMensagemErro.style.display = 'none'


        campoA.value = '';
        campoB.value = '';
    }else{
        const containerMensagem = document.querySelector(".erro");
        containerMensagem.innerHTML = menssagemErro;
        containerMensagem.style.display = 'block';

        const containerMensagemSucesso = document.querySelector(".sucesso");
        containerMensagemSucesso.style.display = 'none'

        campoA.value = '';
        campoB.value = '';

    }


})


form.addEventListener('reset',function(e){
    let formValido = false;
    e.preventDefault();
    const containerMensagemErro = document.querySelector(".erro");
    containerMensagemErro.style.display = 'none'

    const containerMensagemSucesso = document.querySelector(".sucesso");
    containerMensagemSucesso.style.display = 'none'

    campoA.value = '';
    campoB.value = '';


})