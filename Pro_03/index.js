function converter() {
  const palavra = document.getElementById('userInput').value.toUpperCase();
  const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let resultado = [];

  for (let i = 0; i < palavra.length; i++) {
    let posicao = alfabeto.indexOf(palavra[i]) + 1;
    if (posicao > 0) {
      resultado.push(posicao);
    }
  }

  const hist = document.getElementsByClassName('historico')[0];
  hist.innerHTML = `<p>${resultado.join('-')}</p>`;
  console.log(resultado.join('-'));
  desconverter(resultado.join('-'));
}

function desconverter(resultado) {
  const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let numeros = resultado.split('-').map(Number);
  let result = [];

  for (let numero of numeros) {
    if (numero >= 1 && numero <= 26) {
      result.push(alfabeto[numero - 1]);
    }
  }

  const hist = document.getElementsByClassName('historico')[0];
  hist.innerHTML += `<p>${result.join('')}</p>`;
  console.log(result.join(''));
}
