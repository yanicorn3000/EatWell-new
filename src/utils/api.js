import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from "@tanstack/react-query";

export const fetchFromAPI = async (url, options = {}) => {
  try {
    const req = await fetch(url, {
      ...options,
      headers: {
        accept: "application/json",
        ...options.headers,
      },
      body: JSON.stringify(options.body),
    });

    const response = await req.json();

    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
    },
  },
});

const mapProduct = (product) => {
  const {
    product_name_pl,
    product_name_en,
    product_name,
    added_countries_tags, //zbędne tagi
    compared_to_category, //zbędne tagi
    informers_tags, //zbędne tagi
    ...rest
  } = product;

  return {
    ...rest,
    product_name: product_name_pl || product_name_en || product_name,
  };
};

export const useSearchProducts = (query) => {
  return useQuery({
    queryKey: ["search", query],
    queryFn: async () => {
      let products;

      try {
        const response = await fetchFromAPI(
          `https://pl.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=40&page=1&search_simple=1&sort_by=unique_scans_n&json=1`
        );

        if (response.products.length === 0) {
          throw "Nie mamy takiego produktu";
        }

        products = response.products;
      } catch (err) {
        console.log(err);
        throw err;
      }

      return products.map(mapProduct).filter((product) => product.product_name);
    },
  });
};

export const useProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      let product;

      try {
        const response = await fetchFromAPI(
          `https://pl.openfoodfacts.org/api/v2/product/${id}`
        );

        if (!response.product) {
          throw "Nie mamy takiego produktu";
        }

        product = mapProduct(response.product);
      } catch (e) {
        console.log(e);
        throw e;
      }

      return product;
    },
  });
};

export const useCategoryProducts = (category) => {
  return useQuery({
    queryKey: ["category", category],
    queryFn: async () => {
      let products;

      try {
        const response = await fetchFromAPI(
          `https://pl.openfoodfacts.org/api/v2/search?categories_tags=${category}`
        );

        if (response.products.length === 0) {
          throw "Nie mamy takiego produktu";
        }

        products = response.products;
      } catch (e) {
        console.log(e);
        throw e;
      }

      return products.map(mapProduct).filter((product) => product.product_name);
    },
  });
};
