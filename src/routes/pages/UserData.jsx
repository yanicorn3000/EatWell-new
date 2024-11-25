import React from "react";
import { useState } from "react";
import styles from "./UserData.module.scss";
import CalculatorForm from "../../components/App/calculator/CalculatorForm";
import { calculate } from "../../utils/calculate";

const wordRegex = /^[a-zA-Z]+$/;

const UserData = () => {
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

  console.log(errors);

  const checkName = (value) => {
    if (!value || value === undefined) {
      return "To pole nie moze być puste";
    }

    console.log(wordRegex);
    if (!wordRegex.test(value)) {
      return "Wartość musi zawierać tylko litery";
    }
  };

  const showError = (name) => {
    return errors[name] ? <p style={{ color: "red" }}>{errors[name]}</p> : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log(calculate(basicData));
  };

  console.log(basicData);
  return (
    <section className={styles.data}>
      <h2 className={styles.title}>Twój profil</h2>
      <div className={styles.wrapper}>
        <div className={styles.userName}>
          <label htmlFor="name" className={styles.name}>
            Twoje imię:
          </label>
          <input
            type="text"
            placeholder="Wpisz swoje imię..."
            className={styles.nameInput}
            {...configureInput({
              name: "name",
              validate: (currentValue) => {
                return checkName(currentValue);
              },
            })}
          />
          {showError("name")}
        </div>

        <div>
          <CalculatorForm
            className={styles.userForm}
            configureInput={configureInput}
          />
        </div>
        <button className={styles.button} onClick={handleSubmit}>
          Zapisz
        </button>
      </div>
    </section>
  );
};

export default UserData;
