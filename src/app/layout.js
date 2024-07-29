import { Inter } from "next/font/google";
import "./globals.css";
import { Links } from "./components/Links.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Martín Castro",
  description: "Portfolio de Martín Castro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header>
          <div className="flex justify-center mb-10">
            <h1 className="text-center text-5xl p-10">
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
