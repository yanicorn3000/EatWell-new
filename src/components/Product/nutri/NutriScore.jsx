import clsx from "clsx";
import styles from "./NutriScore.module.scss";

const scores = ["A", "B", "C", "D", "E"];

const NutriScore = ({ size, score }) => {
  const sizeValue = size || "medium";

  return (
    <div>
      {sizeValue !== "small" ? (
        <h3 className={styles.title}>Nutri-Score</h3>
      ) : null}
      <div
        className={clsx(styles.scores, {
          [styles.small]: sizeValue === "small",
        })}
      >
        {scores.map((el, index) => {
          return (
            <div
              key={index}
              className={clsx(styles.score, {
                [styles.scoreActive]: score === el,
                [styles[`score${el}`]]: score !== "UNKNOWN",
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
