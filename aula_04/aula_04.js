async function buscarCep() {
    const cepDigitado = document.querySelector("#cep").value;
    const url = `https://viacep.com.br/ws/${cepDigitado}/json/`;

    const resposta = await fetch(url);
    const dados = await resposta.json();

    popularCampos(dados);
}

function popularCampos(dados) {
    document.querySelector("#logradouro").value = dados.logradouro
    document.querySelector("#bairro").value = dados.bairro
    document.querySelector("#cidade").value = dados.localidade
    document.querySelector("#uf").value = dados.uf
    document.querySelector("#regiao").value = dados.regiao
}