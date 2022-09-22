import { FC } from "react";
import clock from "../../common/assets/clock.png";

const LandingPage: FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p className="font-black text-7xl z-10 bg-white p-2">RANDOMS</p>
      <p className="font-bold text-4xl  z-10 bg-white p-2">
        <span className="text-red-900">Procrastination </span>
        <span className="text-blue-900"> Instigator</span>
      </p>
      {/* <img src={clock} alt="" className="absolute z-9" width="550px" /> */}
    </div>
  );
};

export default LandingPage;
