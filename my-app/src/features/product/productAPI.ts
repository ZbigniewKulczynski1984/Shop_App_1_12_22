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