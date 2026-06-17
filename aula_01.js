// console.log("hello world");

function somar() {
  const n1 = Number(prompt("Digite o primeiro número"));
  const n2 = Number(prompt("Digite o segundo número"));
  const resultado = n1 + n2;
  alert(`O resultado da soma é ${resultado}`);
}

function multiplicar() {
  const n1 = Number(prompt("Digite o primeiro número"));
  const n2 = Number(prompt("Digite o segundo número"));
  const resultado = n1 * n2;
  alert(`O resultado da multiplicação é ${resultado}`);
}

function somarInputs() {
  const n1 = Number(document.querySelector("#n1_soma").value);
  const n2 = Number(document.querySelector("#n2_soma").value);
  const resultado = n1 + n2;
  document.querySelector("#resultado_soma").textContent = `O resultado da soma é ${resultado}`
}

function multiplicarInputs() {
  const n1 = Number(document.querySelector("#n1_mult").value);
  const n2 = Number(document.querySelector("#n2_mult").value);
  const resultado = n1 * n2;
  document.querySelector("#resultado_mult").textContent = `O resultado da multiplicação é ${resultado}`
}

// somar();
