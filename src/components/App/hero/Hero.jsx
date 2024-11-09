import styles from "./Hero.module.scss";
import React, { useState } from "react";

const images = ["assets/6.png", "assets/5.png", "assets/2.png"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); //wracamy do 0
  };
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <section className={styles.hero}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={styles.image}
      />
      <div className={styles.btn}>
        <button onClick={prevImage} style={styles.button}>
          Previous
        </button>
        <button onClick={nextImage} style={styles.button}>
          Next
        </button>
      </div>
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>Na co masz dziś ochotę?</h2>
        <p className={styles.text}>
          Sprawdzaj skład i kaloryczność produktów w łatwy sposób - wszystko w
          jednym miejscu, by wspierać Twoje zdrowe wybory!
        </p>
        <button className={styles.cta}>Załóż konto</button>
      </div>
    </section>
  );
};

export default Hero;
