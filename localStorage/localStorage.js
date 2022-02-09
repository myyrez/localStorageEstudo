let nome = document.getElementById('nome')
let listaDeNomes = []

function salvarDados() {
    listaDeNomes = JSON.parse(localStorage.getItem('listaDeNomes'))

    if (listaDeNomes == null) {
        listaDeNomes = []
        listaDeNomes.push(nome.value)

        localStorage.setItem('listaDeNomes', JSON.stringify(listaDeNomes))
    } else {
        listaDeNomes.push(nome.value)

        localStorage.setItem('listaDeNomes', JSON.stringify(listaDeNomes))
    }
}
