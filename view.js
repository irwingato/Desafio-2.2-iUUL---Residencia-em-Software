"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversorMoedasView = void 0;
var readlineSync = require("readline-sync");
var ConversorMoedasView = /** @class */ (function () {
    function ConversorMoedasView() {
    }
    // Método para solicitar uma entrada do usuário e retornar como string
    ConversorMoedasView.prototype.solicitarEntrada = function (mensagem) {
        return readlineSync.question(mensagem);
    };
    // Método para exibir o resultado da conversão de moedas no console
    ConversorMoedasView.prototype.exibirResultado = function (resultado, moedaDestino, taxaConversao, moedaOrigem) {
        console.log("\nValor convertido: ".concat(resultado.toFixed(2), " ").concat(moedaDestino));
        console.log("Taxa de convers\u00E3o: 1 ".concat(moedaOrigem, " = ").concat(taxaConversao.toFixed(6), " ").concat(moedaDestino, "\n"));
    };
    // Método para exibir um erro de comunicação com a API no console
    ConversorMoedasView.prototype.exibirErroComunicacaoAPI = function (erro) {
        console.error('Erro na comunicação com a API:', erro.message);
    };
    // Método para exibir um erro de conversão no console
    ConversorMoedasView.prototype.exibirErroConversao = function () {
        console.log('As moedas devem ter exatamente 3 caracteres e o valor de entrada deve ser um número positivo maior que zero.\n');
    };
    return ConversorMoedasView;
}());
exports.ConversorMoedasView = ConversorMoedasView;
