import styles from "./FAQ.module.scss";
import { useState } from "react";

const FAQ = () => {
  const [isChecked, setIsChecked] = useState(false);

  const switchCheck = () => {
    setIsChecked(true);
  };

  const tabs = [
    {
      id: 1,
      label: "Czym jest EatWell i do czego służy?",
      content:
        "EatWell to aplikacja do sprawdzania składników produktów spożywczych i wspierania zdrowego odżywiania. Dzięki niej użytkownicy mogą sprawdzać produkty, analizować ich skład i wartość odżywczą, oraz szukać zdrowszej alternatywy",
    },

    {
      id: 2,
      label: "Skąd pochodzą informacje o składnikach produktów?",
      content:
        "Aplikacja wykorzystuje zewnętrzne bazy danych o produktach spożywczych, np. Open Food Facts, a także nasze własne zbiory danych, aby zapewnić dokładne i regularnie aktualizowane informacje.",
    },

    {
      id: 3,
      label: "Jak aplikacja ocenia zdrowotność produktu?",
      content:
        "Każdy produkt jest oceniany na podstawie składników, zawartości kalorii, ilości cukru, tłuszczu i innych elementów odżywczych. Produkty z dużą ilością składników naturalnych i niską zawartością sztucznych dodatków otrzymują wyższą ocenę.",
    },
    {
      id: 4,
      label:
        "Czy mogę dostosować aplikację do swoich preferencji żywieniowych?",
      content:
        "Tak, w ustawieniach konta można ustawić preferencje dietetyczne, takie jak dieta wegańska, wegetariańska, bezglutenowa, niskowęglowodanowa itp. Aplikacja będzie dostosowywać rekomendacje i oceny produktów, aby dopasować się do wybranych preferencji.",
    },
  ];

  return (
    <section className={styles.faq} id="faq">
      <h3 className={styles.title}>FAQ</h3>
      <ul className={styles.tabs}>
        {tabs.map(({ id, label, content }) => {
          return (
            <li key={id} className={styles.tab}>
              <input
                className={styles.FAQcheckbox}
                type="checkbox"
                id={`faq__tab-${id}`}
                onChange={switchCheck}
              />
              <label htmlFor={`faq__tab-${id}`}>{label}</label>
              <div className={styles.content}>
                <p className={styles.text}>{content}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FAQ;
