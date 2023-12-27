import PropTypes from 'prop-types';
import { XCircleIcon } from '@heroicons/react/24/outline'




const CartCard = ({product, handleDelete}) => {
    let renderXCircleIcon 
    if (handleDelete){
        renderXCircleIcon = <XCircleIcon onClick={() => handleDelete(product.id)} className='w-6 h-6 cursor-pointer' />
    }
    return (
        <div>
            <div className='flex justify-between items-center p-6 hover:shadow-inner hover:bg-slate-100'>
                <div className='flex items-center cursor-pointer'>
                    <img src={product.images} alt={product.title} className='w-16 h-16 object-cover rounded-md' />
                    <div className='ml-4'>
                        <h3 className='font-medium text-lg'>{product.title}</h3>
                        <p className='text-gray-500 text-sm'>${product.price}</p>
                    </div>
                </div>
                <div>
                    {renderXCircleIcon}
                </div>
            </div>
        </div>
    );

}

// PropType is a library for typechecking of props in react
CartCard.propTypes = {
    product: PropTypes.object.isRequired
  }

export default CartCard;