import { TouchableOpacityProps } from 'react-native';
import { Container, Hora, Divisoria, Nome, StatusCor } from './styles';

// Defino as propriedades específicas do meu componente e estendo as propriedades do TouchableOpacityProps
// Assim, meu componente passa a aceitar ações como onPress nativamente, de forma profissional
type Props = TouchableOpacityProps & {
  hora: string;
  nome: string;
  status: 'PRIMARIA' | 'SECUNDARIA';
}

export function CartaoRefeicao({ hora, nome, status, ...rest }: Props) {
  // Utilizo o operador rest (...) para repassar todas as propriedades de touch (como onPress) para o Container
  return (
    <Container {...rest}>
      <Hora>{hora}</Hora>
      
      {/* Divisória vertical para separar a hora do nome da refeição */}
      <Divisoria />
      
      {/* O numberOfLines={1} garante que nomes muito grandes não quebrem o layout do meu cartão */}
      <Nome numberOfLines={1}>
        {nome}
      </Nome>
      
      {/* Passo o status para a bolinha mudar de cor dinamicamente (verde ou vermelho) */}
      <StatusCor tipo={status} />
    </Container>
  );
}