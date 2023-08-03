"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversorMoedasController = void 0;
var model_1 = require("./model");
var view_1 = require("./view");
var ConversorMoedasController = /** @class */ (function () {
    function ConversorMoedasController() {
        // Cria uma instância do modelo ConversorMoedasModel
        this.model = new model_1.ConversorMoedasModel();
        // Cria uma instância da visualização ConversorMoedasView
        this.view = new view_1.ConversorMoedasView();
    }
    ConversorMoedasController.prototype.converterMoeda = function () {
        return __awaiter(this, void 0, void 0, function () {
            var moedaOrigem, moedaDestino, valorMonetarioString, valorMonetario, taxaConversao, valorConvertido, erro_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!true) return [3 /*break*/, 5];
                        moedaOrigem = this.view.solicitarEntrada('Digite a moeda de origem (3 caracteres): ');
                        // Se o usuário não fornecer uma moeda de origem, sai do loop
                        if (!moedaOrigem)
                            return [3 /*break*/, 5];
                        moedaDestino = this.view.solicitarEntrada('Digite a moeda de destino (3 caracteres): ');
                        valorMonetarioString = this.view.solicitarEntrada('Digite o valor monetario: ');
                        valorMonetario = parseFloat(valorMonetarioString) || 0;
                        // Valida a moeda de origem, a moeda de destino e o valor monetário
                        if (!this.validarMoeda(moedaOrigem) || !this.validarMoeda(moedaDestino) || valorMonetario <= 0) {
                            // Se alguma validação falhar, exibe uma mensagem de erro e continua o loop
                            this.view.exibirErroConversao();
                            return [3 /*break*/, 0];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.model.obterTaxaCambio(moedaOrigem, moedaDestino)];
                    case 2:
                        taxaConversao = _a.sent();
                        valorConvertido = valorMonetario * taxaConversao;
                        // Exibe o resultado da conversão na visualização ConversorMoedasView
                        this.view.exibirResultado(valorConvertido, moedaDestino, taxaConversao, moedaOrigem);
                        return [3 /*break*/, 4];
                    case 3:
                        erro_1 = _a.sent();
                        // Se ocorrer um erro na comunicação com a API, exibe uma mensagem de erro na visualização
                        this.view.exibirErroComunicacaoAPI(erro_1);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 0];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ConversorMoedasController.prototype.validarMoeda = function (moeda) {
        // Valida se a moeda tem exatamente 3 caracteres
        return moeda.length === 3;
    };
    return ConversorMoedasController;
}());
exports.ConversorMoedasController = ConversorMoedasController;
