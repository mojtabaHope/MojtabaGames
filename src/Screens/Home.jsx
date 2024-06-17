import React, { useState } from "react";
import { provinces } from "../core/data/provinces.data";
import IranMap from "./IranMap/IranMap";

const Home = () => {
  const [currentProvince, setCurrentProvince] = useState(0);

  return (
    <>
      <div className="flex items-start justify-start">
        <div className="h-[700px] w-[800px] mx-auto border bg-slate-500 text-stone-500 ">
          <IranMap
            provinces={provinces}
            currentProvince={currentProvince}
            setCurrentProvince={setCurrentProvince}
          />
        </div>
        <div className="h-[75px] w-[390px] text-3xl">
          <h1>{provinces[currentProvince].name}</h1>
          {/* <div>{provinces[currentProvince].dec}</div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
