document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('home_button');
  
    homeButton.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const projetosButton = document.getElementById('projetos_button');
    const divisao = document.getElementById('divisao');
  
    projetosButton.addEventListener('click', function() {
        divisao.scrollIntoView({ behavior: 'smooth' });
    });
});

function abrirWhatsApp() {
    window.location.href = "https://wa.me/5555991255935";
}
