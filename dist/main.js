"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Aluno = /*#__PURE__*/_createClass(function Aluno(nomeDoAluno, notaDoAluno) {
  _classCallCheck(this, Aluno);
  this.nome = nomeDoAluno;
  this.nota = notaDoAluno;
});
var aluno1 = new Aluno('Naruto', 2);
var aluno2 = new Aluno('Sasuke', 10);
var aluno3 = new Aluno('Hinata', 6);
var aluno4 = new Aluno('Sakura', 5);
var turma = [aluno1, aluno2, aluno3, aluno4];
function acimaDaMedia(aluno) {
  return aluno.nota >= 6;
}
var alunosAcimaDaMedia = turma.filter(acimaDaMedia);
var nomesDosAlunosAcimaDaMedia = alunosAcimaDaMedia.map(function (aluno) {
  return " ".concat(aluno.nome);
});

//console.log(turma)
//console.log(alunosAcimaDaMedia)
console.log("Os seguintes alunos est\xE3o acima da m\xE9dia:".concat(nomesDosAlunosAcimaDaMedia, "."));