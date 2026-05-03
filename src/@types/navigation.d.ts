export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      inicio: undefined;
      estatisticas: undefined;
      novaRefeicao: undefined;
      // Aviso ao TypeScript que a rota feedback precisa receber um boolean
      feedback: {
        estaNaDieta: boolean;
      };
      // Aproveito e já deixo a rota de detalhes tipada corretamente também
      detalhes: {
        refeicao: {
          nome: string;
          descricao: string;
          data: string;
          hora: string;
          estaNaDieta: boolean;
        };
      };
    }
  }
}