import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../utils";
import styles from "./Header.module.scss";

const Header = () => {
  const user = useUser();

  const links = user.isLoggedIn
    ? [{ href: "/list", title: "Twoje produkty" }]
    : [
        { href: "#about", title: "O nas" },
        { href: "#calculator", title: "Kalkulator kalorii" },
        { href: "#faq", title: "FAQ" },
      ];
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <h1 className={styles.logo}>Eat.Well</h1>
        </Link>
        <nav>
          <ul className={styles.menu}>
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
                <Link to="/pulpit" className={styles.userAccount}></Link>
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
      </div>
    </header>
  );
};

export default Header;
