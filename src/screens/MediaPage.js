import React from "react";
import { FloatingButton } from "../components/FloatingButton";
import { useDocumentTitle } from "./../components/TitleChange";

export const MediaPage = () => {
  useDocumentTitle("Platform | Media");
  return (
    <div>
      Media Page
      <FloatingButton />
    </div>
  );
};
