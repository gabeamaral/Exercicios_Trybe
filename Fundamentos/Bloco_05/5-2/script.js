const esta = document.getElementById('elementoOndeVoceEsta');

esta.parentNode.style.color = 'blue';

const primeiro = document.getElementById('primeiroFilhoDoFilho');

primeiro.innerText = 'sushi é bom!!!!'

const pai = document.getElementById('pai');

pai.firstChild;

esta.previousElementSibling;

esta.nextSibling;

esta.nextElementSibling;

let elemento2 = document.createElement('section');
elemento2.className = 'filin';
elemento2.appendChild(esta);

const paiDoPai = document.querySelector('#paiDoPai');
const primeiroFilho = document.getElementById('primeiroFilho')
const terceiroFilho = document.getElementById('terceiroFilho')
const quartoFilho = document.getElementById('quartoEUltimoFilho')

pai.removeChild(primeiroFilho);
pai.removeChild(terceiroFilho);
pai.removeChild(quartoFilho);
esta.removeChild(primeiro);