import React from "react";
import { Roadmap } from "../Components/LazyLoungComponents/roadmap";
import { Team } from "../Components/LazyLoungComponents/team";
import { Navbar } from "../Components/SubComponents/Navbar";
import { LazyLoungeComp } from "./../Components/LazyLoungComponents/lazy-lounge-comp";
import "./LazyLounge.css";

export const LazyLounge = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-20 xl:mx-40 2xl:mx-80 pt-24" id="lazy_lounge_container">
        <LazyLoungeComp />
        <Roadmap />
        <Team />
        <div className="flex justify-center py-10">
          <p className="text-3xl text-fuchsia_600">Lazy Llamas 2022</p>
        </div>
      </div>
    </div>
  );
};
