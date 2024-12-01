import React from "react";
import { createPortal } from "react-dom";
import styles from "./HamburgerMenu.module.scss";
import { useState } from "react";
import clsx from "clsx";
import Navigation from "./Navigation";

const HamburgerMenu = ({ links, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <div className={clsx(styles.hamburgerMenu)}>
      <button className={styles.hamburger} onClick={toggleMenu}></button>
      {createPortal(
        <>
          <div
            className={clsx(styles.shade, {
              [styles.open]: isOpen,
            })}
            onClick={() => {
              setIsOpen(false);
            }}
          />
          <div
            className={clsx(styles.hamburgerNavigation, {
              [styles.open]: isOpen,
            })}
          >
            <Navigation links={links} user={user} variant="vertical" />
          </div>
        </>,
        document.body
      )}
    </div>
  );
};

export default HamburgerMenu;
