
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form'); 
    const button = document.querySelector('.finalisar'); 
  
    button.addEventListener('click', function(event) {
      event.preventDefault(); 
      alert('Pagamento realizado com sucesso!');
    });
  });