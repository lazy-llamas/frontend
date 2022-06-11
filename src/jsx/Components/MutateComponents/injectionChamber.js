import React from "react";
import background from "./../../../assets/laboratory-designINVERT.webp";

export const InjectionChamber = () => {
  const transactionsData = [
    "1 Lazy Llama NFT + 1  T3-Serum + 40 ADA = 1 Biomutant LLama",
    "2 Lazy Llama NFT + 2  T3-Serum + 76 ADA = 2  Biomutant LLamas",
    "3 Lazy Llama NFT + 3  T3-Serum + 108 ADA = 3  Biomutant LLamas",
    "4 Lazy Llama NFT + 4  T3-Serum + 136 ADA = 4  Biomutant LLamas",
    "5 Lazy Llama NFT + 5  T3-Serum + 160 ADA = 5  Biomutant LLamas",
    "6 Lazy Llama NFT + 6  T3-Serum + 180 ADA = 6  Biomutant LLamas",
    "7 Lazy Llama NFT + 7  T3-Serum + 196 ADA = 7  Biomutant LLamas",
    "8 Lazy Llama NFT + 8  T3-Serum + 208 ADA = 8  Biomutant LLamas",
    "9 Lazy Llama NFT + 9  T3-Serum + 216  ADA = 9  Biomutant LLamas",
    "10 Lazy Llama NFT + 10  T3-Serum + 220 ADA = 10  Biomutant LLamas"
  ];
  return (
    <div
      className="mx-auto mt-20 pt-10 pb-4 px-10 xl:px-20"
      style={{ backgroundImage: `url(${background})`, maxWidth: "1100px" }}
    >
      <h1 className="text-gray_400 text-3xl text-center">
        The INJECTION CHAMBER is currently
      </h1>
      <h1 className="mt-4 text-5xl text-gray_400 font-bold text-center">
        OPEN!
      </h1>
      <p className="mt-14 text-gray_400 text-2xl text-center">
        Mutate your LAZY LLAMA by injecting it with a TIER 3 SERUM X to create a
      </p>
      <h1 className="text-gray_400 text-3xl italic text-center">BIOMUTANT!</h1>
      <p className="mt-14 text-gray_400 text-2xl text-center">
        Send an <span>OG LAZY LLAMA</span>, a <span>TIER 3 SERUM X</span>, and{" "}
        <span>40 ADA</span> to the address below. You will receive a MUTANT
        LLAMA but your OG LAZY LLAMA will be BURNED FOREVER!
      </p>
      <div className="bg-fuchsia_600 mx-20 rounded-lg px-6 py-8 my-14 flex justify-center items-center">
        <p className=" text-black text-2xl text-center">
          addr1vxrahtq0dx9mnk707uyhzt4748wj2n7zgszscjgu2x6ycfg70u7rx
        </p>
      </div>
      <p className="mb-14 text-gray_200 text-2xl text-center">
        Multiple Transactions: Use the chart below to calculate the correct
        amount, and number of assets to send up to 10 mutations:
      </p>
      <div className="flex flex-col gap-y-4">
        {transactionsData.map((data, ind) =>
          <h1 className="text-2xl text-gray_200 text-center" key={ind + 1}>
            {data}
          </h1>
        )}
      </div>
      <p className="my-14 text-gray_400 text-3xl text-center">unless… 👀</p>
      <p className="my-14 text-gray_400 text-2xl text-center">
        IF you also send in a CLONE SERUM X AT THE SAME TIME, your Llama will be
        spared!
      </p>
      <p className="mb-14 text-gray_400 text-2xl text-center">
        In order for an OG LAZY LLAMA to not be burned when mutating, you must
        send an OG LAZY LLAMA, TIER 3 SERUM X, 40 ADA and a CLONE SERUM X
        together in one transaction.
      </p>
      <p className="mb-14 text-fuchsia_600 text-3xl text-center">
        *IMPORTANT: When using a CLONE SERUM X, only ONE mutation is possible,
        do not send assets to mutate other Llamas.
      </p>
      <p className="mb-14 text-fuchsia_600 text-3xl text-center">
        *ALSO NOTE THE MUTATION CHAMBER IS OPEN FOR TIER 3 MUTATIONS ONLY! DO
        NOT SEND ANY SERUMS BESIDES TIER 3 AS YOUR TRANSACTION WILL BE REFUNDED
        AND YOU WILL NOT GET YOUR MUTANT!
      </p>
      <p className="mb-14 text-fuchsia_600 text-3xl text-center">
        *YOROI DOES NOT SEND MULTIPLE ASSETS AT ONCE THEREFORE CAN NOT BE USED
        FOR EITHER THE MUTATION AND MIXING CHAMBERS AT THIS TIME.
      </p>
      <p className="mb-14 text-gray_400 text-2xl text-center">
        Double and triple check those transactions, okay? Sending the incorrect
        assets and/or the incorrect amount of ada will result in a refund and no
        Mutant Llama… bummer :(
      </p>
      <p className="mb-14 text-fuchsia_600 text-3xl text-center">
        *NOTE: 1-OF-1 LAZY LLAMAS WILL BE CUSTOM MUTATED BY OUR ART TEAM SO YOUR
        PATIENCE IS APPRECIATED!{" "}
      </p>
      <p className=" text-gray_400 text-3xl text-center">
        Furthermore, THREE 1-of-1 have been created, and will be given out as
        rewards:
      </p>
      <p className=" text-gray_400 text-3xl text-center">
        TWO 1-of-1 Lazy LLama NFTs will be airdropped to random lab users!
      </p>
      <p className=" text-gray_400 text-3xl text-center">
        (using mutating chamber and/or mixing chamber makes you eligible for
        this airdrop)
      </p>
      <p className=" text-gray_400 text-3xl text-center">
        ONE 1-of-1 llama NFT will be given out as a reward for the scavenger
        hunt (keep an eye on the metadata of your mutant llamas)!
      </p>
      <p className="mt-14 text-gray_400 text-2xl text-center">Policy ID: </p>
      <p className="text-gray_400 text-2xl text-center">
        4c68c9f9580b7c68b215073c68294e920856c15392df361b83628880
      </p>
      <p className="mt-14 text-fuchsia_600 text-xl text-center">Lazy Llamas © 2022</p>
    </div>
  );
};
