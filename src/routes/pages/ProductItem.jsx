import React, { useState } from "react";
import styles from "./ProductItem.module.scss";
import { Link, useParams } from "react-router-dom";
import { useProduct } from "../../utils";
import { Card } from "../../components/App/example/Example";

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

  console.log(productData);

  return (
    <section className={styles.productItem}>
      <Card
        className={styles.wrapper}
        product={{
          picture: productData.image_front_url,
          name: productData.product_name,
        }}
      />

      <Link to="/pulpit">Powrót</Link>
    </section>
  );
};

export default ProductItem;
