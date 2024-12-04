import React from "react";
import { Link } from "../link/Link";
import { useUser } from "../../../utils";
import styles from "./Header.module.scss";
import HamburgerMenu from "./HamburgerMenu";
import Navigation from "./Navigation";

const Header = () => {
  const user = useUser();

  const links = user.isLoggedIn
    ? [
        { href: "/pulpit", title: "Wyszukiwarka" },
        { href: "/user/products", title: "Moje produkty" },
      ]
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
        <HamburgerMenu links={links} user={user} />
        <Navigation
          links={links}
          user={user}
          className={styles.desktopNavigation}
        />
      </div>
    </header>
  );
};

export default Header;
