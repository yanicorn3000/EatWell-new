import React from "react";
import NutriScore from "../nutri/NutriScore";
import styles from "./Card.module.scss";
import clsx from "clsx";
import { Link } from "../../App/link/Link";
import { useUserProducts } from "../../../utils";
import { calculate } from "../../../utils/calculate";
import { useUser } from "../../../utils";

const Card = (props) => {
  const userProducts = useUserProducts();
  const user = useUser();

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
            <div className={styles.userCalories}>
              <span className={styles.userIcon}></span>
              <h2 className={styles.value}>
                {calculate(user.data)}
                <span>kcal</span>
              </h2>
            </div>

            <p>Twoje dzienne zapotrzebowanie kaloryczne</p>
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
        <div className={styles.scoreHeader}>
          <h3 className={styles.subtitle}>{props.product.name}</h3>
          <div className={styles.text}>
            <span>Składniki:</span> {props.product.ingredients}
            {props.product.allergens ? (
              <div className={styles.allergens}>
                <span>ALERGENY:</span> {props.product.allergens}
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
