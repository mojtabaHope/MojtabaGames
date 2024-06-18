import React, { useState } from "react";
import { provinces } from "../core/data/provinces.data";
import IranMap from "./IranMap/IranMap";

const Home = () => {
  const [currentProvince, setCurrentProvince] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-blue-100 p-5 font-comic">
        <div className="gap-4 flex items-start justify-between w-full max-w-6xl">
          <div className="flex items-center justify-center h-[700px] w-[800px] border-4 border-pink-300 bg-yellow-100 rounded-lg">
            <IranMap
              provinces={provinces}
              currentProvince={currentProvince}
              setCurrentProvince={setCurrentProvince}
            />
          </div>
          <div className="flex flex-col items-center justify-center h-[75px] w-[390px] text-3xl border-4 border-orange-400 bg-yellow-200 rounded-lg p-5">
            <h1 className="text-4xl font-bold text-orange-600">
              {provinces[currentProvince].name}
            </h1>
            {/* <div>{provinces[currentProvince].dec}</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
