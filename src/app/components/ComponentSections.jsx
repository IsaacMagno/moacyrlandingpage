import Image from "next/image";
import React from "react";

const ComponentSections = ({ titleText, contentText, imageSrc }) => {
  return (
    <section className="px-32 flex flex-col gap-12">
      <div className="flex justify-evenly">
        <div className="max-w-[35vw] flex flex-col gap-12 justify-center">
          <h1 className="text-yellow-500 text-5xl">{titleText[0]}</h1>
          <p>{contentText[0]}</p>
        </div>
        <div className="h-[25rem] w-[35rem] relative">
          <Image src={imageSrc[0]} fill className="rounded-lg" />
        </div>
      </div>

      <div className="flex flex-row-reverse justify-evenly">
        <div className="max-w-[35vw] flex flex-col gap-12 justify-center">
          <h1 className="text-yellow-500 text-5xl">{titleText[1]}</h1>
          <p>{contentText[1]}</p>
        </div>
        <div className="h-[25rem] w-[35rem] relative">
          <Image src={imageSrc[1]} fill className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default ComponentSections;
