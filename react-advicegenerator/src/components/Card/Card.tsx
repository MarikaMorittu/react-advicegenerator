import React from "react";
import { text } from "stream/consumers";
import styles from "./Card.module.css";
import { IAdvice } from "../../App";
import divider from "../../assets/pattern-divider-desktop.svg";
interface ICard {
  advice: IAdvice;
}

const Card: React.FC<ICard> = ({ advice }) => {
  return (
    <div className={styles.advicecontainer}>
      <h3 className={styles.advice}>ADVICE #{advice.id}</h3>
      <h2 className={styles.text}>"{advice.text}"</h2>
      <img src={divider} alt="" className={styles.image} />
    </div>
  );
};

export default Card;
