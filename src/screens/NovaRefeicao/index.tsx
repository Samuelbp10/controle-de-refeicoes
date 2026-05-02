import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button'; // Usando a opção B que você escolheu lá atrás

import { 
  Container, 
  Cabecalho, 
  BotaoVoltar, 
  IconeVoltar, 
  TituloCabecalho,
  Conteudo,
  Label,
  InputForm,
  LinhaDupla,
  Coluna,
  BotaoDieta,
  StatusCor,
  TextoBotaoDieta,
  Rodape
} from './styles';

export function NovaRefeicao() {
  const navigation = useNavigation();
  
  // Utilizo o useState para controlar qual botão o usuário selecionou (Sim ou Não)
  const [estaNaDieta, setEstaNaDieta] = useState<boolean | null>(null);

  function lidarComVoltar() {
    // Aciono o goBack para retornar à Home e cancelar a criação
    navigation.goBack();
  }

  function lidarComCadastro() {
    // Aqui no futuro ficará a lógica de salvar os dados. 
    // Por enquanto, apenas navego de volta simulando o sucesso.
    navigation.goBack();
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
        <InputForm />

        <Label>Descrição</Label>
        {/* Adicionei multiline e modifiquei o alinhamento do texto para o topo para ficar igual uma área de texto grande */}
        <InputForm 
          multiline 
          style={{ height: 120, textAlignVertical: 'top' }} 
        />

        <LinhaDupla>
          <Coluna>
            <Label>Data</Label>
            <InputForm placeholder="12/08/2022" />
          </Coluna>
          <Coluna>
            <Label>Hora</Label>
            <InputForm placeholder="20:00" />
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
          {/* Reutilizei meu componente Button padrão para o cadastro */}
          <Button title="Cadastrar refeição" onPress={lidarComCadastro} />
        </Rodape>
      </Conteudo>
    </Container>
  );
}