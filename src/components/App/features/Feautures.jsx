// import React, { useState, useEffect } from "react";
import styles from "./Features.module.scss";
// import clsx from "clsx";

const Features = () => {
  const items = [
    {
      title: "Ocena produktów spożywczych",
      description:
        "Oferujemy obszerną bazę artykułów spożywcze różnych marek oraz składników podstawowych",
      icon: styles.pizza,
    },

    {
      title: "Kalkulator kalorii",
      description:
        "Dzięki wbudowanemu kalkulatorowi kalorii mozesz sprawdzać kaloryczność pojedynczych produktów oraz całych posiłków, wpisując ilość danego składnika",
      icon: styles.calculator,
    },

    {
      title: "Dostosowanie do Twoich potrzeb",
      description:
        "Uwzględnimy preferencje użytkownika, alergie, cele zdrowotne i na tej podstawie oceniamy produkty.",
      icon: styles.heart,
    },

    {
      title: "Zdrowsza alternatywa",
      description:
        "Proponuje zdrowsze zamienniki produktów o wyższej jakości składników, które lepiej wpisują się w Twoją indywidulną dietę.",
      icon: styles.apple,
    },

    {
      title: "Cele kaloryczne i odżywcze",
      description:
        "Mozesz ustawić indywidualne cele kaloryczne oraz preferencje dietetyczne i sprawdziać, czy pozostajesz na dobrej drodze do osiągnięcia swoich założeń dietetycznych.",
      icon: styles.check,
    },

    {
      title: "Lepsze decyzje zakupowe",
      description:
        "Pomozemy Ci w dokonywaniu świadomych wyborów podczas zakupów spożywczych. Dzięki aplikacji mozesz łatwo porównać wartości odżywcze i jakość żywieniową produktów na półkach sklepowych.",
      icon: styles.cart,
    },
  ];

  return (
    <section className={styles.about}>
      <h2 className={styles.title}>Dlaczego warto wybrać EatWell?</h2>
      <ul className={styles.items}>
        {items.map((item) => {
          return (
            <li className={styles.item}>
              <div className={item.icon}></div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemText}>{item.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Features;
