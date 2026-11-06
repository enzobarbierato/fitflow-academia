// Busca um elemento pelo id e avisa se não existir.
export function elemento(id: string): HTMLElement {
  const encontrado = document.getElementById(id);

  if (!encontrado) {
    throw new Error(`Elemento com id "${id}" não encontrado.`);
  }

  return encontrado;
}
