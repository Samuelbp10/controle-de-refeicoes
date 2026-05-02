import { Container, Profile, LogoText } from './styles';

export function Header() {
  // Montei a estrutura do cabeçalho chamando os estilos que criei.
  // Como é um componente simples de apresentação visual, ele não precisa de estados (useState) no momento.
  return (
    <Container>
      <LogoText>DietApp</LogoText>
      <Profile />
    </Container>
  );
}