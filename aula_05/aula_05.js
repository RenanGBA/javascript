
const API_URL = `https://6a5fe634b1933e9d25fcc879.mockapi.io/produtos`;

async function buscarProdutos() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        popularProdutos(data);
    } catch (error) {
        console.error(error);
        alert("Não foi possível buscar os dados!")
    }
}

function popularProdutos(data) {
    let html = "";
    for(const d of data) {
        html += `
            <tr>
                <td>${d.id}</td>
                <td>${d.nome}</td>
                <td>${d.preco}</td>
                <td>${d.quantidade}</td>
                <td>${calcularTotal(d.preco, d.quantidade)}</td>
                <td>
                    <button class="btn btn-danger" onclick="apagarProduto(${d.id})">
                        Remover
                    </button>
                    <button class="btn btn-primary">Atualizar</button>
                </td>
            </tr>
        `;
    }

    const tbody = document.querySelector('#table_produtos tbody');
    tbody.innerHTML = html;
}

function calcularTotal(preco, quantidade) {
    resultadoTotal = Number(preco)*Number(quantidade)
    return (resultadoTotal).toLocaleString("pt-BR", {style: "currency", currency: "BRL" });
}


async function apagarProduto(id) {
    if(!confirm("Realmente deseja apagar este produto?")) {
        return;
    }

    const url = `${API_URL}/${id}`;
    try {
        await fetch(url, {
            method: "DELETE"
        });
    } catch (error) {
        alert("Não foi possível apagar o produto!");
    } finally {
        buscarProdutos();
    }
}

async function atualizarProduto() {
    
}

async function criarProduto() {
    
}
function init() {
    buscarProdutos();
}

init();