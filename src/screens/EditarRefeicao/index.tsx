import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import { Button } from '../../components/Button'; 

import { 
  Container, Cabecalho, BotaoVoltar, IconeVoltar, TituloCabecalho,
  Conteudo, Label, InputForm, LinhaDupla, Coluna, BotaoDieta,
  StatusCor, TextoBotaoDieta, Rodape
} from './styles';

import { atualizarRefeicao, RefeicaoStorageDTO } from '../../storage/refeicaoStorage';
// Reutilizo as funções de máscara aqui na tela de edição também para manter o padrão
import { maskDate, maskTime } from '../../utils/masks';

type RouteParams = {
  refeicao: RefeicaoStorageDTO;
}

export function EditarRefeicao() {
  const navigation = useNavigation();
  const route = useRoute();
  
  // Recebo a refeição antiga via rota
  const { refeicao } = route.params as RouteParams;
  
  // Inicializo o formulário já com os dados que vieram da tela de detalhes
  const [nome, setNome] = useState(refeicao.nome);
  const [descricao, setDescricao] = useState(refeicao.descricao);
  const [data, setData] = useState(refeicao.data);
  const [hora, setHora] = useState(refeicao.hora);
  const [estaNaDieta, setEstaNaDieta] = useState<boolean>(refeicao.estaNaDieta);

  function lidarComVoltar() {
    navigation.goBack();
  }

  async function lidarComAtualizacao() {
    try {
      // Mantenho a validação para evitar que o usuário apague tudo e tente salvar vazio
      if (!nome.trim() || !descricao.trim() || !data.trim() || !hora.trim()) {
        return Alert.alert('Editar Refeição', 'Por favor, preencha todos os campos.');
      }

      // Crio o objeto mantendo o mesmo ID, mas com os dados que o usuário possa ter alterado
      const refeicaoEditada: RefeicaoStorageDTO = {
        id: refeicao.id,
        nome,
        descricao,
        data,
        hora,
        estaNaDieta
      };

      // Chamo a função profissional de atualizar no storage
      await atualizarRefeicao(refeicaoEditada);

      // Redireciono para a Home limpa para forçar o recarregamento dos dados atualizados
      navigation.navigate('inicio');
      
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar a refeição.');
    }
  }

  return (
    <Container>
      <Cabecalho>
        <BotaoVoltar onPress={lidarComVoltar}>
          <IconeVoltar />
        </BotaoVoltar>
        <TituloCabecalho>Editar refeição</TituloCabecalho>
      </Cabecalho>

      <Conteudo>
        <Label>Nome</Label>
        <InputForm 
          value={nome}
          onChangeText={setNome}
        />

        <Label>Descrição</Label>
        <InputForm 
          multiline 
          style={{ height: 120, textAlignVertical: 'top' }} 
          value={descricao}
          onChangeText={setDescricao}
        />

        <LinhaDupla>
          <Coluna>
            <Label>Data</Label>
            <InputForm 
              placeholder="12/08/2022" 
              keyboardType="numeric"
              maxLength={10}
              value={data}
              // Aplico a formatação em tempo real na edição
              onChangeText={(texto) => setData(maskDate(texto))}
            />
          </Coluna>
          <Coluna>
            <Label>Hora</Label>
            <InputForm 
              placeholder="20:00" 
              keyboardType="numeric"
              maxLength={5}
              value={hora}
              // Aplico a formatação de hora
              onChangeText={(texto) => setHora(maskTime(texto))}
            />
          </Coluna>
        </LinhaDupla>

        <Label>Está dentro da dieta?</Label>
        <LinhaDupla>
          <BotaoDieta 
            tipo="SIM" 
            ativo={estaNaDieta === true}
            onPress={() => setEstaNaDieta(true)}
          >
            <StatusCor tipo="SIM" />
            <TextoBotaoDieta>Sim</TextoBotaoDieta>
          </BotaoDieta>

          <BotaoDieta 
            tipo="NAO" 
            ativo={estaNaDieta === false}
            onPress={() => setEstaNaDieta(false)}
          >
            <StatusCor tipo="NAO" />
            <TextoBotaoDieta>Não</TextoBotaoDieta>
          </BotaoDieta>
        </LinhaDupla>

        <Rodape>
          {/* Mudei o texto do botão conforme o design */}
          <Button title="Salvar alterações" onPress={lidarComAtualizacao} />
        </Rodape>
      </Conteudo>
    </Container>
  );
}