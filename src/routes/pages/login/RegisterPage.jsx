import React from "react";
import { useState } from "react";
import { Link } from "../../../components/App/link/Link";
import { clsx } from "clsx";
import styles from "./LoginPage.module.scss";
import { createUser, getUsers } from "../../../utils/users";
import { useUser } from "../../../utils";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const user = useUser();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const validateEmailField = (value) => {
    if (!value) {
      return "Wpisz adres e-mail";
    }

    if (!emailRegex.test(value)) {
      return "Wpisz poprawny adres e-mail";
    }
  };

  const validatePasswordField = (value) => {
    if (!value) {
      return "Wpisz hasło";
    }
  };

  const validatePasswordRepeat = (value) => {
    if (value != password) {
      return "Hasła muszą być takie same";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { ...errors };

    newErrors.email = validateEmailField(email);
    newErrors.password = validatePasswordField(password);
    newErrors.passwordRepeat = validatePasswordRepeat(passwordRepeat);

    setErrors(newErrors);
    if (Object.values(newErrors).filter(Boolean).length === 0) {
      getUsers()
        .then((users) => {
          const existingUser = users.find((u) => u.email === email);

          if (existingUser) {
            throw new Error("User with email already exists");
          }

          createUser({
            email,
            password,
          }).then(({ email, password }) => {
            user.login(email, password);
          });
        })
        .catch(() => {
          setErrors({
            ...newErrors,
            email: "Taki uzytkownik juz istnieje",
          });
        });
    }
    console.log(email, password, passwordRepeat, { ...errors });
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setErrors({
      ...errors,
      email: validateEmailField(e.target.value),
    });
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setErrors({
      ...errors,
      password: validatePasswordField(e.target.value),
    });
  };

  const onChangePasswordRepeat = (e) => {
    setPasswordRepeat(e.target.value);
    setErrors({
      ...errors,
      passwordRepeat: validatePasswordRepeat(e.target.value),
    });
  };

  return (
    <section className={styles.login}>
      <form className={styles.loginForm}>
        <h2 className={styles.title}>Nie mam konta</h2>
        <label
          htmlFor="email"
          className={clsx(styles.inputWrapper, {
            [styles.hoveringLabel]: email,
          })}
        >
          <span className={styles.inputLabel}>Nowy login</span>

          <input
            type="email"
            value={email}
            className={styles.loginInput}
            onChange={onChangeEmail}
            name="email"
          />
          {errors.email && <p className={styles.validation}>{errors.email}</p>}
        </label>

        <label
          htmlFor="password"
          className={clsx(styles.inputWrapper, {
            [styles.hoveringLabel]: password,
          })}
        >
          <span className={styles.inputLabel}>Nowe hasło</span>
          <input
            type="password"
            value={password}
            className={styles.loginInput}
            onChange={onChangePassword}
            name="password"
          />
          {errors.password && (
            <p className={styles.validation}>{errors.password}</p>
          )}
        </label>

        <label
          htmlFor="password-repeat"
          className={clsx(styles.inputWrapper, {
            [styles.hoveringLabel]: passwordRepeat,
          })}
        >
          <span className={styles.inputLabel}>Powtórz hasło</span>
          <input
            type="password"
            value={passwordRepeat}
            className={styles.loginInput}
            onChange={onChangePasswordRepeat}
            name="password-repeat"
          />
          {errors.passwordRepeat && (
            <p className={styles.validation}>{errors.passwordRepeat}</p>
          )}
        </label>

        <button
          type="submit"
          className={styles.loginButton}
          onClick={handleSubmit}
        >
          Załóz konto
        </button>
        <Link to="/login" className={styles.link}>
          Masz juz konto? Zaloguj się
        </Link>
      </form>
    </section>
  );
};

export default RegisterPage;
