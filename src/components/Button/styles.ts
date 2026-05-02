import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type ButtonTypeStyleProps = 'SOLID' | 'OUTLINE';

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  min-height: 50px;
  max-height: 50px;
  
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  /* Aqui aplicamos as cores do nosso Tema dependendo do tipo do botão */
  ${({ theme, type }) => type === 'SOLID' ? css`
    background-color: ${theme.COLORS.GRAY_2};
  ` : css`
    background-color: transparent;
    border: 1px solid ${theme.COLORS.GRAY_1};
  `}
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'SOLID' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  `}
`;