import { FC, useEffect, useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../app/store";
import Button from "../../common/components/Button";
import { getRandomActivity } from "./BoredSlice";

enum afterMsgEnum {
  a = "It's about damn time too!",
  b = "Seems doable, no?",
  c = "You just have to do it.",
  d = "It's better than washing dishes.",
  e = "Well, at least try it.",
  f = "JUST. DO. IT.",
  g = "It's the least you could do.",
}

const Bored: FC = () => {
  const dispatch = useAppDispatch();
  const Bored = useAppSelector((state: RootState) => state.BoredSlice);

  const [afterMsgs, setAfterMsgs] = useState(afterMsgEnum.a);

  useEffect(() => {
    Bored.status === "idle" && dispatch(getRandomActivity());
  }, [dispatch, afterMsgs]);

  const getRandomAct = (enumeration: any): void => {
    const values = Object.keys(enumeration);
    const enumKey = values[Math.floor(Math.random() * values.length)];

    dispatch(getRandomActivity());
    setAfterMsgs(enumeration[enumKey]);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full text-center py-10">
      <div className="text-center text-gray-800 py-5">
        <p className="font-bold text-2xl">Bored huh? I got some activity suggestions for you</p>
      </div>
      <div className="w-full">
        {Bored.status === "loading" ? (
          <div className="bg-gray-100 w-full px-16 py-14 md:h-[250px] xs:h-full">
            <p className="font-black text-5xl text-gray-800 mb-1">Let's see,...</p>
          </div>
        ) : Bored.status === "success" ? (
          <div className="bg-gray-100 w-full px-16 py-14 md:h-[250px] xs:h-full">
            <p className="font-black text-3xl text-gray-800 mb-1">Why don't you,</p>
            <p className="font-black text-5xl">{Bored.value?.activity}?</p>
            <p className="font-black text-3xl text-gray-800 mt-3">{afterMsgs}</p>
          </div>
        ) : (
          <p className="font-bold text-2xl">
            You spammed the next button a little bit too hard and got rate limited lol, go do some
            other stuff while this shiitake mushroom cools down. PEACE
          </p>
        )}
      </div>
      <Button
        btnTitle="Next activity please!"
        btnFn={() => getRandomAct(afterMsgEnum)}
        btnStyle="bg-yellow-400 text-gray-800 text-2xl my-5 py-3 px-5"
      />
      <div className="text-center text-gray-600 mt-5">
        <p className="font-bold text-xl">Still bored after all thoes activities?</p>
        <p className="font-semibold text-lg">Get up and eat something, that should do it.</p>
        <p className="font-semibold text-lg">
          If not, then I don't know what the hell is wrong with you.
        </p>
      </div>
    </div>
  );
};

export default Bored;
