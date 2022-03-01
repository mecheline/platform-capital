import React, { useEffect } from "react";
import M from "materialize-css";
import { Link, NavLink } from "react-router-dom";

import logo from "../images/logo.png";

export const Navbar = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {
      inDuration: 1000,
    });
  }, []);

  // useEffect(() => {
  //   const activePage = window.location.pathname;
  //   document.querySelectorAll("nav a").forEach((link) => {
  //     if (link.href.includes(`${activePage}`)) {
  //       link.classList.add("active");
  //       console.log(activePage);
  //     }
  //   });
  // }, []);
  // const getColor = (current) => {
  //   if (window.location.pathname == current) {
  //     return "#000000";
  //   }
  // };

  return (
    <div>
      <nav className="transparent nav-style">
        <div className="container">
          <div class="nav-wrapper">
            <Link to="/" class="brand-logo">
              <img src={logo} />
            </Link>
            <Link to="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </Link>
            <ul class="right hide-on-med-and-down">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
              <li>
                <NavLink to="/team">Our Team</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/investor">Investor portal</NavLink>
              </li>
              <li>
                <NavLink to="/media">Media</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <ul class="sidenav sidenav-close sidenav-style" id="mobile-demo">
        <li>
          <NavLink to="/">
            <i class="material-icons white-text">home</i>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <i className="material-icons white-text">business</i>
            About us
          </NavLink>
        </li>
        <li>
          <NavLink to="/team">
            <i className="material-icons white-text">people</i>
            Our Team
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">
            <i className="material-icons white-text">business_center</i>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/investor">
            <i className="material-icons white-text">card_membership</i>
            Investor portal
          </NavLink>
        </li>
        <li>
          <NavLink to="/media">
            <i className="material-icons white-text">movie</i>
            Media
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <i className="material-icons white-text">location_on</i>
            Contact us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
