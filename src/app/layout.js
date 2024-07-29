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
          <Links />
        </header>
        {children}
      </body>
    </html>
  );
}
