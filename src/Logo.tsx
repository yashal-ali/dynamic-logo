import { useEffect, useState } from "react";

let Image;
try {
  Image = require("next/image").default;
} catch (error) {
  console.warn("next/image not found, using fallback <img>");
  Image = "img"; // Fallback to <img> if next/image is unavailable
}

const Logo = ({ src, alt }: { src: string; alt: string }) => {
  return <Image src={src} alt={alt} width={100} height={50} />;
};

export default Logo;
