import React, { useState } from "react";
import { notification, Button } from "antd";
import OTPInput from "react-otp-input";
import { SmileOutlined, FrownOutlined } from "@ant-design/icons";

const TextSection = ({ nameCurrect, nameOstan, onCorrectAnswer }) => {
  const [name, setName] = useState("");
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (isCorrect) => {
    api.open({
      message: isCorrect ? " درستههه" : " ریدی ",
      description: isCorrect
        ? "آفرین عزیزم حالا برو سوال بعدی"
        : "اشکال نداره عزیزم دوباره امتحان کن",
      icon: isCorrect ? (
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
      const isCorrect = name === nameCurrect;
      openNotification(isCorrect);
      onCorrectAnswer(isCorrect);
      if (!isCorrect) setName("");
    }
  };

  return (
    <>
      {nameCurrect && nameOstan && (
        <>
          {contextHolder}
          <section className="flex flex-col items-center justify-center gap-3 w-10/12 mx-auto">
            <div className="flex flex-col items-center justify-center gap-6">
              <span className="font-bold text-center w-full">
                لطفا مرکز استان {nameOstan} را وارد کنید
              </span>
              <section dir="rtl">
                <OTPInput
                  value={name}
                  onChange={setName}
                  numInputs={nameCurrect.length}
                  renderInput={(props) => (
                    <input
                      {...props}
                      className="!w-full text-4xl border border-zinc-900 rounded outline-sky-400 p-3 px-4 mx-1"
                    />
                  )}
                  shouldAutoFocus
                />
              </section>
            </div>
            <Button
              type="primary"
              className="px-9 py-3 text-lg"
              onClick={onClick}
            >
              ارسال
            </Button>
          </section>
        </>
      )}
    </>
  );
};

export { TextSection };
