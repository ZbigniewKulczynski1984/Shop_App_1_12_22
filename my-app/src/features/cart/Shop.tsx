import { Cart } from "./Cart";
import './Shop.css';
import { useAppSelector } from '../../app/hooks';
import { ProductModel, selectSearchResults } from "../product/productsSlice";
import { Product } from "../product/Product";
import { AlertList } from "../notofications/AlertList";

export function Shop() {
  const products: ProductModel[] = useAppSelector(selectSearchResults);

    return (
        <div className="position-relative">
            <Cart />

          <div className="container pt-5">
            <div className="products-list mb-5">
                { products.map((product, key) => <Product key={key} name={product.name} id={product.id} price={product.price} />)}
            </div>

            <AlertList />
          </div>
        </div>
    )
}