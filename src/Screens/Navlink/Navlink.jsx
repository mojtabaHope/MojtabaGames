import { Link } from "react-router-dom";

function Navlink() {
  return (
    <div className="p-2 border-b border-[rgb(192,144,82)] mb-3 ">
      <div className="flex flex-wrap items-center justify-center lg:justify-start">
        <ul className="nav col-12 lg:flex lg:space-x-4 justify-center ">
          <li>
            <Link to="/" className="nav-link px-2 text-gray-500">
              خانه
            </Link>
          </li>
          <li>
            <Link to="/setting" className="nav-link px-2 text-gray-900">
              پروفایل من
            </Link>
          </li>

          <li>
            <Link to="/About" className="nav-link px-2 text-gray-900">
              درباره سایت
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navlink;
