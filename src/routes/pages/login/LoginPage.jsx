import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { clsx } from "clsx";
import { useUser } from "../../../utils";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const user = useUser();
  // const navigate = useNavigate();

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

    const hasErrors = Object.values(newErrors).filter(Boolean).length;

    if (!hasErrors) {
      user.login(email, password);
      // navigate("/pulpit");
    }
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

  return (
    <section className={styles.login}>
      <form className={styles.loginForm}>
        <h2 className={styles.title}>Mam konto</h2>
        <label
          htmlFor="email"
          className={clsx(styles.inputWrapper, {
            [styles.hoveringLabel]: email,
          })}
        >
          <span className={styles.inputLabel}>Login</span>

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
          <span className={styles.inputLabel}>Hasło</span>
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

        <button
          type="submit"
          className={styles.loginButton}
          onClick={handleLogin}
        >
          Zaloguj się
        </button>
        <Link to="/register" className={styles.link}>
          Nie masz konta? Zarejestruj się{" "}
        </Link>
      </form>
    </section>
  );
};

export default LoginPage;
