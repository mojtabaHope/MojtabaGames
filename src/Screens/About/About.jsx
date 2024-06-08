import React from "react";
function About() {
  return (
    <div className={" h-[800px] w-full"}>
      <div
        className={
          "border border-[rgb(192,144,82)] m-[100px_auto] w-[500px] h-[500px] text-center leading-8 text-[20px] flex items-center justify-around flex-col "
        }
      >
        <div>درس بازی و یادگیری</div>
        <div>استاد مربوطه : استاد قربانی</div>
        <div>محقق : مجتبی نوری</div>
      </div>
    </div>
  );
}

export default About;
