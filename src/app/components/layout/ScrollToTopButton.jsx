import { ArrowUp } from "lucide-react";
import React from "react";

const ScrollToTopButton = ({ scrollToTop }) => {
  return (
    <button onClick={scrollToTop} className="scroll-to-top-button">
      <ArrowUp strokeWidth={2} className="size-7" />
    </button>
  );
};

export default ScrollToTopButton;
