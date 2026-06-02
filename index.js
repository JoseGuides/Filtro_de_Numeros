const readline = require("readline");




const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdin
});

r1.question("Digite a sequencia", function(resposta) {
  console.log(filtrarNumeros(resposta));
  console.log(resposta)
  r1.close();
})

