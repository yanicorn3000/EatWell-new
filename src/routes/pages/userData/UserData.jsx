import React from "react";
import { useState } from "react";
import styles from "./UserData.module.scss";
import CalculatorForm from "../../../components/App/calculator/CalculatorForm";
import { useUser } from "../../../utils";
import clsx from "clsx";

const wordRegex = /^[a-zA-Z]+$/;

const UserData = () => {
  const user = useUser();

  const [basicData, setBasicData] = useState({
    name: user.data.name,
    gender: user.data.gender,
    age: user.data.age,
    weight: user.data.weight,
    height: user.data.height,
    activity: user.data.activity,
  });
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

  const checkName = (value) => {
    if (!value || value === undefined) {
      return "To pole nie moze być puste";
    }

    if (!wordRegex.test(value)) {
      return "Wartość musi zawierać tylko litery";
    }
  };

  const showError = (name) => {
    return errors[name] ? <p className={styles.error}>{errors[name]}</p> : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    user.update(basicData);
    alert("Twoje dane zostały zapisane ✅");
  };

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
            errors={errors}
          />
        </div>
        <button
          className={clsx(styles.button, {
            [styles.disabled]:
              errors.name || errors.height || errors.age || errors.weight,
          })}
          onClick={handleSubmit}
        >
          Zapisz
        </button>
      </div>
    </section>
  );
};

export default UserData;
