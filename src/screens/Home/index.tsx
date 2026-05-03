import { useState, useCallback } from 'react';
import { SectionList, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Cabecalho } from '../../components/Cabecalho'; 
import { CardPorcentagem } from '../../components/CardPorcentagem';
import { Button } from '../../components/Button'; 
import { CartaoRefeicao } from '../../components/CartaoRefeicao';

import { Container, MealsTitle, TituloData } from './styles';
import { buscarRefeicoes, RefeicaoStorageDTO } from '../../storage/refeicaoStorage';

// Criei essa interface para tipar o formato exato que a SectionList exige
interface DataListProps {
  title: string;
  data: RefeicaoStorageDTO[];
}

export function Home() {
  const [refeicoes, setRefeicoes] = useState<DataListProps[]>([]);
  const navigation = useNavigation();

  // Função profissional para buscar e agrupar os dados do AsyncStorage
  async function carregarRefeicoes() {
    try {
      const dados = await buscarRefeicoes();
      
      // Lógica para agrupar as refeições por data, exigência perfeita para a SectionList
      const refeicoesAgrupadas: DataListProps[] = [];
      
      dados.forEach(refeicao => {
        const dataExiste = refeicoesAgrupadas.find(item => item.title === refeicao.data);
        
        if (dataExiste) {
          dataExiste.data.push(refeicao);
        } else {
          refeicoesAgrupadas.push({
            title: refeicao.data,
            data: [refeicao]
          });
        }
      });

      setRefeicoes(refeicoesAgrupadas);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar as refeições.');
    }
  }

  // O useFocusEffect garante que os dados sejam recarregados sempre que a tela Home ganhar foco
  useFocusEffect(
    useCallback(() => {
      carregarRefeicoes();
    }, [])
  );

  function lidarComNovaRefeicao() {
    navigation.navigate('novaRefeicao');
  }

  function lidarComEstatisticas() {
    navigation.navigate('estatisticas');
  }

  function lidarComDetalhes(refeicao: RefeicaoStorageDTO) {
    // Passo o objeto inteiro da refeição para a tela de detalhes exibir as informações corretas
    navigation.navigate('detalhes', { refeicao });
  }

  return (
    <Container>
      <Cabecalho />
      
      <CardPorcentagem 
        titulo="90,86%" // Deixei estático por enquanto, se der tempo fazemos o cálculo dinâmico
        subtitulo="das refeições dentro da dieta"
        cor="PRIMARIA"
        onPress={lidarComEstatisticas}
      />

      <MealsTitle>Refeições</MealsTitle>
      
      <Button 
        title="+ Nova refeição" 
        onPress={lidarComNovaRefeicao} 
      />
      
      <SectionList 
        sections={refeicoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartaoRefeicao 
            hora={item.hora}
            nome={item.nome}
            status={item.estaNaDieta ? 'PRIMARIA' : 'SECUNDARIA'}
            // Adicionei o onPress para abrir os detalhes da refeição clicada
            onPress={() => lidarComDetalhes(item)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <TituloData>{title}</TituloData>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          refeicoes.length === 0 && { flex: 1, justifyContent: 'center' }
        ]}
        ListEmptyComponent={() => (
          <MealsTitle style={{ textAlign: 'center', color: '#aaa' }}>
            Nenhuma refeição cadastrada ainda.
          </MealsTitle>
        )}
      />
      
    </Container>
  );
}