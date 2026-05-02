import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Estatisticas } from '../screens/Estatisticas';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  // Criei as rotas do meu aplicativo. O headerShown: false tira o cabeçalho padrão do React Navigation que ocuparia espaço no topo da tela.
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="inicio"
        component={Home}
      />
      {/* Registrei a tela de estatísticas aqui para o aplicativo saber que ela existe */}
      <Screen 
        name="estatisticas"
        component={Estatisticas}
      />
    </Navigator>
  );
}