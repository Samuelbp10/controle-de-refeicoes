import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Estatisticas } from '../screens/Estatisticas';
import { NovaRefeicao } from '../screens/NovaRefeicao';
import { Feedback } from '../screens/Feedback';
import { DetalhesRefeicao } from '../screens/DetalhesRefeicao';
import { EditarRefeicao } from '../screens/EditarRefeicao'; // <-- A importação tem que estar aqui

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="inicio" component={Home} />
      <Screen name="estatisticas" component={Estatisticas} />
      <Screen name="novaRefeicao" component={NovaRefeicao} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="detalhes" component={DetalhesRefeicao} />
      {/* A tela DEVE estar declarada aqui dentro do Navigator */}
      <Screen name="editarRefeicao" component={EditarRefeicao} />
    </Navigator>
  );
}