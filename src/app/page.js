"use client";
import ComponentSections from "./components/ComponentSections";
import MainSection from "./components/MainSection";
import VideoSection from "./components/VideoSection";
import LastSection from "./components/LastSection";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import { componentSections } from "./helpers/componentSections";

export default function Home() {
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection>
          <MainSection />
        </FullpageSection>
        <FullpageSection>
          <VideoSection />
        </FullpageSection>
        {componentSections.map((section) => (
          <FullpageSection className="flex flex-col justify-center">
            <ComponentSections
              titleText={section.titleText}
              contentText={section.contentText}
              imageSrc={section.imageSrc}
            />
          </FullpageSection>
        ))}
        <FullpageSection>
          <LastSection />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}
