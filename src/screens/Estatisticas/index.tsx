import { useState, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { CartaoEstatistica } from '../../components/CartaoEstatistica';

import { 
  Container, Cabecalho, BotaoVoltar, IconeVoltar, Conteudo, 
  Titulo, SessaoCardsLadoALado, CardMetade 
} from './styles';

import { buscarRefeicoes } from '../../storage/refeicaoStorage';

export function Estatisticas() {
  const navigation = useNavigation();
  
  const [estatisticas, setEstatisticas] = useState({
    percentual: '0,00', total: 0, naDieta: 0, foraDieta: 0, melhorSequencia: 0
  });

  useFocusEffect(
    useCallback(() => {
      async function carregarEstatisticas() {
        const dados = await buscarRefeicoes();
        
        const total = dados.length;
        const naDieta = dados.filter(r => r.estaNaDieta).length;
        const foraDieta = total - naDieta;
        const percentual = total === 0 ? '0,00' : ((naDieta / total) * 100).toFixed(2).replace('.', ',');

        let sequenciaAtual = 0;
        let melhorSequencia = 0;
        
        dados.forEach(refeicao => {
          if (refeicao.estaNaDieta) {
            sequenciaAtual++;
            if (sequenciaAtual > melhorSequencia) {
              melhorSequencia = sequenciaAtual;
            }
          } else {
            sequenciaAtual = 0;
          }
        });

        setEstatisticas({ percentual, total, naDieta, foraDieta, melhorSequencia });
      }
      carregarEstatisticas();
    }, [])
  );

  function lidarComVoltar() {
    navigation.goBack();
  }

  // Lógica profissional para respeitar a tipagem exata dos componentes
  const dietaPositiva = parseFloat(estatisticas.percentual.replace(',', '.')) >= 50;
  
  // O Container e o ícone esperam o feminino ('PRIMARIA' | 'SECUNDARIA')
  const corContainer = dietaPositiva ? 'PRIMARIA' : 'SECUNDARIA';
  
  // O CartaoEstatistica espera o masculino ('PRIMARIO' | 'SECUNDARIO')
  const corCartao = dietaPositiva ? 'PRIMARIO' : 'SECUNDARIO';

  return (
    <Container tipo={corContainer}>
      <Cabecalho>
        <BotaoVoltar onPress={lidarComVoltar}>
          <IconeVoltar tipo={corContainer} />
        </BotaoVoltar>
        <CartaoEstatistica 
          titulo={`${estatisticas.percentual}%`} 
          subtitulo="das refeições dentro da dieta"
          tipo={corCartao}
        />
      </Cabecalho>

      <Conteudo>
        <Titulo>Estatísticas gerais</Titulo>
        <CartaoEstatistica 
          titulo={String(estatisticas.melhorSequencia)} 
          subtitulo="melhor sequência de pratos dentro da dieta" 
          // Se não passar o tipo, ele assume a cor padrão cinza que você definiu no componente
        />
        <CartaoEstatistica 
          titulo={String(estatisticas.total)} 
          subtitulo="refeições registradas" 
        />

        <SessaoCardsLadoALado>
          <CardMetade>
            <CartaoEstatistica 
              titulo={String(estatisticas.naDieta)} 
              subtitulo="refeições dentro da dieta" 
              tipo="PRIMARIO"
            />
          </CardMetade>
          <CardMetade>
            <CartaoEstatistica 
              titulo={String(estatisticas.foraDieta)} 
              subtitulo="refeições fora da dieta" 
              tipo="SECUNDARIO"
            />
          </CardMetade>
        </SessaoCardsLadoALado>
      </Conteudo>
    </Container>
  );
}