import { Cart } from "./Cart";
import './Shop.css';
import { useAppSelector } from '../../app/hooks';
import { ProductModel, selectProducts } from "../product/productsSlice";
import { Product } from "../product/Product";

export function Shop() {
  const products: ProductModel[] = useAppSelector(selectProducts);

    return (
        <div>
            <Cart />

            <div className="products-list">
              { products.map((product, key) => <Product key={key} name={product.name} id={product.id} price={product.price} />)}
            </div>
        </div>
    )
}
