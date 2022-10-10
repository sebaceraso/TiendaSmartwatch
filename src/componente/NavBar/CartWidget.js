import { useCart } from '../../context/CartContext';

export const CartWidget = () => {
    const {cartQuantity} = useCart()
    return (
        <>
            <span className='btn btn-success'> {cartQuantity() || ''}</span>
        </>
    )
}
