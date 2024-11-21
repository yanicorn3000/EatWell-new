import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { clsx } from "clsx";
import styles from "./LoginPage.module.scss";

//TODO
//walidacja

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateEmailField = (value) => {
    if (!value) {
      return "Wpisz adres e-mail";
    }
  };

  const validatePasswordField = (value) => {
    if (!value) {
      return "Wpisz hasło";
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const newErrors = { ...errors };

    newErrors.email = validateEmailField(email);
    newErrors.password = validatePasswordField(password);

    setErrors(newErrors);
    console.log(email, password, { ...errors });
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
      password: validatePasswordField(e.target.value),
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
          {errors.password && (
            <p className={styles.validation}>{errors.password}</p>
          )}
        </label>

        <button
          type="submit"
          className={styles.loginButton}
          onClick={handleLogin}
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
