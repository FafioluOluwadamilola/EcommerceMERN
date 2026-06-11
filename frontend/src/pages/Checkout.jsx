import React from 'react'
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

  const { cart, clearCart } = useCart();

  const navigate = useNavigate();

  //Shipping Form State
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    phone: ""
  })

  //Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  )

  //Handle input change
  const handleChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value
    })
  }

  //Place order
  const handlePlaceOrder = async () => {
    const token = localStorage.getItem("token");

    try {

      const res = await fetch(
        "http://localhost:5000/api/orders",
        {

          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },

          body: JSON.stringify({
            shippingInfo
          })

        }
      )

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message)
      }

      //Clear frontend cart
      await clearCart();
      
      navigate("/order-success");


    } catch (error) {
      console.error(error.message);
      alert(error.message)
    }
  }


  return (
    <div className='max-w-6xl mx-auto p-10 min-h-screen'>

      <h1 className='text-4xl font-bold mb-10'>
        Checkout
      </h1>

      <div>

        {/* //Left Side */}
        <div className='grid md:grid-cols-2 gap-10'>

          <div>

            <h2 className='text-2xl font-bold mb-6'>
              Shipping Information
            </h2>

            <div className='flex flex-col gap-4'>

              <input
                type="text"
                name="fullName"
                placeholder='Full Name'
                onChange={handleChange}
                value={shippingInfo.fullName}
                className='border p-3 rounded-xl'
              />

              <input
                type="text"
                name='address'
                placeholder='Address'
                onChange={handleChange}
                value={shippingInfo.address}
                className='border p-3 rounded-xl'
              />

              <input
                type="text"
                name='city'
                placeholder='City'
                onChange={handleChange}
                value={shippingInfo.city}
                className='border p-3 rounded-xl'
              />

              <input
                type="text"
                name='phone'
                placeholder='Phone'
                onChange={handleChange}
                value={shippingInfo.phone}
                className='border p-3 rounded-xl'
              />

            </div>

          </div>

          {/* //Right Side */}
          <div>

            <h2 className='text-2xl font-bold mb-6'>
              Order Summary
            </h2>

            <div className='flex flex-col gap-4'>
              {cart.map((item) => (
                <div
                  key={item.productId}
                  className='flex justify-between border-b pb-4'
                >
                  <div>

                    <h3 className='font-bold'>
                      {item.name}
                    </h3>

                    <p className='text-gray-500'>
                      Qty: {item.qty}
                    </p>

                  </div>

                  <p className='font-bold'>
                    ${(item.price * item.qty).toFixed(2)}
                  </p>

                </div>
              ))}
            </div>

            {/* Total */}
            <div className='flex justify-between mt-8 text-2xl font-bold'>

              <h2>Total</h2>

              <p>${totalPrice.toFixed(2)}</p>

            </div>

            {/* Button */}
            <button
              onClick={handlePlaceOrder}
              className="w-full mt-8  bg-black text-white py-4 rounded-xl hover:bg-gray-800"
            >
              Place Order 
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Checkout