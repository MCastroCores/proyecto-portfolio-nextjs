import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Links } from "./components/Links.jsx";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Martín Castro",
  description: "Portfolio de Martín Castro",
  keywords:
    "Martín Castro, Software Developer, Portfolio, Web Development, Programming",
  author: "Martín Castro",
  robots: "index, follow",
  og: {
    title: "Portfolio Martín Castro",
    description: "Portfolio de Martín Castro",
    type: "website",
    url: "https://www.tu-dominio.com",
    image: "https://www.tu-dominio.com/imagen-de-tu-sitio.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
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
        <header>
          <div className="flex justify-center">
            <h1 className={`${inter.className} text-center text-5xl p-10`}>
              MARTÍN CASTRO{" "}
              <span className="font-bold block">SOFTWARE DEVELOPER</span>
            </h1>
          </div>
          <Links />
        </header>
        {children}
      </body>
    </html>
  );
}
