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
				{isLoading ? (
					<div className="text-center">
						<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</div>
				) : (
					<div className="products-list mb-5">
						{products.map((product, key) => (
							<Product key={key} product={product} />
						))}
					</div>
				)}
				<AlertList />
			</div>
		</div>
	);
}
