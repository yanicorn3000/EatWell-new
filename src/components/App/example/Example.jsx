import styles from "./Example.module.scss";
import NutriScore from "../nutri/NutriScore";
import clsx from "clsx";

export const Card = (props) => {
  return (
    <div className={clsx(styles.productCard, props.className)}>
      <div className={styles.picture}>
        <img src={props.product.picture} alt="migdały" />

        {props.product.allergens ? (
          <div className={styles.allergensAlert}>
            <span className={styles.triangle}></span>
            <p>Ten produkt zawiera alergeny</p>
          </div>
        ) : null}
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
                  {console.log(tag.value)}
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

        {/* <div className={styles.notifications}>
          <h4> Wpływ na zdrowie</h4>
          <p className={styles.notification}>
            <span className={styles.exclamation}></span>
            Wysokie spożycie tłuszczów, zwłaszcza tłuszczów nasyconych, może
            podnieść poziom cholesterolu, co zwiększa ryzyko chorób serca.
          </p>
        </div> */}
      </div>
    </div>
  );
};

const Example = () => {
  const nutrimentsTags = [
    {
      title: "Tłuszcz",
      value: "53.3 g ",
      description: "Wysoka ilość",
      type: "high",
    },

    {
      title: "Kwasy tłuszczowe nasycone",
      value: "4.3 g ",
      description: "Umiarkowana ilość",
      type: "moderate",
    },

    {
      title: "Cukier",
      value: "4.8 g ",
      description: "Mała ilość",
      type: "low",
    },

    {
      title: "Sól",
      value: "0.01 g",
      description: "Mała ilość",
      type: "low",
    },
  ];

  const analysisTags = [
    { title: "Białko", value: "24,5 g", type: "high" },
    { title: "Węglowodany", value: "4,8 g", type: "low" },
    { title: "Błonnik", value: "12,1 g", type: "high" },
  ];
  return (
    <section className={styles.example}>
      <h2 className={styles.title}>
        Jak wygląda przykładowa analiza produktu?
      </h2>

      <Card
        product={{
          picture: "/assets/almonds.png",
          name: "Migdały",
          score: "A",
          ingredients: "Kalifornijskie migdały całe, łuskane",
          allergens: "orzechy",
          calories: 621,
          nutriments: nutrimentsTags,
          analysis: analysisTags,
        }}
      />
    </section>
  );
};

export default Example;
