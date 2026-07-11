// const alunos = [
//     "Gustavo",
//     "Nilson",
//     "Ezequiel",
//     "Brunna"
// ]

// for (const aluno of alunos) {
//     console.log(aluno)
// }

const carros = [ 
    {
        placa: "AAA0A33",
        cor: "Branca",
        marca: "VW",
        modelo: "Fusca",
        tetoSolar: false,
        chassi: "AA00000000",
    },
    {
        placa: "AAA0A22",
        cor: "Azul",
        marca: "Chevrolet",
        modelo: "Chevette",
        tetoSolar: false,
        chassi: "BB00000000",
    },
];

// for (const carro of carros) {
//     console.log(carro.placa)
//     console.log(carro.cor)
//     console.log(carro.marca)
//     console.log(carro.modelo)
//     console.log(carro.tetoSolar)
//     console.log(carro.chassi)
// };

function popularTabela() {
    const tbody = document.querySelector("#tabela_carros tbody");

    let html = "";
    for(const carro of carros) {
        html += `
            <tr>
                <td>${carro.marca}</td>
                <td>${carro.modelo}</td>
                <td>${carro.cor}</td>
                <td>${carro.placa}</td>
                <td>${carro.chassi}</td>
                <td>${carro.tetoSolar ? "Sim" : "Não"} </td>                                                
            </tr>
        `;
    }

    tbody.innerHTML = html;
}

popularTabela();