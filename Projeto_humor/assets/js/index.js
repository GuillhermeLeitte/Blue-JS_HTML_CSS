let elementoNome = document.querySelector('#nome'); 
let elementoSituacao = document.querySelector('#situacao');
let elementoImg = document.querySelector('#imagem') 
let elementoBtn = document.querySelector('#alterar')


elementoBtn.addEventListener('click', () => {
    
    if(elementoBtn.value == 'primeiro'){
        elementoImg.src = './assets/img/durante_fama-removebg-preview.png' 
        elementoNome.innerText = 'depois do primeiro sucesso' 
        elementoSituacao.innerText = 'já nos estilos' 
        elementoBtn.value = 'segundo' 
    } else if(elementoBtn.value == 'segundo') { 
        elementoImg.src = './assets/img/gusttavo-lima-andressa-suita-familia-apareceu-removebg-preview.png' 
        elementoNome.innerText = 'Já nas paradas de sucesso' 
        elementoSituacao.innerText = 'Homem de família' 
        elementoBtn.value = 'terceiro'  
    } else if(elementoBtn.value == 'terceiro') {
        
        elementoImg.src = './assets/img/ressaca.jpg' 
        elementoNome.innerText = 'depois das Bohemia na cabeça'  
        elementoSituacao.innerText = 'Solteiro' 
        elementoBtn.value = 'inicio' 
    } else if(elementoBtn.value == 'inicio') {
        elementoImg.src = './assets/img/antes_fama-removebg-preview.png' 
        elementoNome.innerText = 'Gustavo antes da fama' 
        elementoSituacao.innerText = 'Dificil'
        elementoBtn.value = 'primeiro'

    }
})
