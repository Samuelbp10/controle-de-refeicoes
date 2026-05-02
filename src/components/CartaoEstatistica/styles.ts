import styled, { css } from 'styled-components/native';

export type CartaoEstatisticaTipoStyleProps = 'PADRAO' | 'PRIMARIO' | 'SECUNDARIO';

type Props = {
  tipo: CartaoEstatisticaTipoStyleProps;
  tamanho?: 'PEQUENO' | 'GRANDE';
}

export const Container = styled.View<Props>`
  width: ${({ tamanho }) => tamanho === 'PEQUENO' ? '48%' : '100%'};
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;

  /* Lógica de cores baseada no tipo que eu passar para o componente */
  background-color: ${({ theme, tipo }) => {
    if (tipo === 'PRIMARIO') return theme.COLORS.GREEN_LIGHT;
    if (tipo === 'SECUNDARIO') return theme.COLORS.RED_LIGHT;
    return theme.COLORS.GRAY_6;
  }};
`;

export const Titulo = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Subtitulo = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
    text-align: center;
  `}
`;