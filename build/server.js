"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var api_1 = require("./api/api");
var config = require('./config/env/config')();
var server = http.createServer(api_1.default);
server.listen(config.serverPort);
server.on('listening', function () { console.log("Servidor est\u00E1 rodando na porta " + config.serverPort); });
server.on('error', function (error) { console.log("Ocorreu um erro " + error); });
