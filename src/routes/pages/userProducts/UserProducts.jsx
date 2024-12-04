import React from "react";
import List from "../../../components/Product/list/List";
import styles from "./UserProducts.module.scss";
import { useUserProducts } from "../../../utils";

const UserProducts = () => {
  const userProducts = useUserProducts();

  return (
    <div className={styles.myProducts}>
      <h2 className={styles.title}> Twoje zapisane produkty</h2>
      <List products={userProducts.data} />
    </div>
  );
};

export default UserProducts;
