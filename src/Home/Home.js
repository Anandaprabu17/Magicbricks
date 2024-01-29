import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import "./Home.css";

export const Home = () => {
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
    </div>
  );
};
