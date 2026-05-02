import { ThemeProvider } from 'styled-components/native';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { ActivityIndicator, View } from 'react-native';

import theme from './src/theme';
import { Routes } from './src/routes';

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
      {/* Aqui eu renderizo as minhas Rotas, que por padrão vão abrir a tela 'inicio' primeiro */}
      <Routes />
    </ThemeProvider>
  );
}