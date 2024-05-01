const form = document.getElementById("form-ab");

function validaCampo(a,b){
    return b > a
  
}

form.addEventListener('submit',function(e){
    let formValido = false;
    e.preventDefault();

    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');

    formValido = validaCampo(campoA.value,campoB.value);


    if (formValido){
        alert('Formulário válido');
        console.log(formValido);

        campoA.value = '';
        campoB.value = '';
    }else{
        alert('Formulário inválido');
    }


})