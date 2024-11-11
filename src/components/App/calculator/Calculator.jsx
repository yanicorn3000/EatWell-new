import { useState } from "react";
import BMI from "./BMI";
import styles from "./Calculator.module.scss";

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
    { label: "Męzczyzna", value: "male" },
    { label: "Kobieta", value: "female" },
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
        "Aktywny tryb zycia: treningi 2-3x razy tygodniowo i praca fizyczna",
    },
    {
      value: 2,
      label:
        "Bardzo aktywny tryb zycia: wymagająca praca fizyczna i/lub ciękie treningi",
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

  return (
    <section className={styles.calculator}>
      <h2 className={styles.title}> Kalkulator kalorii</h2>
      <form className={styles.calcForm}>
        <div className={styles.genders}>
          {genders.map((gender) => {
            return (
              <label key={gender.value} htmlFor={`gender-${gender.value}`}>
                <input
                  type="radio"
                  {...configureInput({ name: "gender" })}
                  value={gender.value}
                  id={`gender-${gender.value}`}
                />
                {gender.label}
              </label>
            );
          })}
        </div>
        <div className={styles.bmr}>
          <label htmlFor="age">
            Twój wiek
            <input type="number" {...configureInput({ name: "age" })} />
          </label>

          <label htmlFor="weight">
            Twoja waga (kg)
            <input type="number" {...configureInput({ name: "weight" })} />
          </label>
          <label htmlFor="height">
            Twój wzrost (cm)
            <input type="number" {...configureInput({ name: "height" })} />
          </label>
        </div>

        <ul className={styles.activities}>
          {dailyActivity.map((activity) => {
            return (
              <li className={styles.activity}>
                <label
                  key={activity.value}
                  htmlFor={`activity-${activity.value}`}
                >
                  <input
                    type="radio"
                    {...configureInput({ name: "activity" })}
                    value={activity.value}
                    id={`activity-${activity.value}`}
                  />
                  {activity.label}
                </label>
              </li>
            );
          })}
        </ul>
        <div>Twoje zapotrzebowanie: {`${calculate()} kcal`}</div>

        <BMI weight={basicData.weight} height={basicData.height} />
      </form>
    </section>
  );
};
export default Calculator;
