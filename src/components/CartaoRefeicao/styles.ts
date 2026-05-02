import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type StatusRefeicaoProps = 'PRIMARIA' | 'SECUNDARIA';

type Props = {
  status: StatusRefeicaoProps;
};

// Uso TouchableOpacity para o usuário poder clicar na refeição e abrir os detalhes
export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 49px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 14px 16px;
  margin-bottom: 8px;
`;

export const Hora = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

// Aquela barrinha vertical para separar a hora do nome
export const Divisor = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
  margin: 0 12px;
`;

export const Nome = styled.Text`
  flex: 1;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

// A bolinha que indica se a refeição está dentro ou fora da dieta
export const Status = styled.View<Props>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, status }) => 
    status === 'PRIMARIA' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;