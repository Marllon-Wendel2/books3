const btn = document.querySelectorAll('.btn')
btn.forEach(b => b.addEventListener('click', () => { filtrarLivros(b.value) }))

function filtrarLivros(categoria) {
    let livrosFiltrados = categoria == 'disponivel' ? filterDisponivel() : filterCategoria(categoria)
    criaLivro(livrosFiltrados)

    if(categoria == 'disponivel') {
        const resultPlus =  somaValorDoLivros(livrosFiltrados)
        showBooksValue(resultPlus)
    }
}

function filterCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filterDisponivel() {
    return livros.filter(livro => livro.quantidade > 0)
}

function somaValorDoLivros(livrosASomar) {
    return livrosASomar.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}

function showBooksValue(resultPlus) {
    valorTotal.innerHTML = `
            <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${resultPlus}</span></p>
    </div>
    `
}
