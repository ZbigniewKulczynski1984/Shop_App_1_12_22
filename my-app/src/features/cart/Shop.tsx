import { Cart } from './Cart';
import './Shop.css';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
	loadProducts,
	ProductModel,
	selectIsLoading,
	selectSearchResults,
} from '../product/productsSlice';
import { Product } from '../product/Product';
import { AlertList } from '../notifications/AlertList';
import { useEffect } from 'react';

export function Shop() {
	const products: ProductModel[] = useAppSelector(selectSearchResults);
	const isLoading: boolean = useAppSelector(selectIsLoading);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loadProducts());
	}, []);

	return (
		<div className="position-relative">
			<Cart />

			<div className="container pt-5">
            { isLoading ? 
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div> : 
              <div>
                <div className="mb-3">
                  <strong className="me-2">Filters:</strong>
                  <button className="btn btn-light me-1" onClick={() => dispatch(sortProducts("asc"))}>
                    <i className="bi bi-sort-alpha-down"></i>
                  </button>
                  <button className="btn btn-light" onClick={() => dispatch(sortProducts("desc"))}>
                  <i className="bi bi-sort-alpha-down-alt"></i>
                  </button>
                </div>
                <div className="products-list mb-5">
                  { products.map((product, key) => <Product key={key} product={product} />)}
                </div>
              </div>
            }

            <AlertList />
          </div>
		</div>
	);
}
