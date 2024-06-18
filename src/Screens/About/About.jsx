import React from "react";

function About() {
  return (
    <div className="h-[800px] w-full bg-gradient-to-b from-yellow-100 to-blue-100 flex flex-col items-center justify-center">
      <div className="border border-yellow-600 bg-white shadow-lg m-[100px_auto] w-[90%] max-w-[500px] h-[500px] text-center p-6 rounded-xl flex items-center justify-around flex-col space-y-4">
        <div className="text-2xl font-bold text-blue-600">
          درس بازی و یادگیری
        </div>
        <div className="text-lg font-medium text-gray-700">
          استاد مربوطه: <span className="text-yellow-600">استاد قربانی</span>
        </div>
        <div className="text-lg font-medium text-gray-700">
          محققان: <span className="text-yellow-600">محمد جواد سعدالهی</span> و{" "}
          <span className="text-yellow-600">مجتبی نوری</span>
        </div>
        <div className="text-4xl">🎓</div>
      </div>
    </div>
  );
}

export default About;
