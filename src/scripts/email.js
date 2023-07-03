function enviarEmail(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('textarea').value;

    const params = {
      name: nome,
      telefone: telefone,
      _replyto: email,
      message: mensagem,
    };

    fetch('https://formspree.io/f/mrgwzvan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
    .then(function (response) {
        if (response.ok) {
          fecharModal();
          exibirToast('Mensagem enviada com sucesso!');
          document.getElementById('modal_form').reset();
        } else {
          throw new Error('Ocorreu um erro ao enviar o email.');
        }
      })
      .catch(function (error) {
        console.error('Erro:', error);
      });
  }

  function fecharModal() {
    const modalContainer = document.getElementById('modal_container');
    modalContainer.style.display = 'none';
  }

  function exibirToast(message) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.style.display = 'block';
    setTimeout(function () {
      toast.style.display = 'none';
    }, 3000);
  }

  const form = document.forms['modal_form'];
  form.addEventListener('submit', enviarEmail);