import React from "react";
import logo from "./../../../assets/lazy-llama-logo.webp";
import mutant1 from "./../../../assets/mutant_halo_eye_detail.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import lounge1 from "./../../../assets/lazy_token_tails.webp";
import lounge2 from "./../../../assets/lazy_island.webp";
import lounge3 from "./../../../assets/Tier1_Serum_x_TRANS.webp";
import {useMediaQuery} from './../SubComponents/UseMediaQuery';
import { useHistory } from 'react-router-dom';

import "./lazy-lounge-comp.css";

const loungeData = [
  { name: "Lazy Token", img: lounge1, link: "/lazy-token" },
  { name: "Lazy Island", img: lounge2, link: "/lazy-island" },
  { name: "Serum X", img: lounge3, link: "/serum-x" }
];
export const LazyLoungeComp = () => {
  let history = useHistory()
  const isSmallScreen = useMediaQuery('(max-width: 1140px)');
  return (
    <div id="lazy-lounge">
      <div className="py-10 flex justify-start"  style={{width: isSmallScreen ? '700px' :"1050px"}}>
        <img alt="mutant" id="title" src={logo} width={isSmallScreen ? '400px' :"1100px"} />
      </div>
      <div className="grid grid-cols-12 py-10" id="buttons">
        <div className="col-span-5 flex flex-col items-start justify-around">
          <div className="rounded-2xl bg-fuchsia_600 p-3 nav_buttons">
            <a className="flex items-center gap-x-2 text-black hover:text-white rounded-lg hover:bg-white hover:bg-opacity-20 text-2xl py-2 w-60 justify-center" href="https://www.jpg.store/collection/lazyllamas" target="_blank">
              <span>ADOPT A LLAMA</span>
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ fontSize: "14px" }}
              />
            </a>
          </div>
          <div className="rounded-2xl bg-fuchsia_600 p-3 nav_buttons">
            <a className="flex items-center gap-x-2 text-black hover:text-white rounded-lg hover:bg-white hover:bg-opacity-20 text-2xl py-2 w-60 justify-center" href="https://www.jpg.store/collection/lazyllamasserumx" target="_blank">
              <span>BUY A SERUM</span>
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ fontSize: "14px" }}
              />
            </a>
          </div>
          <div className="rounded-2xl bg-fuchsia_600 p-3 nav_buttons">
            <button onClick={() => {history.push("/the-lab")}} className="flex items-center gap-x-2 text-black hover:text-white rounded-lg hover:bg-white hover:bg-opacity-20 text-2xl py-2 w-60 justify-center ">
              <span>ENTER THE LAB</span>
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ fontSize: "14px" }}
              />
            </button>
          </div>
        </div>
        <div className="col-span-7" id="mutant_llama">
          <img alt="mutant" src={mutant1} />
        </div>
      </div>
      <div className="flex flex-col items-start gap-y-10 py-20">
        <h1 className="text-4xl text-fuchsia_600">The Lazy Llamas Odyssey</h1>
        <p className="text-xl text-gray_400">
          There exists an island (coordinates currently unknown), where no human
          has ever visited. A long time ago, an unknown metal impacted the
          island, changing llama history forever. Shortly, after this mysterious
          cosmic event, llamas that were in close proximity to the explosion
          seemed have been exposed to radiation that not only enhanced their
          cognitive and physical ability but also turned them into belligerent
          gamblers! These llamas began to form a civilization, becoming more
          intelligent and lazier than ever before. Archaeological records
          suggest that they have been wearing jewelry and clothing since the
          origin of the pyramids of Egypt - and possibly beyond.
        </p>
        <p className="text-xl text-gray_400">
          More recently, a second impact was detected - llama scientists rushed
          to gather radioactive metal from the debris assuming this second
          impact would carry the same radioactive element as the metal that
          initially impacted the island thousands of years ago. They began to
          create and distribute serums from this strange metallic substance with
          hopes of further enhancing their cognitive and physical abilities. But
          they couldn't have been more wrong....
        </p>
      </div>
      <div className="grid grid-cols-12 pb-20">
        {loungeData.map((data, ind) =>
          <div key={ind + 2} className="col-span-4 flex flex-col items-center gap-y-16">
            <div className="w-20 flex justify-center">
              <h1 className="text-6xl text-fuchsia_600 text-center leading-normal section_title">
                {data.name}
              </h1>
            </div>
            <div>
              <img alt="mutant" src={data.img} />
            </div>
            <button onClick={() => {history.push(data.link)}} className="flex items-center gap-x-4 py-2 px-10 duration-300 border-1 border-fuchsia_600 hover:bg-fuchsia_600 text-fuchsia_600 hover:text-black explore_buttons">
                <span>Explore</span>
                <FontAwesomeIcon
                icon={faAngleRight}
                style={{ fontSize: "14px" }}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
