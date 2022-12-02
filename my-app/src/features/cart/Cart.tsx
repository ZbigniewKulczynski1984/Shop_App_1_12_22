import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectItems, Item as CartItem, removeItem, selectTotal, decreaseQuantity, increaseQuantity, selectIsDisplayed } from './cartSlice';
import './Cart.css';

export function Cart() {
    const items: CartItem[] = useAppSelector(selectItems);
    const total: number = useAppSelector(selectTotal);
    const isDisplayed: boolean = useAppSelector(selectIsDisplayed);
    const dispatch = useAppDispatch();

    const renderRemoveButton = (id: string) => {
      return (
        <button className="btn btn-light" onClick={() => dispatch(removeItem(id))}>x</button>
      )
    }

    return (
      <div id="cart" className={"card position-absolute top-0 end-0 z-index-1 w-25 " + (isDisplayed ? "d-block" : "d-none")}>
          <ul className="list-group list-group-flush">
              { items.map((item, index) => <li key={index} className="list-group-item d-flex justify-content-between align-items-center">{item.name} {item.price} 
              
                <span>
                  <button className="btn btn-light" onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                  ({item.quantity})
                  <button className="btn btn-light" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  {renderRemoveButton(item.id)}
                </span>
              </li>) }
          </ul>

          <div className="card-footer d-flex justify-space-between">
            <span>Total:</span> <strong>{total} PLN</strong>
          </div>
      </div>
    )
  }