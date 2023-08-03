import { ConversorMoedasModel } from './model';
import { ConversorMoedasView } from './view';

export class ConversorMoedasController {
  private model: ConversorMoedasModel;
  private view: ConversorMoedasView;

  constructor() {
    this.model = new ConversorMoedasModel();
    this.view = new ConversorMoedasView();
  }

  async converterMoeda() {
    while (true) {
      // Solicita a moeda de origem ao usuário
      const moedaOrigem = this.view.solicitarEntrada('Digite a moeda de origem (3 caracteres): ');

      // Se o usuário não fornecer uma moeda de origem, encerra a conversão
      if (!moedaOrigem) {
        this.view.exibirMensagem('Conversão encerrada.');
        break;
      }

      // Solicita a moeda de destino ao usuário
      const moedaDestino = this.view.solicitarEntrada('Digite a moeda de destino (3 caracteres): ');

      // Solicita o valor monetário ao usuário
      const valorMonetarioString = this.view.solicitarEntrada('Digite o valor monetario: ');

      // Converte o valor monetário para um número de ponto flutuante
      const valorMonetario = parseFloat(valorMonetarioString) || 0;

      // Valida o valor monetário
      if (valorMonetario <= 0) {
        this.view.exibirMensagem('O valor monetário deve ser um número positivo maior que zero.\n');
        continue;
      }

      try {
        // Obtém a taxa de câmbio do modelo ConversorMoedasModel
        const taxaConversao = await this.model.obterTaxaCambio(moedaOrigem, moedaDestino);

        // Calcula o valor convertido multiplicando o valor monetário pela taxa de câmbio
        const valorConvertido = valorMonetario * taxaConversao;

        // Exibe o resultado da conversão na visualização ConversorMoedasView
        this.view.exibirResultado(valorConvertido, moedaDestino, taxaConversao, moedaOrigem);
      } catch (erro) {
        // Se ocorrer um erro na comunicação com a API, exibe uma mensagem de erro na visualização
        this.view.exibirErroComunicacaoAPI(erro);
      }
    }
  }
}