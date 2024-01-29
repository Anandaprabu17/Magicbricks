import React, { useContext } from "react";
import "./Footer.css";
import Google from "../Images/google-play.png";
import Apple from "../Images/apple-store.png";
import fb from "../Images/facebook.png";
import tweet from "../Images/twitter.png";
import linked from "../Images/linked.png";
import yt from "../Images/yt.png";
import insta from "../Images/insta.png";

export const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer-row">
            <div className="footer-col">
              <div className="about-magic_bricks">
                <h5 className="properties-title">About Magicbricks</h5>
                <p>
                  Magicbricks is a full stack service provider for all real
                  estate need...<a href="#">Read more</a>
                </p>
              </div>
              <div className="more-from_us">
                <h5 className="properties-title">More from our Network</h5>
                <ul className="network">
                  <li className="network-list">
                    <a href="#" className="footer-network">
                      Times of India
                    </a>
                  </li>
                  <li className="network-list">
                    <a href="#" className="footer-network">
                      Economic Times
                    </a>
                  </li>
                  <li className="network-list">
                    <a href="#" className="footer-network">
                      Navbharat times
                    </a>
                  </li>
                  <li className="network-list">
                    <a href="#" className="footer-network">
                      India times
                    </a>
                  </li>
                  <li className="network-list">
                    <a href="#" className="footer-network">
                      Filmfare
                    </a>
                  </li>
                  <li className="network-list">
                    <a href="#" className="footer-network">
                      MensXP
                    </a>
                  </li>
                  <li className="network-list">
                    <a href="#" className="footer-network">
                      iDiva
                    </a>
                  </li>
                  <li className="network-list">
                    <a href="#" className="footer-network">
                      TimesJobs
                    </a>
                  </li>
                  <li className="network-list">
                    <a href="#" className="footer-network">
                      Gadgets Now
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-links">
                <div className="downloads">
                  <div className="google_play">
                    <img src={Google} alt="goole"></img>
                  </div>
                  <div className="apple_store">
                    <img src={Apple} alt="apple"></img>
                  </div>
                </div>
                <div className="footer-social">
                  <div className="fb">
                    <img src={fb} alt="facebook"></img>
                  </div>
                  <div className="tweet">
                    <img src={tweet} alt="twitter"></img>
                  </div>
                  <div className="linked">
                    <img src={linked} alt="linkedin"></img>
                  </div>
                  <div className="yt">
                    <img src={yt} alt="youtube"></img>
                  </div>
                  <div className="insta">
                    <img src={insta} alt="instagram"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-col">
              <div className="properties_india">
                <h5 className="properties-title">Properties in India</h5>
                <a href="#" className="main_link">
                  Property in New Delhi
                </a>
                <a href="#" className="main_link">
                  Property in Mumbai
                </a>
                <a href="#" className="main_link">
                  Property in Chennai
                </a>
                <a href="#" className="main_link">
                  Property in Pune
                </a>
                <a href="#" className="main_link">
                  Property in Noida
                </a>
                <a href="#" className="main_link">
                  Property in Gurgaon
                </a>
                <a href="#" className="main_link">
                  Property in Bangalore
                </a>
                <a href="#" className="main_link">
                  Property in Ahmedabad
                </a>
              </div>
              <div className="projects_india">
                <h5 className="properties-title">New Projects in India</h5>
                <a href="#" className="main_link">
                  New Projects in New Delhi
                </a>
                <a href="#" className="main_link">
                  New Projects in Mumbai
                </a>
                <a href="#" className="main_link">
                  New Projects in Chennai
                </a>
                <a href="#" className="main_link">
                  New Projects in Pune
                </a>
                <a href="#" className="main_link">
                  New Projects in Noida
                </a>
                <a href="#" className="main_link">
                  New Projects in Gurgaon
                </a>
                <a href="#" className="main_link">
                  Property in Bangalore
                </a>
                <a href="#" className="main_link">
                  New Projects in Ahmedabad
                </a>
              </div>
            </div>
            <div className="footer-col-thrd">
              <p>
                Disclaimer: Magicbricks Realty Services Limited is only an
                intermediary offering its platform to advertise properties of
                Seller for a Customer/Buyer/User coming on its Website and is
                not and cannot be a party to or privy to or control in any
                manner any transactions between the Seller and the
                Customer/Buyer/User. All the offers and discounts on this
                Website have been extended by{" "}
                <span className="footer-more">Read more</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-copyright">
        <div className="copyright-container">
          All trademarks, logos and names are properties of their respective
          owners. All Rights Reserved. © Copyright 2023 Magicbricks Realty
          Services Limited
        </div>
      </div>
    </div>
  );
};
