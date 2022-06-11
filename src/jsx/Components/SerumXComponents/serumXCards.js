import React from "react";
import serumX3 from "./../../../assets/serumX3.webp";
import serumX2 from "./../../../assets/serumX2.webp";
import arrowDown from "./../../../assets/arrow-down.png";
export const SerumXCards = () => {
  return (
    <div>
      <button className="w-full py-3 text-4xl text-fuchsia_600 border-3 border-fuchsia_800 font-semibold tracking-wider hover:bg-gray_500">
        SERUM - X
      </button>
      <div className="grid grid-cols-12 mt-3">
        <div className="col-span-6 flex flex-col gap-y-5">
          <div className="px-8 pt-14 pb-4 bg-darkBlue_800 flex flex-col gap-y-14 w-96">
            <h1 className="text-2xl text-gray_200">What is it?</h1>
            <div className="flex flex-col gap-y-5">
              <p className="text-lg text-gray_400">
                Limited supply of{" "}
                <span className="text-fuchsia_800">4000 NFT Serums</span> that
                can interact with your Lazy Llamas in our "<span className="text-fuchsia_800">Lab</span>"
                (coming Q1 2022).
              </p>
              <p className="text-lg text-gray_400">
                <span className="text-fuchsia_800">
                  Three types of Serum-X
                </span>{" "}
                will be released (Tier 1, 2, and 3) each of which interact with
                your llamas{" "}
                <span className="text-fuchsia_800">
                  in a completely different way
                </span>
              </p>
            </div>
          </div>
          <div className="px-8 pt-14 pb-4 bg-darkBlue_800 flex flex-col gap-y-14 w-96">
            <h1 className="text-2xl text-gray_200">How do I get it?</h1>
            <div className="flex flex-col gap-y-5">
              <p className="text-lg text-gray_400">
                When mint begins, every time you
                <span className="text-fuchsia_800">
                  mint a llama you will have a chance at receiving a serum
                </span>{" "}
                (airdropped directly into your wallet)!
              </p>
              <p className="text-lg text-gray_400">
                <span className="text-fuchsia_800">5000</span> Total Llamas<br />
                <span className="text-fuchsia_800">4000 </span>
                Serums (Ranging from Tier 1 to 3)
              </p>
            </div>
          </div>
          <div className="px-8 pt-14 pb-4 bg-darkBlue_800 flex flex-col gap-y-14 w-96">
            <h1 className="text-2xl text-gray_200">Additional Information</h1>
            <div className="flex flex-col gap-y-5">
              <p className="text-lg text-gray_400">
                After our mint is complete we will release
                <span className="text-fuchsia_800">
                  "The Lab" where you can inject your llamas with any serum!
                </span>
              </p>
              <p className="text-lg text-gray_400">
                Upon interaction
                <span className="text-fuchsia_800">
                  SERUM AND ORIGINAL LLAMA are BURNED
                </span>forever
              </p>
              <p className="text-lg text-gray_400">
                Tier 1 Serums are the{" "}
                <span className="text-fuchsia_800">rarest</span>, than tier 2,
                and lastly tier 3
              </p>
              <p className="text-lg text-gray_400">
                ery small number of serums will be added for{" "}
                <span className="text-fuchsia_800">
                  holidays and special events
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-6 flex justify-start">
          <div className="flex flex-col items-center h-full justify-around">
            <img
              src={serumX2}
              alt="serumX3"
              className="w-96 border-10 border-white"
            />
            <div className="flex flex-col items-center w-full gap-y-10">
              <img src={arrowDown} alt="arrowDown" className="w-5 h-16" />
              <button className="w-3/4 py-1 text-4xl text-fuchsia_600 border-3 border-fuchsia_800 font-semibold tracking-wider hover:bg-gray_500">
                THE LAB
              </button>
              <img src={arrowDown} alt="arrowDown" className="w-5 h-16" />
            </div>
            <img
              src={serumX3}
              alt="serumX3"
              className="w-96 border-10 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
