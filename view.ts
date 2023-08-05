import * as readlineSync from 'readline-sync';

export class ConversorMoedasView {
  // Método para solicitar uma entrada do usuário e retornar como string
  solicitarEntrada(mensagem: string): string {
    return readlineSync.question(mensagem); // Solicita uma entrada do usuário e retorna a resposta como string
  }

  // Método para exibir o resultado da conversão de moedas no console
  exibirResultado(resultado: number, moedaDestino: string, taxaConversao: number, moedaOrigem: string) {
    console.log(`\nValor convertido: ${resultado.toFixed(2)} ${moedaDestino}`); // Exibe o valor convertido e a moeda de destino formatados
    console.log(`Taxa de conversão: 1 ${moedaOrigem} = ${taxaConversao.toFixed(6)} ${moedaDestino}\n`); // Exibe a taxa de conversão entre as moedas de origem e destino
  }

  // Método para exibir um erro de comunicação com a API no console
  exibirErroComunicacaoAPI(erro: Error) {
    console.error('Erro na comunicação com a API:', erro.message); // Exibe uma mensagem de erro de comunicação com a API no console
  }

  // Método para exibir uma mensagem no console
  exibirMensagem(mensagem: string) {
    console.log(mensagem); // Exibe uma mensagem no console
  }
}
