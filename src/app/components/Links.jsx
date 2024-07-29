"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdHomeMax, MdOutlineContactPhone } from "react-icons/md";
import { GiArchiveRegister } from "react-icons/gi";
import { IoLogIn } from "react-icons/io5";

export function Links() {
  const pathname = usePathname();

  return (
    <nav className="flex list-none justify-around mt-5">
      <li className="hover:opacity-30 text-3xl">
        <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
          <MdHomeMax />
        </Link>
      </li>
      <li className="hover:opacity-30 text-3xl">
        <Link
          className={`link ${pathname === "/register" ? "active" : ""}`}
          href="/register"
        >
          <GiArchiveRegister />
        </Link>
      </li>
      <li className="hover:opacity-30 text-3xl">
        <Link
          className={`link ${pathname === "/login" ? "active" : ""}`}
          href="/login"
        >
          <IoLogIn />
        </Link>
      </li>
      <li className="hover:opacity-30 text-3xl">
        <Link
          className={`link ${pathname === "/contact" ? "active" : ""}`}
          href="/contact"
        >
          <MdOutlineContactPhone />
        </Link>
      </li>
    </nav>
  );
}
