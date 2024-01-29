import React, { useContext } from "react";
import "./Shortlist.css";
import { Context } from "../Context";

export const Shortlist = () => {
  const { state, dispatch } = useContext(Context);
  console.log(state.shortList);
  return (
    <div>
      <div className="container">
        <div className="property-row">
          {state.shortList.map((a, b) => {
            return (
              <div key={b} className="property-col-frst">
                <div className="property-card">
                  <div className="property-img">
                    <img src={a.img} alt="building"></img>
                    <div className="main-update">
                      <p className="main-date">{a.updated}</p>
                    </div>
                    <div className="main-owner">Owner : {a.owner}</div>
                  </div>
                  <div className="main-content">
                    <div className="main-title">
                      <div className="main-left">
                        <span className="only">{a.only}</span>
                        <h5 className="main-bhk">{a.title}</h5>
                        <a hre="#" className="author">
                          {a.by}
                        </a>
                      </div>
                    </div>
                    <div className="main-details">
                      <div className="main-area">
                        <i className="main-icon">{a.areaIcon}</i>
                        <p className="summary-area">{a.area}</p>
                        <p className="summary-value">{a.sqft}</p>
                      </div>
                      <div className="main-status">
                        <i className="main-icon">{a.statusIcon}</i>
                        <p className="summary-status">{a.status}</p>
                        <p className="summary-move">{a.status1}</p>
                      </div>
                      <div className="main-floor">
                        <i className="main-icon">{a.floorIcon}</i>
                        <p className="summary-floor">{a.floor}</p>
                        <p className="summary-count">{a.floorCount}</p>
                      </div>
                    </div>
                    <div className="main-read">
                      <p>{a.read}</p>
                    </div>
                  </div>
                </div>
                <div className="property-col-second">
                  <div className="right-side">
                    <h3>{a.price}</h3>
                    <p>{a.perSqft}</p>
                    <button className="main-btn">{a.view}</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
