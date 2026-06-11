import React from 'react'
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, increaseQty, decreaseQty, removeFromCart, clearCart } = useCart();

    // Calculate total price
    const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0);

    return (
        <div className='max-w-6xl mx-auto p-10 min-h-screen bg-white dark:bg-slate-950'>

            <h1 className='text-4xl font-bold mb-10 text-gray-800 dark:text-white'>Shopping Cart</h1>

            {/* Empty cart message */}

            {cart.length === 0 ? (
                <p className='text-gray-500 dark:text-gray-400'>Your cart is empty.</p>
            ) : (
                <div className='flex flex-col gap-6'>

                    {/* Cart items */}
                    {cart.map((item) => (

                        <div
                            key={item.productId}
                            className='flex flex-col md:flex-row items-center justify-between gap-5 text-center border border-gray-200 dark:border-slate-700 rounded-2xl p-4 shadow-sm bg-white dark:bg-slate-800'
                        >

                            {/* left side */}
                            <div className='flex items-center gap-4 w-full md:w-auto'>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className='w-28 h-28 object-cover rounded-xl'
                                />
                            </div>

                            <div className='flex-1 mt-4 md:mt-0'>
                                <h2 className='font-bold text-lg text-gray-800 dark:text-white'>
                                    {item.name}
                                </h2>

                                <p className='text-gray-500 dark:text-gray-400'>
                                    ${item.price}
                                </p>

                                <div className='flex items-center mt-3 gap-3 text-center w-full md:w-auto justify-center'>
                                    {/* - */}
                                    <button
                                        onClick={() => decreaseQty(item.productId)}
                                        className='bg-gray-200 dark:bg-slate-700 py-1 px-3 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 text-gray-800 dark:text-white'
                                    >
                                        -
                                    </button>

                                    {/* Quantity */}
                                    <span className='font-bold text-gray-800 dark:text-white'>{item.qty}</span>

                                    {/* + */}
                                    <button
                                        onClick={() => (increaseQty(item))}
                                        className='bg-gray-200 dark:bg-slate-700 px-3 py-1 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 text-gray-800 dark:text-white'
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Right Side */}
                            <div className='flex flex-col items-end gap-3 mt-4 md:mt-0'>
                                <p className='font-bold text-xl text-gray-800 dark:text-white'>
                                    ${(item.price * item.qty).toFixed(2)}
                                </p>

                                <button
                                    onClick={() => removeFromCart(item.productId)}
                                    className='text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 hover:underline'
                                >
                                    Remove
                                </button>
                            </div>

                        </div>

                    ))}

                    {/* Total */}
                    <div className='flex justify-between items-center mt-10 border-t border-gray-200 dark:border-slate-700 pt-6'>

                        <h2 className='font-bold text-2xl text-gray-800 dark:text-white'>Total:</h2>
                        <p className='font-bold text-3xl text-gray-800 dark:text-white'>${totalPrice.toFixed(2)}</p>

                    </div>

                    {/* Action Buttons */}
                    <div className='flex flex-col justify-between sm:flex-row gap-4'>
                        <button
                            onClick={clearCart}
                            className='bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl transition-colors'
                        >
                            Clear Cart
                        </button>

                        <Link
                            to="/checkout"
                            className='bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-center'
                        >
                            Proceed to Checkout
                        </Link>
                    </div>

                </div>
            )}

        </div>
    )
}

export default Cart