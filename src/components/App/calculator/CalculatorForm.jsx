import styles from "./Calculator.module.scss";
import clsx from "clsx";

const CalculatorForm = ({ className, configureInput }) => {
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

  return (
    <>
      <div className={clsx(styles.data, className)}>
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
          <h4 className={styles.subtitle}>Twój poziom aktywności fizycznej:</h4>
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
    </>
  );
};

export default CalculatorForm;
