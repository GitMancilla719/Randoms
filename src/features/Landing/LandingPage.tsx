import { FC } from "react";
import LP from "../../common/assets/lp.jpg";

const LandingPage: FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center p-10 xs:p-1 select-none">
      <img src={LP} alt="" />
    </div>
  );
};

export default LandingPage;
