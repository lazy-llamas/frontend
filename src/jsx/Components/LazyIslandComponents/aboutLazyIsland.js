import React from "react";
import lazy_island from "./../../../assets/lazy_island2.webp";
import lazy_island2_moving from "./../../../assets/lazy_island2_moving.gif";

export const AboutLazyIsland = () => {
  return (
    <div className="">
      <div>
        <div className="flex flex-col gap-y-5 items-center justi-fuy-center">
          <h1 className="text-6xl text-fuchsia_600">Lazy Island</h1>
          <p className="text-2xl text-fuchsia_600">
            10,000 plots of land on the ADA Realm Metaverse
          </p>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-7 flex items-start">
            <img src={lazy_island} alt="lazy-island" width={"1200px"} />
          </div>
          <div className="col-span-5 flex items-center">
            <div className="w-96 flex flex-col gap-y-8">
              <p
                style={{ fontSize: "22px" }}
                className="tracking-wider text-gray_100"
              >
                <span className="text-fuchsia_600">Customize</span> your plots
                of land with your NFTs
              </p>
              <p
                style={{ fontSize: "22px" }}
                className="tracking-wider text-gray_100"
              >
                Gain access to{" "}
                <span className="text-fuchsia_600">
                  priority whitelist
                </span>{" "}
                spots for future drops
              </p>
              <p
                style={{ fontSize: "22px" }}
                className="tracking-wider text-gray_100"
              >
                Receive{" "}
                <span className="text-fuchsia_600">random airdrops</span> from
                other metaverses
              </p>
              <p
                style={{ fontSize: "22px" }}
                className="tracking-wider text-gray_100"
              >
                Soon guide your own{" "}
                <span className="text-fuchsia_600">3D llama</span> avatar
                through Lazy Island
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-14">
          <img src={lazy_island2_moving} alt="lazy_island2_moving" width={"650px"} />
        </div>
      </div>
    </div>
  );
};
