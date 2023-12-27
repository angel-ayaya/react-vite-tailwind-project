
const OrdersCard = ({order}) => {
    
    return (
        <div className="flex justify-between items-center mb-3 border border-black">
            <p>
                <span>12.02.23</span>
               
                <span className="text-gray-500">{order.totalProducts}</span>
                <span>{order.totalPrice}</span>
            </p>
        </div>
    );

}



export default OrdersCard;