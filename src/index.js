let dado = 18;
if (dado >= 18) {
  console.log("voce pode acessar meu site");
} else {
  console.log("você não pode passar");
}

let idade = 18;
const Humano = true;
if (idade >= 18 && Humano === true) {
  console.log("Parabéns, você é humano maior de idade.");
} else {
  console.log("Você não é humano e é menor de idade.");
}

let mes = "Dezembro";
if (mes === "Dezembro" || mes === "Janeiro") {
  console.log("Parabens");
} else {
  console.log("não é seu aniversario");
}

const $name = "R";
if ($name[0] === "R") {
  console.log("Seu nome começa com R!");
} else {
  console.log("Seu nome não começa com R!");
}

let name = "Wallace";
if (name.length >= 6 || name[0] === "E") {
  console.log("Seu sobrenome tem mais de 6 letras ou seu nome começa com E.");
} else {
  console.log("Nenhuma das hipóteses.");
}
