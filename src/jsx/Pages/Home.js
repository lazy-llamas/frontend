import React from "react";
import logo from "./../../assets/lazy-llama-logo.webp";
import mutant1 from "./../../assets/llama13.webp";
import mutant2 from "./../../assets/Llama_13_Mutant.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';
import "./Home.css";

const Home = () => {
    let history =useHistory()
  return (
    <div style={{ height: "100vh" }}>
      <div className="flex flex-col items-center gap-y-2 justify-center py-3">
        <img alt="mutant" src={logo} />
        <p className="text-fuchsia_800 text-3xl italic tracking-wider">
          Welcome to the Herd
        </p>
      </div>
      <div className="flex items-end mt-20 xl:mt-0">
        <div className="grid grid-cols-12 ">
          <div className="col-span-4">
            <img alt="mutant" src={mutant1} />
          </div>
          <div className="col-span-4 flex flex-col justify-center items-center gap-y-20">
            <p className="text-2xl xl:text-4xl text-white leading-relaxed text-center">
              A true community driven NFT ecosystem bringing you the sexiest 3D
              art and amazing utility, all on the Cardano blockchain!
            </p>
            <div className="rounded-2xl bg-fuchsia_600 p-2 xl:p-3">
              <button onClick={() => {history.push("/lazy-lounge")}} className="flex items-center gap-x-2 text-black hover:text-white rounded-lg hover:bg-white hover:bg-opacity-20 text-xl xl:text-3xl py-1 xl:py-2 px-3 xl:px-5" id="lounge_button">
                <span>ENTER LAZY LOUNGE</span>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  style={{ fontSize: "14px" }}
                />
              </button>
            </div>
          </div>
          <div className="col-span-4">
            <img alt="mutant" src={mutant2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
