import React from "react";
import TomarImage from "../../assets/image/tomar.png";
import { Button } from "antd";
import { Alert, Space } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const Tomar = () => {
  const onClose = (e) => {
    console.log(e, "I was closed.");
  };

  return (
    <>
      <Alert
        message="Error Text"
        description="Error Description Error Description Error Description Error Description Error Description Error Description"
        type="error"
        closable={{
          "aria-label": "close",
          icon: <SmileOutlined style={{ color: "#108ee9" }} />,
        }}
        onClose={onClose}
      />
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

          <Button className="bg-sky-500 text-white px-9">شروع بازی</Button>
        </div>{" "}
      </section>{" "}
    </>
  );
};

export { Tomar };
