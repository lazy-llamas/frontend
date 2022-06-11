import React from "react";
import background from "./../../../assets/laboratory-designINVERT.webp";
import {useMediaQuery} from './../SubComponents/UseMediaQuery'

export const MixingChamber = () => {
  const isSmallScreen = useMediaQuery('(max-width: 1140pxpx)');

  return (
    <div>
      <div
        className="mx-auto mt-20 pt-10 pb-4 px-10 xl:px-20"
        style={{ backgroundImage: `url(${background})`, maxWidth:isSmallScreen ? "900px" :"1100px" }}
      >
        <h1 className="text-gray_400 text-3xl text-center">
          The MIXING CHAMBER is currently
        </h1>
        <h1 className="mt-4 text-5xl text-gray_400 font-bold text-center">
          OPEN!
        </h1>
        <p className="mt-14 text-gray_400 text-2xl text-center">
          Combine all three serums to create a
        </p>
        <h1 className="text-gray_400 text-3xl italic text-center">
          MYSTERY SERUM X!
        </h1>
        <p className="mt-14 text-gray_400 text-2xl text-center">
          Send a <span>TIER 1</span>, and <span>TIER 3 SERUM X</span>, plus{" "}
          <span>10 ADA</span> in ONE TRANSACTION to the address below to receive
          your MYSTERY SERUM X!
        </p>
        <div className="bg-fuchsia_600 mx-20 rounded-lg px-6 py-8 my-14 flex justify-center items-center">
          <p className=" text-black text-2xl text-center">
            addr1vxrahtq0dx9mnk707uyhzt4748wj2n7zgszscjgu2x6ycfg70u7rx
          </p>
        </div>
        <p className="my-14 text-gray_400 text-3xl text-center">
          Multiple assets in one transaction are possible; just send in the
          required number of each SERUM X and the correct amount in multiples of
          10 ADA. (Max. 10) Incorrect calculations will result from either a
          partial or complete refund.
        </p>
        <p className="mb-14 text-fuchsia_600 text-3xl text-center">
          *WHEN MIXING DO NOT SEND ASSETS TO MUTATE! DO NOT SEND ANY OTHER
          ASSETS OTHER THAN THOSE REQUIRED FOR MIXING AS THE TRANSACTION WILL BE
          REFUNDED!
        </p>
        <p className="mb-14 text-gray_400 text-2xl text-center">
          YOROI DOES NOT SEND MULTIPLE ASSETS AT ONCE THEREFORE CAN NOT BE USED
          FOR EITHER THE MUTATION AND MIXING CHAMBERS AT THIS TIME.
        </p>

        <p className=" text-gray_400 text-3xl text-center">
          As always, double and triple check those transactions and that you are
          sending the correct items and amounts!
        </p>
      </div>
      <p className="mt-14 text-gray_400 text-2xl text-center">Policy ID: </p>
      <p className="text-gray_400 text-2xl text-center">
        4c68c9f9580b7c68b215073c68294e920856c15392df361b83628880
      </p>
      <p className="mt-14 pb-4 text-fuchsia_600 text-xl text-center">
        Lazy Llamas © 2022
      </p>
    </div>
  );
};
