import { useAppDispatch } from '../../app/hooks';
import { toggleCart } from '../cart/cartSlice';
import { ProductsSearch } from '../product/ProductsSearch';

export function Navbar() {
    const dispatch = useAppDispatch();

    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="./">Navbar</a>
                
                <ProductsSearch />

                <button className="btn btn-warning" onClick={() => dispatch(toggleCart())}>Cart</button>
            </div>
        </nav>
    )
}