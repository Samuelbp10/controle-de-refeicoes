import { Container, Titulo, Subtitulo, CartaoEstatisticaTipoStyleProps } from './styles';

type Props = {
  titulo: string;
  subtitulo: string;
  tipo?: CartaoEstatisticaTipoStyleProps;
  tamanho?: 'PEQUENO' | 'GRANDE';
}

export function CartaoEstatistica({ titulo, subtitulo, tipo = 'PADRAO', tamanho = 'GRANDE' }: Props) {
  // Montei esse componente para ser flexível. 
  // Ele recebe o 'tipo' para definir a cor e o 'tamanho' para saber se ocupa a linha toda ou apenas metade.
  return (
    <Container tipo={tipo} tamanho={tamanho}>
      <Titulo>{titulo}</Titulo>
      <Subtitulo>{subtitulo}</Subtitulo>
    </Container>
  );
}