import { FC } from "react";

interface props {
  btnTitle: string;
  btnFn: () => unknown;
  btnStyle?: string;
}

const Button: FC<props> = ({ btnTitle, btnFn, btnStyle }) => {
  return (
    <button
      onClick={() => btnFn()}
      className={`rounded-md font-bold border-2 border-blue-100 ${btnStyle} `}
    >
      {btnTitle}
    </button>
  );
};

export default Button;
