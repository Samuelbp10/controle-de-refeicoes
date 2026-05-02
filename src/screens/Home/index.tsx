import { Header } from '../../components/Header';
import { Container } from './styles';

export function Home() {
  // Criei a tela principal. Por enquanto, só importei e posicionei o Header que acabei de criar.
  // O próximo passo será criar o componente de Porcentagem e a lista (SectionList) das refeições para colocar logo abaixo.
  return (
    <Container>
      <Header />
    </Container>
  );
}