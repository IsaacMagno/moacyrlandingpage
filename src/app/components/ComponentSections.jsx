import Image from "next/image";
import React from "react";

const ComponentSections = ({ titleText, contentText, imageSrc }) => {
  return (
    <section className="flex flex-col gap-4 lg:gap-8 lmd:gap-12 pt-6 lg:pt-0 lmd:px-32 ">
      <div className="flex flex-col-reverse lg:flex-row justify-evenly items-center gap-4">
        <div className="responsive-section-container">
          <h1 className="responsive-section-title">{titleText[0]}</h1>
          <p className="responsive-section-content">{contentText[0]}</p>
        </div>
        <div className="responsive-section-image">
          <Image src={imageSrc[0]} fill className="rounded-lg" />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row-reverse justify-evenly items-center gap-3">
        <div className="responsive-section-container">
          <h1 className="responsive-section-title">{titleText[1]}</h1>
          <p className="responsive-section-content">{contentText[1]}</p>
        </div>
        <div className="responsive-section-image">
          <Image src={imageSrc[1]} fill className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default ComponentSections;
