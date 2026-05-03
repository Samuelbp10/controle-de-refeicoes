import { useState } from 'react';
import { Alert, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
// Importo a tipagem nativa do Stack Navigator para garantir precisão absoluta
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Button } from '../../components/Button';

import { 
  Container, Cabecalho, BotaoVoltar, IconeVoltar, TituloCabecalho,
  Conteudo, NomeRefeicao, DescricaoRefeicao, TituloDataHora, DataHora,
  TagStatus, BolinhaStatus, TextoStatus, Rodape,
  Overlay, ModalContainer, TituloModal, LinhaBotoesModal, MetadeBotao
} from './styles';

import { excluirRefeicao } from '../../storage/refeicaoStorage';

type RouteParams = {
  refeicao: {
    id: string;
    nome: string;
    descricao: string;
    data: string;
    hora: string;
    estaNaDieta: boolean;
  }
}

// Crio uma tipagem restrita apenas para as rotas que esta tela tem permissão de acessar
type DetalhesNavigationProp = NativeStackNavigationProp<{
  inicio: undefined;
  editarRefeicao: {
    refeicao: RouteParams['refeicao'];
  };
}>;

export function DetalhesRefeicao() {
  // Aplico a tipagem local ao meu hook de navegação. Isso força o TypeScript a reconhecer as rotas sem depender do cache global.
  const navigation = useNavigation<DetalhesNavigationProp>();
  const route = useRoute();
  
  const [modalVisivel, setModalVisivel] = useState(false);
  
  const { refeicao } = route.params as RouteParams;
  const tipoStatus = refeicao.estaNaDieta ? 'PRIMARIA' : 'SECUNDARIA';

  function lidarComVoltar() {
    navigation.goBack();
  }

  function lidarComEdicao() {
    // Agora o TypeScript entende perfeitamente essa rota e os parâmetros que ela exige
    navigation.navigate('editarRefeicao', { refeicao });
  }

  async function executarExclusao() {
    try {
      await excluirRefeicao(refeicao.id);
      setModalVisivel(false);
      navigation.navigate('inicio');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível excluir a refeição.');
    }
  }

  return (
    <Container tipo={tipoStatus}>
      <Cabecalho>
        <BotaoVoltar onPress={lidarComVoltar}>
          <IconeVoltar tipo={tipoStatus} />
        </BotaoVoltar>
        <TituloCabecalho>Refeição</TituloCabecalho>
      </Cabecalho>

      <Conteudo>
        <NomeRefeicao>{refeicao.nome}</NomeRefeicao>
        <DescricaoRefeicao>{refeicao.descricao}</DescricaoRefeicao>

        <TituloDataHora>Data e hora</TituloDataHora>
        <DataHora>{refeicao.data} às {refeicao.hora}</DataHora>

        <TagStatus>
          <BolinhaStatus tipo={tipoStatus} />
          <TextoStatus>
            {refeicao.estaNaDieta ? 'dentro da dieta' : 'fora da dieta'}
          </TextoStatus>
        </TagStatus>

        <Rodape>
          <Button title="Editar refeição" onPress={lidarComEdicao} />
          <Button title="Excluir refeição" onPress={() => setModalVisivel(true)} />
        </Rodape>
      </Conteudo>

      <Modal
        visible={modalVisivel}
        transparent={true}
        animationType="fade"
      >
        <Overlay>
          <ModalContainer>
            <TituloModal>Deseja realmente excluir o registro da refeição?</TituloModal>
            
            <LinhaBotoesModal>
              <MetadeBotao>
                <Button title="Cancelar" onPress={() => setModalVisivel(false)} />
              </MetadeBotao>
              
              <MetadeBotao>
                <Button title="Sim, excluir" onPress={executarExclusao} />
              </MetadeBotao>
            </LinhaBotoesModal>
          </ModalContainer>
        </Overlay>
      </Modal>

    </Container>
  );
}