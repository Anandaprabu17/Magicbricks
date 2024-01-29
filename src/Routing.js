import React, { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home } from "./Home/Home";
import { initialState, reducer } from "./State";
import { Context } from "./Context";
import { Banner } from "./Banner/Banner";
import { Footer } from "./Footer/Footer";
import { Property } from "./Property/Property";
import { Details } from "./Details/Details";
import { Shortlist } from "./Shortlist/Shortlist";
import { Project } from "./Project/Project";
import { Explore } from "./Explore/Explore";

export const Routing = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Context.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          {/* <Home /> */}
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/property" element={<Property />} />
            <Route path="/details" element={<Details />} />
            <Route path="/shortlist" element={<Shortlist />} />
            <Route path="/project" element={<Project />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
};
