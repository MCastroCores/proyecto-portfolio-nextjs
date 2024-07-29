"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Links() {
  const pathname = usePathname();

  return (
    <nav className="flex list-none justify-around mt-5">
      <li className="hover:opacity-30">
        <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
          Inicio
        </Link>
      </li>
      <li className="hover:opacity-30">
        <Link
          className={`link ${pathname === "/register" ? "active" : ""}`}
          href="/register"
        >
          Registro
        </Link>
      </li>
      <li className="hover:opacity-30">
        <Link
          className={`link ${pathname === "/login" ? "active" : ""}`}
          href="/login"
        >
          Login
        </Link>
      </li>
      <li className="hover:opacity-30">
        <Link
          className={`link ${pathname === "/contact" ? "active" : ""}`}
          href="/contact"
        >
          Contacto
        </Link>
      </li>
    </nav>
  );
}
