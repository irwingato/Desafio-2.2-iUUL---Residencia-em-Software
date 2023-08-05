import axios from 'axios';

interface RespostaTaxaCambio {
  result: number;
}

export class ConversorMoedasModel {
  // Método assíncrono para validar se uma moeda é válida
  async validarMoeda(moeda: string): Promise<boolean> {
    const url = 'https://api.exchangerate.host/symbols';
    const response = await axios.get<{ symbols: { [key: string]: string } }>(url);
    const symbols = response.data.symbols;
    // Verifica se a moeda está na lista de símbolos retornada pela API
    return symbols.hasOwnProperty(moeda); 
  }

  // Método assíncrono para obter a taxa de câmbio entre duas moedas
  async obterTaxaCambio(moedaOrigem: string, moedaDestino: string): Promise<number> {
    // Verifica se as moedas de origem e destino têm exatamente 3 caracteres
    if (moedaOrigem.length !== 3 || moedaDestino.length !== 3) {
      throw new Error('Moedas devem ter exatamente 3 caracteres.');
    }

    const url = `https://api.exchangerate.host/convert?from=${moedaOrigem}&to=${moedaDestino}`;

    try {
      // Faz uma requisição GET para a API de taxa de câmbio
      const resposta = await axios.get<RespostaTaxaCambio>(url);

      // Retorna o resultado da taxa de câmbio da resposta da API
      return resposta.data.result;
    } catch (erro) {
      // Se ocorrer um erro na comunicação com a API, lança um erro com uma mensagem apropriada
      throw new Error('Erro na comunicação com a API.');
    }
  }
}
