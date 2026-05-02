import styled, { css } from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';

export type EstatisticasEstiloProps = 'PRIMARIA' | 'SECUNDARIA';

type Props = {
  tipo: EstatisticasEstiloProps;
};

// Criei esse Container para ser a base da minha tela de estatísticas
export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({ theme, tipo }) => 
    tipo === 'PRIMARIA' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

// Cabeçalho que contém a porcentagem e o botão de voltar
export const Cabecalho = styled.View`
  width: 100%;
  padding: 56px 24px 32px;
  align-items: center;
  justify-content: center;
`;

// Botão de voltar posicionado no canto superior esquerdo
export const BotaoVoltar = styled(TouchableOpacity)`
  position: absolute;
  top: 56px;
  left: 24px;
`;

// Ícone da flecha que muda de cor conforme o estado da dieta
export const IconeVoltar = styled(ArrowLeft).attrs<Props>(({ theme, tipo }) => ({
  size: 24,
  color: tipo === 'PRIMARIA' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))<Props>``;

// Área branca com bordas arredondadas que sobe por cima do fundo colorido
export const Conteudo = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 32px 24px;
  align-items: center;
`;

export const Titulo = styled.Text`
  margin-bottom: 20px;
  
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

// Container para colocar os dois cards pequenos lado a lado
export const SessaoCardsLadoALado = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

// Estilo específico para o card que ocupa apenas metade da largura
export const CardMetade = styled.View`
  width: 48%;
`;