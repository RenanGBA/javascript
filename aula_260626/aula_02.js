function calcularMedia(botao) {
    const tr = botao.closest('tr');

    const nota1 = Number(tr.querySelector('.nota_1').value);
    const nota2 = Number(tr.querySelector('.nota_2').value);

    const media = (nota1+nota2)/2;

    const colunaMedia = tr.querySelector('.media');
    colunaMedia.textContent = media.toFixed(2);

    const colunaStatus = tr.querySelector('.status');
    let badge = "";
    if (media >= 7) {
        badge = `<span class="badge bg-success">Aprovado</span>`;
    } else {
        badge = `<span class="badge bg-danger">Reprovado</span>`;
    }
    colunaStatus.innerHTML = badge;
}