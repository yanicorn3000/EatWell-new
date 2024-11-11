import styles from "./BMI.module.scss";

const ranges = [
  { maxRange: 18, title: "Niedowaga", style: styles.low },
  { maxRange: 25, title: "Pożądana masa ciała", style: styles.standard },
  { maxRange: 30, title: "Nadwaga", style: styles.high },
  { maxRange: Infinity, title: "Otyłość", style: styles.danger },
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

  const { BMIfinalValue, title, style } = countBMI(weight, height);

  return (
    <div>
      BMI:
      <span>{BMIfinalValue} - </span>
      <p className={style}>{title}</p>
    </div>
  );
};

export default BMI;
