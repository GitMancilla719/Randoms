import { FC } from "react";
import { NavLink } from "react-router-dom";

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
  return (
    <div className="sticky top-0 bg-white flex flex-row justify-between items-center w-full px-7 py-7 h-12 select-none">
      <div className=" border-2 border-gray-300 rounded-md py-1 px-2">
        <NavLink to="/" className="font-black text-2xl">
          RANDOMS
        </NavLink>
      </div>
      <div>
        {links.map((route) => (
          <NavLink
            key={route.title}
            to={route.path}
            className="mx-3 font-semibold bg-gray-50 px-3 rounded-md"
          >
            {route.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Nav;
