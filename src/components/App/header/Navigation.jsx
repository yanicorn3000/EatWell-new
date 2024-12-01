import React from "react";
import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import { clsx } from "clsx";

const Navigation = ({ links, user, variant, className }) => {
  return (
    <nav
      className={clsx(className, {
        [styles.vertical]: variant === "vertical",
      })}
    >
      <ul className={clsx(styles.menu)}>
        {links.map(({ href, title }) => {
          return (
            <li key={href} className={styles.menuItem}>
              <a key={title} href={href}>
                {title}
              </a>
            </li>
          );
        })}
        {user.isLoggedIn ? (
          <div className={styles.buttonGroup}>
            <Link to="/user" className={styles.userAccount}></Link>
            <Link to="/" className={styles.logOut} onClick={user.logout}>
              Wyloguj<span className={styles.userLogOut}></span>
            </Link>
          </div>
        ) : (
          <Link to="/login" className={styles.menuButton}>
            Zaloguj się
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
