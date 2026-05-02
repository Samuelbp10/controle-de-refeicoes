import { useState } from 'react';
import { SectionList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Cabecalho } from '../../components/Cabecalho'; 
import { CardPorcentagem } from '../../components/CardPorcentagem';
// Mantenho o Button buscando da pasta correta que escolhi (Opção B)
import { Button } from '../../components/Button'; 
import { CartaoRefeicao } from '../../components/CartaoRefeicao';

// Mantenho o MealsTitle que escolhi (Opção B)
import { Container, MealsTitle, TituloData } from './styles';

export function Home() {
  // Criei um estado (useState) com dados fictícios (mockados) para conseguir visualizar a minha lista na tela.
  // Note que a SectionList exige que o array tenha um formato específico: um 'title' para o cabeçalho e um 'data' com os itens.
  const [refeicoes, setRefeicoes] = useState([
    {
      title: '12.08.22',
      data: [
        { hora: '20:00', nome: 'X-Tudo', status: 'SECUNDARIA' as const },
        { hora: '16:00', nome: 'Vitamina de banana', status: 'PRIMARIA' as const },
        { hora: '12:30', nome: 'Salada e frango', status: 'PRIMARIA' as const },
      ]
    },
    {
      title: '11.08.22',
      data: [
        { hora: '20:00', nome: 'Pizza', status: 'SECUNDARIA' as const },
        { hora: '12:30', nome: 'Strogonoff', status: 'PRIMARIA' as const },
      ]
    }
  ]);

  // Instancio o navigation para poder direcionar o usuário para as outras telas do aplicativo
  const navigation = useNavigation();

  function lidarComNovaRefeicao() {
    // Criei essa função para abrir a tela de nova refeição
    navigation.navigate('novaRefeicao');
  }

  function lidarComEstatisticas() {
    // Criei essa função para abrir a tela de estatísticas detalhadas
    navigation.navigate('estatisticas');
  }

  // Posicionei o cabeçalho e, logo abaixo, o meu card de porcentagem.
  // Passei "PRIMARIA" na cor para ele ficar verde, conforme o design de quem está dentro da dieta.
  return (
    <Container>
      <Cabecalho />
      
      {/* O CardPorcentagem aceita o onPress porque no meu arquivo de estilos eu criei ele como um TouchableOpacity */}
      <CardPorcentagem 
        titulo="90,86%" 
        subtitulo="das refeições dentro da dieta"
        cor="PRIMARIA"
        onPress={lidarComEstatisticas}
      />

      {/* Título e botão usando as nomenclaturas em inglês que escolhi */}
      <MealsTitle>Refeições</MealsTitle>
      
      {/* Aqui chamo o botão. Como o padrão dele já é o fundo escuro (SOLID), eu só preciso passar o título. Adicionei o evento de clique para navegar. */}
      <Button 
        title="+ Nova refeição" 
        onPress={lidarComNovaRefeicao} 
      />
      
      {/* Configurei a minha SectionList para renderizar os dados que criei ali em cima */}
      <SectionList 
        sections={refeicoes}
        keyExtractor={(item, index) => item.nome + index}
        renderItem={({ item }) => (
          <CartaoRefeicao 
            hora={item.hora}
            nome={item.nome}
            status={item.status}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <TituloData>{title}</TituloData>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }} // Adicionei um espaço no final para não colar no fundo da tela
      />
      
    </Container>
  );
}