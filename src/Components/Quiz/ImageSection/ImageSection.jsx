import React, { useState } from "react";
import { Button, Image } from "antd";
const ImageSection = ({ imageCurrect, nameOstan }) => {
  const number = Number(imageCurrect.split(".")[0]);
  const randomNumber = Math.floor(Math.random() * (31 - 1 + 1)) + 1;
  const handleClick = (divNumber) => {
    if (divNumber === Number(number)) {
      return alert("درستههه");
    } else {
      return alert("اشتباههه");
    }
  };

  const Datas = [
    {
      index: 0,
      img: number,
      idClicker: number,
    },

    {
      index: 1,
      img: randomNumber,
      idClicker: randomNumber,
    },
  ];
  return (
    <>
      {imageCurrect && nameOstan && (
        <div className="flex flex-col items-center justify-center mt-32 text-right ">
          <span>لطفا عکس مربوط به استان {nameOstan} را انتخاب کنید</span>

          <div className="md:flex items-center justify-center gap-6 mt-6 ">
            {Datas.map((items) => (
              <div
                className="flex flex-col gap-6 items-center  border-white 
            p-3 rounded-lg shadow-2xl border-4 shadow-white  w-[300px] "
                key={items.index}
              >
                <Image
                  className="w-full min-h-[200px] max-h-[200px]"
                  src={require(`../../../assets/image/Ostan/${items.img}.jpg`)}
                />

                <Button
                  className="bg-sky-500 text-white px-6 py-3"
                  onClick={() => handleClick(items.idClicker)}
                >
                  انتخاب
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export { ImageSection };
