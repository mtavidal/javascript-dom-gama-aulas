// validação que ocorre no front end, tamanho de campo, se ta formatado corretamente... validar se existe no banco de dados é backend,
//veremos 4 principais

// selecionar os elementos
let form = document.getElementById('formulario');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let lsexo = document.getElementById('lsexo');

let fname_msg = document.getElementById('msg-vld-fname');
let lname_msg = document.getElementById('msg-vld-lname');
let lsexo_msg = document.getElementById('msg-vld-lsexo');

// validar quando o usuário sai de um campo (onBlur, quando o usuario aperta tab)
fname.onblur = function(event){
    if(event.target.value.length < 3){
        fname_msg.textContent = 'O valor digitado deve conter pelo menos 3 letras';
        fname_msg.style.display = 'block';
    } else {
        fname_msg.style.display = 'none';
    }
}

// validar quando o usuário mudar um campo ( onChange altera o estado do campo, selecionar um item por ex)
lsexo.onchange = function(event){
    if(event.target.value == "selecione"){
        lsexo_msg.textContent = 'Você precisa selecionar um valor válido';
        lsexo_msg.style.display = 'block';
    } else {
        lsexo_msg.style.display = 'none';
    }
}

// validar quando o usuário entra em um campo (on Focus - quando vc clica no campo, fica até com a borda diferente)
fname.onfocus = function(){
    fname_msg.style.display = 'none';
}

// validar quando o usuário submete um formulário (enviar onSubmit)
form.onsubmit = function(event){
    if(fname.value.length < 3 || lsexo.value == "selecione"){
        alert('Por favor preencha o formulário corretamente antes de enviar.');
        event.preventDefault();
    }
}