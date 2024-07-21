const valorTotal = document.getElementById('valor_total_livros_disponiveis');

function criaLivro(array) {
    valorTotal.innerHTML = ''
    elementInsertLivros.innerHTML = ''
    array.forEach(e => {
        let disponibilidade = e.quantidade > 0 ? 'livro__imagens' : 'livros__imagens indisponivel'
        elementInsertLivros.innerHTML += `
            <div class="livro">
            <img class="${disponibilidade}" src="${e.imagem}" alt="Capa do livro ${e.titulo}" />
            <h2 class="livro__titulo">
            ${e.titulo}
            </h2>
            <p class="livro__descricao">${e.autor}</p>
            <p class="livro__preco" id="preco">R$${e.preco.toFixed(2)}</p>
            <div class="tags">
            <span class="tag">${e.categoria}</span>
            </div>
            </div> -->
            `
    });
}
