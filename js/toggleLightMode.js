const toggleBox = document.querySelector('.toggle');
const toggleButton = toggleBox.querySelector('button');
const modeText = document.querySelector('.interrupter span');
const body = document.querySelector('body');

toggleBox.addEventListener('click', changeLight)

function changeLight() {
  if(toggleButton.classList.contains('light')) {
    toggleButton.classList.remove('light');
    toggleButton.classList.add('dark');
    
    body.classList.remove('light');
    body.classList.add('dark');

    modeText.innerHTML='Modo Escuro';
  } else {
    toggleButton.classList.remove('dark');
    toggleButton.classList.add('light');
    
    body.classList.remove('dark');
    body.classList.add('light');

    modeText.innerHTML='Modo Claro';
  }
}