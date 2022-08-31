var id = []
var nome = []
var preco = []
var avaliacao = []
contador = 0

var continuar = true

while(continuar){

CadastrarProduto()

console.log("ID:", id)
console.log("Nome: ", nome)
console.log("Preço: ", preco)
console.log("Avaliação: ", avaliacao)

}

var buscarID = parseInt(prompt(`Qual ID deseja buscar`))
BuscarProdutoID(buscarID)

var produto = prompt(`Qual produto quer buscar?`)
BuscarProdutoNome(produto)

OrdenarPorID()
console.log("ID:", id)


OrdenarPorPreco()
console.log("Preço: ", preco)



function CadastrarProduto(){
    id[contador] = prompt(`Qual o ID produto`)
    nome[contador] = prompt(`Qual o nome do produto`)
    preco[contador] = parseFloat(prompt(`Qual o preço do produto`))
    avaliacao[contador] = prompt(`Qual a avaliação do produto`)
    contador++
    
    continuar = prompt(`Deseja continuar/ 1-SIM / 2-NÃO`)
    if(continuar != 1){
        return continuar = false
    }
}

function BuscarProdutoID(idParametro){
    for(var i = 0; i < contador; i++){
        if(idParametro == id[i]){       
            console.log(`ID: ${id[i]}, Produto: ${nome[i]}, Preço: R$${preco[i]}, Avaliação: ${avaliacao[i]}`)
          }
    }
}

function BuscarProdutoNome(produtoParametro){
    for(var i = 0; i < contador; i++){
        if(produtoParametro == nome[i]){
            console.log(`ID do produto buscado: ${id[i]}`)
        }
    }
}

function OrdenarPorID(){
    for(var atual = 0; atual < contador - 1; atual++){
        for(var seguinte = atual + 1; seguinte < contador; seguinte++ ){
            idAux = id[atual]
            nomeAux = nome[atual]
            precoAux = preco[atual]
            avaliacaoAux = avaliacao[atual]
            if(id[atual] > id[seguinte]){
                id[atual] = id[seguinte]
                nome[atual] = nome[seguinte]
                preco[atual] = preco[seguinte]
                avaliacao[atual] = avaliacao[seguinte]
                id[seguinte] = idAux
                nome[seguinte] = nomeAux
                preco[seguinte] = precoAux
                avaliacao[seguinte] = avaliacaoAux
            }
        }
    }
}

function OrdenarPorPreco(){
    for(var atual = 0; atual < contador - 1; atual++){
        for(var seguinte = atual + 1; seguinte < contador; seguinte++ ){
            idAux = id[atual]
            nomeAux = nome[atual]
            precoAux = preco[atual]
            avaliacaoAux = avaliacao[atual]
            if(preco[atual] < preco[seguinte]){
                id[atual] = id[seguinte]
                nome[atual] = nome[seguinte]
                preco[atual] = preco[seguinte]
                avaliacao[atual] = avaliacao[seguinte]
                id[seguinte] = idAux
                nome[seguinte] = nomeAux
                preco[seguinte] = precoAux
                avaliacao[seguinte] = avaliacaoAux
            }
        }
    }
}
