import React from "react";
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
        <a href="/" className={styles.logo}>
          Eat.Well
        </a>
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
            <button className={styles.menuButton}>Zaloguj się</button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
