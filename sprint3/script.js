
function showHideInfo(button) {
  const infoSection = button.nextElementSibling;
  infoSection.classList.toggle('show-info');
}


const infoButtons = document.querySelectorAll('.toggle-info');

infoButtons.forEach(button => {
  button.addEventListener('click', () => {
    showHideInfo(button);
  });
});
