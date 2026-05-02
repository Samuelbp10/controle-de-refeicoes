import { Container, Titulo, Subtitulo, VarianteCartaoProps } from './styles';

type Props = {
  titulo: string;
  subtitulo: string;
  variante?: VarianteCartaoProps;
}

export function CartaoDestaque({ titulo, subtitulo, variante = 'NEUTRO' }: Props) {
  // Montei esse componente para ser usado várias vezes na tela de estatísticas, mudando apenas o texto e a cor de fundo.
  return (
    <Container variante={variante}>
      <Titulo>{titulo}</Titulo>
      <Subtitulo>{subtitulo}</Subtitulo>
    </Container>
  );
}