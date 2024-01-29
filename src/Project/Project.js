import React, { useContext, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TbTruckDelivery, TbHorseToy } from "react-icons/tb";
import { Context } from "../Context";
import { FaShield } from "react-icons/fa6";
import { BsChevronDown } from "react-icons/bs";
// import { Link } from "react-scroll";
import {
  BiChevronDown,
  BiCamera,
  BiWalk,
  BiSolidCarGarage,
} from "react-icons/bi";
import "./Project.css";
import {
  PiNotepadLight,
  PiBellSimpleRingingBold,
  PiParkDuotone,
} from "react-icons/pi";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { GiFamilyHouse, GiRoad, GiLift, GiSecurityGate } from "react-icons/gi";
import { MdOutlineElectricMeter } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { CgGym, CgGames } from "react-icons/cg";

export const Project = () => {
  const { state, dispatch } = useContext(Context);
  const [arr, setArr] = useState(state.project);
  const [filter, setFilter] = useState(arr);
  const [scroll, setScroll] = useState(false);
  const [border1, setBorder1] = useState(true);
  const [border2, setBorder2] = useState(false);
  const [border3, setBorder3] = useState(false);
  const [prop, setProp] = useState(true);
  const [high, setHigh] = useState(false);

  const [agent, setAgent] = useState(true);
  const [snap1, setSnap1] = useState("50%");
  const [snap2, setSnap2] = useState("33%");
  const [snap3, setSnap3] = useState("17%");
  const [snap4, setSnap4] = useState("33%");
  const [snap5, setSnap5] = useState("33%");
  const [snap6, setSnap6] = useState("34%");
  const [sectionId, setSectionId] = useState([]);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const getId = document.querySelectorAll("section[id]");

    const ids = Array.from(getId).map((section) => section.id);
    setSectionId(ids);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const closestSection = sectionId.reduce((prev, id) => {
        const section = document.getElementById(id);
        const sectionOffset = section.offsetTop;
        return Math.abs(sectionOffset - scrollPosition) <
          Math.abs(prev - scrollPosition)
          ? sectionOffset
          : prev;
      }, Infinity);

      setActiveSection(
        sectionId.find(
          (id) => document.getElementById(id).offsetTop === closestSection
        )
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionId]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const proj = (value) => {
    if (value === 1) {
      setBorder1(true);
      setBorder2(false);
      setBorder3(false);
      const filterArr = arr.filter((x) => {
        return x.bhk !== 1;
      });
      setFilter(filterArr);
    } else if (value === 2) {
      setBorder2(true);
      setBorder3(false);
      setBorder1(false);
      const filterArr = arr.filter((x) => {
        return x.bhk === 2;
      });
      setFilter(filterArr);
    } else if (value === 3) {
      setBorder2(false);
      setBorder1(false);
      setBorder3(true);
      const filterArr = arr.filter((x) => {
        return x.bhk === 3;
      });
      setFilter(filterArr);
    } else {
      setFilter(arr);
    }
  };

  const navNxt = () => {
    setScroll(true);
  };
  const navPrev = () => {
    setScroll(false);
  };
  return (
    <>
      <div id="topbar">
        <div className="container">
          <div className="topbar-row">
            <div className="top-col">
              <h3 className="top-title">magicbricks</h3>
              <p className="top-loc">
                chennai
                <i>
                  <BiChevronDown />
                </i>
              </p>
            </div>
            <div className="top-col-second">
              <p className="mb-prime">
                MB Prime
                <i>
                  <BiChevronDown />
                </i>
              </p>
              <p className="login">
                Login
                <i>
                  <BiChevronDown />
                </i>
              </p>
              <a href="#" className="post">
                Post Property<span className="badge">free</span>
              </a>
            </div>
          </div>
        </div>
        {/* // top bar end */}
      </div>
      <div id="nav">
        <div className="container">
          <div className="nav-row">
            <nav>
              <ul>
                <li className="drop">
                  <a>
                    Buy
                    <i>
                      <BiChevronDown />
                    </i>
                  </a>
                </li>
                <li className="drop">
                  <a>
                    Rent
                    <i>
                      <BiChevronDown />
                    </i>
                  </a>
                </li>
                <li className="drop">
                  <a>
                    Sell
                    <i>
                      <BiChevronDown />
                    </i>
                  </a>
                </li>
                <li className="drop">
                  <a>
                    Home Loans
                    <i>
                      <BiChevronDown />
                    </i>
                  </a>
                </li>
                <li className="drop">
                  <a>
                    Property Services
                    <i>
                      <BiChevronDown />
                    </i>
                  </a>
                </li>
                <li className="drop">
                  <a>
                    MB Advice<span className="nav-new">NEW</span>
                    <i>
                      <BiChevronDown />
                    </i>
                  </a>
                </li>
                <li className="drop">
                  <a>
                    Help
                    <i>
                      <BiChevronDown />
                    </i>
                  </a>
                </li>
                <li className="drop">
                  <a className="nav-offer">
                    <i>
                      <TbTruckDelivery />
                    </i>
                    20% OFF on Home Shifting
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div id="proj__img">
        <img className="proj--image" alt="noImage" src={state.expose.img}></img>
        <div className="img-spcl">
          <div className="img-rera">
            <span className="proj-img-rera-icon">
              <svg
                version="1.1"
                id="Layer_1"
                // xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="14px"
                height="14px"
                viewBox="-42 3 14 14"
                enable-background="new -42 3 14 14"
                // xml:space="preserve"
              >
                <path
                  id="Path"
                  fill="#FFFFFF"
                  d="M-35,17c-6.5,0-7-11-7-11l7-3h0l7,3C-28,6-28.5,17-35,17z"
                ></path>
                <path
                  id="R"
                  fill="#1BB814"
                  d="M-35.9,9.6h0.4c0.4,0,0.8-0.1,1-0.2c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.6-0.3-0.7 c-0.2-0.1-0.5-0.2-1-0.2h-0.4V9.6z M-35.9,10.8v2.7h-1.4v-7h1.9c0.9,0,1.6,0.2,2,0.5c0.4,0.3,0.6,0.9,0.6,1.6c0,0.4-0.1,0.8-0.3,1.1 c-0.2,0.3-0.5,0.6-0.9,0.8c1,1.6,1.6,2.6,1.9,3h-1.5l-1.6-2.7H-35.9z"
                ></path>
              </svg>
            </span>
            RERA APPROVED
            <span className="rera-info-icon">!</span>
          </div>
          <div className="img--logo">
            <div className="img--item">
              <img src={state.expose.imgBy1} alt="noImage"></img>
            </div>
            <div className="img--item">
              <img src={state.expose.imgBy2} alt="noImage"></img>
            </div>
          </div>
          <div className="img--icon">
            <div className="img--count">
              <i>
                <BiCamera />
              </i>
              {state.expose.imgCount}
            </div>
          </div>
        </div>
      </div>
      <div className="navigation">
        <div className="container">
          <div className="navigation-row">
            <div
              className="navigation-next"
              onClick={navNxt}
              style={{ display: scroll ? "none" : "block" }}
            ></div>
            <div
              className="navigation-prev"
              onClick={navPrev}
              style={{ display: scroll ? "block" : "none" }}
            ></div>
            <div className={scroll ? "scrolling" : "navigation-scroll"}>
              <div className="navigation-item">
                <a
                  href="#nav-overview"
                  className={`color-nav ${
                    "nav-overview" === activeSection ? "active" : ""
                  }`}
                >
                  Overview
                </a>
              </div>
              <div className="navigation-item">
                <a
                  href="#amenities"
                  className={`color-nav ${
                    "amenities" === activeSection ? "active" : ""
                  }`}
                >
                  Amenities
                </a>
              </div>
              <div className="navigation-item">
                <a
                  href="#about-project"
                  className={`color-nav ${
                    "about-project" === activeSection ? "active" : ""
                  }`}
                >
                  About Project
                </a>
              </div>
              <div className="navigation-item">
                <a
                  href="#project-unit-floors"
                  className={`color-nav ${
                    "project-unit-floors" === activeSection ? "active" : ""
                  }`}
                >
                  Floor Plan & Units
                </a>
              </div>
              <div className="navigation-item">
                <a
                  href="#reviews-ratings"
                  className={`color-nav ${
                    "reviews-ratings" === activeSection ? "active" : ""
                  }`}
                >
                  Ratings & Reviews
                </a>
              </div>
              <div className="navigation-item">
                <a
                  href="#about-locality"
                  className={`color-nav ${
                    "about-locality" === activeSection ? "active" : ""
                  }`}
                >
                  About Locality
                </a>
              </div>
              <div className="navigation-item">
                <a
                  href="#snapshot"
                  className={`color-nav ${
                    "snapshot" === activeSection ? "active" : ""
                  }`}
                >
                  Properties Snapshot
                </a>
              </div>
              <div className="navigation-item">
                <a
                  href="#about-builder"
                  className={`color-nav ${
                    "about-builder" === activeSection ? "active" : ""
                  }`}
                >
                  Project Details
                </a>
              </div>
              <div className="navigation-item">
                <a
                  href="#project-details"
                  className={`color-nav ${
                    "project-details" === activeSection ? "active" : ""
                  }`}
                >
                  About Developer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="proj__location">
        <div className="two-col">
          <div className="half-proj">
            <section className="section-wrap" id="nav-overview">
              <div className="prj--info">
                <section className="proj--info">
                  <div className="proj--brief">
                    <h1 className="proj-brief-heading">
                      {state.expose.overviewTitle}
                    </h1>
                    <h2 className="proj-info__name">
                      {state.expose.group}
                      <div className="proj-info__address">
                        <span className="proj-address-icon"></span>
                        {state.expose.locat}
                      </div>
                      <div className="proj__status">
                        <div className="proj__item">{state.expose.under}</div>
                        <div className="proj__item">
                          {state.expose.possession}
                        </div>
                      </div>
                    </h2>

                    <div className="proj-info__rating">
                      <div className="proj--rating">
                        <div className="proj-rating-column">
                          <div className="proj-rating-row">
                            <a href="#" className="proj-rating__btn">
                              Write a review
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="proj--add">
                    <div className="proj-left-block">
                      <div className="proj-info__price">
                        {state.expose.overviewPrice}
                      </div>
                      <div className="proj-info__prop">{state.expose.bhk}</div>
                    </div>
                    <div className="proj-left-block">
                      <span className="proj-left-btn">Contact Now</span>
                    </div>
                    <div className="proj-left-block">
                      <div className="down-load-btn">
                        <span className="down-load-brochure">
                          <PiNotepadLight />
                        </span>
                        Download
                        <br />
                        Brochure
                      </div>
                    </div>
                  </div>
                </section>
                <section className="property-available">
                  <h2 className="aval-heading">
                    Properties in Radiance Majestic
                  </h2>
                  <div className="proj-prop-available">
                    <div className="clear-fix-proj-avl">
                      <div
                        className="proj-buy-rent"
                        onClick={() => setProp(true)}
                        style={{
                          fontWeight: prop ? "600" : "500",
                          borderBottom: prop
                            ? "4px solid #d8232a"
                            : "1px solid #d7d7d7",
                        }}
                      >
                        buy
                      </div>
                      <div
                        className="proj-buy-rent"
                        style={{
                          fontWeight: prop ? "500" : "600",
                          borderBottom: prop
                            ? "1px solid #d7d7d7"
                            : "4px solid #d8232a",
                        }}
                        onClick={() => setProp(false)}
                      >
                        rent
                      </div>
                    </div>
                    <div className="sale-info-filter">
                      <div
                        className="sale-filter-btn"
                        onClick={() => proj(1)}
                        style={{
                          borderColor: border1 ? "#009681" : "#d7d7d7",
                          backgroundColor: border1 ? "#edfaf9" : "#fff",
                          fontWeight: border1 ? "600" : "400",
                        }}
                      >
                        All
                      </div>
                      <div
                        className="sale-filter-btn"
                        onClick={() => proj(2)}
                        style={{
                          borderColor: border2 ? "#009681" : "#d7d7d7",
                          backgroundColor: border2 ? "#edfaf9" : "#fff",
                          fontWeight: border2 ? "600" : "400",
                        }}
                      >
                        2 BHK
                      </div>
                      <div
                        className="sale-filter-btn"
                        onClick={() => proj(3)}
                        style={{
                          borderColor: border3 ? "#009681" : "#d7d7d7",
                          backgroundColor: border3 ? "#edfaf9" : "#fff",
                          fontWeight: border3 ? "600" : "400",
                        }}
                      >
                        3 BHK
                      </div>
                    </div>
                    <div className="availableProperties">
                      {prop ? (
                        <div id="prop--sale">
                          <Carousel responsive={responsive}>
                            {filter.map((x, y) => {
                              return (
                                <div key={y} className="swiper-container">
                                  <div className="pro_card">
                                    <a href="#">
                                      <div className="pro_card-img">
                                        <img src={x.img} alt="noImage"></img>
                                        <div className="pro_card-post">
                                          {x.posted}
                                        </div>
                                        <div className="pro_card-count">
                                          {x.count}
                                        </div>
                                      </div>
                                    </a>
                                    <div className="pro_card-detail">
                                      <a href="#">
                                        <div className="pro_card-price">
                                          {x.price}
                                        </div>
                                      </a>
                                      <div className="pro_card-bhk">
                                        <a href="#">{x.sqft}</a>
                                      </div>
                                      <div className="pro_card-cons">
                                        {x.date}
                                      </div>
                                      <div className="pro_card-agent">
                                        {x.builder}
                                      </div>
                                      <div className="pro_card-agent">
                                        Builder:
                                        <span className="postedby">
                                          {x.founder}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="pro_card_detail-btn">
                                      Contact Builder
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </Carousel>
                        </div>
                      ) : (
                        <div className="no-prop">
                          <div className="no-prop-title">
                            No property Available for Rent in Radiance Majestic
                          </div>
                          <a className="no-prop-btn">
                            Get notified when property is available.
                            <i>
                              <PiBellSimpleRingingBold />
                            </i>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              </div>
            </section>
            <section className="section-wrap" id="amenities">
              <div className="amenties-wrap">
                <div className="amenties-web">
                  <h2 className="amenties-heading">
                    Amenities Radiance Majestic
                  </h2>
                  <div className="amenties--dtl">
                    <div className="amenties--item">
                      <span className="ament-item--icon">
                        <GiFamilyHouse />
                      </span>
                      <span className="ament-item--text">Club House</span>
                      <span className="ament-item-star"></span>
                    </div>
                    <div className="amenties--item">
                      <span className="ament-item--icon">
                        <BiWalk />
                      </span>
                      <span className="ament-item--text">
                        Jogging and Strolling Track
                      </span>
                      <span className="ament-item-star"></span>
                    </div>
                    <div className="amenties--item">
                      <span className="ament-item--icon">
                        <GiRoad />
                      </span>
                      <span className="ament-item--text">
                        Cycling & Jogging Track
                      </span>
                      <span className="ament-item-star"></span>
                    </div>
                    <div className="amenties--item">
                      <span className="ament-item--icon">
                        <MdOutlineElectricMeter />
                      </span>
                      <span className="ament-item--text">PowerBack Up</span>
                    </div>
                    <div className="amenties--item">
                      <span className="ament-item--icon">
                        <FaSwimmingPool />
                      </span>
                      <span className="ament-item--text">Swimming Pool</span>
                    </div>
                    <div className="amenties--item">
                      <span className="ament-item--icon">
                        <GiLift />
                      </span>
                      <span className="ament-item--text">Lift</span>
                    </div>
                    <div className="amenties--item">
                      <span className="ament-item--icon">
                        <GiSecurityGate />
                      </span>
                      <span className="ament-item--text">Security</span>
                    </div>
                    <div className="amenties--item">
                      <span className="ament-item--icon">
                        <PiParkDuotone />
                      </span>
                      <span className="ament-item--text">Park</span>
                    </div>
                    <div className="amenties--item">
                      <span className="ament-item--icon">
                        <BiSolidCarGarage />
                      </span>
                      <span className="ament-item--text">Reserved Parking</span>
                    </div>
                    <div className="amenties--item">
                      <span className="ament-item--icon">
                        <CgGym />
                      </span>
                      <span className="ament-item--text">Gymnasium</span>
                    </div>
                    <div className="amenties--item">
                      <span className="ament-item--icon">
                        <CgGames />
                      </span>
                      <span className="ament-item--text">
                        Indoor Games Room
                      </span>
                    </div>
                    <div className="amenties--item">
                      <span className="ament-item--icon">
                        <TbHorseToy />
                      </span>
                      <span className="ament-item--text">Kids Club</span>
                    </div>
                  </div>
                  <div className="show-data">
                    Show all {state.expose.amenties} amenities
                  </div>
                </div>
                <div className="amenties--btn">Contact Builder</div>
              </div>
            </section>
            <section className="section-wrap" id="about-project">
              <section className="proj--about">
                <div className="proj-info__about">
                  <div className="proj__info-heading">
                    {state.expose.aboutName}
                  </div>
                  <div className="proj__about-text">
                    {state.expose.aboutText}
                    <span className="pro__about-read">Read more</span>
                  </div>
                </div>
              </section>
              <div className="proj__sub-wrap">
                <div className="proj__info-data">
                  <div className="proj-info-data-block">
                    <div className="proj-data-info">Project Size</div>
                    <div className="proj-data-value">
                      {state.expose.projectSize}
                    </div>
                  </div>
                  <div className="proj-info-data-block">
                    <div className="proj-data-info">Launch Date</div>
                    <div className="proj-data-value">
                      {state.expose.launchDate}
                    </div>
                  </div>
                  <div className="proj-info-data-block">
                    <div className="proj-data-info">Status</div>
                    <div className="proj-data-value">{state.expose.status}</div>
                  </div>
                  <div className="proj-info-data-block">
                    <div className="proj-data-info">Possession by</div>
                    <div className="proj-data-value">
                      {state.expose.possession2}
                    </div>
                  </div>
                  <div className="proj-info-data-block">
                    <div className="proj-data-info">Total Units</div>
                    <div className="proj-data-value">
                      {state.expose.totalUnits}
                    </div>
                  </div>
                  <div className="proj-info-data-block">
                    <div className="proj-data-info">Total Towers</div>
                    <div className="proj-data-value">
                      {state.expose.totalTowers}
                    </div>
                  </div>
                  <div className="proj-info-data-block">
                    <div className="proj-data-info">Project Type</div>
                    <div className="proj-data-value">
                      {state.expose.projectType}
                    </div>
                  </div>
                  <div className="proj-info-data-block">
                    <div className="proj-data-info">Property Type</div>
                    <div className="proj-data-value">
                      {state.expose.propertyType}
                    </div>
                  </div>
                  <div className="proj-info-data-block">
                    <div className="proj-data-info">Occupancy Certificate</div>
                    <div className="proj-data-value">
                      {state.expose.occupancy}
                    </div>
                  </div>
                  <div className="proj-info-data-block">
                    <div className="proj-data-info">
                      Commencement Certificate
                    </div>
                    <div className="proj-data-value">
                      {state.expose.certificate}
                    </div>
                  </div>
                  <div className="proj-info-data-block">
                    <div className="proj-data-info">Pincode</div>
                    <div className="proj-data-value">
                      {state.expose.pinCode}
                    </div>
                  </div>
                </div>
              </div>
              <section className="keep-things-mind">
                <div className="proj__location">
                  <div className="proj-loc-heading">Highlights</div>
                  <div className="proj__datas">
                    <div className="proj_location-advantages">
                      12K SQFT URBANRISE GENIUS
                    </div>
                  </div>
                  <div className="proj__datas">
                    <div className="proj_location-advantages">
                      75K SQFT ROOFTOP AMENITIES
                    </div>
                  </div>
                  <div className="proj__datas">
                    <div className="proj_location-advantages">
                      1+ ACRES GREEN PARK
                    </div>
                  </div>
                  {high ? (
                    <>
                      <div className="proj__datas">
                        <div className="proj_location-advantages">
                          45K SQFT COSMO CLUB
                        </div>
                      </div>
                      <div className="proj__datas">
                        <div className="proj_location-advantages">
                          24K SQFT TOWER TO TOWER AMENITIES
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  <div
                    className={high ? "hide" : "proj_show_all"}
                    onClick={() => setHigh(true)}
                  >
                    Show all details
                  </div>
                </div>
                <div className="proj-loc__cal-btn">Contact Now</div>
              </section>
            </section>
            <section className="section-wrap" id="project-unit-floors">
              <div className="unit-floors">
                <div className="unit-floor-heading">Units & Floor plans</div>
                <div className="price__details">
                  <section className="section-wrap">
                    <div className="unit-floors">
                      <h2 className="unit-floor-heading">Floor Plan & Units</h2>
                      <div className="price__details">
                        <div className="unit__floors">
                          <div className="unit-floors-card">
                            <div className="floors_card-data">
                              <div className="floors_card-data-bhk">
                                2 BHK Flat
                              </div>
                              <div className="floors_card-data-sqft">
                                {state.expose.unitSqft2}
                              </div>
                              <div className="floors_card-data-price">
                                <span>Sale:</span>
                                {state.expose.unit2Sale}
                              </div>
                            </div>
                            <div className="floors_card-img">
                              <span className="zoom-icon"></span>
                              <img
                                src={state.expose.unitsImg}
                                alt="noImage"
                              ></img>
                            </div>
                          </div>
                          <div className="unit-floors-card">
                            <div className="floors_card-data">
                              <div className="floors_card-data-bhk">
                                3 BHK Flat
                              </div>
                              <div className="floors_card-data-sqft">
                                {state.expose.unitSqft3}
                              </div>
                              <div className="floors_card-data-price">
                                <span>Sale:</span>
                                {state.expose.unit3Sale}
                              </div>
                            </div>
                            <div className="floors_card-img">
                              <span className="zoom-icon"></span>
                              <img
                                src={state.expose.unitsImg}
                                alt="noImage"
                              ></img>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <section className="prj-masterplan">
                <div className="master-sub">
                  <div className="master-details-sub">
                    <div className="master-plan-data">
                      <div className="master-plan-title">View Master Plan</div>
                      <div className="master-plan-text">
                        {state.expose.masterPlan}
                      </div>
                    </div>
                    <div className="master-plan-img">
                      <span className="zoom-icon"></span>
                      <img src={state.expose.masterImg} alt="noImage"></img>
                    </div>
                  </div>
                </div>
              </section>
            </section>
            <section className="section-wrap" id="reviews-ratings">
              <div className="rating__sub">
                <h2 className="rating__sub-heading">
                  {state.expose.overviewTitle} Reviews & Ratings
                  <div className="rating__btn">
                    <a href="#">Write a review</a>
                  </div>
                </h2>
              </div>
            </section>
            <section className="section-wrap" id="about-locality">
              <div className="pro__location">
                <div className="pro-locality-rating">
                  <div className="heading">{state.expose.aboutTtl2}</div>
                  <div className="pro__rating">
                    <div className="proj__rating-column">
                      <div className="proj-rating--row">
                        <span className="proj-rating__number">3.8</span>
                        <span className="proj-stargroup">
                          <span className="proj--star">
                            <BsStarFill />
                          </span>
                          <span className="proj--star">
                            <BsStarFill />
                          </span>
                          <span className="proj--star">
                            <BsStarFill />
                          </span>
                          <span className="proj--star">
                            <BsStarHalf />
                          </span>
                          <span className="proj--star">
                            <BsStar />
                          </span>
                        </span>
                      </div>
                      <div className="proj-rating--text">79 Reviews</div>
                    </div>
                    <div className="proj__rating-column">
                      <div className="proj_rating_title">Rank 283</div>
                      <div className="proj_rating-text">
                        out of 3991 Localities
                      </div>
                    </div>
                  </div>
                  <div className="proj__details-desc">
                    {state.expose.review}
                    <span className="proj__details_read">Read more</span>
                  </div>
                  <div className="proj__advantage">
                    <div className="proj-advantage-item">
                      Home to SIPCOT IT Park comprising many renowned IT / ITeS
                      companies
                    </div>
                    <div className="proj-advantage-item">
                      Encourages walk to work concept as many apartment
                      complexes are within walking distance from SIPCOT IT Park
                    </div>
                  </div>
                  <div className="proj__advantage">
                    <div className="heading-3">Location Advantages</div>
                    <div className="proj-adv-info">
                      <div className="tick-icon">{state.expose.loc1}</div>
                    </div>
                    <div className="proj-adv-info">
                      <div className="tick-icon">{state.expose.loc2}</div>
                    </div>
                    <div className="proj-adv-info">
                      <div className="tick-icon">{state.expose.loc3}</div>
                    </div>
                  </div>
                  <div className="review-locality">
                    <div className="review-block">
                      <div className="review-user-rating">
                        <div className="review-user-initial">A</div>
                        <div className="review-initial-block">
                          <a href="#">
                            <div className="review__name">
                              {state.expose.own}
                            </div>
                          </a>
                          <div className="agent__local-guide">
                            Agent (Local Guide)
                          </div>
                        </div>
                      </div>
                      <div className="review-user-msg">
                        <div className="heading__2">
                          Indian Bank ATM 1.9 km HDFC...
                        </div>
                        {agent ? (
                          <div className="review__msg">
                            Indian Bank ATM
                            <br />
                            1.9 km
                            <br />
                            HDFC Bank ATM
                            <br />
                            2.6 km
                            <br />
                            Online Organic Store
                            <br />
                            2.7 km
                            <br />
                            Nilgiris Super Market
                            <br />3 km
                            <br />
                            Surrounded by schools, coll...
                            <span
                              className="agent__local-read"
                              onClick={() => setAgent(false)}
                            >
                              Read more
                            </span>
                          </div>
                        ) : (
                          <div className="review__msg">
                            Indian Bank ATM
                            <br />
                            1.9 km
                            <br />
                            HDFC Bank ATM
                            <br />
                            2.6 km
                            <br />
                            Online Organic Store
                            <br />
                            2.7 km
                            <br />
                            Nilgiris Super Market
                            <br />3 km
                            <br />
                            Surrounded by schools, colleges, universities,
                            hospitals and companies
                            <br />
                            Well Developed Parks, organic garden
                            <br />
                            Native Avenues Trees
                            <br />
                            Located close to the OMR IT Hub and GST Road, it is
                            conveniently surrounded by schools, colleges,
                            universities, hospitals, and industries
                            <br />
                            Major shopping destinations to transportation hubs
                            all in close proximity
                            <br />
                            Excellent connectivity, major amenities
                            <br />
                            Abundant Ground water
                            <span
                              className="agent__local-read"
                              onClick={() => setAgent(true)}
                            >
                              Hide
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section-wrap" id="snapshot">
              <div className="proj-property__snap">
                <div className="proj-info-sale-rent">
                  <div className="proj-info__tab">Buy</div>
                </div>
                <div className="proj-info-configure">
                  <div className="proj-configure">
                    <div className="heading-4">Price Range</div>
                    <div className="proj__bar">
                      <div
                        className="proj__info-col info-1"
                        style={{ width: `${snap1}` }}
                      >
                        <div className="proj__percent">50%</div>
                      </div>
                      <div
                        className="proj__info-col info-2"
                        style={{ width: `${snap2}` }}
                      >
                        <div className="proj__percent">33%</div>
                      </div>
                      <div
                        className="proj__info-col info-3"
                        style={{ width: `${snap3}` }}
                      >
                        <div className="proj__percent">17%</div>
                      </div>
                    </div>
                    <div className="proj__msg">
                      <span className="proj__msg-text msg-1">
                        ₹40Lac - ₹60Lac
                      </span>
                      <span className="proj__msg-text msg-2">
                        ₹20Lac - ₹40Lac
                      </span>
                      <span className="proj__msg-text msg-3">
                        ₹60Lac - ₹80Lac
                      </span>
                    </div>
                  </div>
                  <div className="proj-configure">
                    <div className="heading-4">Room Configuration</div>
                    <div className="proj__bar">
                      <div
                        className="proj__info-col info-1"
                        style={{ width: `${snap4}` }}
                      >
                        <div className="proj__percent">33%</div>
                      </div>
                      <div
                        className="proj__info-col info-2"
                        style={{ width: `${snap5}` }}
                      >
                        <div className="proj__percent">33%</div>
                      </div>
                      <div
                        className="proj__info-col info-3"
                        style={{ width: `${snap6}` }}
                      >
                        <div className="proj__percent">34%</div>
                      </div>
                    </div>
                    <div className="proj__msg">
                      <div className="proj__msg-text msg-1">3 BHK</div>
                      <div className="proj__msg-text msg-2">2 BHK</div>
                      <div className="proj__msg-text msg-3">1 BHK</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section-wrap" id="about-builder">
              <section className="section-wrap">
                <div className="about__devolper">
                  <div className="developer-heading">About Developer</div>
                  <div className="developer__web">
                    <div className="about__builder">
                      <div className="about-builder__logo">
                        <img src={state.expose.aboutLogo} alt="noImage"></img>
                      </div>
                      <a href="#">
                        <div className="builder__heading">Urbanise</div>
                      </a>
                      <div className="about__builder-text">
                        Years of Experience -
                        <span>{state.expose.aboutExp}</span>
                      </div>
                    </div>
                    <div className="about__table">
                      <div className="about__table-item">Total Projects</div>
                      <div className="about__table-item">
                        {state.expose.aboutProj}
                      </div>
                      <div className="about__table-item">
                        Projects Completed
                      </div>
                      <div className="about__table-item">
                        {state.expose.completed}
                      </div>
                      <div className="about__table-item">Projects Ongoing</div>
                      <div className="about__table-item">
                        {state.expose.aboutonGoing}
                      </div>
                      <div className="about__table-item">Operating in</div>
                      <div className="about__table-item">
                        <span className="developer__city">
                          {state.expose.operaying}
                        </span>
                      </div>
                    </div>
                    <div className="about__text">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <div>
                                Founded by a visionary team of young and
                                passionate experts from the real estate
                                industry, Urbanrise, one of the best builders in
                                Chennai and Hyd...
                                <span className="develop__read">Read more</span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="about-heading-2">Corporate Address</div>
                  <div className="corp-address">
                    Plot No. 'A' 36, 1, Gandhi Mandapam Rd, Chitra Nagar,
                    Kotturpuram, Chennai, Tamil Nadu 600085
                  </div>
                  <div className="corp-btn">
                    <div className="corp__btn">Contact Now</div>
                  </div>
                </div>
              </section>
            </section>
            <section className="section-wrap" id="project-details">
              <div className="proj---details">
                <section className="proj__com">
                  <div className="pro__wrap">
                    <div className="pro__details-rera-card">
                      <span className="rera__icon">
                        R
                        <i className="rera-1">
                          <FaShield />
                        </i>
                      </span>
                      <div className="rera__heading">RERA approved</div>
                      <div className="rera__sub-heading">What is RERA?</div>
                      <div className="rera__sub-card-text">
                        The Real Estate (Regulation and Development) Act, 2016
                        is Act of the Parliament of India which seeks to protect
                        buyers as well as help boost investments in the real
                        estate industry. The Act came into force from 1 May
                        2016.
                      </div>
                      <div className="rera__sub-heading">RERA ID</div>
                      <div className="rera__sub-card-text">
                        <span className="prj-rera-id-text">
                          {state.expose.reraId}
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="proj---photos">
                  <div className="photo-video">
                    <h3 className="heading-6">{state.expose.photosOf}</h3>
                    <div className="photo-video-slider">
                      <Carousel responsive={responsive}>
                        <div className="photo-video-col">
                          <div className="photo-video-card">
                            <div className="photo-video-box">
                              <img src={state.expose.img1} alt="noImage"></img>
                            </div>
                          </div>
                        </div>
                        <div className="photo-video-col">
                          <div className="photo-video-card">
                            <div className="photo-video-box">
                              <img src={state.expose.img2} alt="noImage"></img>
                            </div>
                          </div>
                        </div>
                        <div className="photo-video-col">
                          <div className="photo-video-card">
                            <div className="photo-video-box">
                              <img src={state.expose.img3} alt="noImage"></img>
                            </div>
                          </div>
                        </div>
                        <div className="photo-video-col">
                          <div className="photo-video-card">
                            <div className="photo-video-box">
                              <img src={state.expose.img4} alt="noImage"></img>
                            </div>
                          </div>
                        </div>
                        <div className="photo-video-col">
                          <div className="photo-video-card">
                            <div className="photo-video-box">
                              <img src={state.expose.img5} alt="noImage"></img>
                            </div>
                          </div>
                        </div>
                        <div className="photo-video-col">
                          <div className="photo-video-card">
                            <div className="photo-video-box">
                              <img src={state.expose.img6} alt="noImage"></img>
                            </div>
                          </div>
                        </div>
                        <div className="photo-video-col">
                          <div className="photo-video-card">
                            <div className="photo-video-box">
                              <img src={state.expose.img7} alt="noImage"></img>
                            </div>
                          </div>
                        </div>
                        <div className="photo-video-col">
                          <div className="photo-video-card">
                            <div className="photo-video-box">
                              <img src={state.expose.img8} alt="noImage"></img>
                            </div>
                          </div>
                        </div>
                      </Carousel>
                    </div>
                    <div className="photo-video-see-all">See all Photos</div>
                  </div>
                </section>
              </div>
            </section>
          </div>
          <div className="details-mob-right">
            <div className="contact-header">
              <div className="contact-header-name">{state.expose.looking}</div>
            </div>
            <div className="contact__project">
              <div className="contact__body">
                <div className="contact_slide slide-1">
                  <form className="contact__form" autoComplete="on">
                    <div className="fieldset">
                      <label for className="contact__label-1">
                        I am
                      </label>
                      <div className="aim-btn">
                        <div className="aim-btn-item">
                          <input type="radio" className="aim-btn__input" />
                          <label for="Individual" className="aim-btn__label">
                            Individual
                          </label>
                        </div>
                        <div className="aim-btn-item">
                          <input type="radio" className="aim-btn__input" />
                          <label for="agent" className="aim-btn__label">
                            Agent
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="fieldset">
                      <input type="text" className="contact--input" required />
                      <label className="contact__label-2">Name</label>
                    </div>
                    <div className="fieldset">
                      <input type="text" className="contact--input" required />
                      <label for="contact__label">Email</label>
                    </div>
                    <div className="fieldset">
                      <select className="contact__select__contact">
                        <option value="50" selected="selected">
                          IND +91
                        </option>
                        <option value="51">USA +1</option>
                        <option value="52">GBR +44</option>
                        <option value="53">ARE +971</option>
                        <option value="54">CAN +1</option>
                        <option value="55">AUS +61</option>
                        <option value="56">PAK +92</option>
                        <option value="57">SAU +966</option>
                        <option value="58">KWT +965</option>
                        <option value="59">ZAF +27</option>
                        <option value="60">AFG +93</option>
                        <option value="61">ALB +355</option>
                        <option value="62">DZA +213</option>
                        <option value="63">ASM +684</option>
                        <option value="64">AND +376</option>
                        <option value="65">AGO +244</option>
                        <option value="66">AIA +264</option>
                        <option value="67">ATG +268</option>
                        <option value="68">ARG +54</option>
                        <option value="69">ARM +374</option>
                        <option value="70">AUT +43</option>
                        <option value="71">AZE +994</option>
                        <option value="72">BHS +1242</option>
                        <option value="73">BHR +973</option>
                        <option value="74">BGD +880</option>
                        <option value="75">BRB +1246</option>
                        <option value="76">BLR +375</option>
                        <option value="77">BEL +32</option>
                        <option value="78">BLZ +501</option>
                        <option value="79">BMU +1441</option>
                        <option value="80">BTN +975</option>
                        <option value="81">BOL +591</option>
                        <option value="82">BIH +387</option>
                        <option value="83">BWA +267</option>
                        <option value="84">BRA +55</option>
                        <option value="85">BRN +673</option>
                        <option value="86">BGR +359</option>
                        <option value="87">BFA +226</option>
                        <option value="88">BDI +257</option>
                        <option value="89">KHM +855</option>
                        <option value="90">CMR +237</option>
                        <option value="91">CPV +238</option>
                        <option value="92">CYM +345</option>
                        <option value="93">CAF +236</option>
                        <option value="94">TCD +235</option>
                        <option value="95">CHL +56</option>
                        <option value="97">COL +57</option>
                        <option value="98">COM +269</option>
                        <option value="99">COD +243</option>
                        <option value="100">COG +242</option>
                        <option value="101">COK +682</option>
                        <option value="102">CRI +506</option>
                        <option value="103">CIV +225</option>
                        <option value="104">HRV +385</option>
                        <option value="105">CUB +53</option>
                        <option value="106">CYP +357</option>
                        <option value="107">CZE +420</option>
                        <option value="108">DNK +45</option>
                        <option value="109">DJI +253</option>
                        <option value="110">DMA +767</option>
                        <option value="111">DOM +1</option>
                        <option value="112">TLS +670</option>
                        <option value="113">ECU +593</option>
                        <option value="114">EGY +20</option>
                        <option value="115">SLV +503</option>
                        <option value="116">GNQ +240</option>
                        <option value="117">ERI +291</option>
                        <option value="118">EST +372</option>
                        <option value="119">ETH +251</option>
                        <option value="120">FLK +500</option>
                        <option value="121">FRO +298</option>
                        <option value="122">FJI +679</option>
                        <option value="123">FIN +358</option>
                        <option value="124">FRA +33</option>
                        <option value="125">GUF +594</option>
                        <option value="126">PYF +689</option>
                        <option value="127">GAB +241</option>
                        <option value="128">GMB +220</option>
                        <option value="129">GEO +995</option>
                        <option value="130">DEU +49</option>
                        <option value="131">GHA +233</option>
                        <option value="132">GIB +350</option>
                        <option value="133">GRC +30</option>
                        <option value="134">GRL +299</option>
                        <option value="135">GRD +473</option>
                        <option value="136">GLP +590</option>
                        <option value="137">GUM +671</option>
                        <option value="138">GTM +502</option>
                        <option value="139">GIN +224</option>
                        <option value="140">GNB +245</option>
                        <option value="141">GUY +592</option>
                        <option value="142">HTI +509</option>
                        <option value="143">HND +504</option>
                        <option value="144">HKG +852</option>
                        <option value="145">HUN +36</option>
                        <option value="146">ISL +354</option>
                        <option value="147">IDN +62</option>
                        <option value="148">IRN +98</option>
                        <option value="149">IRQ +964</option>
                        <option value="150">IRL +353</option>
                        <option value="151">ISR +972</option>
                        <option value="152">ITA +39</option>
                        <option value="153">JAM +1</option>
                        <option value="154">JPN +81</option>
                        <option value="155">JOR +962</option>
                        <option value="156">KAZ +7</option>
                        <option value="157">KEN +254</option>
                        <option value="158">KIR +686</option>
                        <option value="159">MDA +82</option>
                        <option value="160">KGZ +996</option>
                        <option value="161">LAO +856</option>
                        <option value="162">LVA +371</option>
                        <option value="163">LBN +961</option>
                        <option value="164">LSO +266</option>
                        <option value="165">LBR +231</option>
                        <option value="166">LBY +218</option>
                        <option value="167">LIE +423</option>
                        <option value="168">LTU +370</option>
                        <option value="169">LUX +352</option>
                        <option value="170">MAC +853</option>
                        <option value="171">MKD +389</option>
                        <option value="172">MDG +261</option>
                        <option value="173">MWI +265</option>
                        <option value="174">MYS +60</option>
                        <option value="175">MDV +960</option>
                        <option value="176">MLI +223</option>
                        <option value="177">MLT +356</option>
                        <option value="178">MTQ +596</option>
                        <option value="179">MRT +222</option>
                        <option value="180">MUS +230</option>
                        <option value="181">MYT +269</option>
                        <option value="182">MEX +52</option>
                        <option value="183">FSM +691</option>
                        <option value="184">KOR +373</option>
                        <option value="185">MCO +377</option>
                        <option value="186">MNG +976</option>
                        <option value="187">MSR +664</option>
                        <option value="188">MAR +212</option>
                        <option value="189">MOZ +258</option>
                        <option value="190">MMR +95</option>
                        <option value="191">NAM +264</option>
                        <option value="192">NRU +674</option>
                        <option value="193">NPL +977</option>
                        <option value="194">ANT +599</option>
                        <option value="195">NLD +31</option>
                        <option value="196">NCL +687</option>
                        <option value="197">NZL +64</option>
                        <option value="198">NIC +505</option>
                        <option value="199">NER +227</option>
                        <option value="200">NGA +234</option>
                        <option value="201">NIU +683</option>
                        <option value="202">NFK +672</option>
                        <option value="203">PRK +850</option>
                        <option value="204">NOR +47</option>
                        <option value="205">OMN +968</option>
                        <option value="206">PAN +507</option>
                        <option value="207">PNG +675</option>
                        <option value="208">PRY +595</option>
                        <option value="209">PER +51</option>
                        <option value="210">PHL +63</option>
                        <option value="211">PCN +649</option>
                        <option value="212">POL +48</option>
                        <option value="213">PRT +351</option>
                        <option value="214">PRI +939</option>
                        <option value="215">QAT +974</option>
                        <option value="216">REU +262</option>
                        <option value="217">ROU +40</option>
                        <option value="218">RUS +7</option>
                        <option value="219">RWA +250</option>
                        <option value="220">WSM +685</option>
                        <option value="221">SMR +378</option>
                        <option value="222">STP +239</option>
                        <option value="223">SEN +221</option>
                        <option value="224">SCG +381</option>
                        <option value="225">SYC +248</option>
                        <option value="226">SLE +232</option>
                        <option value="227">SGP +65</option>
                        <option value="228">SVK +421</option>
                        <option value="229">SVN +386</option>
                        <option value="230">SLB +677</option>
                        <option value="231">SOM +252</option>
                        <option value="232">ESP +34</option>
                        <option value="233">LKA +94</option>
                        <option value="234">SHN +290</option>
                        <option value="235">KNA +869</option>
                        <option value="236">LCA +758</option>
                        <option value="237">SPM +508</option>
                        <option value="238">VCT +784</option>
                        <option value="239">SDN +249</option>
                        <option value="240">SUR +597</option>
                        <option value="241">SWZ +268</option>
                        <option value="242">SWE +46</option>
                        <option value="243">CHE +41</option>
                        <option value="244">SYR +963</option>
                        <option value="245">TWN +886</option>
                        <option value="246">TJK +992</option>
                        <option value="247">TZA +255</option>
                        <option value="248">THA +66</option>
                        <option value="249">TGO +228</option>
                        <option value="250">TKL +690</option>
                        <option value="251">TON +676</option>
                        <option value="252">TTO +868</option>
                        <option value="253">TUN +216</option>
                        <option value="254">TUR +90</option>
                        <option value="255">TKM +993</option>
                        <option value="256">TCA +649</option>
                        <option value="257">TUV +688</option>
                        <option value="258">UGA +256</option>
                        <option value="259">UKR +380</option>
                        <option value="260">URY +598</option>
                        <option value="261">UZB +998</option>
                        <option value="262">VUT +678</option>
                        <option value="263">VEN +58</option>
                        <option value="264">VNM +84</option>
                        <option value="265">VGB +284</option>
                        <option value="266">VIR +340</option>
                        <option value="267">WLF +681</option>
                        <option value="268">YEM +967</option>
                        <option value="269">YUG +381</option>
                        <option value="270">RNR +260</option>
                        <option value="271">ZWE +263</option>
                      </select>
                      {/* <i className="contact__chevron">
                        <BsChevronDown />
                      </i> */}
                      <input
                        type="text"
                        className="select__input"
                        required
                      ></input>
                      <label className="select-contact__label">
                        Mobile Number
                      </label>
                    </div>
                    <div className="contact-disclaimer">
                      I Agree to Magicbricks'
                      <a className="contact__link">Terms of Use</a>
                    </div>
                    <div className="fieldset">
                      <button className="contact---btn">View Phone No.</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
