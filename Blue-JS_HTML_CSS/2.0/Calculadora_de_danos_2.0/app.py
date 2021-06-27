from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def home():

    personagens = [
        {
            'nome': 'Super Mario',
            'foto': '../static/img/mario2.png',
            'vida': 10
        },
        {
            'nome': 'Goku',
            'foto': '../static/img/goku1.png',
            'vida': 20
        },
        {
            'nome': 'Hulk',
            'foto': '../static/img/hulk1.png',
            'vida': 50
        }
    ]

    armas = [
        {
            'nome': 'Martelo',
            'foto': '../static/img/martelo.jpg',
            'dano': 30
        },
        {
            'nome': 'Poder',
            'foto': '../static/img/poder.png',
            'dano': 50
        },
        {
            'nome': 'soco',
            'foto': '../static/img/soco.png',
            'dano': 20
        }
    ]

    return render_template(
        'index.html',
        personagens=personagens,
        armas=armas
    )


if __name__ == '__main__':
    app.run(debug=True)
