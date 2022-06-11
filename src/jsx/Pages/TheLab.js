import React from "react";
import { Link } from "react-router-dom";
import { SubHeader } from "../Components/SubComponents/subHeader";
import LabLandingPageV2 from "./../../assets/LabLandingPageV2.webp";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


export const TheLab = () => {
  let history = useHistory();
  return (
    <div>
      <SubHeader />
      <div className="flex justify-end px-10 lg:px-20 xl:px-40 2xl:px-80 -mt-20">
        <div className="flex items-center gap-x-10">
          <Link to="lazy-lounge"  className="hover:underline text-fuchsia_600 text-xl border-0">
            LAZY LOUNGE
          </Link>
          <Link to="lab-how-to" className="hover:underline text-fuchsia_600 text-xl border-0">INFO</Link>
        </div>
      </div>
      <div className="flex justify-center mt-14">
        <img src={LabLandingPageV2} alt="LabLandingPageV2" width={"1100px"} />
      </div>
      <div className="flex justify-center mt-14">
        <button onClick={() => {history.push("/lab-lobby")}} className="flex items-center gap-x-2 bg-fuchsia_600 text-black hover:text-white rounded-xl hover:bg-white hover:bg-opacity-20 text-2xl py-2 w-80 justify-center">
                <span>ENTER LAB LOBBY</span>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  style={{ fontSize: "14px" }}
                />
        </button>
      </div>
      <div className="flex flex-col items-center gap-y-14 justify-center py-10">
        <p className="text-2xl text-fuchsia_600">Lazy Llamas 2022</p>
      </div>
    </div>
  );
};
