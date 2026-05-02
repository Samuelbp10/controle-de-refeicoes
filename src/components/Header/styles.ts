import styled from 'styled-components/native';

// Criei esse Container com flexDirection row para alinhar a logo e a foto de perfil lado a lado, em extremos opostos da tela.
export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  /* Coloquei uma margem no topo para o cabeçalho não ficar colado na barra de status do celular */
  margin-top: 32px;
  margin-bottom: 32px;
`;

// Fiz um quadrado arredondado simples para simular minha foto de perfil por enquanto.
// Depois posso trocar por um componente de Imagem nativo do React Native.
export const Profile = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_1};
`;

// Criei esse texto temporário para a Logo. Quando eu baixar a imagem da logo do Figma, eu substituo esse texto.
export const LogoText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;