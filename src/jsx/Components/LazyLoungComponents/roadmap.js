import React from "react";
import EquippedAstronautOriginal from "./../../../assets/EquippedAstronautOriginal.webp";
import lazy_paper_2 from "./../../../assets/lazy_paper_2.pdf";
import roadmap from "./../../../assets/roadmap.jpg";
import roadmap2 from "./../../../assets/roadmap2.webp";
import roadmap1 from "./../../../assets/roadmap1.webp";
import roadmap3 from "./../../../assets/lazy_token_moving.gif";
import roadmap4 from "./../../../assets/lazy_island2_moving.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faBarsStaggered, faLayerGroup, faTree } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom'
import "./roadmap.css";

export const Roadmap = () => {
  let history = useHistory()
  return (
    <div id="roadmap">
      <div className="flex flex-col items-center gap-y-10 pb-10">
        <h1 className="text-6xl text-fuchsia_600 lazy_paper_title">Read Our Lazy Paper </h1>
        <a href={lazy_paper_2} target="_blank" className="py-3 w-60 text-center duration-300 border-1 rounded-lg hover:border-white bg-fuchsia_600 hover:bg-darkBlue_900  hover:text-white text-black">
          LAZY PAPER 2.0
        </a>
      </div>
      <h1 className="text-6xl text-fuchsia_600 text-center mt-14 mb-8">
        Roadmap
      </h1>
      <div className="grid grid-cols-12">
        <div className="col-span-5 flex flex-col gap-y-5 items-end">
          <div className="px-10 py-8 bg-darkBlue_800 flex flex-col gap-y-8 rounded-xl shadow-xl">
            <div className=" mb-5 flex justify-start">
              <FontAwesomeIcon
                icon={faCloud}
                style={{ fontSize: "40px" }}
                className="text-fuchsia_600"
              />
            </div>
            <h1 className="text-2xl text-fuchsia_800 font-semibold">
              Q4 2021: The Launch
            </h1>
            <div className="flex flex-col gap-y-5">
              <p className="text-lg text-gray_400">
                <span className="text-fuchsia_800">Launch</span> website,
                discord & twitter
              </p>
              <p className="text-lg text-gray_400">
                Initial
                <span className="text-fuchsia_800"> Marketing</span> Campaign
              </p>
              <p className="text-lg text-gray_400">
                <span className="text-fuchsia_800">
                  OG Mint + Serum Airdrop​
                </span>
              </p>
              <p className="text-lg text-gray_400">
                <span className="text-fuchsia_800">Twitter Space AMAs</span>
              </p>
              <p className="text-lg text-gray_400">
                <span className="text-fuchsia_800">
                  Mint: 5000 Llamas are born
                </span> + Serum Distribution
              </p>
            </div>
            <div className="border-b-4 border-gray_500 w-full" />
          </div>
          <img src={roadmap2} alt="roadmap2" />
          <div className="px-10 py-8 bg-darkBlue_800 flex flex-col gap-y-8 rounded-xl shadow-xl">
            <div className=" mb-5 flex justify-start">
              <FontAwesomeIcon
                icon={faBarsStaggered}
                style={{ fontSize: "40px" }}
                className="text-fuchsia_600"
              />
            </div>
            <h1 className="text-2xl text-fuchsia_800 font-semibold">
              Q2 2022: Dao + Vault
            </h1>
            <div className="flex flex-col gap-y-5">
              <p className="text-lg text-gray_400">
                <span className="text-fuchsia_800">
                  Lazy Llama Odyssey:
                </span>{" "}
                The Full Tale of Lazy Island
              </p>
              <p className="text-lg text-gray_400">
                <span className="text-fuchsia_800">Lazy Dao: </span>Governance
                system for Lazy Token
              </p>
              <p className="text-lg text-gray_400">
                <span className="text-fuchsia_800">Launch of Lazy Vault: </span>A
                place to exchange our token for ADA, NFTs, and more!
              </p>
            </div>
            <div className="border-b-4 border-gray_500 w-full" />
          </div>
          <img src={roadmap4} alt="roadmap4" />
        </div>
        <div className="col-span-2 relative flex justify-center">
          <div className="absolute" style={{ height: "10rem" }}>
            <img src={roadmap} alt="roadmap" width={"75rem"} />
          </div>
        </div>
        <div className="col-span-5 flex flex-col gap-y-5 items-start">
          <img src={roadmap1} alt="roadmap1" />
          <div className="px-10 p-8 bg-darkBlue_800 flex flex-col gap-y-8 rounded-xl shadow-xl right_column">
            <div className="flex justify-between items-center mb-5">
              <FontAwesomeIcon
                icon={faLayerGroup}
                style={{ fontSize: "40px" }}
                className="text-fuchsia_600"
              />
              <button onClick={() => {history.push("/serum-x")}} className="bg-fuchsia_600 px-8 py-1 rounded-lg" id="learn_more">Learn more</button>
            </div>
            <h1 className="text-2xl text-fuchsia_800 font-semibold">
              Q1 2022: Lazy Island + The Lab
            </h1>
            <div className="flex flex-col gap-y-5">
              <p className="text-lg text-gray_400">
                Launch of
                <span className="text-fuchsia_800"> Lazy Island V1</span>
              </p>
              <p className="text-lg text-gray_400">
                <span className="text-fuchsia_800">
                  Launch of The Lab:
                </span> Inject your llama with the tier-3 serum and mutate!
              </p>
              <p className="text-lg text-gray_400">
                Launch of
                <span className="text-fuchsia_800"> Lazy Token</span>
              </p>
              <p className="text-lg text-gray_400">
                Cross Utility + Partnerships
              </p>
              <p className="text-lg text-gray_400">
                <span className="text-fuchsia_800">
                  Llama Holder Leaderboard
                </span>
              </p>
            </div>
            <div className="border-b-4 border-gray_500 w-full" />
          </div>
          <img src={roadmap3} alt="roadmap3" className="-mt-10" />

          <div className="px-10 py-8 -mt-14 bg-darkBlue_800 flex flex-col gap-y-8 rounded-xl shadow-xl right_column">
            <div className=" mb-5 flex justify-start">
              <FontAwesomeIcon
                icon={faTree}
                style={{ fontSize: "40px" }}
                className="text-fuchsia_600"
              />
            </div>
            <h1 className="text-2xl text-fuchsia_800 font-semibold">
              Q3 2022: LAZY ISLAND TAKEOVER
            </h1>
            <div className="flex flex-col gap-y-5">
              <p className="text-lg text-gray_400">
                <span className="text-fuchsia_800">
                  Lazy Island Takeover:
                </span>{" "}
                Portion of proceeds reserved to buy plots of land and develop
                Lazy Island across different metaverses (Pavia, Sandbox,
                Decentraland, etc.)
              </p>
              <p className="text-lg text-gray_400">
                Work to develop our own metaverse ecosystem
                <span className="text-fuchsia_800">
                  {" "} on Cardano
                </span>{" "}
              </p>
              <p className="text-lg text-gray_400">
                Lazy Llama In Person Meetups in major cities and metaverses!
              </p>
              <p className="text-lg text-gray_400">
                <span className="text-fuchsia_800">
                  This is just the beginning...
                </span>{" "}
              </p>
            </div>
            <div className="border-b-4 border-gray_500 w-full" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-14 mt-20">
        <div className="flex items-center gap-x-3">
          <span className="text-fuchsia_600 text-6xl tracking-wider" id="coming_soon_title">
            Coming Soon:
          </span>
          <span className="text-fuchsia_300 text-6xl italic tracking-wider" id="lazy_llamas_VX_title">
            Lazy Llamas VX
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-5">
          <img alt="mutant" src={EquippedAstronautOriginal} />
          <p className="text-xl text-gray_400">
            Playable Avatars ready for the metaverse!
          </p>
        </div>
      </div>
    </div>
  );
};
