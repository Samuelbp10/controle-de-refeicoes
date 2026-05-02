import { Cabecalho } from '../../components/Cabecalho'; 
import { CardPorcentagem } from '../../components/CardPorcentagem';
import { Container } from './styles';

export function Home() {
  // Posicionei o cabeçalho e, logo abaixo, o meu card de porcentagem.
  // Passei "PRIMARIA" na cor para ele ficar verde, conforme o design de quem está dentro da dieta.
  return (
    <Container>
      <Cabecalho />
      
      <CardPorcentagem 
        titulo="90,86%" 
        subtitulo="das refeições dentro da dieta"
        cor="PRIMARIA"
      />
    </Container>
  );
}