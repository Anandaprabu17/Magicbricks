import React, { useContext, useState } from "react";
import { Context } from "../Context";
import "./Property.css";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical, BsHouseHeart, BsCardImage } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
// import { AiOutlineHeart } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";
import { IoBedOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";

export const Property = () => {
  const { state, dispatch } = useContext(Context);
  const [card, setCard] = useState(false);

  let marine = useNavigate();
  const onNavigate = (index) => {
    dispatch({ type: "DETAILS", payload: index });
    marine("/details");
  };

  var z;
  const forColor = (id) => {
    z = [...state.newFlat].map((j, k) => {
      return id === k ? { ...j, isHeart: !j.isHeart } : j;
    });
    dispatch({ type: "color", payload: z });
  };

  const onNavy = (value) => {
    dispatch({ type: "heart", payload: value });
  };

  // console.log(state.newFlat);
  let place = useNavigate();
  const shortList = () => {
    place("/shortlist");
  };
  const setHeight = () => {
    setCard(!card);
  };
  return (
    <div>
      <div id="header">
        <div className="container">
          <div className="header-row">
            <div className="header-col">
              <h3 className="header-title">magicbricks</h3>
              <a href="'#" className="property-option">
                Buy
                <i className="chevron-icon">
                  <BiChevronDown />
                </i>
              </a>
              <a href="#" className="property-option">
                Rent
                <i className="chevron-icon">
                  <BiChevronDown />
                </i>
              </a>
              <a href="#" className="property-option">
                Sell
                <i className="chevron-icon">
                  <BiChevronDown />
                </i>
              </a>
              <a href="#" className="property-option">
                Home Loans
                <i className="chevron-icon">
                  <BiChevronDown />
                </i>
              </a>
            </div>
            <div className="header-col-second">
              <a href="#" className="property-option">
                Login
                <i className="chevron-icon">
                  <BiChevronDown />
                </i>
              </a>
              <a href="#" className="short-list" onClick={shortList}>
                <i>
                  <BsHouseHeart />
                </i>
                Shortlist
                <i>
                  <BiChevronDown />
                </i>
              </a>
              <a href="#" className="property-post">
                Post Property<span className="property-badge">free</span>
              </a>

              <i className="bar-icon">
                <VscThreeBars />
              </i>
            </div>
          </div>
        </div>
      </div>
      <div id="top-filter">
        <div className="filter-contain">
          <div className="filter-row">
            <div className="filter-col">
              <div className="filter-input">
                <div className="filter-title">
                  <div className="filtered-title">
                    <div className="filter-buy">Buy</div>
                  </div>
                </div>
              </div>
              <div className="filter-loc">
                <div className="filter-new-loaction">
                  <div className="clear-fix">
                    <div className="auto-suggest">
                      <div className="auto-suggest-clear">
                        <div className="auto-suggest-tag">
                          <div className="auto-suggest-text">Chennai</div>
                        </div>
                        <span className="auto-suggest-input">
                          <input className="top-city" placeholder="Add more" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="filter-all">
                    <div className="filter-item">
                      <div className="filter-locality">
                        <div className="locality-title">
                          <div className="filter-title-clear">
                            Top Localities
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="filter-item">
                      <div className="filter-budget">
                        <span className="filter-clear"></span>
                        <div className="selected-heading">
                          <div className="filter-title-clear">
                            Upto {state.price}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="filter-item">
                      <div className="filter-flat">
                        <span className="filter-clear"></span>
                        <div className="selected-heading">
                          <div className="filter-title-clear">
                            Flat {state.flat}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="filter-item">
                      <div className="filter-bhk">
                        <span className="filter-clear"></span>
                        <div className="selected-heading">
                          <div className="filter-title-clear">BHK</div>
                        </div>
                      </div>
                    </div>
                    <div className="filter-item">
                      <div className="filter-owner">
                        <div className="filter-title-selected">
                          <div className="filter-title-clear">Owners</div>
                        </div>
                      </div>
                    </div>
                    <div className="filter-item">
                      <div className="more-filters">
                        <span className="more-icon"></span>
                        <span className="more-count">5</span>
                        <div className="more-title">More filters</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="property-bhk-title">
          <div className="property-text1">5 results | </div>
          <h1 className="property-text1">
            - {state.flat} Residential Properties for Sale in Chennai
          </h1>
        </div>
        {state.newFlat.map((a, b) => {
          return (
            <div key={b} className="property-list">
              <div className="property-card">
                <div className="card-container">
                  <div className="card-photo">
                    <div className="card-fig">
                      <i className="img-icon">
                        <BsCardImage />
                      </i>
                      <span className="photo-count">{a.imgTotal}</span>
                      <img
                        src={a.img}
                        alt="building"
                        className="card-image"
                      ></img>
                      <div className="card-post">{a.updated}</div>
                    </div>
                    <div className="card-ads">
                      <div className="ads-name">
                        Owner : {a.owner}
                        {}
                      </div>
                    </div>
                  </div>
                  <div className="card-info">
                    <div className="card-tags">
                      <span className="only-magic">Only on Magicbricks</span>
                      <div className="card-flex">
                        <h2 className="card-title">{a.title}</h2>
                        <div className="main-right">
                          {a.isHeart ? (
                            <i
                              className="heart-before"
                              onClick={() => {
                                onNavy(a);
                                forColor(b);
                              }}
                              style={{
                                color: "#049584",
                              }}
                            >
                              {a.heart}
                            </i>
                          ) : (
                            <i
                              className="heart-after"
                              onClick={() => {
                                onNavy(a);
                                forColor(b);
                              }}
                              style={{
                                color: "#000",
                              }}
                            >
                              {a.heart}
                            </i>
                          )}
                          <i className="main-share">{a.share}</i>
                          <i>
                            <BsThreeDotsVertical />
                          </i>
                        </div>
                      </div>
                      <div className="card-society">
                        <a className="society-name" href="#">
                          {a.by}
                        </a>
                      </div>
                      <div className="card-summary" id="summary">
                        <div className={card ? "open" : "summary-list"}>
                          <div className="list-item">
                            <i className="list-icon">{a.areaIcon}</i>
                            <div className="list-label">{a.area}</div>
                            <div className="list-value">{a.sqft}</div>
                          </div>
                          <div className="list-item">
                            <i className="list-icon">{a.statusIcon}</i>
                            <div className="list-label">{a.status}</div>
                            <div className="list-value">{a.status1}</div>
                          </div>
                          <div className="list-item">
                            <i className="list-icon">{a.floorIcon}</i>
                            <div className="list-label">{a.floor}</div>
                            <div className="list-value">{a.floorCount}</div>
                          </div>
                          <div className="list-item">
                            <i className="list-icon">
                              <IoBedOutline />
                            </i>
                            <div className="list-label">Furnishing</div>
                            <div className="list-value">Furnished</div>
                          </div>
                          <div className="list-item">
                            <i className="list-icon">
                              <FaHome />
                            </i>
                            <div className="list-label">Transaction</div>
                            <div className="list-value">Resale</div>
                          </div>
                          <div className="list-item">
                            <i className="list-icon">
                              <GiHomeGarage />
                            </i>
                            <div className="list-label">Ownership</div>
                            <div className="list-value">Freehold</div>
                          </div>
                        </div>
                        <div
                          className={card ? "turn" : "summary-action"}
                          id="action"
                          onClick={setHeight}
                        ></div>
                      </div>
                      <div className="card-desc">
                        <div className="desc-text">
                          <p className="desc-info">{a.read}</p>
                          <span className="desc-readmore"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-estimate">
                  <div className="card-price">
                    <div className="price-amount">
                      <span className="rupees">₹</span>
                      {a.price}
                    </div>
                    <div className="price-size">
                      <span className="rupees">₹</span>
                      {a.perSqft}
                    </div>
                  </div>
                  <div className="card-action">
                    <button className="card-btn" onClick={() => onNavigate(a)}>
                      {a.view}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
