import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  // Criei as rotas do meu aplicativo. O headerShown: false tira o cabeçalho padrão do React Navigation que ocuparia espaço no topo da tela.
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="inicio"
        component={Home}
      />
      {/* As outras telas serão adicionadas aqui conforme eu for criando */}
    </Navigator>
  );
}