import React from 'react'
import { Link } from "react-router-dom";
import { MixingChamber } from "../Components/MixingComponents/mixingChamber";
import { SubHeader } from "../Components/SubComponents/subHeader";
export const Mixing = () => {
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
            <Link
              to="lab-how-to"
              className="hover:underline text-fuchsia_600 text-xl border-0"
            >
              INFO
            </Link>
          </div>
        </div>
        <div>
          <MixingChamber />
        </div>
      </div>
    )
}