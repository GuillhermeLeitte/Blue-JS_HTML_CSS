from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def home():
    jogo1 = "PSG 0 X 4 CEARA"
    jogo2 = 'PSG 4 X 0 FORTALEZA'
    exibir_imagem = True
    imagem_triste = 'https://conteudo.imguol.com.br/c/esporte/0b/2020/08/24/neymar-atacante-do-psg-1598307039703_v2_300x300.png'
    imagem_feliz = 'https://www.futwiz.com/assets/img/fifa21/faces/117631383.png'

    return render_template(
        "index.html",
        jogo1=jogo1,
        jogo2=jogo2,
        exibir_imagem=exibir_imagem,
        imagem_triste=imagem_triste,
        imagem_feliz=imagem_feliz,
    )


if __name__ == "__main__":
    app.run(debug=True)
