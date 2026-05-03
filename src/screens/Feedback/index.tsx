import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { Smiley, SmileySad } from 'phosphor-react-native';

import { Button } from '../../components/Button'; 
import { 
  Container, Titulo, Subtitulo, TextoDestaque 
} from './styles';

type RouteParams = {
  estaNaDieta: boolean;
}

export function Feedback() {
  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme(); // Para usar as cores do nosso tema nos ícones
  
  const { estaNaDieta } = route.params as RouteParams;

  function lidarComIrParaHome() {
    navigation.navigate('inicio');
  }

  return (
    <Container>
      {estaNaDieta ? (
        <>
          <Titulo tipo="PRIMARIA">Continue assim!</Titulo>
          <Subtitulo>
            Você continua <TextoDestaque>dentro da dieta</TextoDestaque>. Muito bem!
          </Subtitulo>
          {/* Plano B profissional: Ícone grande usando as cores do tema */}
          <Smiley 
            size={120} 
            color={theme.COLORS.GREEN_DARK} 
            weight="light" 
            style={{ marginBottom: 40 }} 
          />
        </>
      ) : (
        <>
          <Titulo tipo="SECUNDARIA">Que pena!</Titulo>
          <Subtitulo>
            Você <TextoDestaque>saiu da dieta</TextoDestaque> dessa vez, mas continue se esforçando e não desista!
          </Subtitulo>
          <SmileySad 
            size={120} 
            color={theme.COLORS.RED_DARK} 
            weight="light" 
            style={{ marginBottom: 40 }} 
          />
        </>
      )}

      <Button 
        title="Ir para a página inicial" 
        onPress={lidarComIrParaHome} 
      />
    </Container>
  );
}