import React, { useContext, useEffect, useState, useRef } from "react";
import "./Banner.css";
import { HiLocationMarker, HiCurrencyRupee } from "react-icons/hi";
import { MdHouse } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide1 from "../Images/slide1.png";
import Slide2 from "../Images/slide2.png";
import { Context } from "../Context";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
// import { TbRuler } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
// import { TbWoman } from "react-icons/tb";

export const Banner = () => {
  const { state, dispatch } = useContext(Context);

  const [select, setSelect] = useState(true);
  const [house, setHouse] = useState(false);
  const [plot, setPlot] = useState(false);
  const [res, setRes] = useState(true);
  const [flat, setFlat] = useState(false);
  const [budget, setBudget] = useState(false);
  const [flatValue, setFlatvalue] = useState(null);
  const [priceValue, setPricevalue] = useState(null);
  const [icon, setIcon] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setFlat(false);
        setBudget(false);
        setIcon(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  let room = useNavigate();
  var proj;
  const moveProject = (value) => {
    proj = [...state.founder].filter((y) => {
      return y.found === value;
    });
    dispatch({ type: "projectPage", payload: proj });
    room("/project");
  };
  const moveValue = (val) => {
    dispatch({ type: "expose", payload: val });
  };
  const budgetRes = () => {
    setBudget(!budget);
    setFlat(false);
  };
  const handleClick = (value) => {
    setFlatvalue(value);
  };

  const priceClick = (value) => {
    setPricevalue(value);
    setBudget(false);
    const splitPrize = value.replace(/(\d+)Lakhs/, "$1 Lac");
    dispatch({ type: "split", payload: splitPrize });
    dispatch({ type: "newBudget", payload: value });
    dispatch({ type: "upto", payload: true });
  };

  // useEffect(() => {
  //   const mainValue = localStorage.getItem("mainValue");
  //   if (
  //     mainValue === "5Lakhs" ||
  //     mainValue === "10Lakhs" ||
  //     mainValue === "20Lakhs" ||
  //     mainValue === "30Lakhs" ||
  //     mainValue === "40Lakhs" ||
  //     mainValue === "50Lakhs" ||
  //     mainValue === "60Lakhs"
  //   ) {
  //     setPricevalue(mainValue);
  //   } else {
  //     setUpto(false);
  //   }
  // }, []);

  const selectFlat = () => {
    setSelect(!select);
  };
  const newPlot = () => {
    setPlot(!plot);
  };
  const newHouse = () => {
    setHouse(!house);
  };

  const oneB = () => {
    dispatch({ type: "one", payload: !state.numOne });
  };

  const twoBhk = () => {
    dispatch({ type: "two", payload: !state.numTwo });
  };

  const threeBhk = () => {
    dispatch({ type: "three", payload: !state.numThree });
  };

  const fourBhk = () => {
    dispatch({ type: "four", payload: !state.numThree });
  };

  const fiveBhk = () => {
    dispatch({ type: "five", payload: !state.numFive });
  };

  const plusBhk = () => {
    dispatch({ type: "six", payload: !state.numSix });
  };

  const newRes = () => {
    setRes(!res);
  };

  let exploreNav = useNavigate();
  const locality = (get) => {
    exploreNav("/explore");
    dispatch({ type: "location", payload: get });
  };
  var marker = document.querySelector("#marker");
  var item = document.querySelectorAll("ul li");
  function slider(e) {
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
  }
  item.forEach((link) => {
    link.addEventListener("mousemove", (e) => {
      slider(e.target);
    });
  });
  const book = () => {
    setFlat(!flat);
    setBudget(false);
  };

  // const moveNew=(new)=>{
  //   dispatch({type:"newProj",payload:new})
  // }

  const clearDiv = () => {
    let div = document.getElementById("divElement");
    div.replaceChildren();
    document.getElementById("removeElement").remove();
    let input = document.getElementById("keyword");
    input.classList.add("another");
    input.placeholder = "Enter City,Locality,Project";
    let icon = document.querySelector(".loc-icon");
    icon.classList.add("local");
  };
  let migrate = useNavigate();
  var filterData;
  const filler = () => {
    filterData = [...state.flatBhk].filter((item) => {
      return item.value === priceValue && item.bhk === flatValue;
    });
    dispatch({ type: "new", payload: filterData });
    dispatch({ type: "propertyFlat", payload: flatValue });
    dispatch({ type: "propertyPrice", payload: priceValue });
    migrate("/property");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
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
      <div id="banner" ref={menuRef}>
        <div className="container">
          <div className="banner-row">
            <div className="banner-col">
              <div className="banner-title">
                <h2>Welcome back! Let's continue your search</h2>
              </div>
              <ul>
                <div id="marker"></div>
                <li>Buy</li>
                <li>Rent</li>
                <li>PG</li>
                <li>Plot</li>
                <li>Commercial</li>
                <li>Post Free property Ad</li>
              </ul>
              <div className="banner-search">
                <div className="banner-loc">
                  <div className="banner-loc__">
                    <div className="banner-tag">
                      <div className="banner-text_tag" id="divElement">
                        Chennai
                      </div>
                      <div
                        className={icon ? "banner-text__tag" : "banner__text"}
                        onClick={clearDiv}
                        id="removeElement"
                      >
                        <i>
                          <HiLocationMarker />
                        </i>
                      </div>
                      <input
                        id="keyword"
                        type="text"
                        placeholder="Add More..."
                        autoComplete="off"
                        className="banner-input"
                        onClick={() => setIcon(true)}
                      />
                      <i className="loc-icon">
                        <HiLocationMarker />
                      </i>
                    </div>
                  </div>
                </div>
                <div className="banner-flat">
                  <i>
                    <MdHouse />
                  </i>
                  <div className="flat-title" id="hide">
                    <span id="flat1" className="flater">
                      {select ? "Flat" : "Property type"}
                    </span>
                    <span id="flat2">
                      <i id="residential" onClick={book}>
                        <BiChevronDown />
                      </i>
                    </span>
                  </div>
                  {flat ? (
                    <div id="flat-booking" className="show">
                      <p>
                        Residential
                        <i onClick={newRes}>
                          <BiChevronUp
                            style={{
                              transform: res ? "rotate(0)" : "rotate(180deg)",
                              transitionDuration: res ? "0.5s" : "0.5s",
                            }}
                          />
                        </i>
                      </p>
                      <div className="flat-types">
                        <button
                          className="res-flat"
                          onClick={selectFlat}
                          style={{
                            backgroundColor: select ? "#fff7e1" : "#fff",
                            border: select
                              ? "1px solid #fff7e1"
                              : "1px solid #c2bfbf",
                            fontWeight: select ? "700" : "400",
                            color: select ? "#000" : "#aaa",
                          }}
                        >
                          Flat
                        </button>
                        <button
                          className="res-flat"
                          onClick={newHouse}
                          style={{
                            backgroundColor: house ? "#fff7e1" : "#fff",
                            border: house
                              ? "1px solid #fff7e1"
                              : "1px solid #c2bfbf",
                            fontWeight: house ? "700" : "400",
                            color: house ? "#000" : "#aaa",
                          }}
                        >
                          House/Villa
                        </button>
                        <button
                          className="res-flat"
                          onClick={newPlot}
                          style={{
                            backgroundColor: plot ? "#fff7e1" : "#fff",
                            border: plot
                              ? "1px solid #fff7e1"
                              : "1px solid #c2bfbf",
                            fontWeight: plot ? "700" : "400",
                            color: plot ? "#000" : "#aaa",
                          }}
                        >
                          Plot
                        </button>
                      </div>
                      {select ? (
                        <div className="flat-Bhk">
                          <div
                            value="1Bhk"
                            onClick={(e) =>
                              handleClick(e.currentTarget.getAttribute("value"))
                            }
                          >
                            <button
                              onClick={oneB}
                              style={{
                                backgroundColor: state.numOne
                                  ? "#fff7e1"
                                  : "#fff",
                                border: state.numOne
                                  ? "1px solid #fff7e1"
                                  : "1px solid #c2bfbf",
                                fontWeight: state.numOne ? "700" : "400",
                                color: state.numOne ? "#000" : "#aaa",
                              }}
                            >
                              1 Bhk
                            </button>
                          </div>
                          <div
                            value="2Bhk"
                            onClick={(e) =>
                              handleClick(e.currentTarget.getAttribute("value"))
                            }
                          >
                            <button
                              onClick={twoBhk}
                              style={{
                                backgroundColor: state.numTwo
                                  ? "#fff7e1"
                                  : "#fff",
                                border: state.numTwo
                                  ? "1px solid #fff7e1"
                                  : "1px solid #c2bfbf",
                                fontWeight: state.numTwo ? "700" : "400",
                                color: state.numTwo ? "#000" : "#aaa",
                              }}
                            >
                              2 Bhk
                            </button>
                          </div>
                          <div
                            value="3Bhk"
                            onClick={(e) =>
                              handleClick(e.currentTarget.getAttribute("value"))
                            }
                          >
                            <button
                              onClick={threeBhk}
                              style={{
                                backgroundColor: state.numThree
                                  ? "#fff7e1"
                                  : "#fff",
                                border: state.numThree
                                  ? "1px solid #fff7e1"
                                  : "1px solid #c2bfbf",
                                fontWeight: state.numThree ? "700" : "400",
                                color: state.numThree ? "#000" : "#aaa",
                              }}
                            >
                              3 Bhk
                            </button>
                          </div>
                          <div
                            value="4Bhk"
                            onClick={(e) =>
                              handleClick(e.currentTarget.getAttribute("value"))
                            }
                          >
                            <button
                              onClick={fourBhk}
                              style={{
                                backgroundColor: state.numFour
                                  ? "#fff7e1"
                                  : "#fff",
                                border: state.numFour
                                  ? "1px solid #fff7e1"
                                  : "1px solid #c2bfbf",
                                fontWeight: state.numFour ? "700" : "400",
                                color: state.numFour ? "#000" : "#aaa",
                              }}
                            >
                              4 Bhk
                            </button>
                          </div>
                          <div
                            value="5Bhk"
                            onClick={(e) =>
                              handleClick(e.currentTarget.getAttribute("value"))
                            }
                          >
                            <button
                              onClick={fiveBhk}
                              style={{
                                backgroundColor: state.numFive
                                  ? "#fff7e1"
                                  : "#fff",
                                border: state.numFive
                                  ? "1px solid #fff7e1"
                                  : "1px solid #c2bfbf",
                                fontWeight: state.numFive ? "700" : "400",
                                color: state.numFive ? "#000" : "#aaa",
                              }}
                            >
                              5 Bhk
                            </button>
                          </div>
                          <div
                            value="6Bhk"
                            onClick={(e) =>
                              handleClick(e.currentTarget.getAttribute("value"))
                            }
                          >
                            <button
                              onClick={plusBhk}
                              style={{
                                backgroundColor: state.numSix
                                  ? "#fff7e1"
                                  : "#fff",
                                border: state.numSix
                                  ? "1px solid #fff7e1"
                                  : "1px solid #c2bfbf",
                                fontWeight: state.numSix ? "700" : "400",
                                color: state.numSix ? "#000" : "#aaa",
                              }}
                            >
                              5+ Bhk
                            </button>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      <p>
                        Commercial
                        <i>
                          <BiChevronUp />
                        </i>
                      </p>
                      <p>
                        Other Property Types
                        <i>
                          <BiChevronUp />
                        </i>
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="search-budget">
                  <div className="budget-title">
                    <span className="buy-budget">
                      {state.upTo ? `Upto ${state.split}` : "Budget"}
                    </span>
                  </div>
                  <i>
                    <HiCurrencyRupee />
                  </i>
                </div>
                <div className="budget-btn" onClick={filler}>
                  <span className="search-btn"></span>
                  Search
                </div>
                <div className="chevron-down">
                  <i onClick={budgetRes}>
                    <BiChevronDown />
                  </i>
                </div>
                {budget ? (
                  <div className="budget-details">
                    <p
                      value="5Lakhs"
                      onClick={(x) =>
                        priceClick(x.currentTarget.getAttribute("value"))
                      }
                    >
                      ₹5 Lac
                    </p>
                    <p
                      value="10Lakhs"
                      onClick={(x) =>
                        priceClick(x.currentTarget.getAttribute("value"))
                      }
                    >
                      ₹10 Lac
                    </p>
                    <p
                      value="20Lakhs"
                      onClick={(x) =>
                        priceClick(x.currentTarget.getAttribute("value"))
                      }
                    >
                      ₹20 Lac
                    </p>
                    <p
                      value="30Lakhs"
                      onClick={(x) =>
                        priceClick(x.currentTarget.getAttribute("value"))
                      }
                    >
                      ₹30 Lac
                    </p>
                    <p
                      value="40Lakhs"
                      onClick={(x) =>
                        priceClick(x.currentTarget.getAttribute("value"))
                      }
                    >
                      ₹40 Lac
                    </p>
                    <p
                      value="50Lakhs"
                      onClick={(x) =>
                        priceClick(x.currentTarget.getAttribute("value"))
                      }
                    >
                      ₹50 Lac
                    </p>
                    <p
                      value="60Lakhs"
                      onClick={(x) =>
                        priceClick(x.currentTarget.getAttribute("value"))
                      }
                    >
                      ₹60 Lac
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="second-banner-col">
              <div>
                <Slider {...settings}>
                  <div>
                    <div className="first-slide">
                      <img src={Slide1} alt="slider" />
                    </div>
                  </div>
                  <div>
                    <div className="sec-slide">
                      <img src={Slide2} alt="slider" />
                    </div>
                  </div>
                  <div>
                    <div className="thrd-slide">
                      <div className="box">
                        <h4>
                          Planning to
                          <span className="sell-banner"> Sell/Rent</span> Your
                          Property?
                        </h4>
                        <a href="#">Post FREE AD</a>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="searched-loc">
        <div className="container">
          <div className="searched-title">
            <h2 className="searched-heading">
              Because you searched{" "}
              <span className="last-searched-city">Chennai</span>
            </h2>
          </div>
          <div className="searched-row">
            {state.bannerCards1.map((a, b) => {
              return (
                <div key={b} className="searched-col">
                  <div className="searched-card">
                    <h3>
                      <span className="card_count">{a.count}</span>
                      {a.content}
                    </h3>
                    <a href="#">
                      {a.search}
                      <i className="arrow">
                        <AiOutlineArrowRight />
                      </i>
                    </a>
                    <div className="icon_searched">{a.icon}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div id="project-gallery">
        <div className="container">
          <div className="gallery-title">
            <h2 className="gallery-heading">New Project Gallery</h2>
            <a href="#" className="gallery-see-all">
              See all Projects
              <i className="arrow">
                <AiOutlineArrowRight />
              </i>
            </a>
          </div>
          <div className="gallery-row">
            {state.bannerCards2.map((x, y) => {
              return (
                <div key={y} className="gallery-col">
                  <div
                    className="gallery-card"
                    onClick={() => {
                      moveProject(x.get);
                      moveValue(x);
                    }}
                  >
                    <div className="gallery-img">
                      <img
                        src={x.src}
                        alt="cards"
                        style={{ objectFit: "cover" }}
                      ></img>
                    </div>
                    <div className="gallery-details">
                      <h4>{x.title}</h4>
                      <p>{x.builder}</p>
                      <p>{x.location}</p>

                      <b>
                        <i>{x.rupee}</i>
                        {x.price}
                      </b>
                      <p className="gallery-by">{x.by}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div id="explore">
        <div className="container">
          <div className="explore-row">
            <div className="explore-col-frst">
              <div className="explore-card-frst">
                <h3>Explore</h3>
                <p>Popular Localities in Chennai</p>
              </div>
            </div>
            {state.bannerCards3.map((a, b) => {
              return (
                <div
                  key={b}
                  className="explore-col"
                  onClick={() => locality(a)}
                >
                  <div className="explore-card">
                    <h3>
                      {a.name}
                      <i>{a.box}</i>
                    </h3>
                    <p>{a.sqft}</p>
                    <div className="explore-review">
                      <strong>
                        {a.rating}
                        <i>{a.star1}</i>
                      </strong>
                      <p>{a.review}</p>
                    </div>
                    <div className="explore-img">
                      <img src={a.src} alt="cards"></img>
                      <p>{a.sale}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div id="List-magic">
        <div className="container">
          <div className="list-row">
            <div className="list-col">
              <h4 className="list-heading">
                Post your Property for <span className="list-free">Free</span>
              </h4>
              <p>List it on Magicbricks and get genuine leads</p>
            </div>
            <div className="list-col">
              <a href="#" className="list-post">
                Post Property<span className="list-badge">free</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
