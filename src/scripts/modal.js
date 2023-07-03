document.addEventListener('DOMContentLoaded', function() {
    const contatoButton = document.getElementById('contato_button');
    const modalContainer = document.getElementById('modal_container');
    const closeModalButton = document.querySelector('.close_modal_button');
  
    contatoButton.addEventListener('click', function() {
      modalContainer.classList.add('show');
    });
  
    closeModalButton.addEventListener('click', function() {
      modalContainer.classList.remove('show');
    });
});