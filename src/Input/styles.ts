import styled from 'styled-components/native';
import { TextInput } from 'react-native';

// Criei uma tipagem para avisar ao styled-components que ele pode receber
// uma propriedade chamada 'isActive' (para saber se o usuário está digitando nele)
type Props = {
  isActive?: boolean;
};

// Aqui estendi o TextInput nativo do React Native.
// Isso significa que o Container É um TextInput, mas com "superpoderes" visuais.
export const Container = styled(TextInput)<Props>`
  width: 100%;
  min-height: 48px;
  max-height: 48px;

  /* Cores e fontes puxadas direto do nosso arquivo theme/index.ts */
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

  border-radius: 6px;
  border-width: 1px;
  
  /* LÓGICA DE UX: Se o input estiver ativo (clicado), a borda fica mais escura.
     Se não, fica com a cor cinza clarinha padrão. */
  border-color: ${({ theme, isActive }) => 
    isActive ? theme.COLORS.GRAY_3 : theme.COLORS.GRAY_5};
  
  padding: 14px;
`;