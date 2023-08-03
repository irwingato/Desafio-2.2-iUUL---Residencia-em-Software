"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("./controller");
// Execução da aplicação
function main() {
    var controller = new controller_1.ConversorMoedasController();
    controller.converterMoeda();
}
main();
