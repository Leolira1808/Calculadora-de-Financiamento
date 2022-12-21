let formulario = document.querySelector("#calculator");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let valorBem = event.target.valorBem.value;
  let valorEntrada = event.target.valorEntrada.value;
  let numParcelas = event.target.numParcelas.value;
  let taxaJuros = event.target.taxaJuros.value / 100;

  let valorFinanciado = valorBem - valorEntrada;

  let divValorFinanciado = document.querySelector("#valorFinanciado");
  divValorFinanciado.textContent = "R$ " + valorFinanciado;

  let montante = valorFinanciado * Math.pow(1 + taxaJuros, numParcelas);

  let valorParcela = montante / numParcelas;
  let valorParcelaArredonadda = valorParcela.toFixed(2);

  document.querySelector("#valorParcela").textContent =
    "R$ " + valorParcelaArredonadda;
});

document.querySelector("#valorBem").addEventListener("keyup", function (event) {
  let valorBem = event.target.value.trim();
  let valorEntrada = document.querySelector("#valorEntrada").value.trim();
  if (valorBem == "" || valorEntrada == "") {
    return;
  }

  let divValorFinanciado = document.querySelector("#valorFinanciado");
  let valorFinanciadoFloat = parseFloat(valorBem) - parseFloat(valorEntrada);
  divValorFinanciado.textContent = "R$ " + valorFinanciadoFloat;
});

document
  .querySelector("#valorEntrada")
  .addEventListener("keyup", function (event) {
    let valorEntrada = event.target.value.trim();
    let valorBem = document.querySelector("#valorBem").value.trim();
    if (valorBem == "" || valorEntrada == "") {
      return;
    }

    let divValorFinanciado = document.querySelector("#valorFinanciado");
    let valorFinanciadoFloat = parseFloat(valorBem) - parseFloat(valorEntrada);
    divValorFinanciado.textContent = "R$ " + valorFinanciadoFloat;
  });
document
  .querySelector("#valorEntrada")
  .addEventListener("keyup", function (event) {});
