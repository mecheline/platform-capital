import React, { useEffect } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";

export const FloatingButton = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".fixed-action-btn");
    M.FloatingActionButton.init(elems, {
      hoverEnabled: false,
    });
    var elemsTooltip = document.querySelectorAll(".tooltipped");
    M.Tooltip.init(elemsTooltip, {});
  }, []);

  return (
    <div>
      <div class="fixed-action-btn click-to-toggle">
        <Link to="#" class="btn-floating green">
          <i class="large material-icons">mode_edit</i>
        </Link>
        <ul>
          <li>
            <Link
              to="/"
              class="btn-floating transparent tooltipped "
              data-position="left"
              data-tooltip="Home"
            >
              <i class="material-icons red-text ">home</i>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              class="btn-floating transparent tooltipped"
              data-position="left"
              data-tooltip="About"
            >
              <i className="material-icons red-text">business</i>
            </Link>
          </li>
          <li>
            <Link
              to="/team"
              class="btn-floating transparent tooltipped"
              data-position="left"
              data-tooltip="Our Team"
            >
              <i className="material-icons red-text">people</i>
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              class="btn-floating transparent tooltipped"
              data-position="left"
              data-tooltip="Portfolio"
            >
              <i className="material-icons red-text">business_center</i>
            </Link>
          </li>
          <li>
            <Link
              to="/investor"
              class="btn-floating transparent tooltipped"
              data-position="left"
              data-tooltip="Investor Portal"
            >
              <i className="material-icons red-text">card_membership</i>
            </Link>
          </li>
          <li>
            <Link
              to="/media"
              class="btn-floating transparent tooltipped"
              data-position="left"
              data-tooltip="Media"
            >
              <i className="material-icons red-text">movie</i>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              class="btn-floating transparent tooltipped"
              data-position="left"
              data-tooltip="Home"
            >
              <i className="material-icons red-text">location_on</i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
