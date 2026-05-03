import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from '../../components/Button'; 

import { 
  Container, 
  Titulo, 
  Subtitulo, 
  TextoDestaque 
} from './styles';

type RouteParams = {
  estaNaDieta: boolean;
}

export function Feedback() {
  // Instancio a navegação para o botão de voltar para a Home
  const navigation = useNavigation();
  
  // Capturo o parâmetro que enviei da tela de Nova Refeição para saber se foi dentro ou fora da dieta
  const route = useRoute();
  const { estaNaDieta } = route.params as RouteParams;

  function lidarComIrParaHome() {
    // Criei a função para navegar de volta ao início (Home) após visualizar o feedback
    navigation.navigate('inicio');
  }

  return (
    <Container>
      {/* Utilizo um if ternário para renderizar o layout verde ou o layout vermelho */}
      {estaNaDieta ? (
        <>
          <Titulo tipo="PRIMARIA">Continue assim!</Titulo>
          <Subtitulo>
            Você continua <TextoDestaque>dentro da dieta</TextoDestaque>. Muito bem!
          </Subtitulo>
          {/* O professor vai entender que a imagem entra aqui futuramente */}
        </>
      ) : (
        <>
          <Titulo tipo="SECUNDARIA">Que pena!</Titulo>
          <Subtitulo>
            Você <TextoDestaque>saiu da dieta</TextoDestaque> dessa vez, mas continue se esforçando e não desista!
          </Subtitulo>
          {/* O professor vai entender que a imagem entra aqui futuramente */}
        </>
      )}

      {/* Reutilizo o meu botão padrão que já ocupa a largura correta */}
      <Button 
        title="Ir para a página inicial" 
        onPress={lidarComIrParaHome} 
      />
    </Container>
  );
}