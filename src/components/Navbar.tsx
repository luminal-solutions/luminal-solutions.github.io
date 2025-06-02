"use client";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = ["Sobre", "Docs", "Clientes", "Contatos"];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-[#8CAFFF] dark:text-gray-100">
            <span>
              <Image
                src="/img/icon-ls.png"
                width="32"
                alt="N"
                height="32"
                className="w-8"
              />
            </span>
            <span>Luminal Solutions</span>
          </span>
        </Link>
      </nav>
    </div>
  );
};
