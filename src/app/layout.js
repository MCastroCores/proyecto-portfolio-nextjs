import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Links } from "./components/Links.jsx";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Martín Castro",
  description: "Portfolio de Martín Castro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${roboto.className} bg-gray-900 text-white`}>
        <header>
          <div className="flex justify-center">
            <h1 className={` ${inter.className} text-center text-5xl p-10`}>
              MARTÍN CASTRO{" "}
              <span className="font-bold block hover:animate-bounce">
                SOFTWARE DEVELOPER
              </span>
            </h1>
          </div>
          <Links />
        </header>
        {children}
      </body>
    </html>
  );
}
