import clsx from "clsx";
import styles from "./NutriScore.module.scss";

const scores = ["A", "B", "C", "D", "E"];

const NutriScore = (props) => {
  return (
    <div>
      <h3 className={styles.title}>Nutri-Score</h3>
      <div className={styles.scores}>
        {scores.map((el) => {
          return (
            <div
              className={clsx(styles.score, styles[`score${el}`], {
                [styles.scoreActive]: props.score === el, // zwraca true => dodaje key do klas
              })}
            >
              {el}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NutriScore;
