import React from "react";
import styles from "./Example.module.scss";
import Card from "../../Product/card/Card";

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
          picture: "assets/almonds.png",
          name: "Migdały",
          score: "A",
          ingredients: "Kalifornijskie migdały całe, łuskane",
          allergens: "orzechy",
          calories: 621,
          nutriments: nutrimentsTags,
          analysis: analysisTags,
        }}
        disabled
      />
    </section>
  );
};

export default Example;
