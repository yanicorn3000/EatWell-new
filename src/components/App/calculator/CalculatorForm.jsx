import styles from "./Calculator.module.scss";
import clsx from "clsx";

const CalculatorForm = ({ className, configureInput, errors }) => {
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

  const showError = (name) => {
    return errors && errors[name] ? (
      <p className={styles.error}>{errors[name]}</p>
    ) : null;
  };

  const checkNumber = (value) => {
    if (!value || value === undefined) {
      return "To pole nie moze być puste";
    }

    if (Number(value) <= 0) {
      return "Wartość musi być większa od 0";
    }
  };

  return (
    <>
      <div className={clsx(styles.data, className)}>
        <div className={styles.params}>
          <div className={styles.gender}>
            <h4 className={styles.subtitle}>Twoja płeć:</h4>
            <ul className={styles.options}>
              {genders.map((gender) => {
                const genderInput = configureInput({ name: "gender" });

                return (
                  <li key={gender.value}>
                    <input
                      type="radio"
                      className={styles.genderRadio}
                      {...genderInput}
                      checked={genderInput.value === gender.value}
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
            <div>
              <label htmlFor="age" className={styles.field}>
                Twój wiek:
                <input
                  type="number"
                  {...configureInput({
                    name: "age",
                    validate: (currentValue) => {
                      return checkNumber(currentValue);
                    },
                  })}
                />
              </label>
              {showError("age")}
            </div>

            <div>
              <label htmlFor="weight" className={styles.field}>
                Twoja waga (kg):
                <input
                  type="number"
                  {...configureInput({
                    name: "weight",
                    validate: (currentValue) => {
                      return checkNumber(currentValue);
                    },
                  })}
                />
              </label>
              {showError("weight")}
            </div>
            <div>
              <label htmlFor="height" className={styles.field}>
                Twój wzrost (cm):
                <input
                  type="number"
                  {...configureInput({
                    name: "height",
                    validate: (currentValue) => {
                      return checkNumber(currentValue);
                    },
                  })}
                />
              </label>
              {showError("height")}
            </div>
          </div>
        </div>

        <div className={styles.activities}>
          <h4 className={styles.subtitle}>Twój poziom aktywności fizycznej:</h4>
          <ul className={styles.content}>
            {dailyActivity.map((activity) => {
              const activityInput = configureInput({ name: "activity" });

              const checked = Number(activityInput.value) === activity.value;

              return (
                <li className={styles.activity} key={activity.value}>
                  <input
                    type="radio"
                    className={styles.activityRadio}
                    {...activityInput}
                    checked={checked}
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
