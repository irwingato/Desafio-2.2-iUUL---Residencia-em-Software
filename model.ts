import axios from 'axios';

// Interface que define a estrutura da resposta da API de taxa de câmbio
interface RespostaTaxaCambio {
  result: number;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
}

export class ConversorMoedasModel {
  // Método assíncrono para obter a taxa de câmbio entre duas moedas
  async obterTaxaCambio(moedaOrigem: string, moedaDestino: string): Promise<number> {
    // Constrói a URL da API com as moedas de origem e destino
    const url = `https://api.exchangerate.host/convert?from=${moedaOrigem}&to=${moedaDestino}`;

    // Faz uma requisição GET para a API de taxa de câmbio
    const resposta = await axios.get<RespostaTaxaCambio>(url);

    // Retorna o resultado da taxa de câmbio da resposta da API
    return resposta.data.result;
  }
}