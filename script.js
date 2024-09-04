
const botao = document.getElementById("botao");
const campo = document.getElementById("campo");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {
  const valor = campo.value;

  const invertendoPalavra = invertePalavra(valor);

  resultado.textContent = `Palavra invertida: ${invertendoPalavra}`;
});

function invertePalavra(texto) {
  let separaPalavra = texto.split("");

  let revertePalavra = separaPalavra.reverse();

  let juntaPalavra = separaPalavra.join("");

  return juntaPalavra;
}

