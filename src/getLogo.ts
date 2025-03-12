import fs from "fs";
import path from "path";

export const getLogos = (): string[] => {
  const folderPath = path.join(process.cwd(), "public/assets/img/logo");

  try {
    const files = fs.readdirSync(folderPath);
    return files.filter(file => /\.(png|jpg|jpeg|svg|webp)$/i.test(file));
  } catch (error) {
    console.error("Error reading logo directory:", error);
    return [];
  }
};
