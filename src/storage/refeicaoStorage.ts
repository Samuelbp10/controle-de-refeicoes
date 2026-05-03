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
    // Primeiro, busco todas as refeições que já estão salvas no dispositivo
    const refeicoesSalvas = await buscarRefeicoes();

    // Adiciono a nova refeição na lista, aplicando o conceito de imutabilidade exigido nos requisitos
    const novaLista = [...refeicoesSalvas, novaRefeicao];

    // Converto a lista para string (JSON) e salvo no AsyncStorage
    await AsyncStorage.setItem(CHAVE_STORAGE, JSON.stringify(novaLista));
  } catch (error) {
    // Repasso o erro para quem chamou a função conseguir tratar
    throw error;
  }
}

export async function buscarRefeicoes() {
  try {
    // Busco os dados armazenados pela chave padrão
    const storage = await AsyncStorage.getItem(CHAVE_STORAGE);
    
    // Se tiver algo salvo, converto de volta para array. Se não, retorno um array vazio.
    const refeicoes: RefeicaoStorageDTO[] = storage ? JSON.parse(storage) : [];
    
    return refeicoes;
  } catch (error) {
    throw error;
  }
}