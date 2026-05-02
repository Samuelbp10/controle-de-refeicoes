import { ThemeProvider } from 'styled-components/native';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { ActivityIndicator, View } from 'react-native';

import theme from './src/theme';

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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.COLORS.GRAY_7 }}>
        {/* Aqui entrarão nossas rotas de navegação em breve */}
      </View>
    </ThemeProvider>
  );
}