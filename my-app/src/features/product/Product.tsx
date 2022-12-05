import { useAppDispatch } from "../../app/hooks";
import { addNotification } from "../notofications/notificationSlice";
import { addItem, Item } from '../cart/cartSlice';
import './Product.css';

export interface ProductProps {
    name: string;
    price: number;
    id: string;
  }
  
  export function Product(product: ProductProps) {
    const dispatch = useAppDispatch();

    const item: Item = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    }

    const handleClick = () => { 
      dispatch(addItem(item));
      dispatch(addNotification({ message: `Produkt ${item.name} został dodany do koszyka.`, type: 'success'}))
    };
  
    return (<div className="card">
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>

          <span className="product-price">{product.price}</span>

          <button className="btn btn-primary" onClick={handleClick}>Add product</button>
        </div>
      </div>)
  }