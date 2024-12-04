import React from "react";
import styles from "./List.module.scss";
import NutriScore from "../nutri/NutriScore";
import { useUserProducts } from "../../../utils";
import { Link } from "../../App/link/Link";

const List = ({ products }) => {
  const userProducts = useUserProducts();

  return (
    <div className={styles.productList}>
      <ul className={styles.products}>
        {products.map((item, index) => {
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

                {userProducts.findProduct(item) ? (
                  <a
                    href="#"
                    className={styles.removeFromList}
                    onClick={(e) => {
                      e.preventDefault();
                      return userProducts.remove(item.code);
                    }}
                  ></a>
                ) : (
                  <a
                    href="#"
                    className={styles.addToList}
                    onClick={(e) => {
                      e.preventDefault();
                      return userProducts.add(item);
                    }}
                  ></a>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
