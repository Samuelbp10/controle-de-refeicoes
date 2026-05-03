import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const Cabecalho = styled.View`
  width: 100%;
  padding: 56px 24px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BotaoVoltar = styled(TouchableOpacity)`
  position: absolute;
  left: 24px;
  top: 56px;
`;

export const IconeVoltar = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_2
}))``;

export const TituloCabecalho = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Conteudo = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 32px 24px;
`;

export const Label = styled.Text`
  margin-bottom: 4px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const InputForm = styled.TextInput`
  width: 100%;
  min-height: 48px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  padding: 14px;
  margin-bottom: 24px;
  
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const LinhaDupla = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Coluna = styled.View`
  width: 48%;
`;

type BotaoDietaProps = {
  ativo: boolean;
  tipo: 'SIM' | 'NAO';
};

export const BotaoDieta = styled(TouchableOpacity)<BotaoDietaProps>`
  width: 48%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  
  background-color: ${({ theme, ativo, tipo }) => {
    if (!ativo) return theme.COLORS.GRAY_6;
    return tipo === 'SIM' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT;
  }};
  
  border-width: ${({ ativo }) => (ativo ? 1 : 0)}px;
  border-color: ${({ theme, tipo }) => 
    tipo === 'SIM' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const StatusCor = styled.View<{ tipo: 'SIM' | 'NAO' }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: ${({ theme, tipo }) => 
    tipo === 'SIM' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const TextoBotaoDieta = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Rodape = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-bottom: 24px;
`;