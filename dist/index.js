import { getLogos } from "./getLogo.js";
export { getLogos } from "./getLogo.js"; // Add ".js"
export { default as Logo } from "./Logo.js"; // Add ".js"
const logos = getLogos();
console.log(logos);
