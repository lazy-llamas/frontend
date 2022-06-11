import React from "react";
import token1 from "./../../../assets/noirllama.webp";
import token2 from "./../../../assets/llamawebsite18.webp";
import token3 from "./../../../assets/LLAMA8.webp";
import token4 from "./../../../assets/key_llama_2.webp";

export const LazyTokenPoints = () => {
  const pointsData = [
    {
      label: "Customize",
      desc:
        "Purchase a unique name for your llama and customize your clothing with Lazy Labels.",
      img: token1
    },
    {
      label: "Interact",
      desc:
        "Use Lazy Token to interact with other Llama holders on Lazy Island!",
      img: token2
    },
    {
      label: "Earn Rewards",
      desc:
        "Randomly receive token airdrops based on the number of llamas you hold and the rarity of your llamas!",
      img: token3
    },
    {
      label: "Vote",
      desc:
        "Lazy Token will soon become the primary governance token for Lazy Dao. This will allow our community to have a voice and vote on various topics.",
      img: token4
    }
  ];
  return (
    <div className="mt-20">
      <div className="flex flex-col gap-y-14">
        {pointsData.map((data, ind) =>
          <div className="grid grid-cols-12 items-start">
            <div className="col-span-6 flex justify-center">
              <img alt="mutant" src={data.img} width={"250px"} />
            </div>
            <div className="col-span-5 flex flex-col gap-y-14">
              <h1 className="text-5xl text-fuchsia_600">
                {data.label}
              </h1>
              <p className="text-xl text-gray_100">
                {data.desc}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
