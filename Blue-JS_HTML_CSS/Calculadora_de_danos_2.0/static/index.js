const personagens = Array.from(document.getElementsByClassName('personagem')) //criação de uma lista que vai adicionar todo o conteúdo que estiver dentro da classe (personagem)

const armas = Array.from(document.getElementsByClassName('arma'))

vida_personagem = 0
dano_arma = 0

for(const personagem of personagens){
    const nomePersonagem = personagem.getAttribute('data-nome')
    const vidaPersonagem = personagem.getAttribute('data-vida')
    
    personagem.addEventListener('click',function(){
        if(document.getElementsByClassName('personagem-selecionado').length == 0){
            personagem.classList.add('personagem-selecionado')
            vida_personagem = vidaPersonagem
            alert(`${nomePersonagem} : ${vidaPersonagem}`)

        }else{
            personagem.classList.remove('personagem-selecionado')
        }
    
    })
    
}

for(const arma of armas){
    const nomeArma = arma.getAttribute('data-nome')
    const danoArma = arma.getAttribute('data-dano')

    arma.addEventListener('click',function(){
        if(document.getElementsByClassName('arma-selecionada').length == 0){
            arma.classList.add('arma-selecionada')
            dano_arma = danoArma
            alert(`${nomeArma} : ${danoArma}`)

        }else{
            arma.classList.remove('arma-selecionada')
        }
    
    })
    
}

function calcularDanos(){
    if(dano_arma >= vida_personagem){
        alert('Você matou o chefão!')
    }else{
        alert('O chefão sobreviveu...')
    }
}