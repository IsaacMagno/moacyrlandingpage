import Link from "next/link";
import React from "react";
import Vector from "/public/Vector.png";
import Image from "next/image";
import BudgetButton from "./layout/BudgetButton";
import Footer from "./layout/Footer";

const LastSection = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center pt-20 relative gap-5 z-0">
        <video
          className="lg:w-[25rem] lg:h-[15rem] lmd:w-[35rem] lmd:h-[20rem] xlg:w-[50rem] xlg:h-[30rem] opacity-95 px-5"
          controls
        >
          <source
            src="https://ia904701.us.archive.org/32/items/lv_0_20240426164236/lv_0_20240426164236.mp4"
            type="video/mp4"
          />
        </video>
        <div className="relative flex flex-col items-center justify-center max-h-[20rem] flex-grow">
          <Image src={Vector} className="absolute w-[20rem] z-0 opacity-30" />
          <div className="text-center flex flex-col px-5 lg:px-0 z-50">
            <h1 className="responsive-title">Gasparini Contabilidade,</h1>

            <h2 className="responsive-title">
              há mais de 50 anos ajudando empresas!
            </h2>
          </div>

          <span className="mt-20">Plano mensal a partir de R$ 150,00</span>
          <div className="flex absolute bottom-0 z-50">
            <BudgetButton />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LastSection;
