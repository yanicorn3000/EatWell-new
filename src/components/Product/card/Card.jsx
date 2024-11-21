import React from "react";
import NutriScore from "../nutri/NutriScore";
import styles from "./Card.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useUserProducts } from "../../../utils";

const Card = (props) => {
  const userProducts = useUserProducts();

  return (
    <div className={clsx(styles.productCard, props.className)}>
      <div className={styles.pictureColumn}>
        <div className={styles.alerts}>
          <img src={props.product.picture} alt="migdały" />
          {props.product.allergens ? (
            <div className={styles.allergensAlert}>
              <span className={styles.triangle}></span>
              <p>Ten produkt zawiera alergeny</p>
            </div>
          ) : null}
          <div className={styles.userData}>
            <h5>Twoje zapotrzebowanie kaloryczne:</h5>
            <span></span>
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <Link
            to={"/user/products"}
            className={clsx(styles.saveButton, {
              [styles.disabled]: props.disabled,
            })}
            onClick={() => {
              userProducts.add(props.originalProduct);
            }}
          >
            Zapisz product<span className={styles.save}></span>
          </Link>

          <Link
            to={`/product/${props.product.code}/similar`}
            className={clsx(styles.findButton, {
              [styles.disabled]: props.disabled,
            })}
          >
            Wyszukaj podobne
          </Link>
        </div>
      </div>

      <div className={styles.productScore}>
        <div>
          <h3 className={styles.subtitle}>{props.product.name}</h3>
          <div className={styles.text}>
            <p>
              <span>Składniki:</span> {props.product.ingredients}
            </p>
            {props.product.allergens ? (
              <div className={styles.allergens}>
                <p>
                  <span>ALERGENY:</span> {props.product.allergens}
                </p>
              </div>
            ) : null}
          </div>
        </div>

        <div className={styles.keyInfo}>
          <NutriScore score={props.product.score} />

          <div className={styles.calories}>
            <h2 className={styles.value}>
              {props.product.calories}
              <span>kcal</span>
            </h2>
            <div className={styles.fire}></div>
            <p className={styles.text}>Wartość energetyczna w 100g </p>
          </div>
        </div>

        <ul className={styles.ingredients}>
          {props.product.nutriments.map((nutriment, index) => {
            return (
              <li
                key={index}
                className={clsx(styles.ingredient, {
                  [styles.high]: nutriment.type === "high",
                  [styles.low]: nutriment.type === "low",
                  [styles.moderate]: nutriment.type === "moderate",
                })}
              >
                <div>
                  <h4 className={styles.ingredientTitle}>{nutriment.title}</h4>
                  {nutriment.value === undefined ? (
                    <span>Brak danych</span>
                  ) : (
                    <span className={styles.measure}>
                      {nutriment.value}/100g
                    </span>
                  )}
                </div>
                <p className={styles.quantity}>{nutriment.description}</p>
              </li>
            );
          })}
        </ul>

        <ul className={styles.analysis}>
          {props.product.analysis.map((tag, index) => {
            return (
              <li key={index} className={styles.tag}>
                <div className={styles.tagContent}>
                  <h5>{tag.title}</h5>
                  <span
                    className={clsx(styles.icon, {
                      [styles.up]: tag.type === "high",
                      [styles.down]: tag.type === "low",
                      [styles.empty]: tag.value === undefined,
                    })}
                  ></span>
                  {tag.value === undefined || tag.value === "- g" ? (
                    <span>Brak danych</span>
                  ) : (
                    <span className={styles.measure}>{tag.value}/100g</span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
