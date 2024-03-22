import { Facebook, Instagram } from "lucide-react";
import React from "react";
import whatsApp from "/public/whatsapp.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col-reverse items-center lg:flex-row px-3 lg:mt-0 lg:py-5 lmd:py-7 xlg:py-10 lg:px-28 lg:justify-between border-t border-zinc-600">
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
        <Facebook className="mt-3" />
        <Instagram className="mt-3" />
        <Image src={whatsApp} className="flex h-12" />
      </div>
    </div>
  );
};

export default Footer;
