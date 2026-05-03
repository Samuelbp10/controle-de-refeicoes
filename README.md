# 🍏 Controle de Dieta (Daily Diet)

Aplicativo mobile desenvolvido para o monitoramento diário de dieta, permitindo o cadastro, edição e exclusão de refeições. O app também apresenta estatísticas detalhadas sobre o desempenho do usuário, ajudando a manter o foco no objetivo.

## 🚀 Funcionalidades

- **Home:** Listagem de todas as refeições cadastradas agrupadas por data.
- **Estatísticas:** Cálculo dinâmico do percentual de refeições na dieta, melhor sequência de pratos saudáveis e total de registros.
- **Gerenciamento de Refeições:** Cadastro de nova refeição (com validação de formulário e máscaras de data/hora), edição de registros existentes e exclusão com modal de confirmação customizado.
- **Feedback Visual:** Telas de sucesso ou incentivo baseadas na escolha de manter ou sair da dieta.
- **Armazenamento Local:** Todos os dados são salvos no próprio dispositivo utilizando a estratégia de persistência com imutabilidade.

## 💻 Tecnologias e Bibliotecas Utilizadas

O projeto foi construído utilizando as seguintes tecnologias para garantir uma arquitetura moderna e escalável:

- **[React Native](https://reactnative.dev/)** com **[Expo](https://expo.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)** para tipagem estática e segurança do código.
- **[Styled-Components](https://styled-components.com/)** para estilização in-js baseada em temas globais.
- **[React Navigation](https://reactnavigation.org/)** para o roteamento e tipagem de rotas de navegação.
- **[AsyncStorage](https://react-native-async-storage.github.io/async-storage/)** para o banco de dados local.
- **[Phosphor Icons](https://phosphoricons.com/)** para a iconografia vetorial.

## 🛠️ Como executar o projeto

1. Clone este repositório no seu computador.
2. Abra o terminal na pasta do projeto e instale as dependências executando o comando:
   ```bash
   npm install