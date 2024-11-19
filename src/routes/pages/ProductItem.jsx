import React, { useState } from "react";
import styles from "./ProductItem.module.scss";
import { Link, useParams } from "react-router-dom";
import { useProduct } from "../../utils";
import { Card } from "../../components/App/example/Example";

const getLangValues = (arr, lang) =>
  arr
    .filter((a) => a.startsWith(`${lang}:`))
    .map((a) => a.replace(`${lang}:`, ""));

const getTranslationData = (arr) => {
  const plStrings = getLangValues(arr, "pl");

  if (plStrings.length) {
    return plStrings.join(", ");
  }

  const enStrings = getLangValues(arr, "en");

  return enStrings.join(", ");
};

const descriptions = {
  low: "Mała ilość",
  moderate: "Umiarkowana ilość",
  high: "Wysoka ilość",
};

const getDescription = (type) => {
  return descriptions[type];

  //   if (type === "low") {
  //     return "Mała ilość";
  //   }

  //   if (type === "moderate") {
  //     return "Umiarkowana ilość";
  //   }

  //   if (type === "high") {
  //     return "Wysoka ilość";
  //   }
};

const setTagType = (value, moreThan, lessThan) => {
  if (value >= moreThan) {
    return "high";
  }

  if (value < lessThan) {
    return "low";
  }
};

const ProductItem = () => {
  let { id } = useParams();
  const {
    data: productData,
    isLoading: productIsLoading,
    error: productError,
  } = useProduct(id);

  if (productIsLoading) {
    return "lodaing";
  }

  if (productError) {
    return "Nie udało się pobrać danych";
  }

  console.log(productData.nutriments.fiber);
  console.log(productData);

  const sugars = productData.nutriments.sugars;
  const fat = productData.nutriments.fat;
  const salt = productData.nutriments.salt;
  const saturatedFat = productData.nutriments["saturated-fat"];

  const nutriments = [
    {
      title: "Tłuszcz",
      value: fat !== undefined ? `${fat} g` : undefined,
      description: getDescription(productData.nutrient_levels.fat),
      type: productData.nutrient_levels.fat,
    },

    {
      title: "Kwasy tłuszczowe nasycone",
      value: saturatedFat !== undefined ? `${saturatedFat} g` : undefined,
      description: getDescription(productData.nutrient_levels["saturated-fat"]),
      type: productData.nutrient_levels["saturated-fat"],
    },

    {
      title: "Cukier",
      value: sugars !== undefined ? `${sugars} g` : undefined,
      description: getDescription(productData.nutrient_levels.sugars),
      type: productData.nutrient_levels.sugars,
    },

    {
      title: "Sól",
      value: salt !== undefined ? `${salt} g` : undefined,
      description: getDescription(productData.nutrient_levels.salt),
      type: productData.nutrient_levels.salt,
    },
  ];

  const fiber =
    productData.nutriments.fiber ?? productData.nutriments.fiber_modifier;
  const proteins = productData.nutriments.proteins;
  const carbohydrates = productData.nutriments.carbohydrates;

  const analysis = [
    {
      title: "Białko",
      value: proteins !== undefined ? `${proteins} g` : undefined,
      type: setTagType(proteins, 20, 10),
    },
    {
      title: "Węglowodany",
      value: carbohydrates !== undefined ? `${carbohydrates} g` : undefined,
      type: setTagType(productData.nutriments.carbohydrates, 30, 10),
    },
    {
      title: "Błonnik",
      value: fiber !== undefined ? `${fiber} g` : undefined,
      type: setTagType(fiber, 9, 6),
    },
  ];

  return (
    <section className={styles.productItem}>
      <Card
        className={styles.wrapper}
        product={{
          picture: productData.image_front_url,
          name: productData.product_name,
          score: productData.nutriscore_grade.toUpperCase(),
          ingredients: getTranslationData(productData.ingredients_tags || []),
          allergens: getTranslationData(productData.allergens_tags || []),
          calories: productData.nutriments["energy-kcal"],
          nutriments: nutriments,
          analysis: analysis,
        }}
      />

      <Link to="/pulpit" className={styles.back}>
        <span className={styles.chevronLeft}></span>Powrót
      </Link>
    </section>
  );
};

export default ProductItem;
