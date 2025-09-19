// 1) Alterar texto do título
document.getElementById("titulo").textContent = "Olá, JavaScript!";

// 2) Primeiro parágrafo com classe "paragrafo" azul
document.querySelector(".paragrafo").style.color = "blue";

// 3) Alert ao clicar no botão enviar
document.getElementById("enviar").addEventListener("click", function () {
  alert("Formulário enviado!");
});

// 4) Alterar texto do primeiro <li>
document.querySelector(".tarefas li").textContent = "Primeira tarefa concluída";

// 5) Campo com classe nome recebe valor
document.querySelector(".nome").value = "João da Silva";

// 6) Mudar fundo de todos os cards
document.querySelectorAll(".card").forEach((card) => {
  card.style.backgroundColor = "#f0f0f0";
});

// 7) Botão dark mode muda fundo e texto
document.querySelector(".dark-mode").addEventListener("click", function () {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
});

// 8) Adicionar classe destaque no primeiro h2
document.querySelector("h2").classList.add("destaque");

// 9) Mostrar/ocultar senha
document.getElementById("mostrarSenha").addEventListener("click", function () {
  let senha = document.getElementById("senha");
  senha.type = senha.type === "password" ? "text" : "password";
});

// 10) Adicionar novo li na lista
let novaTarefa = document.createElement("li");
novaTarefa.textContent = "Tarefa extra";
document.querySelector(".tarefas").appendChild(novaTarefa);

// Função de animação
function animarDiv() {
  document.getElementById("animacao").classList.toggle("mover");
}
