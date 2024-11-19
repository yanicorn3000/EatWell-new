import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchProducts } from "../../utils";
import styles from "./ProductList.module.scss";
import NutriScore from "../../components/App/nutri/NutriScore";

const ProductList = ({ searchTerm }) => {
  const {
    data: productsData,
    isLoading: isLoadingProducts,
    error: productsError,
  } = useSearchProducts(searchTerm);

  if (productsError) {
    return <p>{productsError}</p>;
  }

  if (isLoadingProducts) {
    return (
      <div>
        <p>Trwa ładowanie...</p>
      </div>
    );
  }

  return (
    <div className={styles.productList}>
      <ul className={styles.products}>
        {productsData.map((item, index) => {
          return (
            <li className={styles.product} key={index}>
              <div className={styles.productWrapper}>
                <div className={styles.imgWrapper}>
                  <img
                    className={styles.image}
                    src={item.image_front_url}
                    alt={item.product_name}
                  />
                </div>
                <h5 className={styles.productName}>{item.product_name}</h5>
              </div>
              <div className={styles.optionsWrapper}>
                <NutriScore
                  score={item.nutriscore_grade.toUpperCase()}
                  size="small"
                />
                <Link
                  to={`/product/${item.code}`}
                  className={styles.listButton}
                >
                  Wybierz<span className={styles.chevronRight}></span>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
