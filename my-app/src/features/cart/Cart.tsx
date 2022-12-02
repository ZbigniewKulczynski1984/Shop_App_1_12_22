import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectItems, selectItemsQuantity, Item, removeItem, selectTotal, decreaseQuantity, increaseQuantity } from './cartSlice';
import './Cart.css';

export function Cart() {
    const quantity: number = useAppSelector(selectItemsQuantity);
    const items: Item[] = useAppSelector(selectItems);
    const total: number = useAppSelector(selectTotal);
    const dispatch = useAppDispatch();

    const renderRemoveButton = (id: string) => {
      return (
        <button onClick={() => dispatch(removeItem(id))}>Remove</button>
      )
    }

    return (
      <div id="cart" className="cart">
        {quantity}

        <ul>
        { items.map((item, index) => <li key={index}>{item.name} {item.price} 
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            ({item.quantity})
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            {renderRemoveButton(item.id)}</li>) }
        </ul>
        <div>
          Total: {total}
        </div>

      </div>
    )
    }