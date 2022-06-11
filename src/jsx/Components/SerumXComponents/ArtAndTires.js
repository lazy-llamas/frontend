import React from "react";
import workVideo from "./../../../assets/work_video.mp4";

export const ArtAndTires = () => {
  return (
    <div>
      <button className="my-10 w-full py-3 text-4xl text-fuchsia_600 border-3 border-fuchsia_800 font-semibold tracking-wider hover:bg-gray_500">
        ARTWORK CREATION PROCESS
      </button>
     <div className="flex justify-center">
     <video controls width={"1000px"} src={workVideo} />
     </div>
      <button className="my-10 w-full py-3 text-4xl text-fuchsia_600 border-3 border-fuchsia_800 font-semibold tracking-wider hover:bg-gray_500">
        SERUM TIRES
      </button>
    </div>
  );
};
