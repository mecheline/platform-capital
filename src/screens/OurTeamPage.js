import React from "react";
import { FloatingButton } from "../components/FloatingButton";
import { useDocumentTitle } from "./../components/TitleChange";

export const OurTeamPage = () => {
  useDocumentTitle("Platform | Team");
  return (
    <div>
      OurTeamPage
      <FloatingButton />
    </div>
  );
};
