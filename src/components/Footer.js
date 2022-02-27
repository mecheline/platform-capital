import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

export const Footer = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".tooltipped");
    M.Tooltip.init(elems, {});
  }, []);

  return (
    <div>
      <footer class="page-footer black">
        <div class="container">
          <div className="row">
            <div className="col s12 m3">
              <ul>
                <li>
                  <Link to="/">PLATFORM CAPITAL</Link>
                </li>
              </ul>
            </div>
            <div className="col s12 m6 offset-m3">
              <ul className=" footer-links">
                <li>
                  <Link to="/portfolio">PORTFOLIO</Link>
                </li>
                <li>
                  <Link to="/about">ABOUT US</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT US</Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="footer-hr" />
          <div class="row">
            <div class="col s12 l4">
              <h5 class="white-text">Head office</h5>
              <p class="grey-text text-darken-2">
                319 Akin Ogunlewe Str, Off Ligali Ayorinde str, Victoria Island,
                Lagos.
              </p>
              <h5 class="white-text" style={{ marginTop: "2rem" }}>
                Social media
              </h5>
              <div>
                <ul className="social-style">
                  <li>
                    <Link to="/portfolio">
                      <i
                        class="fa fa-instagram fa-2x red-text tooltipped"
                        data-position="bottom"
                        data-tooltip="Instagram"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </li>

                  <li>
                    <Link to="/about">
                      <i
                        class="fa fa-twitter fa-2x blue-text text-lighten-2 tooltipped"
                        data-position="bottom"
                        data-tooltip="twitter"
                        aria-hidden="true"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <i
                        class="fa fa-linkedin-square fa-2x blue-text tooltipped"
                        data-position="bottom"
                        data-tooltip="linkedIn"
                        aria-hidden="true"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <i
                        class="fa fa-youtube fa-2x red-text tooltipped"
                        data-position="bottom"
                        data-tooltip="youtube"
                        aria-hidden="true"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <i
                        class="fa fa-pinterest fa-2x red-text tooltipped"
                        data-position="bottom"
                        data-tooltip="pinterest"
                        aria-hidden="true"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <h5 class="white-text" style={{ marginTop: "2rem" }}>
                Email
              </h5>
              <p class="grey-text text-lighten-darken-4">
                info@theplatformcapital.com
              </p>
            </div>
            <div class="col s12 l3 offset-l1">
              <h5 class="white-text">Platform Capital</h5>
              <ul>
                <li>
                  <Link class="grey-text text-lighten-3" to="#!">
                    Portfolio Companies
                  </Link>
                </li>
                <li>
                  <Link class="grey-text text-lighten-3" to="#!">
                    Media & News
                  </Link>
                </li>
                <li>
                  <Link class="grey-text text-lighten-3" to="#!">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link class="grey-text text-lighten-3" to="#!">
                    Link 4
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright center">
          <div class="container">
            © All rights reserved 2021 - 2022, Platform Capital Group.
            <Link class="grey-text text-lighten-4 right" to="#!">
              More Links
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
