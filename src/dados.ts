import type { Treino } from "./tipos";

// Array de objetos: seis treinos de exemplo.
export const treinos: Treino[] = [
  { id: 1, nome: "Peito e tríceps", status: "planejado", nivel: "intermediario", exercicios: ["Supino", "Tríceps corda"], criadoEm: new Date() },
  { id: 2, nome: "Pernas", status: "feito", nivel: "iniciante", exercicios: ["Agachamento", "Leg press"], criadoEm: new Date() },
  { id: 3, nome: "Costas e bíceps", status: "planejado", nivel: "intermediario", exercicios: ["Puxada alta", "Rosca direta"], criadoEm: new Date() },
  { id: 4, nome: "Cardio", status: "pulado", nivel: "iniciante", exercicios: ["Esteira", "Bicicleta"], criadoEm: new Date() },
  { id: 5, nome: "Ombros", status: "feito", nivel: "avancado", exercicios: ["Desenvolvimento", "Elevação lateral"], criadoEm: new Date() },
  { id: 6, nome: "Abdômen", status: "planejado", nivel: "iniciante", exercicios: ["Prancha", "Abdominal"], criadoEm: new Date() },
];
