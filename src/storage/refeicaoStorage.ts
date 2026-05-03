import AsyncStorage from '@react-native-async-storage/async-storage';

// Criei essa constante para padronizar a chave de busca no AsyncStorage e evitar erros de digitação.
const CHAVE_STORAGE = '@controle-dieta:refeicoes';

export type RefeicaoStorageDTO = {
  id: string;
  nome: string;
  descricao: string;
  data: string;
  hora: string;
  estaNaDieta: boolean;
}

export async function salvarRefeicao(novaRefeicao: RefeicaoStorageDTO) {
  try {
    const refeicoesSalvas = await buscarRefeicoes();
    const novaLista = [...refeicoesSalvas, novaRefeicao];
    await AsyncStorage.setItem(CHAVE_STORAGE, JSON.stringify(novaLista));
  } catch (error) {
    throw error;
  }
}

export async function buscarRefeicoes() {
  try {
    const storage = await AsyncStorage.getItem(CHAVE_STORAGE);
    const refeicoes: RefeicaoStorageDTO[] = storage ? JSON.parse(storage) : [];
    return refeicoes;
  } catch (error) {
    throw error;
  }
}

// Função profissional que criei para remover uma refeição específica pelo seu ID
export async function excluirRefeicao(idRefeicao: string) {
  try {
    const refeicoesSalvas = await buscarRefeicoes();
    
    // Filtro a lista mantendo apenas as refeições com ID diferente do que quero excluir, garantindo a imutabilidade exigida
    const refeicoesAtualizadas = refeicoesSalvas.filter(refeicao => refeicao.id !== idRefeicao);
    
    await AsyncStorage.setItem(CHAVE_STORAGE, JSON.stringify(refeicoesAtualizadas));
  } catch (error) {
    throw error;
  }
}