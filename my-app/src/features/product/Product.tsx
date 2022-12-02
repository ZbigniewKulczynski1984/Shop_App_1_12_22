import { useAppDispatch } from '../../app/hooks';
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

    return (<div className="card">
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>

          <span className="product-price">{product.price}</span>

          <button className="btn btn-primary" onClick={() => {dispatch(addItem(item))}}>Add product</button>
        </div>
      </div>)
  }
