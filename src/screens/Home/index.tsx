import { useState, useCallback } from 'react';
import { SectionList, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Cabecalho } from '../../components/Cabecalho'; 
import { CardPorcentagem } from '../../components/CardPorcentagem';
import { Button } from '../../components/Button'; 
import { CartaoRefeicao } from '../../components/CartaoRefeicao';

import { Container, MealsTitle, TituloData } from './styles';
import { buscarRefeicoes, RefeicaoStorageDTO } from '../../storage/refeicaoStorage';

interface DataListProps {
  title: string;
  data: RefeicaoStorageDTO[];
}

export function Home() {
  const [refeicoes, setRefeicoes] = useState<DataListProps[]>([]);
  // Estado para guardar o cálculo real da dieta
  const [percentual, setPercentual] = useState('0,00');
  
  const navigation = useNavigation();

  async function carregarRefeicoes() {
    try {
      const dados = await buscarRefeicoes();
      
      // Matemática profissional da dieta
      const totalRefeicoes = dados.length;
      const refeicoesNaDieta = dados.filter(refeicao => refeicao.estaNaDieta).length;
      const calculo = totalRefeicoes === 0 ? 0 : (refeicoesNaDieta / totalRefeicoes) * 100;
      
      // Formato para string com duas casas decimais e vírgula
      setPercentual(calculo.toFixed(2).replace('.', ','));
      
      const refeicoesAgrupadas: DataListProps[] = [];
      dados.forEach(refeicao => {
        const dataExiste = refeicoesAgrupadas.find(item => item.title === refeicao.data);
        if (dataExiste) {
          dataExiste.data.push(refeicao);
        } else {
          refeicoesAgrupadas.push({ title: refeicao.data, data: [refeicao] });
        }
      });

      setRefeicoes(refeicoesAgrupadas);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar as refeições.');
    }
  }

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
    navigation.navigate('detalhes', { refeicao });
  }

  // Lógica para cor do card: Se o percentual for menor que 50%, fica vermelho.
  const corDoCard = parseFloat(percentual.replace(',', '.')) >= 50 ? 'PRIMARIA' : 'SECUNDARIA';

  return (
    <Container>
      <Cabecalho />
      <CardPorcentagem 
        titulo={`${percentual}%`} 
        subtitulo="das refeições dentro da dieta"
        cor={corDoCard}
        onPress={lidarComEstatisticas}
      />
      <MealsTitle>Refeições</MealsTitle>
      <Button title="+ Nova refeição" onPress={lidarComNovaRefeicao} />
      <SectionList 
        sections={refeicoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartaoRefeicao 
            hora={item.hora}
            nome={item.nome}
            status={item.estaNaDieta ? 'PRIMARIA' : 'SECUNDARIA'}
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
            Nenhuma refeição cadastrada.
          </MealsTitle>
        )}
      />
    </Container>
  );
}