import Link from "next/link";
import React from "react";
import Vector from "/public/Vector.png";
import Image from "next/image";
import BudgetButton from "./layout/budgetButton";

const LastSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative gap-20">
      <Image src={Vector} cointain className="absolute -z-50" />
      <div className="text-center flex flex-col lg:gap-4 px-5 lg:px-0">
        <h1 className="responsive-title">Gasparini Contabilidade,</h1>
        <h2 className="responsive-title">
          há mais de 50 anos ajudando empresas!
        </h2>
      </div>
      <div className="text-center px-5 lg:px-0 lg:max-w-[50vw]">
        <span>
          Invista no seu futuro financeiro com nosso serviço de Planejamento e
          Controle Financeiro e dê um passo à frente na realização dos seus
          objetivos empresariais! Não deixe que as finanças limitem o potencial
          do seu negócio. Estamos aqui para impulsionar o seu sucesso
          financeiro!
        </span>
      </div>
      <BudgetButton />
    </div>
  );
};

export default LastSection;
