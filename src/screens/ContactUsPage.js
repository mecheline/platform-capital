import React from "react";
import { FloatingButton } from "../components/FloatingButton";
import { useDocumentTitle } from "./../components/TitleChange";

export const ContactUsPage = () => {
  useDocumentTitle("Platform | Contact");
  return (
    <div>
      ContactUsPage
      <FloatingButton />
    </div>
  );
};
