import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { Button } from '../../components/Button'; 

import { 
  Container, Cabecalho, BotaoVoltar, IconeVoltar, TituloCabecalho,
  Conteudo, Label, InputForm, LinhaDupla, Coluna, BotaoDieta,
  StatusCor, TextoBotaoDieta, Rodape
} from './styles';

// Importo as funções do meu gerenciador de armazenamento e a tipagem
import { salvarRefeicao, RefeicaoStorageDTO } from '../../storage/refeicaoStorage';

export function NovaRefeicao() {
  const navigation = useNavigation();
  
  // Utilizo o useState para controlar o valor de cada campo do meu formulário
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [estaNaDieta, setEstaNaDieta] = useState<boolean | null>(null);

  function lidarComVoltar() {
    navigation.goBack();
  }

  async function lidarComCadastro() {
    try {
      // Implementei uma validação básica para garantir que todos os campos obrigatórios sejam preenchidos
      if (!nome.trim() || !descricao.trim() || !data.trim() || !hora.trim() || estaNaDieta === null) {
        return Alert.alert('Nova Refeição', 'Por favor, preencha todos os campos e informe se está na dieta.');
      }

      // Crio o objeto da nova refeição, gerando um ID único baseado no timestamp atual
      const novaRefeicao: RefeicaoStorageDTO = {
        id: Date.now().toString(),
        nome,
        descricao,
        data,
        hora,
        estaNaDieta
      };

      // Chamo a função que salva no AsyncStorage
      await salvarRefeicao(novaRefeicao);

      // Após salvar com sucesso, redireciono para a tela de feedback correspondente
      navigation.navigate('feedback', { estaNaDieta });
      
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar a nova refeição.');
    }
  }

  return (
    <Container>
      <Cabecalho>
        <BotaoVoltar onPress={lidarComVoltar}>
          <IconeVoltar />
        </BotaoVoltar>
        <TituloCabecalho>Nova refeição</TituloCabecalho>
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
              value={data}
              onChangeText={setData}
            />
          </Coluna>
          <Coluna>
            <Label>Hora</Label>
            <InputForm 
              placeholder="20:00" 
              value={hora}
              onChangeText={setHora}
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
          <Button title="Cadastrar refeição" onPress={lidarComCadastro} />
        </Rodape>
      </Conteudo>
    </Container>
  );
}