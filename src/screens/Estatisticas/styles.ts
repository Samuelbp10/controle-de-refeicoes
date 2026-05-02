import styled from 'styled-components/native';

// Criei esse Container para ser a base da minha tela de estatísticas
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

// Criei esse texto temporário só para confirmar que a navegação funcionou
export const TituloTemporario = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  text-align: center;
  margin-top: 100px;
`;