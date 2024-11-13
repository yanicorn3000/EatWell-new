import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const links = [
    { href: "/about", title: "O nas" },
    { href: "/calculator", title: "Kalkulator kalorii" },
    { href: "/faq", title: "FAQ" },
  ];
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Eat.Well
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
            <Link to="/login" className={styles.menuButton}>
              Zaloguj się
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
