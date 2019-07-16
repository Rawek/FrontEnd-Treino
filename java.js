function validar(){
    var senha = needs-validation.senha.value;
    var repetir = needs-validation.repetir.value;

    if (senha == "" || senha.length <= 5){
        alert("Preencha o campo senha com no minimo  5 caracteres!");
        formuser.senha.focus();
        return false    
}