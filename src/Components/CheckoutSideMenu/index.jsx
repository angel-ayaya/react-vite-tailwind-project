import './styles.css'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import CartCard from '../CartCard'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu overflow-y-auto flex flex-col fixed right-0 bg-white border-l shadow-2xl border-slate-100 shadow-gray-800`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XCircleIcon className='w-6 h-6 cursor-pointer'
                        onClick={() => context.closeCheckoutSideMenu()}
                    />
                </div>

            </div>
            <div>
                
                {context.carProducts.map((product) => (
                    <CartCard product={product} />
                ))}
            </div>
            
        </aside>
    );
}

export default CheckoutSideMenu;