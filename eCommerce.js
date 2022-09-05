var id = []
var nome = []
var preco = []
var avaliacao = []
var contador = 0


var opcao = 1
while(opcao != 9){
Escolherfunção()
if(opcao == 1){
CadastrarProduto()
console.log("ID:", id)
console.log("Nome: ", nome)
console.log("Preço: ", "R$", preco)
console.log("Avaliação: ", avaliacao)
}
else if(opcao == 2){
var buscarID = parseInt(prompt(`Qual ID deseja buscar`))
BuscarProdutoID(buscarID)
}
else if(opcao == 3){
var produto = prompt(`Qual produto quer buscar?`)
BuscarProdutoNome(produto)
}
else if(opcao == 4){
OrdenarPorID()
}
else if(opcao == 5){
OrdenarPorPreco()
}
else if(opcao == 6){
OrdenarPorAvaliacao()
}
else if(opcao == 7){
var idProduto = parseInt(prompt(`Qual ID deseja buscar para atualizar o valor?`))
var novoPreco = parseFloat(prompt(`Qual o valor atualizado?`))
AtualizarPrecoProduto(idProduto, novoPreco)
}
else if(opcao == 8){
var excluirProduto = prompt(`Qual produto deseja excluir`)
DeletarProduto(excluirProduto)
}
}


function Escolherfunção(){
    opcao = prompt(`1-Cadastrar/2-Buscar Produto pelo ID/3-Buscar produto pelo nome/4-Exibir produtos pelo ID/5-Exibir produtos pelo preço/6-Exibir produtos pela avaliação/7-Atualizar preço/8-Deletar produto/9-Encerrar`)
    return opcao
}

function CadastrarProduto(){
    id[contador] = parseInt(prompt(`Qual o ID produto`))
    nome[contador] = prompt(`Qual o nome do produto`)
    preco[contador] = parseFloat(prompt(`Qual o preço do produto`))
    avaliacao[contador] = parseInt(prompt(`Qual a avaliação do produto`))
    contador++    
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
    Ordenar(id)
}
   
function OrdenarPorPreco(){
    Ordenar(preco)
}

function OrdenarPorAvaliacao(){
    Ordenar(avaliacao)
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

function Ordenar(propriedadeParametro){
    for(var atual = 0; atual < contador - 1; atual++){
        for(var seguinte = atual + 1; seguinte < contador; seguinte++ ){
            idAux = id[atual]
            nomeAux = nome[atual]
            precoAux = preco[atual]
            avaliacaoAux = avaliacao[atual]
            if(propriedadeParametro[atual] > propriedadeParametro[seguinte]){
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
console.log("ID:", id)
console.log("Nome: ", nome)
console.log("Preço: ", "R$", preco)
console.log("Avaliação: ", avaliacao)
}
