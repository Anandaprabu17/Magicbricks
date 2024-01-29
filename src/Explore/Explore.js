import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Context";
import { TbTruckDelivery } from "react-icons/tb";
import { BiChevronDown, BiCamera } from "react-icons/bi";
import "./Explore.css";
import { FiArrowUpRight } from "react-icons/fi";
// import { CiLocationOn } from "react-icons/ci";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TfiEmail } from "react-icons/tfi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TbHomeDollar } from "react-icons/tb";
import { RiNewspaperLine } from "react-icons/ri";
import { GiPriceTag, GiReceiveMoney } from "react-icons/gi";
import { BsCalculator } from "react-icons/bs";
import { ImNewspaper } from "react-icons/im";

// import {
//   PiThumbsUp,
//   PiThumbsDown,
//   PiBuildingsDuotone,
//   PiTrainBold,
// } from "react-icons/pi";
// import { BiSolidInstitution, BiStore } from "react-icons/bi";
// import { GrMapLocation } from "react-icons/gr";
// import { CiHospital1 } from "react-icons/ci";

export const Explore = () => {
  const { state, dispatch } = useContext(Context);
  const [more1, setMore1] = useState(false);
  const [more2, setMore2] = useState(false);
  const [more3, setMore3] = useState(false);
  const [more4, setMore4] = useState(false);
  const [more5, setMore5] = useState(false);
  const [more6, setMore6] = useState(false);
  const [tab, setTab] = useState(false);
  const [sale1, setSale1] = useState("");
  const [sale2, setSale2] = useState("");
  const [sale3, setSale3] = useState("");
  const [sale4, setSale4] = useState("");
  const [prop1, setProp1] = useState("");
  const [prop2, setProp2] = useState("");
  const [prop3, setProp3] = useState("");
  const [prop4, setProp4] = useState("");

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
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

  useEffect(() => {
    setSale1(tab ? state.loc.rentProPer1 : state.loc.salePropPer1);
    setSale2(tab ? state.loc.rentProPer2 : state.loc.salePropPer2);
    setSale3(tab ? state.loc.rentProPer3 : state.loc.salePropPer3);
    setSale4(tab ? state.loc.rentProPer4 : state.loc.salePropPer4);
    setProp1(tab ? state.loc.rentProPer1 : state.loc.salePropPer1);
    setProp2(tab ? state.loc.rentProPer2 : state.loc.salePropPer2);
    setProp3(tab ? state.loc.rentProPer3 : state.loc.salePropPer3);
    setProp4(tab ? state.loc.rentProPer4 : state.loc.salePropPer4);
  }, [tab]);

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
      <section id="explore-banner">
        <div className="container">
          <div className="explore-banner-row">
            <div className="explore-banner-col-frst">
              <img src={state.loc.overImg} alt="floor"></img>
              <div className="explore-photo-count">
                <i className="camera-icon">
                  <BiCamera />
                </i>
                <span>{state.loc.photoCount}</span>
              </div>
            </div>
            <div className="explore-banner-col-second">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.2310679856!2d79.87933612858346!3d13.047985942055819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1695971291432!5m2!1sen!2sin"
                width="300"
                height="275"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="view-map">
                <i className="location-icon">
                  <HiOutlineLocationMarker />
                </i>
                <span>View on Map</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="explore-nav">
        <div className="explore-container">
          <div className="explore-nav-row">
            <ul className="explore-navBar">
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Price & Trends</a>
              </li>
              <li>
                <a href="#">Photos & Videos</a>
              </li>
              <li>
                <a href="#">Tools & Advice</a>
              </li>
              <li>
                <a href="#">Real Estate Guide</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Builders</a>
              </li>
              <li>
                <a href="#">Locality Comparison</a>
              </li>
              <li>
                <a href="#">Similar Localities</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="overview">
        <div className="container">
          <div className="overview-row">
            <div className="overview-col-left">
              <div className="overview-title">
                <div className="overview-loc">
                  <div className="overview-heading">
                    <h1>{state.loc.loc}</h1>
                  </div>
                  <div className="loc-pincode">{state.loc.exactLoc}</div>
                </div>
                <div className="overview-rating">
                  <div className="rating-stars">
                    <div className="loc-rate-heading">
                      <span className="rate-score">{state.loc.rating}</span>
                    </div>
                    <span className="star-overview">{state.loc.star1}</span>
                    <span className="star-overview">{state.loc.star2}</span>
                    <span className="star-overview">{state.loc.star3}</span>
                    <span className="star-overview">{state.loc.star4}</span>
                    <span className="star-overview">{state.loc.star5}</span>
                  </div>
                  <div className="write-review">
                    <div className="all-reviews">
                      <a href="#">{state.loc.review}</a>
                    </div>
                    <div className="review-write">Write a Review</div>
                  </div>
                </div>
              </div>
              <div className="priceRange-sec">
                <div className="priceRange-heading">Price Range</div>
                <div className="priceRange-box">
                  <div className="price-range-block">
                    <div className="price-rating">Residential</div>
                    <div className="price-recount">
                      <span className="sub1">Buy</span>
                      <span className="subPrice1">{state.loc.resBuy}</span>
                    </div>
                    <div className="price-recount">
                      <span className="sub1">Rent</span>
                      <span className="subPrice1">{state.loc.resRent}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sub-blocks">
                <div className="sub-heading">
                  <h2>{state.loc.aboutLoc}</h2>
                </div>
                <div className="content-heading">
                  Locality introduction and neighbourhood
                </div>
                <div className="locate-me">{state.loc.locality}</div>
                <div className="loc-readMore">
                  <a href="#" className="read-more-data">
                    Read more
                  </a>
                </div>
              </div>
              <div className="sub-things">
                <div className="sub-things-heading">
                  <h3>Things to keep in mind</h3>
                </div>
                <ul className="things-ul">
                  <li className="things-item">
                    <span className="things-icon">
                      <i>{state.loc.thingIcon1}</i>
                    </span>
                    {state.loc.thing1}
                  </li>
                  <li className="things-item">
                    <span className="things-icon">
                      <i>{state.loc.thingIcon2}</i>
                    </span>
                    {state.loc.thing2}
                  </li>
                  <li className="things-item">
                    <span className="things-icon">
                      <i>{state.loc.thingIcon3}</i>
                    </span>
                    {state.loc.thing3}
                  </li>
                </ul>
              </div>
              <div className="sub-neighbourhood">
                <div className="neighbour-heading">
                  <h3>Locality Neighbourhood</h3>
                </div>
                <div className="factoids">
                  <div className="factoids-content">
                    <div className="factoids-card">
                      <div className="inner-content">
                        <div className="factoids-head">
                          {state.loc.neighbourTitle1}
                          <span className="factiods-icon">
                            <i>{state.loc.title1Icon}</i>
                          </span>
                        </div>
                        <div className="factoids-body">
                          <div className="factoids-item">
                            {state.loc.title1dtls1}
                          </div>
                          <div className="factoids-item hasView">
                            {state.loc.title1dtls2}
                          </div>
                          <div
                            className="factoids-show-more"
                            onMouseEnter={() => setMore1(true)}
                            onMouseLeave={() => setMore1(false)}
                          >
                            {state.loc.title1more}
                          </div>
                          {more1 ? (
                            <>
                              <div className="factoids-item">
                                {state.loc.title1dtls3}
                              </div>
                              <div className="factoids-item">
                                {state.loc.title1dtls4}
                              </div>
                              <div className="factoids-item">
                                {state.loc.title1dtls5}
                              </div>
                              <div className="factoids-item">
                                {state.loc.title1dtls6}
                              </div>
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="factoids-card">
                      <div className="inner-content">
                        <div className="factoids-head">
                          {state.loc.neighbourTitle2}
                          <span className="factiods-icon">
                            <i>{state.loc.title2Icon}</i>
                          </span>
                        </div>
                        <div className="factoids-body">
                          <div className="factoids-item">
                            {state.loc.title2dtls1}
                          </div>
                          <div className="factoids-item">
                            {state.loc.title2dtls2}
                          </div>
                          <div
                            className="factoids-show-more"
                            onMouseEnter={() => setMore2(true)}
                            onMouseLeave={() => setMore2(false)}
                          >
                            {state.loc.title2more}
                          </div>
                          {more2 ? (
                            <>
                              <div className="factoids-item">
                                {state.loc.title2dtls3}
                              </div>
                              <div className="factoids-item">
                                {state.loc.title2dtls4}
                              </div>
                              <div className="factoids-item">
                                {state.loc.title2dtls5}
                              </div>
                              <div className="factoids-item">
                                {state.loc.title2dtls6}
                              </div>
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="factoids-card">
                      <div className="inner-content">
                        <div className="factoids-head">
                          {state.loc.neighbourTitle3}
                          <span className="factiods-icon">
                            <i>{state.loc.title3Icon}</i>
                          </span>
                        </div>
                        <div className="factoids-body">
                          <div className="factoids-item">
                            {state.loc.title3dtls1}
                          </div>
                          <div className="factoids-item hasView">
                            {state.loc.title3dtls2}
                          </div>
                          <div
                            className="factoids-show-more"
                            onMouseEnter={() => setMore3(true)}
                            onMouseLeave={() => setMore3(false)}
                          >
                            {state.loc.title2dtls3}
                          </div>
                          {more3 ? (
                            <>
                              <div className="factoids-item">
                                {state.loc.title2dtls4}
                              </div>
                              <div className="factoids-item">
                                {state.loc.title2dtls5}
                              </div>
                              <div className="factoids-item">
                                {state.loc.title2dtls6}
                              </div>
                              <div className="factoids-show-more">
                                {state.loc.title3more}
                              </div>
                              <div className="factoids-item">
                                {state.loc.title3dtls3}
                              </div>
                              <div className="factoids-item">
                                {state.loc.title3dtls4}
                              </div>
                              <div className="factoids-item">
                                {state.loc.title3dtls5}
                              </div>
                              <div className="factoids-item">
                                {state.loc.title3dtls6}
                              </div>
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="factoids-card">
                      <div className="inner-content">
                        <div className="factoids-head">
                          {state.loc.neighbourTitle4}
                          <span className="factiods-icon">
                            <i>{state.loc.title4Icon}</i>
                          </span>
                        </div>
                        <div className="factoids-body">
                          <div className="factoids-item">
                            {state.loc.title4dtls1}
                          </div>
                          <div className="factoids-item hasView">
                            {state.loc.title4dtls2}
                          </div>
                          <div
                            className="factoids-show-more"
                            onMouseEnter={() => setMore4(true)}
                            onMouseLeave={() => setMore4(false)}
                          >
                            {state.loc.title4more}
                          </div>
                          {more4 ? (
                            <>
                              <div className="factoids-item">
                                {state.loc.title4dtls3}
                              </div>
                              <div className="factoids-item">
                                {state.loc.title4dtls4}
                              </div>
                              <div className="factoids-item">
                                {state.loc.title4dtls5}
                              </div>
                              <div className="factoids-item">
                                {state.loc.title4dtls6}
                              </div>
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="factoids-card">
                      <div className="inner-content">
                        <div className="factoids-head">
                          {state.loc.neighbourTitle5}
                          <span className="factiods-icon">
                            <i>{state.loc.title5Icon}</i>
                          </span>
                        </div>
                        <div className="factoids-body">
                          <div className="factoids-item">
                            {state.loc.title5dtls1}
                          </div>
                          <div className="factoids-item hasView">
                            {state.loc.title5dtls2}
                          </div>
                          <div
                            className="factoids-show-more"
                            onMouseEnter={() => setMore5(true)}
                            onMouseLeave={() => setMore5(false)}
                          >
                            {state.loc.title5more}
                          </div>
                          {more5 ? (
                            <>
                              <div className="factoids-item">
                                {state.loc.title5dtls3}
                              </div>
                              <div className="factoids-item">
                                {state.loc.title5dtls4}
                              </div>
                              <div className="factoids-item">
                                {state.loc.title5dtls5}
                              </div>
                              <div className="factoids-item">
                                {state.loc.title5dtls6}
                              </div>
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="factoids-card">
                      <div className="inner-content">
                        <div className="factoids-head">
                          {state.loc.neighbourTitle6}
                          <span className="factiods-icon">
                            <i>{state.loc.title6Icon}</i>
                          </span>
                        </div>
                        <div className="factoids-body">
                          <div className="factoids-item">
                            {state.loc.title6dtls1}
                          </div>
                          <div className="factoids-item hasView">
                            {state.loc.title6dtls2}
                          </div>
                          <div
                            className="factoids-show-more"
                            onMouseEnter={() => setMore6(true)}
                            onMouseLeave={() => setMore6(false)}
                          >
                            {state.loc.title6more}
                          </div>
                          {more6 ? (
                            <>
                              <div className="factoids-item">
                                {state.loc.title6dtls3}
                              </div>
                              <div className="factoids-item">
                                {state.loc.title6dtls4}
                              </div>
                              <div className="factoids-item">
                                {state.loc.title6dtls5}
                              </div>
                              <div className="factoids-item">
                                {state.loc.title6dtls6}
                              </div>
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sub-snapshot">
                <div className="snapshot-heading">
                  <h3>Properties' Snapshot</h3>
                </div>
                <div className="tab-section">
                  <div className="tab">
                    <a
                      className="block-tabs"
                      onClick={() => setTab(false)}
                      style={{
                        borderBottomColor: tab ? "" : "#d8232a",
                        border: tab ? "" : "1px solid #d7d7d7",
                      }}
                    >
                      For Sale
                    </a>
                    <a
                      className="block-tabs"
                      onClick={() => setTab(true)}
                      style={{
                        borderBottomColor: tab ? "#d8232a" : "",
                        border: tab ? "1px solid #d7d7d7" : "",
                      }}
                    >
                      For Rent
                    </a>
                  </div>
                </div>
                <div className="tab-info-section" id="saleSnapshot">
                  <div className="info-by-tab">
                    {tab ? (
                      <div className="info-tab-heading">
                        {state.loc.snapRent}
                      </div>
                    ) : (
                      <div className="info-tab-heading">
                        {state.loc.snapSale}
                      </div>
                    )}
                    <div className="table-info-tab">
                      <div className="table-inf-caption">Price Range</div>
                      <div className="table-data-grid">
                        {tab ? (
                          <div
                            className="tab-grid-1"
                            style={{ width: `${sale1}` }}
                          >
                            {state.loc.rentPer1}
                          </div>
                        ) : (
                          <div
                            className="tab-grid-1"
                            style={{ width: `${sale1}` }}
                          >
                            {state.loc.saleRangePer1}
                          </div>
                        )}
                        {tab ? (
                          <div
                            className="tab-grid-2"
                            style={{ width: `${sale2}` }}
                          >
                            {state.loc.rentPer2}
                          </div>
                        ) : (
                          <div
                            className="tab-grid-2"
                            style={{ width: `${sale2}` }}
                          >
                            {state.loc.saleRangePer2}
                          </div>
                        )}
                        {tab ? (
                          <div
                            className="tab-grid-3"
                            style={{ width: `${sale3}` }}
                          >
                            {state.loc.rentPer3}
                          </div>
                        ) : (
                          <div
                            className="tab-grid-3"
                            style={{ width: `${sale3}` }}
                          >
                            {state.loc.saleRangePer3}
                          </div>
                        )}
                        {tab ? (
                          <div
                            className="tab-grid-4"
                            style={{ width: `${sale4}` }}
                          >
                            {state.loc.rentPer4}
                          </div>
                        ) : (
                          <div
                            className="tab-grid-4"
                            style={{ width: `${sale4}` }}
                          >
                            {state.loc.saleRangePer4}
                          </div>
                        )}
                      </div>
                      <div className="tab-dataset">
                        {tab ? (
                          <span className="data-sets-1">
                            {state.loc.rentPri1}
                          </span>
                        ) : (
                          <span className="data-sets-1">
                            {state.loc.saleRangePri1}
                          </span>
                        )}
                        {tab ? (
                          <span className="data-sets-2">
                            {state.loc.rentPri2}
                          </span>
                        ) : (
                          <span className="data-sets-2">
                            {state.loc.saleRangePri2}
                          </span>
                        )}
                        {tab ? (
                          <span className="data-sets-3">
                            {state.loc.rentPri3}
                          </span>
                        ) : (
                          <span className="data-sets-3">
                            {state.loc.saleRangePri3}
                          </span>
                        )}
                        {tab ? (
                          <span className="data-sets-4">
                            {state.loc.rentPri4}
                          </span>
                        ) : (
                          <span className="data-sets-4">
                            {state.loc.saleRangePri4}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="table-info-tab">
                      <div className="table-inf-caption">Property Type</div>
                      <div className="table-data-grid">
                        {tab ? (
                          <div
                            className="tab-grid-1"
                            style={{ width: `${prop1}` }}
                          >
                            {state.loc.rentProPer1}
                          </div>
                        ) : (
                          <div
                            className="tab-grid-1"
                            style={{ width: `${prop1}` }}
                          >
                            {state.loc.salePropPer1}
                          </div>
                        )}
                        {tab ? (
                          <div
                            className="tab-grid-2"
                            style={{ width: `${prop1}` }}
                          >
                            {state.loc.rentProPer2}
                          </div>
                        ) : (
                          <div
                            className="tab-grid-2"
                            style={{ width: `${prop1}` }}
                          >
                            {state.loc.salePropPer2}
                          </div>
                        )}
                        {tab ? (
                          <div
                            className="tab-grid-3"
                            style={{ width: `${prop1}` }}
                          >
                            {state.loc.rentProPer3}
                          </div>
                        ) : (
                          <div
                            className="tab-grid-3"
                            style={{ width: `${prop1}` }}
                          >
                            {state.loc.salePropPer3}
                          </div>
                        )}
                        {tab ? (
                          <div
                            className="tab-grid-4"
                            style={{ width: `${prop1}` }}
                          >
                            {state.loc.rentProPer4}
                          </div>
                        ) : (
                          <div
                            className="tab-grid-4"
                            style={{ width: `${prop1}` }}
                          >
                            {state.loc.salePropPer4}
                          </div>
                        )}
                      </div>
                      <div className="tab-dataset">
                        {tab ? (
                          <span className="data-sets-1">
                            {state.loc.rentType1}
                          </span>
                        ) : (
                          <span className="data-sets-1">{state.loc.type1}</span>
                        )}
                        {tab ? (
                          <span className="data-sets-2">
                            {state.loc.rentType2}
                          </span>
                        ) : (
                          <span className="data-sets-2">{state.loc.type2}</span>
                        )}
                        {tab ? (
                          <span className="data-sets-3">
                            {state.loc.rentType3}
                          </span>
                        ) : (
                          <span className="data-sets-3">{state.loc.type3}</span>
                        )}
                        {tab ? (
                          <span className="data-sets-4">
                            {state.loc.rentType4}
                          </span>
                        ) : (
                          <span className="data-sets-4">{state.loc.type4}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-info-section" id="rentSnapshot"></div>
              </div>
            </div>
            <div className="overview-col-right">
              <div className="overview-properties">
                <div className="view-blocks">
                  <div className="blocks1-heading">
                    {state.loc.propertieFor} Properties for Sale
                  </div>
                  <div className="overview-properties-dtls">
                    <div className="dtls-properties">
                      <div className="dtls-properties-heading">
                        {state.loc.propBhk1}
                      </div>
                      <div className="dtls-range">{state.loc.propPrice1}</div>
                      <div className="dtls-arrow">
                        <i>
                          <FiArrowUpRight />
                        </i>
                      </div>
                    </div>
                  </div>
                  <div className="overview-properties-dtls">
                    <div className="dtls-properties">
                      <div className="dtls-properties-heading">
                        {state.loc.propBhk2}
                      </div>
                      <div className="dtls-range">{state.loc.propPrice2}</div>
                      <div className="dtls-arrow">
                        <i>
                          <FiArrowUpRight />
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="view-blocks">
                  <div className="blocks1-heading">
                    {state.loc.rentFor} Properties for Rent
                  </div>
                  <div className="overview-properties-dtls">
                    <div className="dtls-properties">
                      <div className="dtls-properties-heading">
                        {state.loc.rentBhk1}
                      </div>
                      <div className="dtls-range">{state.loc.rentPrice1}</div>
                      <div className="dtls-arrow">
                        <i>
                          <FiArrowUpRight />
                        </i>
                      </div>
                    </div>
                  </div>
                  <div className="overview-properties-dtls">
                    <div className="dtls-properties">
                      <div className="dtls-properties-heading">
                        {state.loc.rentBhk2}
                      </div>
                      <div className="dtls-range">{state.loc.rentPrice2}</div>
                      <div className="dtls-arrow">
                        <i>
                          <FiArrowUpRight />
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="view-blocks">
                  <div className="blocks1-heading">
                    {state.loc.projFor} Prjects
                  </div>
                  <div className="overview-properties-dtls">
                    <div className="dtls-properties">
                      <div className="dtls-properties-heading">
                        <span>{state.loc.rdyMove}</span>
                        Ready to Move
                      </div>
                      <div className="dtls-arrow">
                        <i>
                          <FiArrowUpRight />
                        </i>
                      </div>
                    </div>
                  </div>
                  <div className="overview-properties-dtls">
                    <div className="dtls-properties">
                      <div className="dtls-properties-heading">
                        <span>{state.loc.under}</span>
                        Under Construction
                      </div>
                      <div className="dtls-arrow">
                        <i>
                          <FiArrowUpRight />
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="priceTrends">
        <div className="container">
          <div className="trends-row">
            <div className="trends-col">
              <div className="loc-loan">
                <div className="loan-heading">
                  Top Home Loan Deals
                  <span className="loan-middle"> in {state.loc.loc}</span>
                </div>
                <div className="loan-deals">
                  <div className="deals-card">
                    <div className="deals-img">
                      <img src={state.loc.loanImg1} alt="noImage"></img>
                    </div>
                    <div className="loan-deals-content">
                      <a href="#" className="deals-text1">
                        {state.loc.loanTtl1}
                      </a>
                      <div className="deals-text2">
                        <span>{state.loc.loanInt1}</span>
                      </div>
                    </div>
                  </div>
                  <div className="deals-card">
                    <div className="deals-img">
                      <img src={state.loc.loanImg2} alt="noImage"></img>
                    </div>
                    <div className="loan-deals-content">
                      <a href="#" className="deals-text1">
                        {state.loc.loanTtl2}
                      </a>
                      <div className="deals-text2">
                        <span>{state.loc.loanInt2}</span>
                      </div>
                    </div>
                  </div>
                  <div className="deals-card">
                    <div className="deals-img">
                      <img src={state.loc.loanImg3} alt="noImage"></img>
                    </div>
                    <div className="loan-deals-content">
                      <a href="#" className="deals-text1">
                        {state.loc.loanTtl3}
                      </a>
                      <div className="deals-text2">
                        <span>{state.loc.loanInt3}</span>
                      </div>
                    </div>
                  </div>
                  <div className="deals-card">
                    <div className="deals-img">
                      <img src={state.loc.loanImg4} alt="noImage"></img>
                    </div>
                    <div className="loan-deals-content">
                      <a href="#" className="deals-text1">
                        {state.loc.loanTtl4}
                      </a>
                      <div className="deals-text2">
                        <span>{state.loc.loanInt4}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="loan-deals-link">
                  <a href="#">Apply for affordable home loan</a>
                </div>
              </div>
            </div>
            <div className="trends-col">
              <div className="properties-sale-heading">
                <h2>
                  {state.loc.propertieFor} Properties for Sale in{" "}
                  {state.loc.loc}
                </h2>
              </div>
              <Carousel responsive={responsive}>
                <div className="property-column-rent">
                  <div className="property-card-rent">
                    <div className="property-images-rent">
                      <img src={state.loc.cardImg1} alt="noImage"></img>
                      <span className="posted-block-rent">
                        {state.loc.posted1}
                      </span>
                      <span className="count-block-rent">
                        {state.loc.photos1}
                      </span>
                    </div>
                    <div className="property-info-rent">
                      <div className="information-prop-rent">
                        <div className="prop-info-price-rent">
                          <span>{state.loc.cardPrice1}</span>
                        </div>
                        <div className="prop-rent-type">
                          <a href="#">{state.loc.cardBhk1}</a>
                        </div>
                        <div className="prop-rent-status">
                          {state.loc.cardMove1}
                        </div>
                        <div className="prop-rent-dec">
                          {state.loc.cardNote1}
                        </div>
                        <div className="prop-rent-owner">
                          <span className="prop-rent-name">
                            {state.loc.cardAgent1}
                          </span>
                        </div>
                      </div>
                      <div className="prop-flat-type-rent">
                        <a href="#"></a>
                      </div>

                      <a>Contact Owner</a>
                    </div>
                  </div>
                </div>

                <div className="property-column-rent">
                  <div className="property-card-rent">
                    <div className="property-images-rent">
                      <img src={state.loc.cardImg2} alt="noImage"></img>
                      <span className="posted-block-rent">
                        {state.loc.posted2}
                      </span>
                      <span className="count-block-rent">
                        {state.loc.photos2}
                      </span>
                    </div>
                    <div className="property-info-rent">
                      <div className="information-prop-rent">
                        <div className="prop-info-price-rent">
                          <span>{state.loc.cardPrice2}</span>
                        </div>
                        <div className="prop-rent-type">
                          <a href="#">{state.loc.cardBhk2}</a>
                        </div>
                        <div className="prop-rent-status">
                          {state.loc.cardMove2}
                        </div>
                        <div className="prop-rent-dec">
                          {state.loc.cardNote2}
                        </div>
                        <div className="prop-rent-owner">
                          <span className="prop-rent-name">
                            {state.loc.cardAgent2}
                          </span>
                        </div>
                      </div>
                      <div className="prop-flat-type-rent">
                        <a href="#"></a>
                      </div>

                      <a>Contact Owner</a>
                    </div>
                  </div>
                </div>

                <div className="property-column-rent">
                  <div className="property-card-rent">
                    <div className="property-images-rent">
                      <img src={state.loc.cardImg3} alt="noImage"></img>
                      <span className="posted-block-rent">
                        {state.loc.posted3}
                      </span>
                      <span className="count-block-rent">
                        {state.loc.photos3}
                      </span>
                    </div>
                    <div className="property-info-rent">
                      <div className="information-prop-rent">
                        <div className="prop-info-price-rent">
                          <span>{state.loc.cardPrice3}</span>
                        </div>
                        <div className="prop-rent-type">
                          <a href="#">{state.loc.cardBhk3}</a>
                        </div>
                        <div className="prop-rent-status">
                          {state.loc.cardMove3}
                        </div>
                        <div className="prop-rent-dec">
                          {state.loc.cardNote3}
                        </div>
                        <div className="prop-rent-owner">
                          <span className="prop-rent-name">
                            {state.loc.cardAgent3}
                          </span>
                        </div>
                      </div>
                      <div className="prop-flat-type-rent">
                        <a href="#"></a>
                      </div>

                      <a>Contact Owner</a>
                    </div>
                  </div>
                </div>

                <div className="property-column-rent">
                  <div className="property-card-rent">
                    <div className="property-images-rent">
                      <img src={state.loc.cardImg4} alt="noImage"></img>
                      <span className="posted-block-rent">
                        {state.loc.posted4}
                      </span>
                      <span className="count-block-rent">
                        {state.loc.photos4}
                      </span>
                    </div>
                    <div className="property-info-rent">
                      <div className="information-prop-rent">
                        <div className="prop-info-price-rent">
                          <span>{state.loc.cardPrice4}</span>
                        </div>
                        <div className="prop-rent-type">
                          <a href="#">{state.loc.cardBhk4}</a>
                        </div>
                        <div className="prop-rent-status">
                          {state.loc.cardMove4}
                        </div>
                        <div className="prop-rent-dec">
                          {state.loc.cardNote4}
                        </div>
                        <div className="prop-rent-owner">
                          <span className="prop-rent-name">
                            {state.loc.cardAgent4}
                          </span>
                        </div>
                      </div>
                      <div className="prop-flat-type-rent">
                        <a href="#"></a>
                      </div>

                      <a>Contact Owner</a>
                    </div>
                  </div>
                </div>

                <div className="property-column-rent">
                  <div className="property-card-rent">
                    <div className="property-images-rent">
                      <img src={state.loc.cardImg5} alt="noImage"></img>
                      <span className="posted-block-rent">
                        {state.loc.posted5}
                      </span>
                      <span className="count-block-rent">
                        {state.loc.photos5}
                      </span>
                    </div>
                    <div className="property-info-rent">
                      <div className="information-prop-rent">
                        <div className="prop-info-price-rent">
                          <span>{state.loc.cardPrice5}</span>
                        </div>
                        <div className="prop-rent-type">
                          <a href="#">{state.loc.cardBhk5}</a>
                        </div>
                        <div className="prop-rent-status">
                          {state.loc.cardMove5}
                        </div>
                        <div className="prop-rent-dec">
                          {state.loc.cardNote5}
                        </div>
                        <div className="prop-rent-owner">
                          <span className="prop-rent-name">
                            {state.loc.cardAgent5}
                          </span>
                        </div>
                      </div>
                      <div className="prop-flat-type-rent">
                        <a href="#"></a>
                      </div>

                      <a>Contact Owner</a>
                    </div>
                  </div>
                </div>

                <div className="property-column-rent">
                  <div className="property-card-rent">
                    <div className="property-images-rent">
                      <img src={state.loc.cardImg6} alt="noImage"></img>
                      <span className="posted-block-rent">
                        {state.loc.posted6}
                      </span>
                      <span className="count-block-rent">
                        {state.loc.photos6}
                      </span>
                    </div>
                    <div className="property-info-rent">
                      <div className="information-prop-rent">
                        <div className="prop-info-price-rent">
                          <span>{state.loc.cardPrice6}</span>
                        </div>
                        <div className="prop-rent-type">
                          <a href="#">{state.loc.cardBhk6}</a>
                        </div>
                        <div className="prop-rent-status">
                          {state.loc.cardMove6}
                        </div>
                        <div className="prop-rent-dec">
                          {state.loc.cardNote6}
                        </div>
                        <div className="prop-rent-owner">
                          <span className="prop-rent-name">
                            {state.loc.cardAgent6}
                          </span>
                        </div>
                      </div>
                      <div className="prop-flat-type-rent">
                        <a href="#">Contact Owner</a>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
            <div className="trends-col">
              <div className="properties-sale-heading">
                <h2>
                  {state.loc.rentFor1} Properties for Rent in {state.loc.loc}
                </h2>
              </div>
              <Carousel responsive={responsive}>
                <div className="property-column-rent">
                  <div className="property-card-rent">
                    <div className="property-images-rent">
                      <img src={state.loc.rentImg1} alt="noImage"></img>
                      <span className="posted-block-rent">
                        {state.loc.rentPosted1}
                      </span>
                      <span className="count-block-rent">
                        {state.loc.rentCount1}
                      </span>
                    </div>
                    <div className="property-info-rent">
                      <div className="information-prop-rent">
                        <div className="prop-info-price-rent">
                          <span>{state.loc.rentPric1}</span>
                        </div>
                        <div className="prop-rent-type">
                          <a href="#">{state.loc.rent1Bhk1}</a>
                        </div>
                        <div className="prop-rent-status">
                          {state.loc.status1}
                        </div>
                        <div className="prop-rent-dec">
                          {state.loc.rentNote1}
                        </div>
                        <div className="prop-rent-owner">
                          Owner
                          <span className="prop-rent-name">
                            {state.loc.rentOwn1}
                          </span>
                        </div>
                      </div>
                      <div className="prop-flat-type-rent">
                        <a href="#"></a>
                      </div>

                      <a>Contact Owner</a>
                    </div>
                  </div>
                </div>

                <div className="property-column-rent">
                  <div className="property-card-rent">
                    <div className="property-images-rent">
                      <img src={state.loc.rentImg2} alt="noImage"></img>
                      <span className="posted-block-rent">
                        {state.loc.rentPosted2}
                      </span>
                      <span className="count-block-rent">
                        {state.loc.rentCount2}
                      </span>
                    </div>
                    <div className="property-info-rent">
                      <div className="information-prop-rent">
                        <div className="prop-info-price-rent">
                          <span>{state.loc.rentPric2}</span>
                        </div>
                        <div className="prop-rent-type">
                          <a href="#">{state.loc.rent2Bhk2}</a>
                        </div>
                        <div className="prop-rent-status">
                          {state.loc.status2}
                        </div>
                        <div className="prop-rent-dec">
                          {state.loc.rentNote2}
                        </div>
                        <div className="prop-rent-owner">
                          Owner
                          <span className="prop-rent-name">
                            {state.loc.rentOwn2}
                          </span>
                        </div>
                      </div>
                      <div className="prop-flat-type-rent">
                        <a href="#"></a>
                      </div>

                      <a>Contact Owner</a>
                    </div>
                  </div>
                </div>

                <div className="property-column-rent">
                  <div className="property-card-rent">
                    <div className="property-images-rent">
                      <img src={state.loc.rentImg3} alt="noImage"></img>
                      <span className="posted-block-rent">
                        {state.loc.rentPosted3}
                      </span>
                      <span className="count-block-rent">
                        {state.loc.rentCount3}
                      </span>
                    </div>
                    <div className="property-info-rent">
                      <div className="information-prop-rent">
                        <div className="prop-info-price-rent">
                          <span>{state.loc.rentPric3}</span>
                        </div>
                        <div className="prop-rent-type">
                          <a href="#">{state.loc.rentBhk3}</a>
                        </div>
                        <div className="prop-rent-status">
                          {state.loc.status3}
                        </div>
                        <div className="prop-rent-dec">
                          {state.loc.rentNote3}
                        </div>
                        <div className="prop-rent-owner">
                          Owner
                          <span className="prop-rent-name">
                            {state.loc.rentOwn3}
                          </span>
                        </div>
                      </div>
                      <div className="prop-flat-type-rent">
                        <a href="#"></a>
                      </div>

                      <a>Contact Owner</a>
                    </div>
                  </div>
                </div>

                <div className="property-column-rent">
                  <div className="property-card-rent">
                    <div className="property-images-rent">
                      <img src={state.loc.rentImg4} alt="noImage"></img>
                      <span className="posted-block-rent">
                        {state.loc.rentPosted4}
                      </span>
                      <span className="count-block-rent">
                        {state.loc.rentCount4}
                      </span>
                    </div>
                    <div className="property-info-rent">
                      <div className="information-prop-rent">
                        <div className="prop-info-price-rent">
                          <span>{state.loc.rentPric4}</span>
                        </div>
                        <div className="prop-rent-type">
                          <a href="#">{state.loc.rentBhk4}</a>
                        </div>
                        <div className="prop-rent-status">
                          {state.loc.status4}
                        </div>
                        <div className="prop-rent-dec">
                          {state.loc.rentNote4}
                        </div>
                        <div className="prop-rent-owner">
                          Owner
                          <span className="prop-rent-name">
                            {state.loc.rentOwn4}
                          </span>
                        </div>
                      </div>
                      <div className="prop-flat-type-rent">
                        <a href="#"></a>
                      </div>

                      <a>Contact Owner</a>
                    </div>
                  </div>
                </div>

                <div className="property-column-rent">
                  <div className="property-card-rent">
                    <div className="property-images-rent">
                      <img src={state.loc.rentImg5} alt="noImage"></img>
                      <span className="posted-block-rent">
                        {state.loc.rentPosted5}
                      </span>
                      <span className="count-block-rent">
                        {state.loc.rentCount5}
                      </span>
                    </div>
                    <div className="property-info-rent">
                      <div className="information-prop-rent">
                        <div className="prop-info-price-rent">
                          <span>{state.loc.rentPric5}</span>
                        </div>
                        <div className="prop-rent-type">
                          <a href="#">{state.loc.rentBhk5}</a>
                        </div>
                        <div className="prop-rent-status">
                          {state.loc.status5}
                        </div>
                        <div className="prop-rent-dec">
                          {state.loc.rentNote5}
                        </div>
                        <div className="prop-rent-owner">
                          Owner
                          <span className="prop-rent-name">
                            {state.loc.rentOwn5}
                          </span>
                        </div>
                      </div>
                      <div className="prop-flat-type-rent">
                        <a href="#"></a>
                      </div>

                      <a>Contact Owner</a>
                    </div>
                  </div>
                </div>

                <div className="property-column-rent">
                  <div className="property-card-rent">
                    <div className="property-images-rent">
                      <img src={state.loc.rentImg6} alt="noImage"></img>
                      <span className="posted-block-rent">
                        {state.loc.rentPosted6}
                      </span>
                      <span className="count-block-rent">
                        {state.loc.rentCount6}
                      </span>
                    </div>
                    <div className="property-info-rent">
                      <div className="information-prop-rent">
                        <div className="prop-info-price-rent">
                          <span>{state.loc.rentPric6}</span>
                        </div>
                        <div className="prop-rent-type">
                          <a href="#">{state.loc.rentBhk6}</a>
                        </div>
                        <div className="prop-rent-status">
                          {state.loc.status6}
                        </div>
                        <div className="prop-rent-dec">
                          {state.loc.rentNote6}
                        </div>
                        <div className="prop-rent-owner">
                          Owner
                          <span className="prop-rent-name">
                            {state.loc.rentOwn6}
                          </span>
                        </div>
                      </div>
                      <div className="prop-flat-type-rent">
                        <a href="#">Contact Owner</a>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section id="tools">
        <div className="container">
          <div className="tools-heading">Tools & Advice</div>
          <div className="tools-row">
            <Carousel responsive={responsive}>
              <div className="tools-col">
                <div className="tools-card">
                  <div className="card-shadow">
                    <a href="#">
                      <span className="tools-certified">Certified</span>
                      <i className="tool-icon">
                        <TbHomeDollar />
                      </i>
                      <div className="tools-title">{state.loc.toolsTtl1}</div>
                      <div className="tools-text">{state.loc.toolsNote1}</div>
                      <span className="tool-advice-card">
                        Read more
                        <span className="tools-arrow"></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tools-col">
                <div className="tools-card">
                  <div className="card-shadow">
                    <a href="#">
                      <span className="tools-certified">GET FREE</span>
                      <i className="tool-icon">
                        <RiNewspaperLine />
                      </i>
                      <div className="tools-title">{state.loc.toolsTtl2}</div>
                      <div className="tools-text">{state.loc.toolsNote2}</div>
                      <span className="tool-advice-card">
                        Read more
                        <span className="tools-arrow"></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tools-col">
                <div className="tools-card">
                  <div className="card-shadow">
                    <a href="#">
                      <i className="tool-icon">
                        <GiPriceTag />
                      </i>
                      <div className="tools-title">{state.loc.toolsTtl3}</div>
                      <div className="tools-text">{state.loc.toolsNote3}</div>
                      <span className="tool-advice-card">
                        Read more
                        <span className="tools-arrow"></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tools-col">
                <div className="tools-card">
                  <div className="card-shadow">
                    <a href="#">
                      <i className="tool-icon">
                        <BsCalculator />
                      </i>
                      <div className="tools-title">{state.loc.toolsTtl4}</div>
                      <div className="tools-text">{state.loc.toolsNote4}</div>
                      <span className="tool-advice-card">
                        Read more
                        <span className="tools-arrow"></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tools-col">
                <div className="tools-card">
                  <div className="card-shadow">
                    <a href="#">
                      <i className="tool-icon">
                        <GiReceiveMoney />
                      </i>
                      <div className="tools-title">{state.loc.toolsTtl5}</div>
                      <div className="tools-text">{state.loc.toolsNote5}</div>
                      <span className="tool-advice-card">
                        Read more
                        <span className="tools-arrow"></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tools-col">
                <div className="tools-card">
                  <div className="card-shadow">
                    <a href="#">
                      <i className="tool-icon">
                        <ImNewspaper />
                      </i>
                      <div className="tools-title">{state.loc.toolsTtl6}</div>
                      <div className="tools-text">{state.loc.toolsNote6}</div>
                      <span className="tool-advice-card">
                        Read more
                        <span className="tools-arrow"></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <section id="projects--loc">
        <div className="container">
          <div className="proj--heading">
            <h2>
              {state.loc.projectTotal} Projects in {state.loc.loc}
            </h2>
          </div>
          <div className="proj-row">
            <Carousel responsive={responsive}>
              <div className="proj-col">
                <div className="proj-card">
                  <div className="proj--img-card">
                    <img
                      src={state.loc.projImg1}
                      alt="img-No"
                      className="proj--images"
                    ></img>
                  </div>
                  <div className="proj--info-card">
                    <a href="#" className="proj--info-title">
                      {state.loc.projTtl1}
                    </a>
                    <div className="proj-builder-name">
                      {state.loc.creator1}
                    </div>
                    <div className="proj-price--range">
                      {state.loc.projPri1}
                    </div>
                    <div className="proj--type">{state.loc.apart1}</div>
                    <div className="proj--status">{state.loc.possess1}</div>
                    <div className="proj--btn">
                      <a href="#">View Project</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="proj-col">
                <div className="proj-card">
                  <div className="proj--img-card">
                    <img
                      src={state.loc.projImg2}
                      alt="img-No"
                      className="proj--images"
                    ></img>
                  </div>
                  <div className="proj--info-card">
                    <a href="#" className="proj--info-title">
                      {state.loc.projTtl2}
                    </a>
                    <div className="proj-builder-name">
                      {state.loc.creator2}
                    </div>
                    <div className="proj-price--range">
                      {state.loc.projPri2}
                    </div>
                    <div className="proj--type">{state.loc.apart2}</div>
                    <div className="proj--status">{state.loc.possess2}</div>
                    <div className="proj--btn">
                      <a href="#">View Project</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="proj-col">
                <div className="proj-card">
                  <div className="proj--img-card">
                    <img
                      src={state.loc.projImg3}
                      alt="img-No"
                      className="proj--images"
                    ></img>
                  </div>
                  <div className="proj--info-card">
                    <a href="#" className="proj--info-title">
                      {state.loc.projTtl3}
                    </a>
                    <div className="proj-builder-name">
                      {state.loc.creator3}
                    </div>
                    <div className="proj-price--range">
                      {state.loc.projPri3}
                    </div>
                    <div className="proj--type">{state.loc.apart3}</div>
                    <div className="proj--status">{state.loc.possess3}</div>
                    <div className="proj--btn">
                      <a href="#">View Project</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="proj-col">
                <div className="proj-card">
                  <div className="proj--img-card">
                    <img
                      src={state.loc.projImg4}
                      alt="img-No"
                      className="proj--images"
                    ></img>
                  </div>
                  <div className="proj--info-card">
                    <a href="#" className="proj--info-title">
                      {state.loc.projTtl4}
                    </a>
                    <div className="proj-builder-name">
                      {state.loc.creator4}
                    </div>
                    <div className="proj-price--range">
                      {state.loc.projPri4}
                    </div>
                    <div className="proj--type">{state.loc.apart4}</div>
                    <div className="proj--status">{state.loc.possess4}</div>
                    <div className="proj--btn">
                      <a href="#">View Project</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="proj-col">
                <div className="proj-card">
                  <div className="proj--img-card">
                    <img
                      src={state.loc.projImg5}
                      alt="img-No"
                      className="proj--images"
                    ></img>
                  </div>
                  <div className="proj--info-card">
                    <a href="#" className="proj--info-title">
                      {state.loc.projTtl5}
                    </a>
                    <div className="proj-builder-name">
                      {state.loc.creator5}
                    </div>
                    <div className="proj-price--range">
                      {state.loc.projPri5}
                    </div>
                    <div className="proj--type">{state.loc.apart5}</div>
                    <div className="proj--status">{state.loc.possess5}</div>
                    <div className="proj--btn">
                      <a href="#">View Project</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="proj-col">
                <div className="proj-card">
                  <div className="proj--img-card">
                    <img
                      src={state.loc.projImg6}
                      alt="img-No"
                      className="proj--images"
                    ></img>
                  </div>
                  <div className="proj--info-card">
                    <a href="#" className="proj--info-title">
                      {state.loc.projTtl6}
                    </a>
                    <div className="proj-builder-name">
                      {state.loc.creator6}
                    </div>
                    <div className="proj-price--range">
                      {state.loc.projPri6}
                    </div>
                    <div className="proj--type">{state.loc.apart6}</div>
                    <div className="proj--status">{state.loc.possess6}</div>
                    <div className="proj--btn">
                      <a href="#">View Project</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="proj-col">
                <div className="proj-card">
                  <div className="proj--img-card">
                    <img
                      src={state.loc.projImg7}
                      alt="img-No"
                      className="proj--images"
                    ></img>
                  </div>
                  <div className="proj--info-card">
                    <a href="#" className="proj--info-title">
                      {state.loc.projTtl7}
                    </a>
                    <div className="proj-builder-name">
                      {state.loc.creator7}
                    </div>
                    <div className="proj-price--range">
                      {state.loc.projPri7}
                    </div>
                    <div className="proj--type">{state.loc.apart7}</div>
                    <div className="proj--status">{state.loc.possess7}</div>
                    <div className="proj--btn">
                      <a href="#">View Project</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="proj-col">
                <div className="proj-card">
                  <div className="proj--img-card">
                    <img
                      src={state.loc.projImg8}
                      alt="img-No"
                      className="proj--images"
                    ></img>
                  </div>
                  <div className="proj--info-card">
                    <a href="#" className="proj--info-title">
                      {state.loc.projTtl8}
                    </a>
                    <div className="proj-builder-name">
                      {state.loc.creator8}
                    </div>
                    <div className="proj-price--range">
                      {state.loc.projPri8}
                    </div>
                    <div className="proj--type">{state.loc.apart8}</div>
                    <div className="proj--status">{state.loc.possess8}</div>
                    <div className="proj--btn">
                      <a href="#">View Project</a>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section id="builders">
        <div className="container">
          <div className="builders-heading">
            {state.loc.buildersTtl} Builders in {state.loc.loc}
          </div>
          <div className="builders-row">
            <Carousel responsive={responsive}>
              <div className="builders-col">
                <div className="builders-card">
                  <div className="builders-logo">
                    <div className="builders-logo-img">
                      <img src={state.loc.builderImg1}></img>
                    </div>
                  </div>
                  <div className="builders-info">
                    <div className="builders-top-info">
                      <a href="#" className="builders-title-header">
                        {state.loc.builderTtl1}
                      </a>
                      <div className="builders-since">
                        <span className="since-ttl">{state.loc.since1}</span>
                      </div>
                      <div className="builders-desc">
                        {state.loc.builderNote1}
                      </div>
                    </div>
                    <div className="builders-bottom-info">
                      <div className="builders-projects">
                        {state.loc.totalProj1}
                      </div>
                      <div className="builders-status">
                        {state.loc.completed1}
                      </div>
                    </div>
                    <span className="builders--btn">See Details</span>
                  </div>
                </div>
              </div>
              <div className="builders-col">
                <div className="builders-card">
                  <div className="builders-logo">
                    <div className="builders-logo-img">
                      <img src={state.loc.builderImg2}></img>
                    </div>
                  </div>
                  <div className="builders-info">
                    <div className="builders-top-info">
                      <a href="#" className="builders-title-header">
                        {state.loc.builderTtl2}
                      </a>
                      <div className="builders-since">
                        <span className="since-ttl">{state.loc.since2}</span>
                      </div>
                      <div className="builders-desc">
                        {state.loc.builderNote2}
                      </div>
                    </div>
                    <div className="builders-bottom-info">
                      <div className="builders-projects">
                        {state.loc.totalProj2}
                      </div>
                      <div className="builders-status">
                        {state.loc.completed2}
                      </div>
                    </div>
                    <span className="builders--btn">See Details</span>
                  </div>
                </div>
              </div>
              <div className="builders-col">
                <div className="builders-card">
                  <div className="builders-logo">
                    <div className="builders-logo-img">
                      <img src={state.loc.builderImg3}></img>
                    </div>
                  </div>
                  <div className="builders-info">
                    <div className="builders-top-info">
                      <a href="#" className="builders-title-header">
                        {state.loc.builderTtl3}
                      </a>
                      <div className="builders-since">
                        <span className="since-ttl">{state.loc.since3}</span>
                      </div>
                      <div className="builders-desc">
                        {state.loc.builderNote3}
                      </div>
                    </div>
                    <div className="builders-bottom-info">
                      <div className="builders-projects">
                        {state.loc.totalProj3}
                      </div>
                      <div className="builders-status">
                        {state.loc.completed3}
                      </div>
                    </div>
                    <span className="builders--btn">See Details</span>
                  </div>
                </div>
              </div>
              <div className="builders-col">
                <div className="builders-card">
                  <div className="builders-logo">
                    <div className="builders-logo-img">
                      <img src={state.loc.builderImg4}></img>
                    </div>
                  </div>
                  <div className="builders-info">
                    <div className="builders-top-info">
                      <a href="#" className="builders-title-header">
                        {state.loc.builderTtl4}
                      </a>
                      <div className="builders-since">
                        <span className="since-ttl">{state.loc.since4}</span>
                      </div>
                      <div className="builders-desc">
                        {state.loc.builderNote4}
                      </div>
                    </div>
                    <div className="builders-bottom-info">
                      <div className="builders-projects">
                        {state.loc.totalProj4}
                      </div>
                      <div className="builders-status">
                        {state.loc.completed4}
                      </div>
                    </div>
                    <span className="builders--btn">See Details</span>
                  </div>
                </div>
              </div>
              <div className="builders-col">
                <div className="builders-card">
                  <div className="builders-logo">
                    <div className="builders-logo-img">
                      <img src={state.loc.builderImg5}></img>
                    </div>
                  </div>
                  <div className="builders-info">
                    <div className="builders-top-info">
                      <a href="#" className="builders-title-header">
                        {state.loc.builderTtl5}
                      </a>
                      <div className="builders-since">
                        <span className="since-ttl">{state.loc.since5}</span>
                      </div>
                      <div className="builders-desc">
                        {state.loc.builderNote5}
                      </div>
                    </div>
                    <div className="builders-bottom-info">
                      <div className="builders-projects">
                        {state.loc.totalProj5}
                      </div>
                      <div className="builders-status">
                        {state.loc.completed5}
                      </div>
                    </div>
                    <span className="builders--btn">See Details</span>
                  </div>
                </div>
              </div>
              <div className="builders-col">
                <div className="builders-card">
                  <div className="builders-logo">
                    <div className="builders-logo-img">
                      <img src={state.loc.builderImg6}></img>
                    </div>
                  </div>
                  <div className="builders-info">
                    <div className="builders-top-info">
                      <a href="#" className="builders-title-header">
                        {state.loc.builderTtl6}
                      </a>
                      <div className="builders-since">
                        <span className="since-ttl">{state.loc.since6}</span>
                      </div>
                      <div className="builders-desc">
                        {state.loc.builderNote6}
                      </div>
                    </div>
                    <div className="builders-bottom-info">
                      <div className="builders-projects">
                        {state.loc.totalProj6}
                      </div>
                      <div className="builders-status">
                        {state.loc.completed6}
                      </div>
                    </div>
                    <span className="builders--btn">See Details</span>
                  </div>
                </div>
              </div>
              <div className="builders-col">
                <div className="builders-card">
                  <div className="builders-logo">
                    <div className="builders-logo-img">
                      <img src={state.loc.builderImg7}></img>
                    </div>
                  </div>
                  <div className="builders-info">
                    <div className="builders-top-info">
                      <a href="#" className="builders-title-header">
                        {state.loc.builderTtl7}
                      </a>
                      <div className="builders-since">
                        <span className="since-ttl">{state.loc.since7}</span>
                      </div>
                      <div className="builders-desc">
                        {state.loc.builderNote7}
                      </div>
                    </div>
                    <div className="builders-bottom-info">
                      <div className="builders-projects">
                        {state.loc.totalProj7}
                      </div>
                      <div className="builders-status">
                        {state.loc.completed7}
                      </div>
                    </div>
                    <span className="builders--btn">See Details</span>
                  </div>
                </div>
              </div>
              <div className="builders-col">
                <div className="builders-card">
                  <div className="builders-logo">
                    <div className="builders-logo-img">
                      <img src={state.loc.builderImg8}></img>
                    </div>
                  </div>
                  <div className="builders-info">
                    <div className="builders-top-info">
                      <a href="#" className="builders-title-header">
                        {state.loc.builderTtl8}
                      </a>
                      <div className="builders-since">
                        <span className="since-ttl">{state.loc.since8}</span>
                      </div>
                      <div className="builders-desc">
                        {state.loc.builderNote8}
                      </div>
                    </div>
                    <div className="builders-bottom-info">
                      <div className="builders-projects">
                        {state.loc.totalProj8}
                      </div>
                      <div className="builders-status">
                        {state.loc.completed8}
                      </div>
                    </div>
                    <span className="builders--btn">See Details</span>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <section id="agents">
        <div className="container">
          <div className="agents-heading">
            <h3>{state.loc.agentsTtl} Agents</h3>
          </div>
          <div className="agents-row">
            <div className="agents-col">
              <div className="agent-card">
                <a href="#">
                  <div className="agent-info">
                    <div className="agent-top-info">
                      <div className="agent-spcl">
                        <div className="agent-ability">
                          <span className="spcl-agent-type">
                            {state.loc.specAgent1}
                          </span>
                        </div>
                        <div className="agent-name">{state.loc.agentName1}</div>
                        <div className="agent-text">{state.loc.workingAt1}</div>
                        <div className="agent-since">{state.loc.joined1}</div>
                      </div>
                    </div>
                    <span className="agent-btn">{state.loc.agentBtn1}</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="agents-col">
              <div className="agent-card">
                <a href="#">
                  <div className="agent-info">
                    <div className="agent-top-info">
                      <div className="agent-spcl">
                        <div className="agent-name">{state.loc.agentName2}</div>
                        <div className="agent-text">{state.loc.workingAt2}</div>
                        <div className="agent-since">{state.loc.joined2}</div>
                      </div>
                    </div>
                    <span className="agent-btn">{state.loc.agentBtn2}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="luxuary-properties">
        <div className="luxuary-top">
          <div className="top-icon">
            <i>
              <TfiEmail />
            </i>
          </div>
          <div className="top-text">
            Get email alerts for the latest Properties
          </div>
        </div>
        <div className="reqst-btn">
          <a href="#">Share requirement</a>
        </div>
      </div> */}
    </>
  );
};
