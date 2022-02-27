import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import M from "materialize-css";

import { Verticals } from "../components/Verticals";

import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image14 from "../images/image14.jpg";
import image15 from "../images/image15.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import { FloatingButton } from "../components/FloatingButton";

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    var el = document.querySelectorAll(".tabs");
    M.Tabs.init(el, {
      swipeable: true,
    });
    var elems = document.querySelectorAll(".slider");
    M.Slider.init(elems, {
      indicators: false,
      height: 500,
    });
    var parallaxBox = document.querySelectorAll(".parallax");
    M.Parallax.init(parallaxBox, {});
    let materialBox = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(materialBox, {});
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <div class="slider">
        <ul class="slides">
          <li>
            <img src={image1} />
            <div class="caption left-align">
              <h3 className="section1">Building Sustainable Enterprise</h3>
              <h5 class="light grey-text text-lighten-1 left-align">
                We leverage our local presence, global network, operating
                experience, <br />
                technical partnerships, and knowledge to build champion
                businesses.
              </h5>

              <Link
                to="#"
                class="btn waves-effect waves-light learn-more-button-style"
              >
                Learn more...
              </Link>
            </div>
          </li>
          <li>
            <img src={image2} />
            <div class="caption center-align">
              <h3 className="section1">Building Sustainable Enterprise</h3>
              <h5 class="light grey-text text-lighten-1 center-align ">
                We leverage our local presence, global network, operating
                experience,
                <br /> technical partnerships, and knowledge to build champion
                businesses.
              </h5>

              <Link
                to="#"
                class="btn waves-effect waves-light learn-more-button-style"
              >
                Learn more...
              </Link>
            </div>
          </li>
          <li>
            <img src={image3} />
            <div class="caption center-align">
              <h3 className="section1">Building Sustainable Enterprise</h3>
              <h5 class="light grey-text text-lighten-1 center-align">
                We leverage our local presence, global network, operating
                experience,
                <br /> technical partnerships, and knowledge to build champion
                businesses.
              </h5>
              <Link
                to="#"
                class="btn waves-effect waves- learn-more-button-style"
              >
                Learn more...
              </Link>
            </div>
          </li>
          <li>
            <img src={image4} />
            <div class="caption right-align">
              <h3 className="section1">Building Sustainable Enterprise</h3>
              <h5 class="light grey-text text-lighten-1 right-align">
                We leverage our local presence, global network, operating
                experience, <br /> technical partnerships, and knowledge to
                build champion businesses.
              </h5>
              <Link
                to="#"
                class="btn waves-effect waves- learn-more-button-style"
              >
                Learn more...
              </Link>
            </div>
          </li>
        </ul>
      </div>

      {/* section 2 */}

      <div className=" container-style">
        <div className="container">
          <div className="section2">
            <div className="left1">
              <h5 className="indigo-text" data-aos="fade-left">
                Platform Capital deploys patient, value accretive capital
                alongside international and local value investors to create
                champion businesses with the potential for regional or global
                scale
              </h5>

              <p
                className="black-text lighten-4"
                style={{ marginTop: "3rem" }}
                data-aos="fade-right"
              >
                Our goal is to help solve the biggest global development
                challenges by investing capital to support private sector growth
                and innovation that
              </p>
              <Link
                to="#"
                class="btn waves-effect waves our-goal-button"
                style={{ marginTop: "2rem" }}
                data-aos="fade-up"
              >
                Learn more...
              </Link>
            </div>
            <div className="right1 hide-on-small-only circle">
              <div
                className="center red circle-inner"
                data-aos="fade-left"
                style={{
                  borderTopLeftRadius: "2rem",
                  borderBottomRightRadius: "2rem",
                }}
              >
                123 <br /> Investments
              </div>

              <div className="center indigo circle-inner " data-aos="fade-up">
                15
                <br />
                companies of operation
              </div>
              <div
                className="center blue darken-1 circle-inner "
                data-aos="fade-right"
                style={{
                  borderTopRightRadius: "2rem",
                  borderBottomLeftRadius: "2rem",
                }}
              >
                09 <br />
                Investments
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* parallax */}
      <div class="parallax-container">
        <div class="parallax paralax">
          <img src={image15} alt="" />
          <div className="overlay">
            <h1 className="brand-logo hide-on-small-only">
              Platform Capital Group
            </h1>
            <h3 className="tangerine1">Reliable...</h3>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="container-fluid">
        <div class="row" style={{ marginTop: "4rem" }}>
          <div class="col s4 m4 l2" data-aos="fade-up-left">
            <div class="black-text center section-3">
              <h4>05</h4>
              <span>Continents around the globe</span>
            </div>
          </div>
          <div class="col s4 m4 l2" data-aos="fade-up">
            <div class=" blue darken-1 white-text center section-3">
              <h4>50+</h4>
              <span>Regions around the world</span>
            </div>
          </div>
          <div class="col s4 m4 l2" data-aos="fade-up-right">
            <div class="black-text center section-3">
              <h4>20</h4>
              <span>Physical presence around the globe</span>
            </div>
          </div>
          <div class="col s12 m12 l4 offset-l1">
            <h5 className="section3-h5" data-aos="fade-left">
              We have Investments in over 8 countries and 8 offices Globally
              with a strong pipeline of opportunities covering 15 countries
            </h5>
            <Link
              to="#"
              class="btn waves-effect waves our-goal-button"
              style={{ marginTop: "1rem", marginBottom: "1rem" }}
              data-aos="fade-right"
            >
              Learn more...
            </Link>
          </div>
        </div>
      </div>
      {/* parallax */}
      <div class="parallax-container">
        <div class="parallax paralax">
          <img src={image15} alt="" />
          <div className="overlay">
            <h1 className="brand-logo">Unicorn</h1>
            <h3 className="tangerine1">The future starts now...</h3>
          </div>
        </div>
      </div>
      {/* our business*/}

      <div className="container">
        <div className="row" style={{ marginTop: "4rem" }}>
          <div class="col s12 m6">
            <div>
              <div class=" black-text our-business" data-aos="fade-left">
                <h3>Our Businesses</h3>
                <h4>
                  We cover three key areas which are Principal Investments,
                  Advisory and Investment Fiduciary.
                </h4>
              </div>
            </div>
          </div>

          <div class="col s12 m6">
            <ul class="tabs">
              <li class="tab col s4">
                <Link to="#test1">MISSION</Link>
              </li>
              <li class="tab col s4">
                <Link class="active" to="#test2">
                  VISION
                </Link>
              </li>
              <li class="tab col s4">
                <Link to="#test3">VALUES</Link>
              </li>
            </ul>
            <div style={{ marginTop: "1rem", height: "100px" }}>
              <div id="test1" class="col s12">
                We are obsessed with changing the African narrative, which is
                why we deploy long-term capital and social capital to our
                investee companies, and work with them to achieve their goals.
              </div>
              <div id="test2" class="col s12">
                To be the best investment firm in AFRICA.
              </div>
              <div id="test3" class="col s12">
                To be our brother's keeper, to be loyal, authentic, build
                capacity and knowledge..
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* principal investment */}

      <div className="container">
        <div className="principal">
          <div className="image">
            <img
              src={image8}
              className="responsive-img  materialboxed"
              data-aos="zoom-in"
            />
          </div>
          <div className="text">
            <div>
              <div class=" black-text principal-investment-link">
                <h2 data-aos="fade-left" className="tangerine">
                  Principal investment
                </h2>
                <p data-aos="fade-right">
                  We provide long-term capital to our investee companies, and
                  work with them to achieve their goals. We believe long-term
                  capital offers stability to the business, and allows the
                  entrepreneur to focus on delivering the vision.
                </p>
                <Link
                  to="#"
                  class="waves-effect waves-light btn "
                  data-aos="fade-up"
                >
                  Learn more about us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* advisory */}

      <div className="container">
        <div className="principal">
          <div className="text1">
            <div>
              <div class=" black-text principal-investment-link">
                <h2 data-aos="fade-left" className="tangerine">
                  Advisory
                </h2>
                <p data-aos="fade-left">
                  We offer a solution driven, investment and advisory business.
                  Our holistic approach towards identifying opportunities,
                  structuring, negotiations, capital raise and active management
                  makes us a unique partner across all our engagements.
                </p>
                <Link
                  to="#"
                  class="waves-effect waves-light btn "
                  data-aos="fade-up"
                >
                  Learn more about us
                </Link>
              </div>
            </div>
          </div>
          <div className="image1">
            <img
              src={image8}
              className="responsive-img  materialboxed"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
      {/* investment */}

      <div className="container">
        <div className="principal">
          <div className="image">
            <img
              src={image9}
              className="responsive-img  materialboxed"
              data-aos="zoom-in"
            />
          </div>
          <div className="text">
            <div>
              <div class=" black-text principal-investment-link">
                <h2 data-aos="fade-right" className="tangerine">
                  Investment Fiduciary
                </h2>
                <p data-aos="fade-left">
                  We leverage our senior leadership team’s experience across
                  multiple sectors and geographies coupled with our
                  investpreneurship skillset to manage third-party businesses
                  and assets as fiduciaries.
                </p>
                <Link
                  to="#"
                  class="waves-effect waves-light btn "
                  data-aos="fade-up"
                >
                  Learn more about us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* verticals */}
      <Verticals />
      <FloatingButton />
      {/* bottom-slider */}
      <div></div>
    </div>
  );
};
