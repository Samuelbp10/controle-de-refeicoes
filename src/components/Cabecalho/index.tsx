import { Container, Profile, LogoText } from './styles';

export function Cabecalho() {
  // Padronizei o nome do componente para português para manter a consistência da minha arquitetura.
  return (
    <Container>
      <LogoText>DietApp</LogoText>
      <Profile />
    </Container>
  );
}