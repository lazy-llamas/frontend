import React from "react";
import tokenTails from "./../../../assets/lazy_token_tails.webp";
import tokenHeads from "./../../../assets/lazy_token_heads.webp";
import tokenmoving from "./../../../assets/lazy_token_moving.gif";

export const AboutLazyToken = () => {
  return (
    <div>
      <div className="grid grid-cols-12" style={{height: "85vh"}}>
        <div className="col-span-3 h-full flex justify-start items-start">
          <img alt="mutant" src={tokenTails} width={"350px"} />
        </div>
        <div className="col-span-6 h-full flex justify-end gap-y-10 flex-col items-center">
          <h1 className="text-fuchsia_600" style={{ fontSize: "75px"}}>Lazy Token</h1>
          <p className="text-xl text-gray_400 leading-relaxed">
            <span className="text-fuchsia_600">Lazy Token</span> is the primary utility token of Lazy Llamas. Lazy Token
            allows our community to <span className="text-fuchsia_600">customize</span> their Llamas, <span className="text-fuchsia_600">earn unique rewards</span>,
            and <spn>voice opinions</spn>! We will keep the community updated on the
            development and release of Lazy Token!
          </p>
          <div className="flex justify-center w-full">
          <img alt="mutant" src={tokenmoving} width={"300px"} />
          </div>
        </div>
        <div className="col-span-3 h-full flex justify-end items-start">
          <img alt="mutant" src={tokenHeads} width={"350px"} />
        </div>
      </div>
    </div>
  );
};
