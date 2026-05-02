import { ThemeProvider } from 'styled-components/native';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { ActivityIndicator, View } from 'react-native';

import theme from './src/theme';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.COLORS.GRAY_7 }}>
        <ActivityIndicator color={theme.COLORS.GREEN_DARK} />
      </View>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      {/* Aqui eu renderizo a minha tela Inicial (Home). Mais para frente, isso será substituído pelas Rotas (React Navigation) */}
      <Home />
    </ThemeProvider>
  );
}