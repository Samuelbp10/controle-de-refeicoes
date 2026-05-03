import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Estatisticas } from '../screens/Estatisticas';
import { NovaRefeicao } from '../screens/NovaRefeicao';
import { Feedback } from '../screens/Feedback';
import { DetalhesRefeicao } from '../screens/DetalhesRefeicao';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  // Configuro o Navigator com headerShown: false para esconder o cabeçalho padrão do sistema, pois criei meus próprios cabeçalhos no design.
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="inicio" component={Home} />
      <Screen name="estatisticas" component={Estatisticas} />
      <Screen name="novaRefeicao" component={NovaRefeicao} />
      {/* Rota para a tela de feedback de sucesso/falha da dieta */}
      <Screen name="feedback" component={Feedback} />
      {/* Rota para visualizar os detalhes, editar ou excluir uma refeição */}
      <Screen name="detalhes" component={DetalhesRefeicao} />
    </Navigator>
  );
}