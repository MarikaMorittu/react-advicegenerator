import React from "react";
import styles from "./Button.module.css";
import buttonimage from "../../assets/icon-dice.svg";
interface IButton {
  clickValue: number;
  handleClick: (params: number) => void;
}

const Button: React.FC<IButton> = ({ clickValue, handleClick }) => {
  const handleClickValue = () => {
    handleClick(clickValue + 1);
  };
  return (
    <div>
      <button onClick={handleClickValue} className={styles.btn}>
        <img src={buttonimage} alt="" />
      </button>
    </div>
  );
};

export default Button;
