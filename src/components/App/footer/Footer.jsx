import styles from "./Footer.module.scss";
import { useState } from "react";
import clsx from "clsx";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ email: "", gdpr: "" });
  const [isChecked, setIsChecked] = useState(false);

  const links = [
    { name: "Blog", href: "#blog" },
    { name: "Regulamin", href: "#terms" },
    { name: "Polityka prywatności", href: "#policy" },
    { name: " Metody płatności", href: "#payment" },
  ];

  const socials = [
    { href: "#facebook", icon: styles.facebook },
    { href: "#instagram", icon: styles.instagram },
    { href: "#tiktok", icon: styles.tiktok },
    { href: "#pinterest", icon: styles.pinterest },
  ];

  const contacts = [
    { href: "mailto:info@eatwell.com", name: "info@eatwell.com" },
    { href: "tel:+456433343", name: "+4567891000" },
  ];

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setErrors({
      ...errors,
      email: "",
    });

    if (!validateEmail(value)) {
      setErrors({ ...errors, email: "Wpisz prawidłowy adres e-mail" });
    } else if (isChecked === false) {
      setErrors({
        ...errors,
        gdpr: "Zaznacz zgodę na przetwarzanie danych osobowych",
      });
    }
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const checkSwitch = () => {
    setErrors({
      ...errors,
      gdpr: "",
    });
    const nextState = !isChecked;
    setIsChecked(nextState);
    if (nextState === false) {
      setErrors((errors) => ({
        ...errors,
        gdpr: "Zaznacz zgodę na przetwarzanie danych osobowych",
      }));
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <a href="/" className={styles.logo}>
          Eat.Well
        </a>

        <ul className={styles.contact}>
          {contacts.map((contact) => {
            return (
              <li key={contact.name}>
                <a href={contact.href}>{contact.name}</a>
              </li>
            );
          })}
        </ul>
        <ul className={styles.socials}>
          {socials.map((social) => {
            return (
              <li key={social.href}>
                <a href={social.href} className={social.icon}></a>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className={styles.links}>
        {links.map((link) => {
          return (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          );
        })}
      </ul>

      <form className={styles.form}>
        <label htmlFor="email">Newsletter</label>
        <div className={styles.newsletter}>
          <input
            type="email"
            name="email"
            className={styles.email}
            placeholder="Wpisz swój e-mail"
            onChange={handleEmail}
            value={email}
          />
          <button
            type="submit"
            className={clsx(styles.submit, {
              [styles.correct]: !errors.email && !errors.gdpr && email,
            })}
            onClick={handleSubmit}
          >
            Zapisz się
          </button>
        </div>
        <ul className={styles.validation}>
          {Object.values(errors).map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
        <div className={styles.gdpr}>
          <input
            type="checkbox"
            id="gdpr"
            name="gdpr"
            onChange={checkSwitch}
            className={styles.GDPRcheckbox}
          />
          <label htmlFor="gdpr">
            Zgadzam się na przetwarzanie moich danych osobowych przez EatWell z
            siedzibą w Warszawie, w celu wysyłki na podane dane kontaktowe
            Newslettera zawierającego treści marketingowe zgodnie z
            <a href="#" className={styles.terms}>
              Regulaminem
            </a>
          </label>
        </div>
      </form>
    </footer>
  );
};

export default Footer;
