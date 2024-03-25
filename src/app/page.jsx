"use client";
import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import ScrollToTopButton from "./components/layout/ScrollToTopButton";
import ComponentSections from "./components/ComponentSections";
import MainSection from "./components/MainSection";
import VideoSection from "./components/VideoSection";
import LastSection from "./components/LastSection";
import { componentSections } from "./helpers/componentSections";

export default function Home() {
  const scrollToTop = () => {
    const mainSection = document.getElementById("main-section");
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="main-section">
      <Fullpage>
        <FullPageSections>
          <FullpageSection className="relative">
            <MainSection />
          </FullpageSection>
          <FullpageSection className="relative">
            <VideoSection />
            <ScrollToTopButton scrollToTop={scrollToTop} />
          </FullpageSection>
          {componentSections.map((section) => (
            <FullpageSection className="flex flex-col justify-center relative">
              <ComponentSections
                titleText={section.titleText}
                contentText={section.contentText}
                imageSrc={section.imageSrc}
              />
              <ScrollToTopButton scrollToTop={scrollToTop} />
            </FullpageSection>
          ))}
          <FullpageSection className="flex flex-col justify-center relative">
            <LastSection />
            <ScrollToTopButton scrollToTop={scrollToTop} />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
}
