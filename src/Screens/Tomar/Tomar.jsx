import React, { useState } from "react";
import TomarImage from "../../assets/image/tomar.png";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import UserContext from "../../core/Context/UserContext";

const Tomar = () => {
  const [nameUser, setNameUser] = useState(null);
  const { user, setUser } = React.useContext(UserContext);
  return (
    <section className="flex items-center justify-center  ">
      <div
        className="flex items-center justify-evenly flex-col  h-[500px] w-[670px] bg-contain bg-no-repeat "
        style={{ backgroundImage: ` url(${TomarImage})` }}
      >
        <div>سلام عزیزانم , خیلی خوش آمدین به بازی نقشه ایران</div>

        <div>مراحل طی کنید و امتیاز جمع کنید تا رکورد بزنید</div>

        <div>
          میتوانید نظرات و پیشنهادات خودتون برامون بفرستید
          <div className="mt-2 text-center">mojtabanouri999@gmail.com</div>
        </div>
        <div>
          <div className="mx-auto text-center ">
            لطفا نام خود را جهت شروع وارد کنید
          </div>
          <section
            className="flex flex-row items-end justify-center gap-6"
            style={{ direction: "rtl" }}
          >
            <div>
              <label htmlFor=""> نام شما :</label>
              <Input
                placeholder="نام خود را وارد کنید"
                className=" bg-blue-200"
                onChange={(e) => setNameUser(e.target.value)}
              />
            </div>

            <Link to="/Home">
              <Button
                className="bg-sky-500 text-white px-16"
                disabled={!Boolean(nameUser)}
                onClick={() => setUser({ name: nameUser, level: 0, score: 0 })}
              >
                شروع بازی
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Tomar;
