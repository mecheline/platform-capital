import React from "react";
import { FloatingButton } from "../components/FloatingButton";
import { useDocumentTitle } from "./../components/TitleChange";

export const PortfolioPage = () => {
  useDocumentTitle("Platform | Portfolio");
  return (
    <div>
      PortfolioPage
      <FloatingButton />
    </div>
  );
};
