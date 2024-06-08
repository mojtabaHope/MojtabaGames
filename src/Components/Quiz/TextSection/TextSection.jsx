import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { notification } from "antd";
import { SmileOutlined, FrownOutlined } from "@ant-design/icons";

import { Button } from "antd";
const TextSection = ({ nameCurrect, nameOstan }) => {
  const [name, setName] = useState("");

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (boolean) => {
    api.open({
      message: boolean ? " درستههه" : " ریدی ",
      description: `  ${
        boolean
          ? "آفرین عزیزم حالا برو سوال بعدی"
          : "اشکال نداره عزیزم دوباره امتحان کن"
      }`,

      icon: boolean ? (
        <SmileOutlined style={{ color: "#108ee9" }} />
      ) : (
        <FrownOutlined style={{ color: "#108ee9" }} />
      ),
    });
  };

  const onClick = () => {
    if (name.length < nameCurrect.length) {
      alert("کلمات به صورت کامل وارد کنید");
    } else {
      if (name === nameCurrect) {
        openNotification(true);
      } else {
        openNotification(false);
        setName("");
      }
    }
  };

  return (
    <>
      {contextHolder}

      <section className="flex flex-col items-center justify-center  gap-3 w-10/12 mx-auto ">
        <div className="flex flex-col items-center justify-center  gap-6">
          <span className=" font-bold text-center w-full">
            لطفا مرکز استان {nameOstan} را وارد کنید
          </span>
          <section dir="rtl">
            <OTPInput
              value={name}
              onChange={(value) => setName(value)}
              numInputs={nameCurrect.length}
              renderInput={(props) => (
                <input
                  {...props}
                  className="!w-full text-4xl border border-zinc-900 rounded 
                outline-sky-400 p-3 px-4 mx-1 "
                />
              )}
              shouldAutoFocus
            />
          </section>
        </div>

        <Button
          type="primary"
          className="px-9 py-3 text-lg "
          onClick={() => onClick()}
        >
          ارسال
        </Button>
      </section>
    </>
  );
};

export { TextSection };
