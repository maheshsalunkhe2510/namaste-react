import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const cartItem = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className='text-center m-4 p-4' >
            <h1 className='text-2xl font-bold'>Cart</h1>
            <div className='w-6/12 m-auto'>
                <button className='p-2 m-2 bg-gray-100 rounded-lg'
                    onClick={handleClearCart}
                >Clear Card
                </button>
                {cartItem.length === 0 && <h1
                    className='p-2 m-2 text-lg font-bold'>
                    Cart is empty. Add Items to the card</h1>}
                <ItemList items={cartItem}></ItemList>
            </div>
        </div>
    )
}

export default Cart
