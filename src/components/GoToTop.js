import React, { useEffect, useState } from "react";
import M from "materialize-css";

export const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    var elems = document.querySelectorAll(".fixed-action-btn");
    M.FloatingActionButton.init(elems, {
      hoverEnabled: false,
    });
    var elems = document.querySelectorAll(".tooltipped");
    M.Tooltip.init(elems, {});
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className="scroll-to-top fixed-action-btn"
      style={{ right: "auto", marginLeft: "10px" }}
    >
      {isVisible && (
        <div onClick={scrollToTop} className="btn-floating">
          <i
            className="material-icons tooltipped"
            data-position="right"
            data-tooltip="Go to top"
            style={{ backgroundColor: "red" }}
          >
            arrow_upward
          </i>
        </div>
      )}
    </div>
  );
};
