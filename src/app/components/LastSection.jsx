import Link from "next/link";
import React from "react";

const LastSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative gap-20">
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-7xl">Gasparini Contabilidade,</h1>
        <h2 className="text-7xl">há mais de 50 anos ajudando empresas!</h2>
      </div>
      <div className="text-center max-w-[50vw]">
        <span>
          Invista no seu futuro financeiro com nosso serviço de Planejamento e
          Controle Financeiro e dê um passo à frente na realização dos seus
          objetivos empresariais! Não deixe que as finanças limitem o potencial
          do seu negócio. Estamos aqui para impulsionar o seu sucesso
          financeiro!
        </span>
      </div>
      <Link
        href="https://moacyrcontabil.com.br/inicio"
        className="p-4 border border-yellow-500 text-yellow-500 rounded-2xl hover:bg-yellow-500 hover:text-black"
        target="blank"
      >
        Solicitar Orçamento
      </Link>
    </div>
  );
};

export default LastSection;
