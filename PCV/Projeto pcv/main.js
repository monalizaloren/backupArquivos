const btnMudarTela = document.querySelector('#botao');

btnMudarTela.addEventListener('click', mudarTelaCadastro);

function mudarTelaCadastro(){
    alert(btnMudarTela);
    window.location.href= "http://127.0.0.1:5500/telacadastrp.html"

}