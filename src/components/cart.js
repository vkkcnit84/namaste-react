import { useSelector } from "react-redux"
import ItemList from '../components/ItemList'

const cart = () => {
    const cart = useSelector(state => state.cart.items)
    return (
        <div className="w-6/12 m-auto">
            <h1>Cart</h1>
                { cart.length > 0 && <ItemList items={cart} />}
            <div >

            </div>
        </div>
    )
}   

export default cart;