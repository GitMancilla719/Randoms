import { FC, useEffect, useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../app/store";
import Button from "../../common/components/Button";
import { getRandomJokes } from "./JokesSlice";

enum btnMsgs {
  a = "Another one!",
  b = "Ain't as good as the last one, NEXT!",
  c = "Meh, try gain!",
  d = "HAHA, Good One!",
}

enum loadingMsg {
  a = "Let me see,",
  b = "Hmmmmmm,",
  c = "Here's one for ya!",
  d = "I'm running out of jokes, lol",
  e = "Let me think of another one,",
}

const Joke: FC = () => {
  const dispatch = useAppDispatch();
  const joke = useAppSelector((state: RootState) => state.JokeSlice);

  const [btnMsg, setBtnMsg] = useState(btnMsgs.a);
  const [loadingMsgs, setLoadingMsgs] = useState(loadingMsg.a);

  useEffect(() => {
    joke.status === "idle" && dispatch(getRandomJokes());
  }, [dispatch, btnMsg, loadingMsgs, joke]);

  const getRandomJoke = (btnMsgs: any, loadingMsgs: any): void => {
    const values = Object.keys(btnMsgs);
    const enumKey = values[Math.floor(Math.random() * values.length)];

    const valuesL = Object.keys(loadingMsgs);
    const enumKeyL = valuesL[Math.floor(Math.random() * valuesL.length)];

    dispatch(getRandomJokes());
    setBtnMsg(btnMsgs[enumKey]);
    setLoadingMsgs(loadingMsgs[enumKeyL]);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full py-10">
      <div className="text-center text-gray-600 py-5">
        <p className="font-bold text-3xl">Lookin for'a chuckle ey?</p>
        <p className="font-bold text-xl">Let's see if you can handle some of these "cheese"</p>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-100 w-full px-16 py-10 text-center md:h-[250px] xs:h-full">
        {joke.status === "loading" ? (
          <p className="font-bold text-3xl">{loadingMsgs}</p>
        ) : joke.status === "success" ? (
          <div className="mt-[-15px]">
            <p className="font-bold text-3xl my-3">{joke.value?.setup}</p>
            <p className="font-black text-5xl">{joke.value?.punchline}</p>
          </div>
        ) : (
          <p className="font-bold text-2xl">
            You spammed the next button a little bit too hard and got rate limited lol, go do some
            other stuff while this shiitake mushroom cools down. PEACE
          </p>
        )}
      </div>
      <Button
        btnTitle={btnMsg}
        btnFn={() => getRandomJoke(btnMsgs, loadingMsg)}
        btnStyle="bg-yellow-400 text-gray-800 text-2xl my-5 py-3 px-5"
      />
      <div className="text-center text-gray-600 mt-5">
        <p className="font-bold text-xl">Not in the mood for this level of cheesiness?</p>
        <p className="font-semibold text-lg">
          Go get your gloomy posterior outa here and see some adorable doggos and cattos to brighten
          you up
        </p>
      </div>
    </div>
  );
};

export default Joke;
