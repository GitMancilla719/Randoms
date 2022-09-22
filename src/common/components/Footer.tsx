import { FC } from "react";
import { NavLink } from "react-router-dom";

const api_links = [
  {
    url: "https://github.com/15Dkatz/official_joke_api",
    title: "Jokes",
  },
  {
    url: "https://www.boredapi.com/",
    title: "Bored API",
  },
  {
    url: "https://dog.ceo/",
    title: "Dogs CEO",
  },
  {
    url: "https://thecatapi.com/",
    title: "TheCat",
  },
  {
    url: "https://imgflip.com/api",
    title: "Meme Templates",
  },
];

const Footer: FC = () => {
  return (
    <div className="flex items-center justify-between bg-gray-900 text-white h-[200px] p-5 px-20">
      <div className="w-[250px] text-gray-400">
        <p>
          All data/information in this site are sourced from free public APIs and are rate limited.
        </p>
      </div>

      <div className="text-center">
        <NavLink
          to="/"
          className=" font-black text-2xl border-2 border-gray-600 rounded-md py-1 px-2 w-fit"
        >
          RANDOMS
        </NavLink>
        <p className="mt-3">© GitMancilla719 - 2022</p>
        <p className="">For Portfolio use only</p>
      </div>

      <div className="flex flex-col text-gray-400">
        {api_links.map((inf) => (
          <a href={inf.url} rel="noreferrer" target="_blank" key={inf.title}>
            {inf.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
