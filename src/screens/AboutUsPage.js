import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FloatingButton } from "../components/FloatingButton";
import M from "materialize-css";

import aboutus from "../images/aboutus.jpg";
import logo from "../images/logo.png";

export const AboutUsPage = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {
      inDuration: 1000,
      outDuration: 1000,
    });
  }, []);

  return (
    <div>
      <div className="bg-image">
        <div className="overlay-about">
          <div className="overlay-below">
            <div className="logo">
              <Link to="/" className="brand-logo">
                <img src={logo} />
              </Link>
            </div>
            <div className="image-ceo">
              <img
                src={aboutus}
                alt=""
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "60px",
                }}
              />
            </div>
            <div className="modal-css">
              <button data-target="modal1" class="btn modal-trigger">
                Make an appointment
              </button>
              <div id="modal1" class="modal">
                <div class="modal-content">
                  <h4>Request a Callback</h4>
                  <p>
                    We can call you in 30 seconds, just enter your number below
                  </p>
                  <div className="card">
                    <div className="input-field">
                      <input id="name" type="text" class="validate" />
                      <label for="name">Name</label>
                    </div>
                    <div className="input-field">
                      <input id="phone" type="text" class="validate" />
                      <label for="phone">Phone</label>
                    </div>
                    <div className="request">
                      <button class="btn waves-effect">Request</button>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button class="btn modal-close waves-effect">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      AboutUsPage
      <FloatingButton />
    </div>
  );
};
