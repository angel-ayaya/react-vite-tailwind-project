import './styles.css'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail producton flex flex-col fixed right-0 bg-white border-l shadow-2xl border-slate-100 shadow-gray-800`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XCircleIcon className='w-6 h-6 cursor-pointer'
                        onClick={() => context.closeProductDetail()}
                    />
                </div>

            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-xl'
                    src={context.productToShow.images}
                    alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='text-2xl font-bold text-slate-900 mb-2'>
                    ${context.productToShow.price}
                </span>
                <span className='font-bold text-xl tracking-tight'>
                    {context.productToShow.title}
                </span>
                <span className='font-light text-sm'>
                    {context.productToShow.description}
                </span>
            </p>
        </aside>
    );
}

export default ProductDetail;