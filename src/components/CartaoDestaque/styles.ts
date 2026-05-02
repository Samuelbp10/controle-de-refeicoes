import styled from 'styled-components/native';

export type VarianteCartaoProps = 'VERDE' | 'VERMELHO' | 'NEUTRO';

type Props = {
  variante: VarianteCartaoProps;
}

// Criei esse Container que muda de cor de fundo e de tamanho dependendo da variante (se é um card largo ou metade da tela)
export const Container = styled.View<Props>`
  width: 100%;
  background-color: ${({ theme, variante }) => 
    variante === 'VERDE' ? theme.COLORS.GREEN_LIGHT : 
    variante === 'VERMELHO' ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_6};
  
  border-radius: 8px;
  padding: 16px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

export const Titulo = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const Subtitulo = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  text-align: center;
`;