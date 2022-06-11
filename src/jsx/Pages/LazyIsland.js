import React from "react";
import background from "./../../assets/lazy_island_BG.gif";
import { Navbar } from "../Components/SubComponents/Navbar";
import { AboutLazyIsland } from "../Components/LazyIslandComponents/aboutLazyIsland";

export const LazyIsland = () => {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover bg-fixed w-full"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar />
      <div style={{ height: "75vh" }} />
      <div className="bg-darkBlue_900 w-full px-10 lg:px-20 xl:px-40 2xl:px-80 pt-20">
        <AboutLazyIsland />
        <div className="flex justify-center mt-10 pb-4">
          <div className="flex items-center gap-x-4">
            <h1 className="text-4xl text-fuchsia_600">Policy ID:</h1>
            <span className="text-white text-xl">
              86f2bf5e9fbfe6d9a3cd2bfc8e4a9890093db5792ea7425a294356c6
            </span>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col items-center gap-y-14 justify-center py-14">
        <p className="text-3xl text-fuchsia_600">Lazy Llamas 2022</p>
      </div> */}
    </div>
  );
};
