import { elemento } from "./dom";
import { treinos } from "./dados";

// Nome, versão e data na tela.
const nomeDoSistema: string = "FitFlow - Academia";
const versao: string = "0.1.0";
const hoje: string = new Date().toLocaleDateString("pt-BR");

elemento("nome-do-sistema").textContent = nomeDoSistema;
elemento("versao").textContent = `Versão ${versao}`;
elemento("data-de-hoje").textContent = hoje;

// for...of: mostra os objetos do array na página.
const lista = elemento("lista");

for (const treino of treinos) {
  const item = document.createElement("li");
  item.className = `treino treino--${treino.nivel}`;

  if (treino.status === "feito") {
    item.classList.add("treino--feito");
  }

  const titulo = document.createElement("h3");
  titulo.textContent = `#${treino.id} - ${treino.nome}`;

  const exercicios = document.createElement("p");
  exercicios.textContent = `Exercícios: ${treino.exercicios.join(", ")}`;

  const nivel = document.createElement("span");
  nivel.className = "etiqueta";
  nivel.textContent = `Nível: ${treino.nivel}`;

  const status = document.createElement("span");
  status.className = "etiqueta";
  status.textContent = `Status: ${treino.status}`;

  item.append(titulo, exercicios, nivel, status);
  lista.append(item);
}

// for: conta quantos treinos estão planejados.
let planejados = 0;
for (let i = 0; i < treinos.length; i++) {
  if (treinos[i].status === "planejado") {
    planejados++;
  }
}

elemento("total").textContent = String(treinos.length);
elemento("planejados").textContent = String(planejados);

// while: encontra o primeiro treino planejado.
let posicao = 0;
while (posicao < treinos.length && treinos[posicao].status !== "planejado") {
  posicao++;
}

if (posicao < treinos.length) {
  const proximo = elemento("proximo-treino");
  proximo.textContent = `Próximo treino: ${treinos[posicao].nome}`;
  proximo.hidden = false;
}
