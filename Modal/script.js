var btn = document.getElementById('btn');
var modal = document.getElementById('modal');

function toggleModal () {
  modal.classList.toggle('showmodal');
}

btn.addEventListener('click', toggleModal);
window.addEventListener('keyup', toggleModal);
