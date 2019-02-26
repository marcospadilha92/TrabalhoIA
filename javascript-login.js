function logar(){
    var login = document.getElementById('login').value
    var password = document.getElementById('password').value
    
    if(login == "admin" && password == "admin"){
    window.open('arvore.html');
    }
    else{
        alert("Usuário ou senha incorretos");
    }
}

$(document).ready(function(){
    
        $('#q2').hide();
        
        $('#pergunta1').click( function () { $('#q1').show();$('#q2').hide(); });
        
        $('#pergunta2').click( function () { $('#q1').hide();$('#q2').show(); });
    
});