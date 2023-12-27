/**
 * This function will return the total price of the products in the cart
 * @param {Array} products cartProducts: Array of objects
 * @returns {Number} totalPrice: Number
 */
// export const totalPrice = (products) => {
//     let sum = 0;
//     products.forEach(product => sum += product.price);
//     return sum;
// }


export const totalPrice = (products) => {
    return products.reduce((acc, item) => {
        return acc + item.price;
    }, 0);
}
