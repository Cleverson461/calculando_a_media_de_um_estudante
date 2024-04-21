/*
  Solicitar o nome do aluno e as 3 notas do bimestre calcular a média daquele aluno.

  Se o aluno passou no bimestre, dar os parabéns.

  Se o aluno não passou no bimestre, motivar o aluno a dar o seu melhor na prova de recuperação

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota 

*/

let nomeDoAluno = prompt('Digite o nome do aluno')
let nota1 = Number(prompt("Digite a primeira nota!"));
let nota2 = Number(prompt("Digite a segunda nota!"));
let nota3 = Number(prompt("Digite a terceira nota!"));
let calcularMedia = ((nota1 + nota2 + nota3) / 3).toFixed(2);


console.log(calcularMedia)

if(calcularMedia >= 6) {
  
  document.write(`<h3>${nomeDoAluno}</h3> <p>Meus parabens, voce passou! com a nota ${calcularMedia}</p>`)
} else if(calcularMedia < 6 ){
  
  document.write(`<h3>${nomeDoAluno},</h3> <p>Voce não passou, mas voce pode melhorar e passar na recuperacao! Sua nota ${calcularMedia}</p>`)

}










/*

  Fluxos da aplicação

  - Caminho lógicos baseado em algum dado ou informação

  # Boas práticas na programação

  - Não repetir código

  [] Tipo de dado: Boolean
  [] if/else
  [] Operadores comparativos
    - > (maior que)
    - < (menor que)
    - >= (maior ou igual a)
    - <= (menor ou igual a)
    - == (igual a)
    -!= (diferente de)
    - === (igual a)
    -!== (diferente de)
*/