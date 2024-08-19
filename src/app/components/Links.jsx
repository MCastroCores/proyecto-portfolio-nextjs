"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function Links() {
  const pathname = usePathname();

  return (
    <div className="flex h-96 w-full justify-center pt-10">
      <div className="flex gap-16 md:gap-40">
        <Popover className="group">
          <PopoverButton className="block text-sm/6 font-semibold text-white focus:outline-none data-[active]:text-white/50 data-[hover]:text-white/50 data-[focus]:outline-1 data-[focus]:outline-white">
            Home
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3">
              <Link
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="/#onboarding"
              >
                <p className="font-semibold text-white">ONBOARDING</p>
                <p className="text-white/50">QUIÉN SOY</p>
              </Link>
              <Link
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="/#skills"
              >
                <p className="font-semibold text-white">TECNOLOGÍAS</p>
                <p className="text-white/50">FULLSTACK</p>
              </Link>
              <Link
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="/#product"
              >
                <p className="font-semibold text-white">PRODUCTO</p>
                <p className="text-white/50">QUÉ PUEDO OFRECERTE</p>
              </Link>
            </div>
          </PopoverPanel>
        </Popover>
        <Popover>
          <PopoverButton className="block text-sm/6 font-semibold text-white focus:outline-none data-[active]:text-white/50 data-[hover]:text-white/50 data-[focus]:outline-1 data-[focus]:outline-white">
            Proyectos
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3">
              <Link
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">X-LITE</p>
                <p className="text-white/50">REACT · NODE · SQL</p>
              </Link>
              <Link
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">VITALAPP</p>
                <p className="text-white/50">REACT · NODE · SQL</p>
              </Link>
              <Link
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">KOI-DATEFISIOTERAPIA</p>
                <p className="text-white/50">REACT · TAILWINDCSS</p>
              </Link>
            </div>
          </PopoverPanel>
        </Popover>
        <Popover>
          <PopoverButton className="block text-sm/6 font-semibold text-white focus:outline-none data-[active]:text-white/50 data-[hover]:text-white/50 data-[focus]:outline-1 data-[focus]:outline-white">
            Contacto
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3">
              <Link
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="https://www.linkedin.com/in/martincastrocores/"
                target="_blank"
              >
                <p className="font-semibold text-white">LINKEDIN</p>
                <p className="text-white/50">
                  <FaLinkedin />
                </p>
              </Link>
              <Link
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="https://github.com/MCastroCores"
                target="_blank"
              >
                <p className="font-semibold text-white">GITHUB</p>
                <p className="text-white/50">
                  <FaGithubSquare />
                </p>
              </Link>
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="mailto:martincastrocores@gmail.com"
                target="_blank"
              >
                <p className="font-semibold text-white">GMAIL</p>
                <p className="text-white/50">
                  <SiGmail />
                </p>
              </a>
            </div>
          </PopoverPanel>
        </Popover>
      </div>
    </div>
  );
}
