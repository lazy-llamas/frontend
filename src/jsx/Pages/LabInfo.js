import React from "react";
import { Link } from "react-router-dom";
import { WhatIsLabInfo } from "../Components/LabInfoComponents/whatIsLabInfo";
import { SubHeader } from "../Components/SubComponents/subHeader";
import { MultipleTransactions } from "./../Components/LabInfoComponents/multipleTransactions";
export const LabInfo = () => {
  return (
    <div>
      <SubHeader />
      <div className="flex justify-end px-10 lg:px-20 xl:px-40 2xl:px-80 -mt-20">
        <div className="flex items-center gap-x-10">
          <Link
            to="lazy-lounge"
            className="hover:underline text-fuchsia_600 text-xl border-0"
          >
            LAZY LOUNGE
          </Link>
          <Link
            to="the-lab"
            className="hover:underline text-fuchsia_600 text-xl border-0"
          >
            LAB
          </Link>
        </div>
      </div>
      <div className="px-10 lg:px-20 xl:px-40 2xl:px-96 py-20 flex flex-col gap-y-40">
        <WhatIsLabInfo />
        <MultipleTransactions />
      </div>
      <div className="flex flex-col items-center gap-y-14 justify-center py-6">
        <p className="text-2xl text-fuchsia_600">Lazy Llamas 2022</p>
      </div>
    </div>
  );
};
