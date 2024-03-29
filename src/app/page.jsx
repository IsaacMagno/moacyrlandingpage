"use client";
import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import ComponentSections from "./components/ComponentSections";
import MainSection from "./components/MainSection";
import VideoSection from "./components/VideoSection";
import LastSection from "./components/LastSection";
import { componentSections } from "./helpers/componentSections";
import CallSection from "./components/CallSection";

export default function Home() {
  return (
    <div id="main-section">
      <Fullpage>
        <FullPageSections>
          <FullpageSection className="relative">
            <MainSection />
          </FullpageSection>
          <FullpageSection className="relative">
            <VideoSection />
          </FullpageSection>
          <FullpageSection>
            <CallSection />
          </FullpageSection>
          {componentSections.map((section) => (
            <FullpageSection className="flex flex-col justify-center relative">
              <ComponentSections
                titleText={section.titleText}
                contentText={section.contentText}
                imageSrc={section.imageSrc}
              />
            </FullpageSection>
          ))}
          <FullpageSection className="flex flex-col justify-center relative">
            <LastSection />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
}
