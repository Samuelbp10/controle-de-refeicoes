import { useState } from 'react';
import { SectionList } from 'react-native';
// Importei o hook de navegação do React Navigation
import { useNavigation } from '@react-navigation/native'; 

import { Cabecalho } from '../../components/Cabecalho'; 
import { CardPorcentagem } from '../../components/CardPorcentagem';
import { Button } from '../../components/Button'; 
import { CartaoRefeicao } from '../../components/CartaoRefeicao';

import { Container, MealsTitle, TituloData } from './styles';

export function Home() {
  // Instanciei a navegação para poder acionar a troca de telas através de botões
  const navigation = useNavigation();

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

  // Criei essa função para ser disparada quando o usuário clicar no Card
  function handleAbrirEstatisticas() {
    navigation.navigate('estatisticas');
  }

  // Posicionei o cabeçalho e, logo abaixo, o meu card de porcentagem.
  // Passei "PRIMARIA" na cor para ele ficar verde, conforme o design de quem está dentro da dieta.
  return (
    <Container>
      <Cabecalho />
      
      {/* Adicionei o onPress aqui passando a minha função de navegação */}
      <CardPorcentagem 
        titulo="90,86%" 
        subtitulo="das refeições dentro da dieta"
        cor="PRIMARIA"
        onPress={handleAbrirEstatisticas}
      />

      <MealsTitle>Refeições</MealsTitle>
      
      {/* Aqui chamo o botão. Como o padrão dele já é o fundo escuro (SOLID), eu só preciso passar o título. */}
      <Button title="+ Nova refeição" />
      
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