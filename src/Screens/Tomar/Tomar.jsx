import React, { useState, useEffect, useContext } from "react";
import TomarImage from "../../assets/image/tomar.png";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import UserContext from "../../core/Context/UserContext";

const Tomar = () => {
  const { user, setUser } = useContext(UserContext);
  const [nameUser, setNameUser] = useState("");
  const [buttonText, setButtonText] = useState("شروع بازی");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setNameUser(parsedUser.name);
      setButtonText("ادامه بازی");
    }
  }, []);

  const handleButtonClick = () => {
    if (nameUser) {
      const storedUser = localStorage.getItem("user");
      let userData;

      if (storedUser) {
        userData = JSON.parse(storedUser);
        userData.name = nameUser;
      } else {
        userData = { name: nameUser, level: 0, score: 0 };
      }

      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
    }
  };

  return (
    <section className="flex items-center justify-center h-screen">
      <div
        className="flex items-center justify-evenly flex-col h-[500px] w-[670px] bg-contain bg-no-repeat p-6 rounded-lg shadow-lg"
        style={{ backgroundImage: `url(${TomarImage})` }}
      >
        <div className="text-lg font-bold mb-2">
          سلام عزیزانم, خیلی خوش آمدین به بازی نقشه ایران
        </div>
        <div className="text-md mb-4">
          مراحل طی کنید و امتیاز جمع کنید تا رکورد بزنید
        </div>
        <div className="text-center mb-4">
          میتوانید نظرات و پیشنهادات خودتون برامون بفرستید
          <div className="mt-2 text-center">mojtabanouri999@gmail.com</div>
        </div>
        <div className="w-full text-center mb-4">
          لطفا نام خود را جهت شروع وارد کنید
        </div>
        <section
          className="flex flex-row items-end justify-center gap-6 w-full"
          style={{ direction: "rtl" }}
        >
          <div>
            <label htmlFor="nameInput" className="block mb-2">
              نام شما:
            </label>
            <Input
              id="nameInput"
              placeholder="نام خود را وارد کنید"
              className="bg-blue-200 w-full"
              value={nameUser}
              onChange={(e) => setNameUser(e.target.value)}
            />
          </div>
          <Link to="/Home">
            <Button
              className="bg-sky-500 text-white px-16 py-2"
              disabled={!Boolean(nameUser)}
              onClick={handleButtonClick}
            >
              {buttonText}
            </Button>
          </Link>
        </section>
      </div>
    </section>
  );
};

export default Tomar;
