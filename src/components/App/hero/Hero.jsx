import styles from "./Hero.module.scss";
import React, { useState, useEffect } from "react";
import { Link } from "../link/Link";

const images = ["assets/6.png", "assets/5.png", "assets/2.png"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = 3000;
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); //wracamy do 0
    }, interval);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className={styles.image}
      />

      <div className={styles.infoContainer}>
        <h2 className={styles.title}>Na co masz dziś ochotę?</h2>
        <p className={styles.text}>
          Sprawdzaj skład i kaloryczność produktów w łatwy sposób - wszystko w
          jednym miejscu, by wspierać Twoje zdrowe wybory!
        </p>
        <Link to="/register" className={styles.cta}>
          Załóż konto
        </Link>
      </div>
    </section>
  );
};

export default Hero;
