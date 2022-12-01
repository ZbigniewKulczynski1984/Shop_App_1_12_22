import { useAppSelector } from '../../app/hooks';
import { selectItems, selectItemsQuantity } from './cartSlice';
import './Cart.css';

export function Cart() {
	const quantity = useAppSelector(selectItemsQuantity);
	const items = useAppSelector(selectItems);

	const names = ['Kamil', 'Jakub', 'Ania'];

	return (
		<div id="cart" className="cart">
			{quantity}

			<ul>
				{items.map((item, index) => (
					<li key={index}>
						{item.name} {item.price}
					</li>
				))}
			</ul>
		</div>
	);
}
