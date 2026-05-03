import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';

type PropsStatus = {
  tipo: 'PRIMARIA' | 'SECUNDARIA';
};

// Reutilizei a lógica de cor de fundo baseada no status da dieta
export const Container = styled.View<PropsStatus>`
  flex: 1;
  background-color: ${({ theme, tipo }) => 
    tipo === 'PRIMARIA' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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

// A cor do ícone também se adapta ao fundo
export const IconeVoltar = styled(ArrowLeft).attrs<PropsStatus>(({ theme, tipo }) => ({
  size: 24,
  color: tipo === 'PRIMARIA' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))<PropsStatus>``;

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
  padding: 40px 24px;
`;

export const NomeRefeicao = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const DescricaoRefeicao = styled.Text`
  margin-bottom: 24px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const TituloDataHora = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const DataHora = styled.Text`
  margin-bottom: 24px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`;

// Criei essa tag para mostrar o status com uma bolinha colorida
export const TagStatus = styled.View`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 1000px;
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
`;

export const BolinhaStatus = styled.View<PropsStatus>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: ${({ theme, tipo }) => 
    tipo === 'PRIMARIA' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const TextoStatus = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Rodape = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-bottom: 24px;
  gap: 8px; /* Espaçamento entre os botões */
`;