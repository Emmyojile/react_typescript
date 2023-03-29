import { ReactNode } from "react";

interface Props{
    children: ReactNode;
    color?: 'primary' | 'secondary' | 'danger';
    onClickButton:() => void;
}

const Buttons = ({children, onClickButton, color="secondary"}:Props) => {
  return (
    <>
    <button className={"btn btn-" + color} onClick={onClickButton}>
        {children}
    </button>
    </>
  );
};

export default Buttons;
