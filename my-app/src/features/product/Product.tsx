import { useAppDispatch } from '../../app/hooks';
import { addItem } from '../cart/cartSlice';
import './Product.css';

export interface ProductProps {
	name: string;
	price: number;
	id: string;
}

export function Product(product: ProductProps) {
	const dispatch = useAppDispatch();

	return (
		<div className="product">
			<h3>{product.name}</h3>
			<span className="product-price">{product.price}</span>

			<button
				className="product-btn"
				onClick={() => {
					dispatch(addItem(product));
				}}
			>
				Add product
			</button>
		</div>
	);
}
