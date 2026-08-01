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

async function atualizarProduto(id) {
    
}

async function criarProduto() {
    const produto = {
        nome: document.querySelector("#nome").value,
        preco: document.querySelector("#preco").value,
        quantidade: document.querySelector("#quantidade").value
    };



    try {
        await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
        })
        limparFormulario();
        fecharModal();
        buscarProdutos();
    } catch (error) {
        alert("Não foi possivel cadastrar produto")
    }
}

function limparFormulario() {
    document.querySelector("#nome").value = "";
    document.querySelector("#preco").value = "";
    document.querySelector("#quantidade").value = "";
}

function fecharModal() {
    const modalHtml = document.querySelector("#modalProduto");
    const modal = bootstrap.Modal.getOrCreateInstance(modalHtml);
    modal.hide();
}

function init() {
    buscarProdutos();
}

init();