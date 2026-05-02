import { Cabecalho } from '../../components/Cabecalho'; 
import { CardPorcentagem } from '../../components/CardPorcentagem';
import { Button } from '../../components/Button';
import { Container, MealsTitle } from './styles';

export function Home() {
  return (
    <Container>
      <Cabecalho />
      <CardPorcentagem 
        titulo="90,86%" 
        subtitulo="das refeições dentro da dieta"
        cor="PRIMARIA"
      />

      <MealsTitle>Refeições</MealsTitle>
      <Button title="+ Nova refeição" />
    </Container>
  );
}