import React from "react";
import { useSearchProducts } from "../../utils";
import List from "../../components/Product/list/List";
import Page from "../../components/App/page/Page";

const ProductList = ({ searchTerm }) => {
  const {
    data: productsData,
    isLoading: isLoadingProducts,
    error: productsError,
  } = useSearchProducts(searchTerm);

  return (
    <Page error={productsError} loading={isLoadingProducts}>
      {() => <List products={productsData} />}
    </Page>
  );
};

export default ProductList;
