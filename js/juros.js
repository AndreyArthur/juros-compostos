function masks() {
  const masks =  {
    meses (value) {
      return value
      .replace(/[!-/]/, '')
      .replace(/[:-²]/, '')
    },

    inicial (value) {
      return value
      .replace(/[!-+]/, '')
      .replace(/[-]/, '')
      .replace(/[/]/, '')
      .replace(/[:-²]/, '')
      .replace(',', '.')
    },

    aporte (value) {
      return value
      .replace(/[!-+]/, '')
      .replace(/[-]/, '')
      .replace(/[/]/, '')
      .replace(/[:-²]/, '')
      .replace(',', '.')
    },

    juros (value) {
      return value
      .replace(/[!-+]/, '')
      .replace(/[-]/, '')
      .replace(/[/]/, '')
      .replace(/[:-²]/, '')
      .replace(/$/, '%')
      .replace(',', '.')
    }
  }

  document.querySelectorAll('input').forEach( ($input) => {
    const field = $input.dataset.js;
  
    $input.addEventListener('input', event => {
      event.target.value = masks[field](event.target.value);
    }, false)
  })
}

masks();


document.querySelector('form').addEventListener('submit', jurosCompostos);

function jurosCompostos(event, meses, inicial, aporte, juros) {
  meses = Number(document.getElementById('meses').value);
  inicial = Number(document.getElementById('inicial').value);
  aporte = Number(document.getElementById('aporte').value);
  juros = 1 + (Number(document.getElementById('juros').value.replace('%', '')) / 100);

  for(let i = 1; i <= meses; i++) {
    inicial = (inicial * juros) + aporte;
  }

  document.querySelector('main h1').innerHTML=`R$${inicial.toFixed(2)}`;

  event.preventDefault();
}
