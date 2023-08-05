import { ConversorMoedasModel } from './model';
import { ConversorMoedasView } from './view';

export class ConversorMoedasController {
  // Instância do modelo (ConversorMoedasModel)
  private model: ConversorMoedasModel; 
   // Instância da visualização (ConversorMoedasView)
  private view: ConversorMoedasView;  

  constructor() {
    // Inicialização da instância do modelo
    this.model = new ConversorMoedasModel(); 
    // Inicialização da instância da visualização
    this.view = new ConversorMoedasView();   
  }

  async converterMoeda() {
    while (true) {
      const moedaOrigem = this.view.solicitarEntrada('Digite a moeda de origem (3 caracteres): ');

      if (!moedaOrigem) {
        this.view.exibirMensagem('Conversão encerrada.');
        // Encerra o loop se o usuário não fornecer a moeda de origem
        break; 
      }

      if (moedaOrigem.length !== 3) {
        this.view.exibirMensagem('A moeda de origem deve ter exatamente 3 caracteres.\n');
        // Pula para a próxima iteração se a moeda de origem não tiver 3 caracteres
        continue; 
      }

      const moedaOrigemValida = await this.model.validarMoeda(moedaOrigem);
      if (!moedaOrigemValida) {
        this.view.exibirMensagem('A moeda de origem não é válida.\n');
        // Pula para a próxima iteração se a moeda de origem não for válida
        continue; 
      }

      const moedaDestino = this.view.solicitarEntrada('Digite a moeda de destino (3 caracteres): ');

      if (moedaDestino.length !== 3) {
        this.view.exibirMensagem('A moeda de destino deve ter exatamente 3 caracteres.\n');
        // Pula para a próxima iteração se a moeda de destino não tiver 3 caracteres
        continue; 
      }

      const moedaDestinoValida = await this.model.validarMoeda(moedaDestino);
      if (!moedaDestinoValida) {
        this.view.exibirMensagem('A moeda de destino não é válida.\n');
        // Pula para a próxima iteração se a moeda de destino não for válida
        continue; 
      }

      const valorMonetarioString = this.view.solicitarEntrada('Digite o valor monetario: ');
      const valorMonetario = parseFloat(valorMonetarioString);

      if (isNaN(valorMonetario) || valorMonetario <= 0) {
        this.view.exibirMensagem('O valor monetário deve ser um número positivo maior que zero.\n');
        // Pula para a próxima iteração se o valor monetário não for válido
        continue; 
      }

      try {
        const taxaConversao = await this.model.obterTaxaCambio(moedaOrigem, moedaDestino);
        const valorConvertido = valorMonetario * taxaConversao;
        // Exibe o resultado da conversão
        this.view.exibirResultado(valorConvertido, moedaDestino, taxaConversao, moedaOrigem); 
      } catch (erro) {
        // Exibe uma mensagem de erro de comunicação com a API
        this.view.exibirErroComunicacaoAPI(erro.message); 
      }
    }
  }
}
