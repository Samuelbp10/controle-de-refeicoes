import { TouchableOpacityProps } from 'react-native';
import { Container, Hora, Divisor, Nome, Status, StatusRefeicaoProps } from './styles';

type Props = TouchableOpacityProps & {
  hora: string;
  nome: string;
  status: StatusRefeicaoProps;
}

export function CartaoRefeicao({ hora, nome, status, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Hora>{hora}</Hora>
      <Divisor />
      {/* numberOfLines={1} é um truque para o texto não quebrar a linha se o nome for muito grande */}
      <Nome numberOfLines={1}>{nome}</Nome>
      <Status status={status} />
    </Container>
  );
}