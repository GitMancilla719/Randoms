import { FormEvent, ChangeEvent, FC } from "react";
import { useAppSelector, useAppDispatch } from "../app/store";

interface Props {
  // ? for optional
  name: string;
  age?: number;
  isMarried?: boolean;
}

const Sample: FC<Props> = () => {
  // const dispatch = useAppDispatch();
  // const count = useAppSelector((state) => state.counterSlice.value);

  // Forms Handling
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" onChange={onNameChange} />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default Sample;
