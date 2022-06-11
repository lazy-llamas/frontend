import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import team_images from "./../../../assets/team_images.webp";
import workVideo from "./../../../assets/work_video.mp4";
import work_img1 from "./../../../assets/work_img1.webp";
import work_img2 from "./../../../assets/work_img2.webp";
import { useHistory } from 'react-router-dom';
import {useMediaQuery} from './../SubComponents/UseMediaQuery';
import "./team.css";

export const Team = () => {
  let history =useHistory()
  const isSmallScreen = useMediaQuery('(max-width: 1140px)');
  const dataArray = [
    {name: "Vinny G.", profile: "https://grovervinayak.wixsite.com/website-1", twitter: "https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fwww.lazyllamas.io%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Ecrypto_grover&region=follow_link&screen_name=crypto_grover"}, 
    {name: "Sahaj P.", profile: "https://www.linkedin.com/in/sahaj-patel18/", twitter: "https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fwww.lazyllamas.io%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Esahajp1029&region=follow_link&screen_name=sahajp1029"}, 
    {name: "Marc G.", profile: "", twitter: "https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fwww.lazyllamas.io%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Ebrknlnx&region=follow_link&screen_name=brknlnx"}];
  const idsData = [
    {
      label: "Lazy Llamas Policy ID:",
      id: "9e7b9873fc65bc20ada9739b85d15057603577c1777c7325bba9ae9c"
    },
    {
      label: "Mutant Llamas Policy ID:",
      id: "4c68c9f9580b7c68b215073c68294e920856c15392df361b83628880"
    },
    {
      label: "Serum X Policy ID:",
      id: "1bf64bc834b8fb82a9896933182a444d8e3f5e9339881ac3a255c992"
    }
  ];
  return (
    <div id="team" className="flex flex-col items-center gap-y-10 pt-20">
      <h1 className="text-fuchsia_600" style={{ fontSize: "5rem" }}>
        Team Llama
      </h1>
      <p className="text-4xl text-fuchsia_600">Doxxed Co-Founders</p>
      <div className="flex items-center justify-between w-full">
        {dataArray.map((data, index) =>
          <div key={index + 1} className="flex flex-col gap-y-8 items-center">
            <h1 className="text-5xl text-fuchsia_600 founder_names">
              {data.name}
            </h1>
            <a href={data.profile} target="_blank" className="text-fuchsia_600 px-4 py-1 flex items-center gap-x-3 border-1 border-fuchsia_600">
              <span>Profile</span>
              <FontAwesomeIcon icon={faUser} style={{ fontSize: "14px" }} />
            </a>
            <a href={data.twitter} target="_blank" className="rounded-full text-white px-3 flex items-center gap-x-2 bg-sky_500">
              <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "14px" }} />
              <span className="text-sm">Follow</span>
            </a>
          </div>
        )}
      </div>
      <div className="flex justify-center" style={{ width: "1100px" }}>
        <img alt="mutant" src={team_images} width={"1100px"} id="team_images"/>
      </div>
      <div className="flex flex-col items-start gap-y-5 w-full">
        <h1 className="text-4xl tracking-wider text-fuchsia_600">
          About the team{" "}
        </h1>
        <p className="text-gray_400 text-xl ml-5">
          Our team consists of some of the most well known and respected members
          in the ADA Space!
        </p>
        <p className="text-gray_400 text-xl">
          Two members of our dev team (Hendo & plazmicAlex) have worked on
          multiple successful nft projects. For instance, PlazmicAlex was also
          affiliated with <span className="text-blue_700">politikoz</span>. Our
          artist, Dali Llama has <spam>5+ years of experience</spam> with
          digital art and is a master at what he does, the artwork sneak peaks
          on our discord channel are a direct testament of his experience. Papa
          & Arabian Llama are two graduate students from Columbia university
          with backgrounds in finance, physics, and statistics. They've been in
          the blockchain space for well over a year now & have worked and
          invested in many early nft/crypto projects. Next, OpenSet is a{" "}
          <span className="text-blue_700">twitch streamer</span> and competitive
          math team coach. You can catch him showing off our art on his weekly
          streams. Furthermore, Our backend dev, rlylikesomelettes, has worked
          to develop some top projects like{" "}
          <span className="text-blue_700">Entheos & Rhino Gen</span>. Finally,
          Brknlnx (BRK) is an award-winning artist, a web3 expert, and an OG
          CNFT.io mod.{" "}
          <span className="text-blue_700">
            In summary, we’re an experienced team aiming to bring high quality
            3D art, crazy mutations, and a P2E ecosystem built on Cardano! Be
            sure to join our Discord server to learn more!
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center gap-y-16 mt-10">
        <h1 className="text-4xl tracking-wider text-fuchsia_600" id="perfection_title">
          The Lazy Llama Art Team Aims For Perfection In Every Step
        </h1>
        <div
          className="flex justify-center flex-col items-center gap-y-2"
          style={{ width: "1000px" }}
        >
          <h1 className="text-2xl text-fuchsia_600">
            Dali Llama... the Master at Work
          </h1>
          <video controls width={isSmallScreen ? '400px' :"1000px"} src={workVideo} id="word_video"/>
        </div>
        <div
          className="flex justify-center flex-col items-center gap-y-2"
          style={{width: isSmallScreen ? '400px' :"1000px"}}
        >
          <h1 className="text-2xl text-fuchsia_600">Tier 3 Mutant Detail...</h1>
          <img alt="mutant" src={work_img1} width={"1000px"} />
        </div>
        <div
          className="flex justify-center flex-col items-center gap-y-2"
          style={{width: isSmallScreen ? '400px' :"1000px"}}
        >
          <h1 className="text-2xl text-fuchsia_600">And Another One ...</h1>
          <img alt="mutant" src={work_img2} width={"1000px"} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-12 w-full">
        {idsData.map((data, ind) =>
          <div key={ind + 1} className="flex items-center gap-x-4" id="footer_container">
            <span className="text-fuchsia_600" style={{fontSize: isSmallScreen ? '16px' :"32px"}}>
              {data.label}
            </span>
            <span className="text-white text-xl" style={{fontSize: isSmallScreen ? '9.5px' :"32px"}}>
              {data.id}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
