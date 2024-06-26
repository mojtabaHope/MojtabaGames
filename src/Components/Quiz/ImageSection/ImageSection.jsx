import React from "react";
import { Button, Image, notification } from "antd";
import { FrownOutlined, SmileOutlined } from "@ant-design/icons";

const ImageSection = ({ imageCurrect, nameOstan, onCorrectAnswer }) => {
  const number = Number(imageCurrect.split(".")[0]);

  // Generate a random number that is not equal to the correct image number
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 31) + 1;
  } while (randomNumber === number);

  const openNotification = (isCorrect) => {
    notification.open({
      message: isCorrect ? "آفرییییننن!" : " اشباه!عزیزم",
      description: isCorrect
        ? "حالا برو استان بعدی"
        : "دوباره امتخان کن عزیزم!",
      icon: isCorrect ? (
        <SmileOutlined style={{ color: "#108ee9" }} />
      ) : (
        <FrownOutlined style={{ color: "#ff4d4f" }} />
      ),
    });
  };

  const handleClick = (divNumber) => {
    const isCorrect = divNumber === number;
    openNotification(isCorrect);
    onCorrectAnswer(isCorrect);
  };

  const Datas = [
    {
      img: number,
      idClicker: number,
    },
    {
      img: randomNumber,
      idClicker: randomNumber,
    },
  ];

  // Shuffle the images for random display
  const shuffledDatas = Datas.sort(() => Math.random() - 0.5);

  return (
    <>
      {imageCurrect && nameOstan && (
        <div className="flex flex-col items-center justify-center mt-32 text-right">
          <span>لطفا عکس مربوط به استان {nameOstan} را انتخاب کنید</span>
          <div className="md:flex items-center justify-center gap-6 mt-6">
            {shuffledDatas.map((items, index) => (
              <div
                className="flex flex-col gap-6 items-center border-white p-3 rounded-lg shadow-2xl border-4 shadow-white w-[300px]"
                key={index}
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
