import { TouchableOpacityProps } from 'react-native';
import { Container, Titulo, Subtitulo, Icone, CorCardProps } from './styles';

// Juntei as propriedades de botão nativas com as informações (título, subtítulo e cor) que eu preciso receber.
type Props = TouchableOpacityProps & {
  titulo: string;
  subtitulo: string;
  cor?: CorCardProps;
};

export function CardPorcentagem({ titulo, subtitulo, cor = 'PRIMARIA', ...rest }: Props) {
  // Montei a estrutura visual repassando a propriedade "cor" para os elementos que precisam mudar (Fundo e Ícone).
  return (
    <Container cor={cor} {...rest}>
      <Icone cor={cor} />
      <Titulo>{titulo}</Titulo>
      <Subtitulo>{subtitulo}</Subtitulo>
    </Container>
  );
}