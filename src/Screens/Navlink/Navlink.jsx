import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  InfoCircleOutlined,
  BookOutlined,
} from "@ant-design/icons";
import UserContext from "../../core/Context/UserContext";

function Navlink() {
  const { user } = useContext(UserContext);
  const location = useLocation();

  const linkClasses = (path) =>
    location.pathname === path
      ? "px-2 py-1 text-blue-700 bg-blue-100 rounded-lg border-b-4 border-blue-700"
      : "px-2 py-1 text-gray-500 hover:text-blue-700 hover:bg-blue-100 rounded-lg transition-all";

  return (
    <section className="p-3 mb-4 flex items-center justify-between bg-yellow-100 shadow-lg rounded-lg">
      <section className="text-lg font-bold text-gray-800">
        امتیاز شما: <span className="text-blue-600">{user.score}</span>
      </section>

      <section
        className="flex items-center justify-center gap-4"
        style={{ direction: "rtl" }}
      >
        <Link to="/Home" className={linkClasses("/Home")}>
          <HomeOutlined className="mr-1" />
          خانه
        </Link>
        {/* <Link to="/setting" className={linkClasses("/setting")}>
          <UserOutlined className="mr-1" />
          پروفایل من
        </Link> */}
        <Link to="/About" className={linkClasses("/About")}>
          <InfoCircleOutlined className="mr-1" />
          درباره سایت
        </Link>
        <Link to="/" className={linkClasses("/")}>
          <BookOutlined className="mr-1" />
          آموزش و قوانین بازی
        </Link>
      </section>
    </section>
  );
}

export default Navlink;
