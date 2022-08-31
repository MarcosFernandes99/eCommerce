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
console.log("Preço: ", "R$", preco)
console.log("Avaliação: ", avaliacao)

}

var buscarID = parseInt(prompt(`Qual ID deseja buscar`))
BuscarProdutoID(buscarID)

var produto = prompt(`Qual produto quer buscar?`)
BuscarProdutoNome(produto)

OrdenarPorID()

OrdenarPorPreco()

OrdenarPorAvaliacao()

var idProduto = parseInt(prompt(`Qual ID deseja buscar para atualizar o valor?`))
var novoPreco = parseFloat(prompt(`Qual o valor atualizado?`))
AtualizarPrecoProduto(idProduto, novoPreco)

var excluirProduto = prompt(`Qual produto deseja excluir`)
DeletarProduto(excluirProduto)


function CadastrarProduto(){
    id[contador] = parseInt(prompt(`Qual o ID produto`))
    nome[contador] = prompt(`Qual o nome do produto`)
    preco[contador] = parseFloat(prompt(`Qual o preço do produto`))
    avaliacao[contador] = parseInt(prompt(`Qual a avaliação do produto`))
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
    console.log(`Produtos ordenados pelo ID:`)    
    console.log("ID:", id)
    console.log("Nome: ", nome)
    console.log("Preço: ", "R$", preco)
    console.log("Avaliação: ", avaliacao)   
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
    console.log(`Produtos ordenados pelo Preço:`)    
    console.log("ID:", id)
    console.log("Nome: ", nome)
    console.log("Preço: ", "R$", preco)
    console.log("Avaliação: ", avaliacao)
}

function OrdenarPorAvaliacao(){
    for(var atual = 0; atual < contador - 1; atual++){
        for(var seguinte = atual + 1; seguinte < contador; seguinte++ ){
            idAux = id[atual]
            nomeAux = nome[atual]
            precoAux = preco[atual]
            avaliacaoAux = avaliacao[atual]
            if(avaliacao[atual] < avaliacao[seguinte]){
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
    console.log(`Produtos ordenados pela Avaliação:`)    
    console.log("ID:", id)
    console.log("Nome: ", nome)
    console.log("Preço: ", "R$", preco)
    console.log("Avaliação: ", avaliacao)
}

function AtualizarPrecoProduto(idParametro, precoParametro){
    for(var i = 0; i < contador; i++){
        if(idParametro == id[i]){
            preco[i] = precoParametro
        }
    }
    console.log("Preço: ", "R$", preco)
}

function DeletarProduto(excluirParametro){
    for(var i = 0; i < contador; i++){
        if(excluirParametro == nome[i]){
            id[i] = 0
            nome[i] = 0
            preco[i] = 0
            avaliacao[i] = 0
        }
    }
    for(var atual = 0; atual < contador - 1; atual++){
        for(var seguinte = atual + 1; seguinte < contador; seguinte++){
            if(id[atual] == 0){
                id[atual] = id[seguinte]
                id[seguinte] = 0
                nome[atual] = nome[seguinte]
                nome[seguinte] = 0
                preco[atual] = preco[seguinte]
                preco[seguinte] = 0
                avaliacao[atual] = avaliacao[seguinte]
                avaliacao[seguinte] = 0
            }
        }
    }

    idAux = []
    nomeAux = []
    precoAux = []
    avaliacaoAux = []

    for(var index = 0; index < contador; index++){
        if(id[index] != 0){
            idAux[index] = id[index]
            nomeAux[index] = nome[index]
            precoAux[index] = preco[index]
            avaliacaoAux[index] = avaliacao[index]
        }
    }

    id = idAux
    nome = nomeAux
    preco = precoAux
    avaliacao = avaliacaoAux
    contador--

console.log("ID:", id)
console.log("Nome: ", nome)
console.log("Preço: ", "R$", preco)
console.log("Avaliação: ", avaliacao)
}