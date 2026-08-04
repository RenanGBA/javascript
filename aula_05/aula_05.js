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
                    <button class="btn btn-primary" onclick="editarProduto(${d.id})">Editar</button>
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

async function editarProduto(id) {
    const url = `${API_URL}/${id}`
    try {
        const response = await fetch(url);
        const data = await response.json();
        popularFormulario(data);
        abrirModal();
    } catch (error) {
        alert("Não foi possível editar este produto!")
    }
}

function modalNovoProduto() {
    limparFormulario();
    abrirModal();
}

function salvarProduto() {
    const id = Number(document.querySelector("#id").value) || 0;
    const nome = document.querySelector("#nome").value;
    const preco = document.querySelector("#preco").value;
    const quantidade = document.querySelector("#quantidade").value;

    if(nome == "" || preco == "" || quantidade == "") {
        alert("É obrigatório o preenchimento de todos os campos!")
        return;
    }

    //Não permitir
    if(!Number(preco) || !Number(quantidade)) {
        alert("Campo preço e quantidade devem ser numéricos!")
        return;
    }

    if(id) {
        atualizarProduto(id);
        return;
    }

    criarProduto()

}

function criarObjetoProduto() {
    return {
    nome: document.querySelector("#nome").value,
    preco: document.querySelector("#preco").value,
    quantidade: document.querySelector("#quantidade").value
    };
}

async function atualizarProduto(id) {
    const produto = criarObjetoProduto();
    const url = `${API_URL}/${id}`
    try {
        await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
        })
        limparFormulario();
        fecharModal();
        buscarProdutos();
    } catch (error) {
        alert("Não foi possivel editar produto")
    }
}

function popularFormulario(data) {
    console.log(data)
    document.querySelector("#id").value = data.id;
    document.querySelector("#nome").value = data.nome;
    document.querySelector("#preco").value = data.preco;
    document.querySelector("#quantidade").value = data.quantidade;
}
async function criarProduto() {
    const produto = criarObjetoProduto();

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
    document.querySelector("#id").value = "";
    document.querySelector("#nome").value = "";
    document.querySelector("#preco").value = "";
    document.querySelector("#quantidade").value = "";
}

function abrirModal() {
    const modalHtml = document.querySelector("#modalProduto");
    const modal = bootstrap.Modal.getOrCreateInstance(modalHtml);
    modal.show();
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