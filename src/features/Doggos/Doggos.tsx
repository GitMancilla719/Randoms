import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store";
import Button from "../../common/components/Button";
import { getRandomDoggo } from "./DoggoSlice";

enum msg {
  a = "Here's a cute ",
  b = "How about this ",
  c = "Awwww a ",
  d = "What an adorable ",
  e = "Gotta have me some ",
  f = "TADAAA! ",
}

const Doggos: FC = () => {
  const dispatch = useAppDispatch();
  const doggo = useAppSelector((state) => state.DoggoSlice);

  const [cuteMsg, setCuteMsg] = useState(msg.a);

  useEffect(() => {
    doggo.status === "idle" && dispatch(getRandomDoggo());
  }, [dispatch, cuteMsg]);

  const breed = doggo.value?.message?.split("/")[4];

  // console.log(doggo.value.message!);
  console.log(breed);

  const getRandomDoggoPic = (enumeration: any): void => {
    const values = Object.keys(enumeration);
    const enumKey = values[Math.floor(Math.random() * values.length)];

    dispatch(getRandomDoggo());
    setCuteMsg(enumeration[enumKey]);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center py-10">
      <div className="text-center text-gray-600 py-5">
        <p className="font-bold text-2xl">Come get some DOGGO love!</p>
        <p className="font-bold text-lg">Let's see if you can handle these adorable furbabies</p>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-[450px] bg-gray-100 py-10 pt-16">
        <img src={doggo.value.message!} alt="" className="h-full" />
        <p className="font-bold text-2xl text-gray-800">
          {cuteMsg}
          {breed!}
        </p>
      </div>
      <Button
        btnTitle="More Doggos!"
        btnFn={() => getRandomDoggoPic(msg)}
        btnStyle="bg-yellow-400 text-gray-800 text-2xl my-5 py-3 px-5"
      />
      <p className="font-semibold text-lg text-gray-600">
        If these furpups fail to brighten up your day, I dont know what will. (money, i guess)
      </p>
    </div>
  );
};

export default Doggos;
