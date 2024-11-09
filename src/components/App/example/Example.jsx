import styles from "./Example.module.scss";
import NutriScore from "../nutri/NutriScore";
import clsx from "clsx";

const Example = () => {
  const ingredients = [
    {
      title: "Tłuszcz",
      value: "53.3 g / 100 g",
      description: "Wysoka ilość",
      type: "high",
    },

    {
      title: "Kwasy tłuszczowe nasycone",
      value: "4.3 g / 100 g",
      description: "Umiarkowana ilość",
      type: "moderate",
    },

    {
      title: "Cukier",
      value: "4.8 g / 100 g",
      description: "Mała ilość",
      type: "low",
    },

    {
      title: "Sól",
      value: "0.01 g / 100 g",
      description: "Mała ilość",
      type: "low",
    },
  ];

  const indicators = [
    { title: "Dla Wegetarian", value: "TAK", type: "positive" },
    { title: "Dla Wegan", value: "TAK", type: "positive" },
    { title: "Gluten", value: "NIE", type: "positive" },
    { title: "Olej palmowy", value: "NIE", type: "positive" },
  ];

  return (
    <section className={styles.example}>
      <h2 className={styles.title}>
        Jak wygląda przykładowa analiza produktu?
      </h2>

      <div className={styles.productCard}>
        <img src="/assets/almonds.png" />

        <div className={styles.allergensAlert}>
          <span className={styles.triangle}></span>
          <p>Ten produkt zawiera alergeny</p>
        </div>

        <div className={styles.productScore}>
          <div>
            <h3 className={styles.subtitle}>Migdały</h3>
            <div className={styles.text}>
              <p>
                <span>Składniki:</span> Kalifornijskie migdały całe, łuskane
              </p>
              <div className={styles.allergens}>
                <p>
                  <span>ALERGENY:</span> orzechy
                </p>
              </div>
            </div>
          </div>

          <div className={styles.keyInfo}>
            <NutriScore score="A" />

            <div className={styles.calories}>
              <h2 className={styles.value}>
                621<span>kcal</span>
              </h2>
              <div className={styles.fire}></div>
              <p className={styles.text}>Wartość energetyczna w 100g </p>
            </div>
          </div>

          <ul className={styles.ingredients}>
            {ingredients.map((ingredient) => {
              return (
                <li
                  className={clsx(styles.ingredient, {
                    [styles.high]: ingredient.type === "high",
                    [styles.low]: ingredient.type === "low",
                    [styles.moderate]: ingredient.type === "moderate",
                  })}
                >
                  <div>
                    <h4 className={styles.ingredientTitle}>
                      {ingredient.title}
                    </h4>
                    <span className={styles.measure}>{ingredient.value}</span>
                  </div>
                  <p className={styles.quantity}>{ingredient.description}</p>
                </li>
              );
            })}
          </ul>
          <ul className={styles.indicators}>
            {indicators.map((indicator) => {
              return (
                <li className={styles.indicator}>
                  <h5>{indicator.title}</h5>
                  <div className={styles.indicatorContent}>
                    <p className={styles.indicatorValue}>{indicator.value}</p>
                    <span
                      className={clsx({
                        [styles.check]: indicator.type === "positive",
                        [styles.exclamation]: indicator.type === "negative",
                      })}
                    ></span>
                  </div>
                </li>
              );
            })}
          </ul>
          <div>
            <p>
              <span></span>
              Wysokie spożycie tłuszczów, zwłaszcza tłuszczów nasyconych, może
              podnieść poziom cholesterolu, co zwiększa ryzyko chorób serca.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Example;
