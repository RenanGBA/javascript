const API_URL = `https://6a557801e49d9eb2cc55c2f6.mockapi.io/produtos`;

async function buscarProdutos() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        popularTabela(data);
    } catch (error) {
        console.error(error);
        alert("Não foi possível buscar os dados!")
    }
}

function popularTabela(data) {
    const tbody = document.querySelector("tbody");
    let html = "";
    for(const d of data) {
        html += `
            <tr>
                <td>${d.id}</td>
                <td>${d.nome}</td>
                <td>${d.preco}</td>
                <td>${d.quantidade}</td>
                
            </tr>
        `;
    }

    tbody.innerHTML = html;
}

function calcularTotal(preco, quantidade) {

}

function init() {
    buscarProdutos();
}

init();