import { Cart } from "./Cart";
import './Shop.css';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { loadProducts, ProductModel, selectSearchResults } from "../product/productsSlice";
import { Product } from "../product/Product";
import { AlertList } from "../notifications/AlertList";
import { useEffect } from "react";

export function Shop() {
  const products: ProductModel[] = useAppSelector(selectSearchResults);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

    return (
        <div className="position-relative">
			<Cart />

			<div className="container pt-5">
				<div className="products-list mb-5">
					{products.map((product, key) => (
						<Product
							key={key}
							name={product.name}
							id={product.id}
							price={product.price}
						/>
					))}
				</div>

				<AlertList />
			</div>
		</div>
	);
}
