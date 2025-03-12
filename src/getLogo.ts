import fs from "fs";
import path from "path";

/**
 * Fetches logo file names from a specified folder.
 * @param folderPath - The relative path to the logos folder.
 * @returns An array of logo file names.
 */
export function getLogos(folderPath: string = "public/assets/img/home1/logo"): string[] {
  try {
    const directoryPath = path.join(process.cwd(), folderPath);
    const files = fs.readdirSync(directoryPath);
    return files.filter(file => /\.(png|jpg|jpeg|svg|webp)$/i.test(file));
  } catch (error) {
    console.error("Error reading logo directory:", error);
    return [];
  }
}
