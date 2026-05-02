import styled from 'styled-components/native';

// Esse é o fundo geral da minha tela inicial.
// Usei flex: 1 para garantir que a View ocupe a tela inteira do dispositivo, empurrando o resto do layout.
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 24px;
`;
// Estilo para o título da seção de refeições (Meals)
export const MealsTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  margin-bottom: 8px;
`;