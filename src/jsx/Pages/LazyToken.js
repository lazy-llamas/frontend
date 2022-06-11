import React from "react";
import { AboutLazyToken } from "../Components/LazyTokenComponents/aboutLazyToken";
import { LazyTokenPoints } from "../Components/LazyTokenComponents/lazyTokenPoints";
import { Navbar } from "../Components/SubComponents/Navbar";

export const LazyToken = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-10 lg:mx-20 xl:mx-40 2xl:mx-80 pt-24">
        <AboutLazyToken />
        <LazyTokenPoints />
        <div className="flex flex-col items-center gap-y-14 justify-center py-14">
          <div className="flex items-center gap-x-4">
            <h1 className="text-5xl text-fuchsia_600">Policy ID:</h1>
            <span className="text-white text-xl">
              86f2bf5e9fbfe6d9a3cd2bfc8e4a9890093db5792ea7425a294356c6
            </span>
          </div>
          <p className="text-3xl text-fuchsia_600">Lazy Llamas 2022</p>
        </div>
      </div>
    </div>
  );
};
