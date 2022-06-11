import React from "react";
import { Navbar } from "../Components/SubComponents/Navbar";

export const Media = () => {
  const videosData = [
    "https://www.youtube.com/embed/pCrPmHOFV0A",
    "https://www.youtube.com/embed/0jY2vE5hP2g",
    "https://www.youtube.com/embed/t_varRMUob8",
    "https://www.youtube.com/embed/T-nrDg-RpRs",
    "https://www.youtube.com/embed/vKsOU_KYiWs",
    "https://www.youtube.com/embed/LQAjQK6OANo",
    "https://www.youtube.com/embed/_yrBU2eQKSE",
    "https://www.youtube.com/embed/e25duPg3Avk",
    "https://www.youtube.com/embed/Xz_8EsEkfCM",
    "https://www.youtube.com/embed/yl9RrUn0EG4",
    "https://www.youtube.com/embed/yl9RrUn0EG4",
    "https://www.youtube.com/embed/R4Twdo-4jOs",
    "https://www.youtube.com/embed/3XhPIKQRPtE",
    "https://www.youtube.com/embed/RmO0pMbmw9c",
    "https://www.youtube.com/embed/MkDu-lOAtmM",
    "https://www.youtube.com/embed/tBw-DkpGL3A",
    "https://www.youtube.com/embed/kkw1r1IKEZA",
    "https://www.youtube.com/embed/jog6hXvr0as",
    "https://www.youtube.com/embed/IFhv8j8Slek",
    "https://www.youtube.com/embed/SCRF6Y8FYKY",
    "https://www.youtube.com/embed/OQtHicwhFDs",
    "https://www.youtube.com/embed/aI5eIt7YeRc"
  ];
  return (
    <div>
      <Navbar />
      <div className="mx-80 pt-24">
        <div className="flex flex-col items-center gap-y-4">
          <h1 className="text-fuchsia_600" style={{ fontSize: "70px" }}>
            Lazy Llamas Media
          </h1>
          <p className="text-white text-3xl">
            Enjoy these videos created by the Lazy Llamas Community
          </p>
        </div>
        <div className="flex flex-col gap-y-28 items-center mt-20">
          {videosData.map((data, ind) =>
            <iframe
              width="700"
              height="350"
              src={data}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          )}
        </div>
      </div>
      <div className="flex justify-center py-10">
        <p className="text-3xl text-fuchsia_600">Lazy Llamas 2022</p>
      </div>
    </div>
  );
};
