document.addEventListener('DOMContentLoaded', () => {
  const buyButtons = document.querySelectorAll('button');

  buyButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Terima kasih telah membeli hp ini!');
    });
  });
});
