import { useAppDispatch } from "../../app/hooks";
import { searchProducts } from "./productsSlice";

export function ProductsSearch() {
    const dispatch = useAppDispatch();

    return (
        <form className="d-flex" role="search">
            <input className="form-control me-2" 
                onKeyDown={(e: any) => dispatch(searchProducts({ query: e.target.value}))}
                type="search"  
                placeholder="Search" aria-label="Search" />
        </form>
    )
}