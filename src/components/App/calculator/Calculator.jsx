import { useState } from "react";
import BMI from "./BMI";
import styles from "./Calculator.module.scss";
import clsx from "clsx";

///TODO///
//validation

const Calculator = () => {
  const [basicData, setBasicData] = useState({});

  const configureInput = ({ name }) => {
    return {
      name,
      value: basicData[name],
      onChange: (e) => {
        const value = parseInt(e.target.value);

        setBasicData({
          ...basicData,
          [name]: e.target.value,
        });
      },
    };
  };

  const genders = [
    { label: "Męzczyzna", value: "male", icon: styles.man },
    { label: "Kobieta", value: "female", icon: styles.women },
  ];
  const dailyActivity = [
    {
      value: 1.4,
      label: "Siedzący tryb zycia: praca siedząca i brak terningów",
    },
    {
      value: 1.5,
      label:
        "Mało aktywny tryb zycia: praca siedząca i lekka aktywność fizyczna",
    },
    {
      value: 1.6,
      label:
        "Średnio aktywny tryb zycia: treningi 1-2x razy tygodniowo lub praca fizyczna",
    },
    {
      value: 1.7,
      label:
        "Aktywny tryb zycia: treningi 2-3x razy tygodniowo lub wymagająca praca fizyczna",
    },
    {
      value: 2,
      label:
        "Bardzo aktywny tryb zycia: bardzo wymagająca praca fizyczna i/lub cięzkie treningi",
    },
    {
      value: 2.4,
      label: "Zawodowe uprawianie sportu",
    },
  ];

  const countBMRmen = (age, weight, height) => {
    const BMRmen = 66.47 + 13.75 * weight + 5 * height - 6.75 * age;
    return Math.round(BMRmen);
  };

  const countBMRwomen = (age, weight, height) => {
    const BMRwomen = 665.09 + 9.56 * weight + 1.85 * height - 4.67 * age;
    return Math.round(BMRwomen);
  };

  const calculate = () => {
    const { age, weight, height, gender, activity } = basicData;
    let bmr = 0;

    if (gender === "female") {
      bmr = countBMRwomen(age, weight, height);
    }

    if (gender === "male") {
      bmr = countBMRmen(age, weight, height);
    }

    if (!activity || Number.isNaN(bmr)) {
      return "----";
    }

    return Math.round(bmr * activity);
  };

  console.log(basicData);

  return (
    <section className={styles.calculator} id="calculator">
      <h2 className={styles.title}> Kalkulator kalorii</h2>
      <form className={styles.calcForm}>
        <div className={styles.data}>
          <div className={styles.params}>
            <div className={styles.gender}>
              <h4 className={styles.subtitle}>Twoja płeć:</h4>
              <ul className={styles.options}>
                {genders.map((gender) => {
                  return (
                    <li key={gender.value}>
                      <input
                        type="radio"
                        className={styles.genderRadio}
                        {...configureInput({ name: "gender" })}
                        value={gender.value}
                        id={`gender-${gender.value}`}
                      />
                      <label htmlFor={`gender-${gender.value}`}>
                        {gender.label}
                        <span className={gender.icon}></span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className={styles.bmr}>
              <h4 className={styles.subtitle}>Podstawowe parametry:</h4>
              <label htmlFor="age" className={styles.field}>
                Twój wiek:
                <input type="number" {...configureInput({ name: "age" })} />
              </label>

              <label htmlFor="weight" className={styles.field}>
                Twoja waga (kg):
                <input type="number" {...configureInput({ name: "weight" })} />
              </label>
              <label htmlFor="height" className={styles.field}>
                Twój wzrost (cm):
                <input type="number" {...configureInput({ name: "height" })} />
              </label>
            </div>
          </div>

          <div className={styles.activities}>
            <h4 className={styles.subtitle}>
              Twój poziom aktywności fizycznej:
            </h4>
            <ul className={styles.content}>
              {dailyActivity.map((activity) => {
                return (
                  <li className={styles.activity} key={activity.value}>
                    <input
                      type="radio"
                      className={styles.activityRadio}
                      {...configureInput({ name: "activity" })}
                      value={activity.value}
                      id={`activity-${activity.value}`}
                    />
                    <label htmlFor={`activity-${activity.value}`}>
                      {activity.label}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={styles.result}>
          <BMI weight={basicData.weight} height={basicData.height} />
          <div
            className={clsx(styles.calories, {
              [styles.inactive]: calculate() === "----",
              [styles.active]: calculate(),
            })}
          >
            <p> Twoje zapotrzebowanie kaloryczne</p>
            <h4 className={styles.subtitle}>{`${calculate()} kcal`}</h4>
          </div>
        </div>
      </form>
    </section>
  );
};
export default Calculator;
