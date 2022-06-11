import React from "react";
import { ArtAndTires } from "../Components/SerumXComponents/ArtAndTires";
import { SerumXCards } from "../Components/SerumXComponents/serumXCards";
import { Navbar } from "../Components/SubComponents/Navbar";
import serumX_img from "./../../assets/serumX_img.webp";
import Matt_Gross from "./../../assets/Matt_Gross.webp";
import t1 from "./../../assets/t1.webp";
import t2 from "./../../assets/t2.webp";
import t3 from "./../../assets/t3.webp";
import "./SerumX.css";

export const SerumX = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-black pt-28 px-10 lg:px-20 xl:px-40 2xl:px-80">
        <SerumXCards />
        <button className="my-14 w-full py-3 text-4xl text-fuchsia_600 border-3 border-fuchsia_800 font-semibold tracking-wider hover:bg-gray_500">
          TIER-1 SERUM - X INTERACTION
        </button>
      </div>
      <div
        className="bg-cover bg-no-repeat bg-center border-1 border-white"
        style={{
          backgroundImage: `url(${serumX_img})`,
          height: "900px",
          width: "100%"
        }}
      />
      <div className="bg-black px-10 lg:px-20 xl:px-40 2xl:px-80">
        <ArtAndTires />
      </div>
      <div className="grid grid-cols-12 gap-x-10 px-10 lg:px-20 xl:px-40 bg-black">
        <div
          className="col-span-4 hoverBG relative rounded-full flex items-center justify-center"
          style={{ backgroundImage: `url(${Matt_Gross})`, height: "420px" }}
        >
          <h1 className="myText text-center italic font-bold text-6xl text-white absolute left-0 top-36 bottom-0 right-0">
            TIER 1
          </h1>
          <img
            src={t1}
            alt="t1"
            className="hoverImage rounded-full"
            width={"400px"}
          />
        </div>
        <div
          className="col-span-4 hoverBG relative rounded-full flex items-center justify-center"
          style={{ backgroundImage: `url(${Matt_Gross})`, height: "420px" }}
        >
          <h1 className="myText text-center italic font-bold text-6xl text-white absolute left-0 top-36 bottom-0 right-0">
            TIER 2
          </h1>
          <img
            src={t2}
            alt="t2"
            className="hoverImage rounded-full"
            width={"400px"}
          />
        </div>
        <div
          className="col-span-4 hoverBG relative rounded-full flex items-center justify-center"
          style={{ backgroundImage: `url(${Matt_Gross})`, height: "420px" }}
        >
          <h1 className="myText text-center italic font-bold text-6xl text-white absolute left-0 top-36 bottom-0 right-0">
            TIER 3
          </h1>
          <img
            src={t3}
            alt="t3"
            className="hoverImage rounded-full"
            width={"400px"}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pb-8 pt-14 bg-black">
        <p className="text-xl text-fuchsia_600">Lazy Llamas 2022</p>
      </div>
    </div>
  );
};
