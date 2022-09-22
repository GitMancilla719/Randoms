import { FC, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const links = [
  {
    path: "/joke",
    title: "Want Jokes?",
  },
  {
    path: "/booored",
    title: "Ya bored?",
  },
  {
    path: "/doggos",
    title: "Have some doggos",
  },
  {
    path: "/cattos",
    title: "How about some cattos",
  },
  {
    path: "/memers",
    title: "Make yo memes",
  },
];

const Nav: FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <>
      <div className="sticky top-0 bg-white flex flex-row justify-between items-center w-full md:px-7 xxs:px-2 py-7 h-12 select-none">
        <div className="border-2 border-gray-300 rounded-md py-1 px-2">
          <NavLink to="/" className="font-black text-2xl">
            RANDOMS
          </NavLink>
        </div>
        <div className="md:block xxs:hidden">
          {links.map((route) => (
            <NavLink
              key={route.title}
              to={route.path}
              className="mx-1 font-semibold bg-gray-50 px-3 rounded-md"
            >
              {route.title}
            </NavLink>
          ))}
        </div>
        <div className="md:hidden xxs:block px-5 text-2xl">
          <button onClick={() => setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="sticky top-14 bg-green-700 p-2 flex flex-col text-white">
          {links.map((route) => (
            <div key={route.title} className="my-2 px-2 font-semibold">
              <NavLink to={route.path} onClick={() => setShowMenu(false)}>
                {route.title}
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Nav;
