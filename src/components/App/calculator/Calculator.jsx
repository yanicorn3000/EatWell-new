import { useState } from "react";
import CalculatorForm from "./CalculatorForm";
import styles from "./Calculator.module.scss";
import BMI from "./BMI";
import clsx from "clsx";
import { calculate } from "../../../utils/calculate";

const Calculator = () => {
  const [basicData, setBasicData] = useState({});
  const [errors, setErrors] = useState({});

  const configureInput = ({ name, validate }) => {
    return {
      name,
      value: basicData[name],
      onChange: (e) => {
        const value = e.target.value;

        if (validate) {
          const errorMessage = validate(value);
          setErrors({ ...errors, [name]: errorMessage });
        }
        setBasicData({
          ...basicData,
          [name]: e.target.value,
        });
      },
    };
  };

  return (
    <section className={styles.calculator} id="calculator">
      <h2 className={styles.title}> Kalkulator kalorii</h2>
      <form className={styles.calcForm}>
        <CalculatorForm
          configureInput={configureInput}
          basicData={basicData}
          errors={errors}
        />
        <div className={styles.result}>
          <BMI weight={basicData.weight} height={basicData.height} />
          <div
            className={clsx(styles.calories, {
              [styles.inactive]: calculate(basicData) === "----",
              [styles.active]: calculate(basicData),
            })}
          >
            <p> Twoje zapotrzebowanie kaloryczne</p>
            <h4 className={styles.subtitle}>{`${calculate(
              basicData
            )} kcal`}</h4>
          </div>
        </div>
      </form>
    </section>
  );
};
export default Calculator;
