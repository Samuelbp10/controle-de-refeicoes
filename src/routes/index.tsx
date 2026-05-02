import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { AppRoutes } from './app.routes';

export function Routes() {
  const { COLORS } = useTheme();

  // Envolvi as rotas com uma View com a cor de fundo do app. Isso evita um "piscar" branco indesejado (glitch) durante a transição de telas no celular.
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_7 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}