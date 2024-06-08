import React from "react";
import { useLocation } from "react-router-dom";
import { TextSection } from "../../Components/Quiz/TextSection/TextSection";
import { ImageSection } from "../../Components/Quiz/ImageSection/ImageSection";

const DetailsPage = () => {
  const location = useLocation();
  const Datas = location.state.data;
  return (
    <>
      {/* <div className="bg-[rgb(98,104,39)] h-[100px] w-[85%] text-center m-[10px_auto]">
        <span className="text-[35px] font-thin leading-[2.5] text-white">
          نام استان :{" "}
        </span>
        <span className="text-[35px] font-thin leading-[2.5] text-white">
          {location.state.data.name}
        </span>
      </div>
      <div className={"border border-[#ccc] m-[10px_auto] p-0 w-[85%]"}>
        <img
          className={`object-cover max-h-[400px] w-full h-full`}
          src={require(`../../assets/image/Ostan/${img}`)}
          alt={location.state.data.name}
        />
      </div>

      <div className={"bg-[rgb(98,104,39)] w-[85%] text-center m-[10px_auto]"}>
        <span className="text-[35px] font-thin leading-[2.5] text-white">
          مرکز :{" "}
        </span>

        <span className="text-[35px] font-thin leading-[2.5] text-white">
          {location.state.data.dec}
        </span>
      </div>
      <div className={"bg-[rgb(98,104,39)] w-[85%] text-center m-[10px_auto]"}>
        <span className="text-[35px] font-thin leading-[2.5] text-white">
          توضیحات{" "}
        </span>
        <span className="text-[35px] font-thin leading-[2.5] text-white">
          {location.state.data.text}
        </span>
      </div> */}

      <TextSection nameCurrect={Datas.dec} nameOstan={Datas.name} />

      <ImageSection imageCurrect={Datas.img} nameOstan={Datas.name} />
    </>
  );
};

export default DetailsPage;
