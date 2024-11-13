import styles from "./BMI.module.scss";

const ranges = [
  {
    maxRange: 18,
    title: "Niedowaga",
    progressBarStyle: {
      backgroundColor: "#fecd00",
    },
  },
  {
    maxRange: 25,
    title: "Pożądana masa ciała",
    progressBarStyle: {
      backgroundColor: "#27ce7d",
    },
  },
  {
    maxRange: 30,
    title: "Nadwaga",
    progressBarStyle: {
      backgroundColor: "#ff9c3f",
    },
  },
  {
    maxRange: Infinity,
    title: "Otyłość",
    progressBarStyle: { backgroundColor: "#f67670" },
  },
];

const findActualRange = (bmi) => {
  return ranges.find(({ maxRange }) => bmi < maxRange);
};

const BMI = ({ weight, height }) => {
  const countBMI = (weight, height) => {
    const heightInMeters = height / 100;
    const BMI = weight / Math.pow(heightInMeters, 2);
    const BMIfinalValue = parseFloat(BMI.toFixed(2));

    if (!weight || !height) {
      return {
        BMIfinalValue: 0,
        title: "",
      };
    }

    const range = findActualRange(BMIfinalValue);

    return {
      BMIfinalValue,
      ...range,
    };
  };

  const { BMIfinalValue, title, progressBarStyle } = countBMI(weight, height);

  const calculateBarWidth = (bmi) => {
    const minBMI = 0;
    const maxBMI = 40;
    return Math.min(
      Math.max(((bmi - minBMI) / (maxBMI - minBMI)) * 100, 0),
      100 //zapobigamy wartościom poniżej 0% i powyżej 100%.
    );
  };

  return (
    <div className={styles.bmi}>
      <div className={styles.content}>
        <p>Twój BMI</p>
        <p
          style={{
            backgroundColor: progressBarStyle
              ? progressBarStyle.backgroundColor
              : undefined,
          }}
          className={styles.text}
        >
          {title}
        </p>
        <h4 className={styles.subtitle}>{BMIfinalValue}</h4>
      </div>
      <div className={styles.bar}>
        <div
          style={{
            ...progressBarStyle,
            width: `${calculateBarWidth(BMIfinalValue)}%`,
            height: "100%",
            transition: "width 0.3s",
          }}
        ></div>
      </div>
    </div>
  );
};

export default BMI;
