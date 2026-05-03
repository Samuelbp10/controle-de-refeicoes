import AsyncStorage from '@react-native-async-storage/async-storage';

// Constante padrão para a chave do AsyncStorage
const CHAVE_STORAGE = '@controle-dieta:refeicoes';

// Tipagem profissional dos dados que vamos salvar
export type RefeicaoStorageDTO = {
  id: string;
  nome: string;
  descricao: string;
  data: string;
  hora: string;
  estaNaDieta: boolean;
}

// 1. Função para SALVAR nova refeição
export async function salvarRefeicao(novaRefeicao: RefeicaoStorageDTO) {
  try {
    const refeicoesSalvas = await buscarRefeicoes();
    const novaLista = [...refeicoesSalvas, novaRefeicao];
    await AsyncStorage.setItem(CHAVE_STORAGE, JSON.stringify(novaLista));
  } catch (error) {
    throw error;
  }
}

// 2. Função para BUSCAR todas as refeições
export async function buscarRefeicoes() {
  try {
    const storage = await AsyncStorage.getItem(CHAVE_STORAGE);
    const refeicoes: RefeicaoStorageDTO[] = storage ? JSON.parse(storage) : [];
    return refeicoes;
  } catch (error) {
    throw error;
  }
}

// 3. Função para EXCLUIR uma refeição
export async function excluirRefeicao(idRefeicao: string) {
  try {
    const refeicoesSalvas = await buscarRefeicoes();
    const refeicoesAtualizadas = refeicoesSalvas.filter(refeicao => refeicao.id !== idRefeicao);
    await AsyncStorage.setItem(CHAVE_STORAGE, JSON.stringify(refeicoesAtualizadas));
  } catch (error) {
    throw error;
  }
}

// 4. Função para ATUALIZAR/EDITAR uma refeição (Essa era a que estava faltando!)
export async function atualizarRefeicao(refeicaoEditada: RefeicaoStorageDTO) {
  try {
    const refeicoesSalvas = await buscarRefeicoes();
    
    // Percorro a lista e substituo apenas o item que tem o mesmo ID da refeição editada
    const refeicoesAtualizadas = refeicoesSalvas.map(refeicao => 
      refeicao.id === refeicaoEditada.id ? refeicaoEditada : refeicao
    );
    
    await AsyncStorage.setItem(CHAVE_STORAGE, JSON.stringify(refeicoesAtualizadas));
  } catch (error) {
    throw error;
  }
}