import { Cart } from "./Cart";
import { Item } from './cartSlice';
import { Product } from "./Product";

export function Shop() {
  const product: Item = {
    id: '1',
    name: 'Call of Duty',
    price: 150
}

return (
    <div>
        <Cart />

        <Product name={product.name} id={product.id} price={product.price} />
    </div>
)
}