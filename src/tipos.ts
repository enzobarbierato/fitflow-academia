// Dois tipos com opções fechadas.
export type Status = "planejado" | "feito" | "pulado";
export type Nivel = "iniciante" | "intermediario" | "avancado";

// Estrutura de cada treino.
export interface Treino {
  readonly id: number;
  nome: string;
  descricao?: string;
  status: Status;
  nivel: Nivel;
  exercicios: string[];
  criadoEm: Date;
}

// Campos que o usuário preencheria ao cadastrar um treino.
export type NovoTreino = Omit<Treino, "id" | "status" | "criadoEm">;
