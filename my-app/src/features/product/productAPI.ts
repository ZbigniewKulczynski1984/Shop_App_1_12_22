export interface ProductResponse {
    id: number;
    price: number;
    title: string;
    description: string;
    category: string;
    image: string;
  }
  
  export const fetchProducts = async (): Promise<ProductResponse[]> => {
    return fetch("https://fakestoreapi.com/products").then((response) =>
      response.json()
    );
  };

  export const fetchSortedProducts = async (
    sort: string
  ): Promise<ProductResponse[]> => {
    
    return fetch("https://fakestoreapi.com/products?sort=" + sort).then(
      (response) => response.json()
    );
  };