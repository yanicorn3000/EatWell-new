import React from "react";
import styles from "./ProductItem.module.scss";
import { useParams } from "react-router-dom";
import { Link } from "../../../components/App/link/Link";
import { useProduct } from "../../../utils";
import Card from "../../../components/Product/card/Card";
import { formatProductData } from "../../../utils/product";
import Page from "../../../components/App/page/Page";

const ProductItem = () => {
  let { id } = useParams();
  const {
    data: productData,
    isLoading: productIsLoading,
    error: productError,
  } = useProduct(id);

  console.log(productData);

  return (
    <Page error={productError} loading={productIsLoading}>
      {() => (
        <section className={styles.productItem}>
          <Card
            className={styles.wrapper}
            product={formatProductData(productData)}
            originalProduct={productData}
          />

          <Link to="/pulpit" className={styles.back}>
            <span className={styles.chevronLeft}></span>Powrót
          </Link>
        </section>
      )}
    </Page>
  );
};

export default ProductItem;
