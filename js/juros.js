/*function jurosCompostos(event, meses, inicial, aporte, juros) {
  meses = document.getElementById('meses').value;
  inicial = document.getElementById('inicial').value;
  aporte = document.getElementById('aporte').value;
  juros = document.getElementById('juros').value;

  for(let i = 1; i <= meses; i++) {
    inicial = (inicial * juros) + aporte;
  }

  const inicialFormated = Number(inicial).toFixed(2)
  console.log(`og${inicialFormated}`);
}
*/

document.querySelector('form').addEventListener('submit', (event, meses, aporte, inicial, juros) => {
  meses = document.getElementById('meses').value;
  inicial = document.getElementById('inicial').value;
  aporte = Number(document.getElementById('aporte').value);

  if (document.getElementById('juros').value.indexOf('%') > -1) {
    const jurosN = document.getElementById('juros').value.replace('%', '');
    juros = 1 + (Number(jurosN) / 100);
  } else  {
    juros = 1 + (Number(document.getElementById('juros').value) / 100);
  }

  for(let i = 1; i <= meses; i++) {
    inicial = (inicial * juros) + aporte;
  }

  const inicialFormatada = Number(inicial).toFixed(2);
  document.querySelector('main h1').innerHTML=`R$${inicialFormatada}`;

  event.preventDefault();
});