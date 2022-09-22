import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { getMemeTemplates } from "./MemerSlice";

const Memer: FC = () => {
  const dispatch = useAppDispatch();
  const memer = useAppSelector((state) => state.MemerSlice);

  useEffect(() => {
    memer.status === "idle" && dispatch(getMemeTemplates());
  }, [dispatch, memer]);

  console.log(memer.value.data.memes);

  return (
    <div className=" text-center bg-gray-100 px-5 py-10">
      <div className="text-gray-600 py-5">
        <p className="font-bold text-3xl text-gray-800">Here, have some meme templates!</p>
        <p className="font-bold text-xl">
          This is a collection of the top 100 meme templates(according to me)
        </p>
        <p className="font-bold text-xl">
          Sooooooo.....<span className="font-black">Go Nuts!</span>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        {memer.value.data.memes!.map((inf) => (
          <div key={inf.id} className="my-5">
            <a href={inf.url} target="_blank" rel="noreferrer">
              <h1 className="font-bold text-xl mb-1">{inf.name}</h1>
              <img src={inf.url} alt="" className="max-h-[500px]" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memer;
