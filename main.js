
function Pessoa(nome) {
    this.nome = nome;
}

function Brasileiro(nome, naturalidade, idade, ocupacao) {
    Pessoa.call(this, nome);
    
    this.naturalidade = naturalidade;
    this.idade = idade;
    this.ocupacao = ocupacao;
}

function Estrangeiro(nome, naturalidade, idade, ocupacao) {
    Pessoa.call(this, nome);

    this.naturalidade = naturalidade;
    this.idade = idade;
    this.ocupacao = ocupacao;
}


const brasileiro1 = new Brasileiro("Marcio", "Porto Alegre - RS", 32, "Médico");
const estrangeiro1 = new Estrangeiro("Liu Kang", "Tóquio - Japão", 27, "Lutador de Kung-Fu");

console.log(brasileiro1, estrangeiro1);

