import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store";
import Button from "../../common/components/Button";
import { getRandomCatto } from "./CattoSlice";

enum msg {
  a = "Here's a cute Catto ",
  b = "Gimme some lovin",
  c = "Meow",
  d = "Let's go get you some fish",
  e = "Awwwwwwwww ^_^",
}

const Cattos: FC = () => {
  const dispatch = useAppDispatch();
  const catto = useAppSelector((state) => state.CattoSlice);

  const [cuteMsg, setCuteMsg] = useState(msg.a);

  useEffect(() => {
    catto.status === "idle" && dispatch(getRandomCatto());
  }, [dispatch, cuteMsg]);

  const getRandomCattoPic = (enumeration: any): void => {
    const values = Object.keys(enumeration);
    const enumKey = values[Math.floor(Math.random() * values.length)];

    dispatch(getRandomCatto());
    setCuteMsg(enumeration[enumKey]);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center py-10">
      <div className="text-center text-gray-600 py-5">
        <p className="font-bold text-2xl">Catto be like, love me!</p>
        <p className="font-bold text-lg">Let's see if you can handle these adorable furbabies</p>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-[450px] bg-gray-100 py-10 pt-16">
        <img src={catto.value[0]?.url!} alt="" className="h-full" />
        <p className="font-bold text-2xl text-gray-800">{cuteMsg}</p>
      </div>
      <Button
        btnTitle="More Cattos!"
        btnFn={() => getRandomCattoPic(msg)}
        btnStyle="bg-yellow-400 text-gray-800 text-2xl my-5 py-3 px-5"
      />
      <p className="font-semibold text-lg text-gray-600">
        If these furkitties fail to brighten up your day, I dont know what will. (still money, i
        guess)
      </p>
    </div>
  );
};

export default Cattos;
