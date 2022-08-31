var id = []
var nome = []
var preco = []
var avaliacao = []
contador = 0

var continuar = true
while(continuar){
CadastrarProduto()
console.log(id)
console.log(nome)
console.log(preco)
console.log(avaliacao)
}

var buscarID = parseInt(prompt(`Qual ID deseja buscar`))
BuscarProdutoID(buscarID)    



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