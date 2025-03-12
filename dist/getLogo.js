"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogos = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getLogos = () => {
    const folderPath = path_1.default.join(process.cwd(), "public/assets/img/logo");
    try {
        const files = fs_1.default.readdirSync(folderPath);
        return files.filter(file => /\.(png|jpg|jpeg|svg|webp)$/i.test(file));
    }
    catch (error) {
        console.error("Error reading logo directory:", error);
        return [];
    }
};
exports.getLogos = getLogos;
