import React, { useContext, useState } from "react";
import { Context } from "../Context";
import "./Details.css";
import { VscThreeBars } from "react-icons/vsc";
import {
  BsThreeDotsVertical,
  BsPerson,
  BsCardImage,
  BsHouseHeart,
} from "react-icons/bs";
import { GiElectric } from "react-icons/gi";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import {
  MdBalcony,
  MdOutlineDoorSliding,
  MdOutlineElectricalServices,
} from "react-icons/md";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { BiChevronDown } from "react-icons/bi";
import {
  GiElectricalResistance,
  GiWaterTank,
  GiSecurityGate,
  GiKite,
} from "react-icons/gi";
import { BiSolidBuildingHouse, BiSolidCarGarage } from "react-icons/bi";
import { PiParkDuotone } from "react-icons/pi";

export const Details = () => {
  const { state, dispatch } = useContext(Context);
  const [sail, setSail] = useState(false);
  const [read, setRead] = useState(false);
  const [amenties, setAmenties] = useState(false);
  const [disc, setDisc] = useState(false);
  // const elements = document.querySelectorAll(".summary-show");
  // const get = document.getElementById("view-btn-show");

  // get.addEventListener("click", function () {
  //   elements.forEach((element) => {
  //     element.classList.add("summary-visible");
  //   });
  // });

  // console.log(state.object);
  const summaryShow = () => {
    setSail(true);
  };
  return (
    <div>
      <div id="header-new">
        <div className="container">
          <div className="header-row">
            <div className="header-col-new">
              <h3 className="header-title-new">magicbricks</h3>
              <a href="'#" className="property-option">
                Buy
                <i className="chevron-icon-new">
                  <BiChevronDown />
                </i>
              </a>
              <a href="#" className="property-option">
                Rent
                <i className="chevron-icon-new">
                  <BiChevronDown />
                </i>
              </a>
              <a href="#" className="property-option">
                Sell
                <i className="chevron-icon-new">
                  <BiChevronDown />
                </i>
              </a>
              <a href="#" className="property-option">
                Home Loans
                <i className="chevron-icon-new">
                  <BiChevronDown />
                </i>
              </a>
            </div>
            <div className="header-col-second-new">
              <a href="#" className="property-option">
                Login
                <i className="chevron-icon-new">
                  <BiChevronDown />
                </i>
              </a>
              <a href="#" className="property-post-new">
                Post Property<span className="property-badge-new">free</span>
              </a>

              <i className="bar-icon-new">
                <VscThreeBars />
              </i>
            </div>
          </div>
        </div>
      </div>
      <div className="container-new">
        <div className="dtls-row">
          <div className="dtls-col-frst">
            <div className="dtls-card-frst">
              <div className="dtls-head-title">
                <div className="dts-apply-loan">
                  <div className="frst-dtls-title">{state.object.price}</div>
                  <div className="frst-dtls-emi">{state.object.emi}</div>
                  <span className="divider">|</span>
                  <div className="frst-dtls-loan">{state.object.loan}</div>
                </div>
                <div className="dot-icon">
                  <i>
                    <BsThreeDotsVertical />
                  </i>
                </div>
              </div>
              <div className="dtls-flat-name">
                <div className="dtls-bhk1">{state.object.text1}</div>
                <div className="dtls-bhk2">{state.object.text2}</div>
              </div>
              <div className="dtls-about">
                <div className="dtls-img">
                  <div className="img--dtls">
                    <img
                      src={state.object.img}
                      alt="flat"
                      className="dtls-img-single"
                    ></img>
                  </div>
                  <span className="photo-count-new">
                    <i className="img--count">
                      <BsCardImage />
                    </i>
                    {state.object.imgTotal} Photos
                  </span>
                </div>
                <div className="dtls-summary">
                  <div className="about-summary">
                    <div className="dtls-summary-item">
                      <i className="dtls-summary-icon">
                        <IoBed />
                      </i>
                      <div className="dtls-summary-value">
                        {state.object.bed}
                      </div>
                    </div>
                    <div className="dtls-summary-item">
                      <i className="dtls-summary-icon">
                        <FaBath />
                      </i>
                      <div className="dtls-summary-value">
                        {state.object.bath}
                      </div>
                    </div>
                    <div className="dtls-summary-item">
                      <i className="dtls-summary-icon">
                        <MdBalcony />
                      </i>
                      <div className="dtls-summary-value">
                        {state.object.balcony}
                      </div>
                    </div>
                    <div className="dtls-summary-ite">
                      <i className="dtls-summary-icon">
                        <MdOutlineDoorSliding />
                      </i>
                      <div className="dtls-summary-value">
                        {state.object.furnish}
                      </div>
                    </div>
                  </div>
                  <div className="about-more-dtls">
                    <div className="more-dtls-summary">
                      <div className="about-more-title">Carpet Area</div>
                      <div className="about-more-value">
                        {state.object.sqft}
                      </div>
                    </div>
                    <div className="more-dtls-summary">
                      <div className="about-more-title">Floor</div>
                      <div className="about-more-value">
                        {state.object.floorCount}
                      </div>
                    </div>
                    <div className="more-dtls-summary">
                      <div className="about-more-title">Transaction type</div>
                      <div className="about-more-value">
                        {state.object.transaction}
                      </div>
                    </div>
                    <div className="more-dtls-summary">
                      <div className="about-more-title">Status</div>
                      <div className="about-more-value">
                        {state.object.status1}
                      </div>
                    </div>
                    <div className="more-dtls-summary">
                      <div className="about-more-title">Facing</div>
                      <div className="about-more-value">
                        {state.object.facing}
                      </div>
                    </div>
                    <div className="more-dtls-summary">
                      <div className="about-more-title">Lift</div>
                      <div className="about-more-value">
                        {state.object.lift}
                      </div>
                    </div>
                    <div className="more-dtls-summary">
                      <div className="about-more-title">Furnished Status</div>
                      <div className="about-more-value">
                        {state.object.furnish}
                      </div>
                    </div>
                    <div className="more-dtls-summary">
                      <div className="about-more-title">Type Of Ownership</div>
                      <div className="about-more-value">
                        {state.object.ownership}
                      </div>
                    </div>
                    <div className="more-dtls-summary">
                      <div className="about-more-title">
                        Age Of Construction
                      </div>
                      <div className="about-more-value">{state.object.age}</div>
                    </div>
                  </div>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-action-new">
                  <div className="summary-action-btn">
                    <button className="summary-contact">Contact Builder</button>
                    <button className="summary-book-site">
                      Book Site Visit
                    </button>
                  </div>
                  <div className="last-contact">
                    <i className="contact-person">
                      <BsPerson />
                    </i>
                    <div className="contact-made-last">
                      {state.object.contract}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dtls-col-sec">
            <div className="dtls-card-sec">
              <div className="frst-builder-dtl">
                <div className="sec-card-title">Contact Builder</div>
                <div className="builder-name">{state.object.owner}</div>
                <div className="builder-num">{state.object.number}</div>
              </div>
              <div className="get--contact-details">
                <div className="sec-builder-dtl">
                  <div className="input-name">
                    <input type="text" placeholder="Your Name" />
                  </div>
                </div>
                <div className="trd-builder-dtl">
                  <div className="input-email">
                    <input type="email" placeholder="Email" />
                  </div>
                </div>
                <div className="frth-builder-dtl">
                  <span className="ind-num">IND +91</span>

                  <div className="input-number">
                    <input type="number" placeholder="Mobile Number" />
                  </div>
                </div>
                <div className="terms-conditon">
                  <p className="agree">
                    I agree to Magicbricks<a href="#">Terms of Conditions</a>
                  </p>
                </div>
                <div className="builder-detail">
                  <button>Contact Builder</button>
                </div>
              </div>
              <div className="download-builder">
                <div className="broc-dwnld">
                  <i className="doc-dwnld">
                    <HiOutlineDocumentDownload />
                  </i>
                  Download Brochure
                </div>
              </div>
            </div>
          </div>
          <div className="dtls-col-thrd">
            <div className="dtls-card-thrd">
              <div className="why-proj-title">why buy in this project?</div>
              <ul className="why-proj-list">
                <li className="why-proj-item">AI - based smart homes</li>
                <li className="why-proj-item">Cloud kitchen services</li>
                <li className="why-proj-item">I Robots, RFID Lock</li>
              </ul>
              <div className="why-proj-more">
                <a className="why-proj-click" href="#">
                  +8 more
                </a>
              </div>
            </div>
          </div>
          <div className="dtls-col-frth">
            <div className="dtls-card-frth">
              <div className="more-details-title">More details</div>
              <div className="card-frth-summary">
                <p className="card-frth-label">Price Breakup</p>
                <p className="card-frth-value">{state.object.priceBreakup}</p>
              </div>
              <div className="card-frth-summary">
                <p className="card-frth-label">Booking Amount</p>
                <p className="card-frth-value">{state.object.bookingAmount}</p>
              </div>
              <div className="card-frth-summary">
                <p className="card-frth-label">Address</p>
                <p className="card-frth-value">{state.object.address}</p>
              </div>
              <div className="card-frth-summary">
                <p className="card-frth-label">Furnishing</p>
                <p className="card-frth-value">{state.object.furnish}</p>
              </div>
              <div className="card-frth-summary">
                <p className="card-frth-label">Flooring</p>
                <p className="card-frth-value">{state.object.flooring}</p>
              </div>
              <div className="card-frth-summary">
                <p className="card-frth-label">Type of Ownership</p>
                <p className="card-frth-value">{state.object.ownership}</p>
              </div>
              <div className="card-frth-summary">
                <p className="card-frth-label">Age of Construction</p>
                <p className="card-frth-value">{state.object.age}</p>
              </div>
              {sail ? (
                <>
                  <div className="card-frth-summary">
                    <p className="card-frth-label">Water Availability</p>
                    <p className="card-frth-value">{state.object.water}</p>
                  </div>
                  <div className="card-frth-summary">
                    <p className="card-frth-label">Status of Electricity</p>
                    <p className="card-frth-value">
                      {state.object.electricity}
                    </p>
                  </div>
                  <div className="card-frth-summary">
                    <p className="card-frth-label">Lift</p>
                    <p className="card-frth-value">{state.object.dtlsLift}</p>
                  </div>
                </>
              ) : (
                ""
              )}
              {sail ? (
                ""
              ) : (
                <div className="view-all-more">
                  <span className="view-all-bt" onClick={summaryShow}>
                    View all Details
                  </span>
                </div>
              )}
              <div className="more-dtls-desc">
                <div className="more--desc">
                  <span className="more-desc-title">Description:</span>
                  FETE is a well-Designed project of 245 apartments featuring
                  studio homes, all bhk homes. These smart homes are finely
                  crafted to experience next-gen living while reliving the an...
                  {read ? (
                    ""
                  ) : (
                    <span
                      className="more-desc-read"
                      onClick={() => setRead(true)}
                    >
                      Read more
                    </span>
                  )}
                  {read ? (
                    <>
                      <span className="more-read-less">
                        These smart homes are finely crafted to experience
                        next-gen living while reliving the ancient history of
                        Rome. Our 50+ bext-in-class indoor and outdoor amenities
                        are best suited for kids and adults with an exclusive
                        clubhouse to keep them engaged
                      </span>
                      <span
                        className="read-less-btn"
                        onClick={() => setRead(false)}
                      >
                        Read Less
                      </span>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="view-all-btn">
                <button>Contact Builder</button>
              </div>
            </div>
          </div>
          <div className="dtls-col-fifth">
            <div className="dtls-card-fifth">
              <div className="amenties-title">Amenities</div>
              <div className="amenties-row">
                <div className="amenties-list">
                  <i className="amenties-icon">
                    <GiElectric />
                  </i>
                  <div className="amenties-item">{state.object.amenties1}</div>
                </div>
                <div className="amenties-list">
                  <i className="amenties-icon">
                    <GiWaterTank />
                  </i>
                  <div className="amenties-item">{state.object.amenties2}</div>
                </div>
                <div className="amenties-list">
                  <i className="amenties-icon">
                    <BiSolidBuildingHouse />
                  </i>
                  <div className="amenties-item">{state.object.amenties3}</div>
                </div>
                <div className="amenties-list">
                  <i className="amenties-icon">
                    <PiParkDuotone />
                  </i>
                  <div className="amenties-item">{state.object.amenties4}</div>
                </div>
                <div className="amenties-list">
                  <i className="amenties-icon">
                    <BiSolidCarGarage />
                  </i>
                  <div className="amenties-item">{state.object.amenties5}</div>
                </div>
                <div className="amenties-list">
                  <i className="amenties-icon">
                    <GiSecurityGate />
                  </i>
                  <div className="amenties-item">{state.object.amenties6}</div>
                </div>
                {amenties ? (
                  <>
                    <div className="amenties-list">
                      <i className="amenties-icon">
                        <BiSolidCarGarage />
                      </i>
                      <div className="amenties-item">Visitor Parking</div>
                    </div>
                    <div className="amenties-list">
                      <i className="amenties-icon">
                        <AiOutlineFundProjectionScreen />
                      </i>
                      <div className="amenties-item">Mini Cinema Theatre</div>
                    </div>
                    <div className="amenties-list">
                      <i className="amenties-icon">
                        <GiKite />
                      </i>
                      <div className="amenties-item">Kids Area</div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="amenties-action">
                {amenties ? (
                  ""
                ) : (
                  <div className="amenties-all">
                    <span
                      className="view-all-amenties"
                      onClick={() => setAmenties(true)}
                    >
                      View all Amenities
                    </span>
                  </div>
                )}
                <div className="download-brochure-all">
                  <i className="document-icon">
                    <HiOutlineDocumentDownload />
                  </i>
                  <span className="download-brochure">Download Brochure</span>
                </div>
              </div>
            </div>
          </div>
          <div className="disclaimer-dtls">
            <div className="disclaimer-text">
              <span className="disc-title">Disclaimer:</span>
              {state.object.disclaimer2}...
              {disc ? (
                ""
              ) : (
                <span className="Read-more-disc" onClick={() => setDisc(true)}>
                  Read more
                </span>
              )}
              {disc ? (
                <>
                  <div>
                    <span className="disc-rd-text">
                      Magicbricks acts merely as a medium for posting
                      information and content. It is clarified that the data
                      available on the website is not physically verified and
                      hence no representation or warranty is expressly or
                      impliedly given to its accuracy in any form. The User is
                      advised to do thorough research and due diligence before
                      making any decision regarding investment. Nothing
                      contained on the platform shall deem to constitute legal
                      advice, solicitation, invitation etc. in any form
                      whatsoever
                    </span>
                    <span
                      className="disc-rd-less"
                      onClick={() => setDisc(false)}
                    >
                      Read Less
                    </span>
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
  );
};
