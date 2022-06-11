import React from "react";
import { Link } from "react-router-dom";
import { SubHeader } from "../Components/SubComponents/subHeader";
import background from "./../../assets/laboratory-designINVERT.webp";
import t3 from "./../../assets/t3.webp";
import mystery_serum_final3 from "./../../assets/mystery_serum_final3.webp";
import { useHistory } from "react-router-dom";

export const LabLobby = () => {
  let history = useHistory();
  return (
    <div>
      <SubHeader />
      <div className="px-10 lg:px-20 xl:px-40 2xl:px-80 flex justify-center">
        <div
          className="py-20"
          style={{ backgroundImage: `url(${background})`, width: "1100px" }}
        >
          <div className="grid grid-cols-12">
            <div className="col-span-6 gap-y-5 flex flex-col items-center">
              <img src={t3} alt="t3" width={"370px"} />
              <button onClick={() => {history.push("/mutation-chamber")}} className="w-44 border-4 border-sky_500 bg-fuchsia_600 rounded-full py-1 text-lg font-semibold text-green_500 hover:text-white hover:bg-sky_500 duration-500">
                MUTATE
              </button>
            </div>
            <div className="col-span-6 gap-y-5 flex flex-col items-center">
              <img src={mystery_serum_final3} alt="t3" width={"370px"} />
              <button onClick={() => {history.push("/mixing-chamber")}} className="w-44 border-4 border-sky_500 bg-fuchsia_600 rounded-full py-1 text-lg font-semibold text-green_500 hover:text-white hover:bg-sky_500 duration-500">
                MIX
              </button>
            </div>
          </div>
          <div className="px-10 mt-14">
            <p className="text-gray_200 text-2xl ">
              *WARNING: You must choose to either MUTATE or MIX for each
              transaction. You may not do both in one transaction. Doing so will
              provide unintended results or a failed transaction.{" "}
            </p>
          </div>
          <div className="flex justify-center mt-14">
            <Link
              to="the-lab"
              className="text-fuchsia_600 text-sm border-0 font-semibold hover:underline"
            >
              HAVING SECOND THOUGHTS $
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-8 pb-4">
        <p className="text-xl text-fuchsia_600">Lazy Llamas 2022</p>
      </div>
    </div>
  );
};
