import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { ArrowUpRight } from 'phosphor-react-native';

// Criei essa tipagem em português para definir que o card só pode ser PRIMARIA (verde) ou SECUNDARIA (vermelho).
export type CorCardProps = 'PRIMARIA' | 'SECUNDARIA';

type Props = {
  cor: CorCardProps;
};

// Criei esse Container como TouchableOpacity (um botão) porque o usuário vai poder clicar nele para ver as estatísticas.
export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  
  /* Aqui eu faço a lógica da cor: se a cor for PRIMARIA, pego o verde claro, senão pego o vermelho claro. */
  background-color: ${({ theme, cor }) => 
    cor === 'PRIMARIA' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  
  border-radius: 8px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

// Estilizei o número gigante da porcentagem.
export const Titulo = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

// Estilizei a frase explicativa logo abaixo do número.
export const Subtitulo = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  margin-top: 2px;
`;

// O ícone da flechinha. Usei absolute para jogar ele lá pro canto superior direito.
export const Icone = styled(ArrowUpRight).attrs<Props>(({ theme, cor }) => ({
  size: 24,
  // A cor do ícone acompanha a regra: verde escuro no card verde, vermelho escuro no card vermelho.
  color: cor === 'PRIMARIA' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))<Props>`
  position: absolute;
  top: 8px;
  right: 8px;
`;