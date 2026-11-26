import sammal from "@/assets/sammal.jpg";
import aalto from "@/assets/aalto.jpg";
import lehti from "@/assets/lehti.jpg";
import lahjaPieni from "@/assets/lahja-pieni.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: "Ruukunsuojat" | "Kasvikoristeet" | "Kasvialustat" | "Lahjapaketit";
  sizes?: string[];
  colors?: string[];
  image?: string;
  alt: string;
};

export const products: Product[] = [
  { id: "sammal", name: "Sammal-ruukunsuoja", price: 19.9, category: "Ruukunsuojat", sizes: ["S", "M", "L"], colors: ["Vihreä", "Beige", "Valkoinen"], image: sammal, alt: "Salvianvihreä virkattu ruukunsuoja, jossa kultaköynnös" },
  { id: "aalto", name: "Aalto-ruukunsuoja", price: 22.9, category: "Ruukunsuojat", sizes: ["S", "M", "L"], colors: ["Beige", "Valkoinen", "Ruskea"], image: aalto, alt: "Beige aaltokuvioinen virkattu ruukunsuoja, jossa anopinkieli" },
  { id: "koynnos", name: "Köynnös-ruukunsuoja", price: 24.9, category: "Ruukunsuojat", sizes: ["M", "L"], alt: "Köynnöskuvioinen virkattu ruukunsuoja" },
  { id: "lehti", name: "Lehti-koriste", price: 12.9, category: "Kasvikoristeet", image: lehti, alt: "Vihreä virkattu lehden muotoinen kasvikoriste" },
  { id: "kukka", name: "Kukka-koriste", price: 14.9, category: "Kasvikoristeet", alt: "Virkattu kukan muotoinen kasvikoriste" },
  { id: "alusta-pyorea", name: "Kasvialusta Pyöreä", price: 9.9, category: "Kasvialustat", alt: "Pyöreä virkattu kasvialusta" },
  { id: "lahja-pieni", name: "Lahjapaketti Pieni", price: 29.9, category: "Lahjapaketit", image: lahjaPieni, alt: "Lahjapaketti, jossa valkoinen ruukunsuoja ja virkattu kukkakoriste" },
  { id: "lahja-iso", name: "Lahjapaketti Iso", price: 34.9, category: "Lahjapaketit", alt: "Iso lahjapaketti virkatuilla kasviasusteilla" },
];

export const SHIPPING = 4.9;

export const formatPrice = (n: number) =>
  n.toLocaleString("fi-FI", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";