var id = []
var nome = []
var preco = []
var avaliacao = []
contador = 0

var continuar = true
while(continuar){
CadastrarProduto()
}


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