let livros = [];
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
const elementInsertLivros = document.getElementById('livros')

getLivrosAPI()

async function getLivrosAPI() {
    const res = await fetch(endPointAPI)
    livros = await res.json()
    let livrosDesconto = aplicarDesconto(livros)
    criaLivro(livrosDesconto)

}
