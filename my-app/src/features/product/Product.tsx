import { useAppDispatch } from '../../app/hooks';
import { addNotification } from '../notifications/notificationSlice';
import { addItem, Item } from '../cart/cartSlice';
import { stringify } from 'querystring';
import { ProductModel } from './productsSlice';
// import './Procuct.css';

export interface ProductProps {
	product: ProductModel
}

export function Product(props: ProductProps) {
	const dispatch = useAppDispatch();
	const {product} = props;

	const item: Item = {
		id: product.id,
		name: product.name,
		price: product.price,
		quantity: 1,

	};

	const handleClick = () => {
		dispatch(addItem(item));
		dispatch(
			addNotification({
				message: `Produkt ${item.name} został dodany do koszyka.`,
				type: 'success',
			})
		);
	};

	return (
		<div className="card">
			<div className='d-flex justify-content-center align-item-center card-img-top'>
			<img className='h-75' src={product.image} alt={product.name} />
			</div>
			<div className="card-body">
				<h5 className="card-title">{product.name}</h5>
			</div>
			<div className='card-footer d-flex justyfy-content-between align-items-center'>

				<strong className="product-price fs-4">{product.price}</strong>

				<button className="btn btn-primary" onClick={handleClick}>
					Add product
				</button>
			</div>
		</div>
	);
}
