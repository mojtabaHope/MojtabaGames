import React, { useEffect, useState } from "react";
import "./MobileWarning.css"; // Import the CSS file for styling

const MobileWarning = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 720);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 720);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-yellow-200 flex items-center justify-center z-50">
      <div className="text-center p-4 rounded-lg bg-white shadow-lg">
        <img
          src="/cute-illustration.jpeg"
          alt="Cute Illustration"
          className="w-32 mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold text-pink-500 mb-2">اووخ!</h1>
        <p className="text-lg font-semibold text-blue-500">
          این برنامه در یک صفحه نمایش بزرگتر بهترین عملکرد را دارد. لطفا از
          دستگاهی استفاده کنید که عرض صفحه نمایش بالای 720 پیکسل
        </p>
      </div>
    </div>
  );
};

export default MobileWarning;
