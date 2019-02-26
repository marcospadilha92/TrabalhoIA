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