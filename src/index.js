"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogos = exports.Logo = void 0;
const getLogo_1 = require("./getLogo");
var Logo_1 = require("./Logo");
Object.defineProperty(exports, "Logo", { enumerable: true, get: function () { return __importDefault(Logo_1).default; } });
var getLogo_2 = require("./getLogo");
Object.defineProperty(exports, "getLogos", { enumerable: true, get: function () { return getLogo_2.getLogos; } });
const logos = (0, getLogo_1.getLogos)();
console.log(logos);
