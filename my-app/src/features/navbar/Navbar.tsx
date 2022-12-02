import { useAppDispatch } from '../../app/hooks';
import { toggleCart } from '../cart/cartSlice';
export function Navbar() {
    const dispatch = useAppDispatch();

    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="./">Navbar</a>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <button className="btn btn-warning" onClick={() => dispatch(toggleCart())}>Cart</button>
            </div>
        </nav>
    )

}