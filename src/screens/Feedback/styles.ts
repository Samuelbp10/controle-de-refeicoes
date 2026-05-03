import styled, { css } from 'styled-components/native';

type Props = {
  tipo: 'PRIMARIA' | 'SECUNDARIA';
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

export const Titulo = styled.Text<Props>`
  margin-bottom: 8px;
  ${({ theme, tipo }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${tipo === 'PRIMARIA' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
`;

export const Subtitulo = styled.Text`
  text-align: center;
  margin-bottom: 40px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const TextoDestaque = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;