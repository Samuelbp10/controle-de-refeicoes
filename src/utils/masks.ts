// Pega o que o usuário digita e formata para DD/MM/AAAA
export function maskDate(value: string) {
  value = value.replace(/\D/g, ""); // Remove tudo o que não é número
  value = value.replace(/^(\d{2})(\d)/, "$1/$2"); // Coloca a barra entre dia e mês
  value = value.replace(/(\d{2})\/(\d{2})(\d)/, "$1/$2/$3"); // Coloca a barra entre mês e ano
  return value;
}

// Pega o que o usuário digita e formata para HH:MM
export function maskTime(value: string) {
  value = value.replace(/\D/g, ""); // Remove tudo o que não é número
  value = value.replace(/^(\d{2})(\d)/, "$1:$2"); // Coloca os dois pontos entre hora e minuto
  return value;
}