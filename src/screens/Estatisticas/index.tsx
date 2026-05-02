import { useNavigation } from '@react-navigation/native';
import { CardPorcentagem } from '../../components/CardPorcentagem';
import { CartaoDestaque } from '../../components/CartaoDestaque';

import { 
  Container, 
  Cabecalho, 
  BotaoVoltar, 
  IconeVoltar, 
  Conteudo, 
  Titulo,
  SessaoCardsLadoALado,
  CardMetade
} from './styles';

export function Estatisticas() {
  const navigation = useNavigation();

  // Função para voltar à tela de início
  function handleVoltar() {
    navigation.goBack();
  }

  // Montei a estrutura básica da tela de estatísticas. 
  // O próximo passo será construir o cabeçalho verde/vermelho com o botão de voltar.
  return (
    <Container tipo="PRIMARIA">
      <Cabecalho>
        <BotaoVoltar onPress={handleVoltar}>
          <IconeVoltar tipo="PRIMARIA" />
        </BotaoVoltar>

        <CardPorcentagem 
          titulo="90,86%"
          subtitulo="das refeições dentro da dieta"
          style={{ marginBottom: 0 }} // Removi a margem para alinhar no cabeçalho
        />
      </Cabecalho>

      <Conteudo>
        <Titulo>Estatísticas gerais</Titulo>

        <CartaoDestaque 
          titulo="22"
          subtitulo="melhor sequência de pratos dentro da dieta"
        />

        <CartaoDestaque 
          titulo="109"
          subtitulo="refeições registradas"
        />

        <SessaoCardsLadoALado>
          <CardMetade>
            <CartaoDestaque 
              titulo="99"
              subtitulo="refeições dentro da dieta"
              variante="VERDE"
            />
          </CardMetade>

          <CardMetade>
            <CartaoDestaque 
              titulo="10"
              subtitulo="refeições fora da dieta"
              variante="VERMELHO"
            />
          </CardMetade>
        </SessaoCardsLadoALado>
      </Conteudo>
    </Container>
  );
}