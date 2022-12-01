import { useAppSelector } from '../../app/hooks';
import { selectItems, selectItemsQuantity, Item } from './cartSlice';
import './Cart.css';

export function Cart() {
    const quantity: number = useAppSelector(selectItemsQuantity);
    const items: Item[] = useAppSelector(selectItems);

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
