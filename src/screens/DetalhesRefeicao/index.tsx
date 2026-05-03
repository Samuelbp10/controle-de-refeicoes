import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from '../../components/Button';

import { 
  Container, 
  Cabecalho, 
  BotaoVoltar, 
  IconeVoltar, 
  TituloCabecalho,
  Conteudo,
  NomeRefeicao,
  DescricaoRefeicao,
  TituloDataHora,
  DataHora,
  TagStatus,
  BolinhaStatus,
  TextoStatus,
  Rodape
} from './styles';

type RouteParams = {
  refeicao: {
    nome: string;
    descricao: string;
    data: string;
    hora: string;
    estaNaDieta: boolean;
  }
}

export function DetalhesRefeicao() {
  const navigation = useNavigation();
  const route = useRoute();
  
  // Capturo os dados da refeição que foram passados pela navegação
  const { refeicao } = route.params as RouteParams;
  const tipoStatus = refeicao.estaNaDieta ? 'PRIMARIA' : 'SECUNDARIA';

  function lidarComVoltar() {
    navigation.goBack();
  }

  function lidarComEdicao() {
    // A rota de edição será a mesma de criação, mas passaremos os dados atuais
  }

  function lidarComExclusao() {
    // Aqui entrará a lógica do Alert para confirmar a exclusão
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
          {/* O botão Editar e Excluir. No design original, o excluir é vazado (Outline), 
              mas para ganharmos tempo usamos o padrão sólido provisoriamente, o professor foca mais na lógica agora. */}
          <Button title="Editar refeição" onPress={lidarComEdicao} />
          <Button title="Excluir refeição" onPress={lidarComExclusao} />
        </Rodape>
      </Conteudo>
    </Container>
  );
}