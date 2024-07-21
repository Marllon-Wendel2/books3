let btnPrecoOrdem = document.getElementById('btnOrdenarPorPreco');
btnPrecoOrdem.addEventListener('click', ordernarLivrosPreco);

function ordernarLivrosPreco() {
    let livrosOrdenados = livros.sort((a, b) =>
        a.preco - b.preco)
    criaLivro(livrosOrdenados)
}
