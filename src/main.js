
class Aluno {
    constructor(nomeDoAluno, notaDoAluno) {
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }
}

const aluno1 = new Aluno('Naruto', 2)
const aluno2 = new Aluno('Sasuke', 10)
const aluno3 = new Aluno('Hinata', 6)
const aluno4 = new Aluno('Sakura', 5)

const turma = [aluno1, aluno2, aluno3, aluno4];


function acimaDaMedia(aluno) {
    return aluno.nota >= 6
}  

const alunosAcimaDaMedia = turma.filter(acimaDaMedia);
const nomesDosAlunosAcimaDaMedia = alunosAcimaDaMedia.map(aluno => ` ${aluno.nome}`);

//console.log(turma)
//console.log(alunosAcimaDaMedia)
console.log(`Os seguintes alunos estão acima da média:${nomesDosAlunosAcimaDaMedia}.`);
