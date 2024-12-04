import React, { useState } from "react";
import Search from "../search/Search";
import styles from "./UserPulpit.module.scss";
import ProductList from "../ProductList";

const UserPulpit = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <section className={styles.pulpit}>
      <Search setSearchTerm={setSearchTerm} />
      <ProductList searchTerm={searchTerm} />
    </section>
  );
};

export default UserPulpit;
