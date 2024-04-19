


function entrar(){
    let  usuario = document.getElementById('username').value;
    
    let senha = document.getElementById('password').value;
    if(usuario == 'vinicius' && senha == '123'){
        
        window.location = 'bem-vindo.html';
        localStorage.setItem('usuario', usuario)//Cadastra a chave e valor 
        
    } else{
        alert('Acesso Negado. Dados incorretos.')
    }
    
    
}

let valor = localStorage.getItem('usuario')//Recupera o valor 



    document.getElementById('bemVindo').innerHTML = 'Bem vindo ' + valor; 









function chave(){
    let  usuarioNovo = document.getElementById('nome').value;
    

    localStorage.setItem('usuarioNovo', usuarioNovo)//Cadastra a chave e valor 
    
    window.location = 'bem-vindo.html';
}

let valorNovo = localStorage.getItem('usuarioNovo')//Recupera o valor 
document.getElementById('bemVindo').innerHTML = 'Bem vindo ' + valorNovo; 


// let usuarioCadastrado = document.getElementById('nome');

// function chave(){

//     let novoUsuario = usuarioCadastrado.value;//vinicius
//     alert(novoUsuario)
    

//     localStorage.setItem('usuarioCadastrado', novoUsuario)

// }

// let recuperado = localStorage.getItem('usuarioCadastrado')

// if(chave() == onclick){
//     document.getElementById('bemVindo').innerHTML = 'Bem vindo' ; 
// }

    



