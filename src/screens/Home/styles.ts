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
// Criei esse estilo para o título da data (ex: 12.08.22) que vai separar os grupos de refeições na minha SectionList.
export const TituloData = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  margin-top: 32px;
  margin-bottom: 8px;
`;