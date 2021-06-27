// Definir dados iniciais

const pessoa = {
    nome: 'Neymar',

    doido: true,

    imagemTriste: 'https://conteudo.imguol.com.br/c/esporte/0b/2020/08/24/neymar-atacante-do-psg-1598307039703_v2_300x300.png',
    imagemFeliz: 'https://www.futwiz.com/assets/img/fifa21/faces/117631383.png',
}

// Atualizar dados

const elementoNome = document.getElementById('nome');


elementoNome.innerText = pessoa.nome;


// Atualizar humor
function atualizarHumor() {
    const elementoImagem = document.getElementById('imagem');
    const blocoHumor = document.getElementById('bloco_humor');

    if (pessoa.doido) {
        elementoImagem.src = pessoa.imagemTriste;
        blocoHumor.innerText = pessoa.nome + ' tá triste!';
    } else {
        elementoImagem.src = pessoa.imagemFeliz;
        blocoHumor.innerText = pessoa.nome + ' tá feliz!';
    }
}

atualizarHumor();

// Alterar humor

const botaoAlterarHumor = document.getElementById('alterarHumor');
botaoAlterarHumor.addEventListener('click', function () {
    pessoa.doido = !pessoa.doido;

    atualizarHumor();
});
