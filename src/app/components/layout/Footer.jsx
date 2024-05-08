import { Facebook, Instagram } from "lucide-react";
import React from "react";
import whatsApp from "/public/whatsapp.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col py-5 min-w-full items-center lg:flex-row px-3 lg:mt-0 lg:py-5 lmd:py-7 xlg:py-10 lg:px-28 lg:justify-between border-t border-zinc-600 absolute bg-[#3b3b3a]">
      <div className="lg:max-w-[30vw]">
        <p className="text-xs lmd:text-sm text-center lg:text-left">
          © 2024 Moacyr Gasparini. Todos os direitos reservados.
        </p>
        <p className="text-xs lmd:text-sm mt-3 lg:mt-0">
          Fundada em 1966, a Gasparini Contabilidade é uma referência no setor
          contábil, com mais de meio século dedicado a entregar soluções
          contábeis personalizadas e eficazes.
        </p>
      </div>
      <div className="flex gap-4 ">
        <Link
          href="https://www.facebook.com/moacyrcontabil/"
          target="_blank"
          className="cursor-pointer"
        >
          <Facebook className="mt-3" />
        </Link>
        <Link
          href="https://www.instagram.com/planejarfinanceiro"
          target="_blank"
          className="cursor-pointer"
        >
          <Instagram className="mt-3" />
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=551938932236&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20contabilidade."
          target="_blank"
          className="cursor-pointer"
        >
          <Image src={whatsApp} className="flex h-12" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
