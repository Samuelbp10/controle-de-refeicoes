import styled from 'styled-components/native';

// Esse é o fundo geral da minha tela inicial.
// Usei flex: 1 para garantir que a View ocupe a tela inteira do dispositivo, empurrando o resto do layout.
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 24px;
`;