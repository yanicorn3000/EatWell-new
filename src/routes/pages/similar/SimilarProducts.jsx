import React from "react";
import { useParams } from "react-router-dom";
import { useProduct, useCategoryProducts } from "../../../utils";
import List from "../../../components/Product/list/List";
import Page from "../../../components/App/page/Page";
import styles from "./SimilarProducts.module.scss";
import { Link } from "../../../components/App/link/Link";

const SimilarProducts = () => {
  let { id } = useParams();
  const {
    data: productData,
    isLoading: productIsLoading,
    error: productError,
  } = useProduct(id);

  const {
    data: productsData,
    isLoading: productsIsLoading,
    error: productsError,
  } = useCategoryProducts(productData?.categories_tags.slice(0, 3));

  return (
    <Page
      error={productError || productsError}
      loading={productIsLoading || productsIsLoading}
    >
      {() => (
        <section className={styles.similar}>
          <h2 className={styles.title}>
            Produkty podobne do{" "}
            <Link to={`/product/${productData.code}`} className={styles.link}>
              {productData.product_name}
            </Link>
          </h2>

          <List products={productsData} />
          <Link to={`/product/${productData.code}`} className={styles.back}>
            <span className={styles.chevronLeft}></span>Wróć do produktu
          </Link>
        </section>
      )}
    </Page>
  );
};

export default SimilarProducts;
