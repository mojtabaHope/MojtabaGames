import { Link } from "react-router-dom";

function Navlink() {
  return (
    <div className="p-2 border-b border-[rgb(192,144,82)] mb-3 ">
      <div
        className="flex  items-center justify-center"
        style={{ direction: "rtl" }}
      >
        <Link to="/Home" className=" px-2 text-gray-500">
          خانه
        </Link>

        <Link to="/setting" className=" px-2 text-gray-900">
          پروفایل من
        </Link>

        <Link to="/About" className=" px-2 text-gray-900">
          درباره سایت
        </Link>

        <Link to="/" className=" px-2 text-gray-900">
          آموزش و قوانین بازی
        </Link>
      </div>
    </div>
  );
}

export default Navlink;
