import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {  addItem, Item, selectItemsQuantity } from './cartSlice';

export function Shop() {
    const dispatch = useAppDispatch();
    const quantity = useAppSelector(selectItemsQuantity);

    const product: Item = {
        id: '1',
        name: 'Call of Duty',
        price: 150
    }

    return (
        <div>
            <div id="cart" className="cart">
                {quantity}
            </div>

            <div className="product">
                <button onClick={() => {dispatch(addItem(product))}}>Add product</button>
            </div>
        </div>
    )
}