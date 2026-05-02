import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Estatisticas } from '../screens/Estatisticas';
import { NovaRefeicao } from '../screens/NovaRefeicao';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  // Configuro o Navigator com headerShown: false para esconder o cabeçalho padrão do sistema, pois criei meus próprios cabeçalhos no design.
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="inicio" component={Home} />
      <Screen name="estatisticas" component={Estatisticas} />
      {/* Adicionei a nova rota para a tela de criação de refeições */}
      <Screen name="novaRefeicao" component={NovaRefeicao} />
    </Navigator>
  );
}