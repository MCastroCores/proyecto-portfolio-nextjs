import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Links } from "./components/Links.jsx";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Martín Castro - Software Developer",
  description: "Sitio web de Martín Castro, Software Developer",
  keywords:
    "Martín Castro, Software Developer, Portfolio, Web Development, Programming",
  author: "Martín Castro",
  robots: "index, follow",
  og: {
    title: "Martín Castro - Software Developer",
    description: "Sitio web de Martín Castro, Software Developer",
    type: "website",
    url: "https://www.tu-dominio.com",
    image: "/logoPortfolio.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logoPortfolio.ico" type="image/x-icon" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:image" content={metadata.og.image} />
        <title>{metadata.title}</title>
      </head>
      <body className={`${roboto.className} bg-gray-900 text-white`}>
        <header className="flex flex-col items-center">
          <div className="flex justify-center">
            <h1 className={`${inter.className} text-center text-5xl p-10`}>
              MARTÍN CASTRO{" "}
              <span className="font-bold block">SOFTWARE DEVELOPER</span>
            </h1>
          </div>
          <Image
            className="rounded-full"
            src="/logoPortfolio.webp"
            alt="Logo de Martín Castro"
            width={250}
            height={250}
          />
          <Links />
        </header>
        {children}
        <footer>
          <div className="flex justify-center">
            <p className="text-center p-10">
              © {new Date().getFullYear()} Martín Castro. Todos los derechos
              reservados.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
