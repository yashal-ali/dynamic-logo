"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const image_1 = __importDefault(require("next/image"));
const navigation_1 = require("next/navigation");
const logoBasePath = "/assets/img/home1/logo/";
const Logo = () => {
    const searchParams = (0, navigation_1.useSearchParams)();
    const logoNumber = searchParams.get("logoNumber") || "1";
    return ((0, jsx_runtime_1.jsx)(image_1.default, { src: `${logoBasePath}Logo-v${logoNumber}.png`, alt: `Logo ${logoNumber}`, width: 100, height: 50 }));
};
exports.default = Logo;
