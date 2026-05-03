import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

// Transformei o Container em um TouchableOpacity para que o usuário possa clicar na refeição inteira
export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  padding: 14px 16px 14px 12px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
  margin-bottom: 8px;
`;

export const Hora = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

// Criei essa divisória vertical de 1px para ficar idêntico ao design do Figma
export const Divisoria = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
  margin: 0 12px;
`;

export const Nome = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`;

type StatusProps = {
  tipo: 'PRIMARIA' | 'SECUNDARIA';
};

// A bolinha que indica se a refeição está ou não na dieta
export const StatusCor = styled.View<StatusProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, tipo }) => 
    tipo === 'PRIMARIA' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;